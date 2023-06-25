module.exports = {
    env: {
        es2022: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
