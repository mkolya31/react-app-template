const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Импортируем плагин

let mode = 'development';
let target = 'web'; // в режиме разработки browserslist не используется
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
    target = 'browserslist'; // в продакшен режиме используем browserslist
}

const plugins = [
    new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css', // Формат имени файла
    }), // Добавляем в список плагинов
];

module.exports = {
    mode,
    target,
    plugins, // Сокращенная запись plugins: plugins в ES6+
    entry: './src/index.tsx',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    devServer: {
        static: './build',
        hot: true,
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(html)$/, use: ['html-loader']
            },
            {
                test: /\.(s[ac]|c)ss$/i, // /\.(le|c)ss$/i если вы используете less
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: mode === 'production' ? 'asset' : 'asset/resource', // В продакшен режиме
                // изображения размером до 8кб будут инлайнится в код
                // В режиме разработки все изображения будут помещаться в build/assets
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // не обрабатываем файлы из node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true, // Использование кэша для избежания рекомпиляции
                        // при каждом запуске
                    },
                },
            },
            {
                test: /\.jsx?$/, // обновляем регулярное выражение для поддержки jsx
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    compilerOptions: {
                        noEmit: false,
                    },
                },

            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.js$/,
                loader: "source-map-loader"
            },
        ],
    }
}