module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: ['airbnb', 'airbnb/hooks', 'eslint:recommended', 'prettier'],
    plugins: ['prettier'],
    rules: {
        'react/jsx-filename-extension': ['error', { extionsions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'prettier/prettier': ['error'],
    },
};
