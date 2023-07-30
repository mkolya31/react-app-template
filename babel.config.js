module.exports = {
    presets: ['@babel/preset-env'],
};

const plugins = ['@emotion'];
if (process.env.NODE_ENV === 'development') {
    plugins.push('react-refresh/babel');
}

module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'], // Добавляем в babel
    // пресет для работы с React
    plugins,
};