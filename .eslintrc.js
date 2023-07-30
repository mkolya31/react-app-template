module.exports = {
    "root": true,
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:unicorn/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:sonarjs/recommended",
    ],
    "settings": {
        "import/resolver": {
            "typescript": true,
            "node": true,
        },
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": [
            "./tsconfig.json"
        ],
    },
    "plugins": [
        "@typescript-eslint",
        "unicorn",
        "import",
        "sonarjs",
    ],
    "rules": {
        "@typescript-eslint/strict-boolean-expressions": [
            2,
            {
                "allowString": false,
                "allowNumber": false
            }
        ],
        "object-curly-spacing": [1, "always"],
        "unicorn/filename-case": [
            "error",
            {
                "cases": {
                    "camelCase": true,
                    "pascalCase": true
                }
            }
        ]
    },
    "ignorePatterns": ["src/**/*.test.ts", "build"]
}