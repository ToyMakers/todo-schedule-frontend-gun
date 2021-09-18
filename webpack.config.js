const path = require('path');
const PROJECT_ROOT = path.resolve(__dirname);

const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackEnv => {
    const mode = webpackEnv.WEBPACK_SERVE ? 'development' : 'production';
    const isEnvDevelopment = mode === 'development';
    const isEnvProduction = mode === 'production';

    const SRC_PATH = path.resolve(__dirname, 'src');
    const BUILD_PATH = path.resolve(PROJECT_ROOT, 'dist');

    return {
        mode,
        entry: path.resolve(SRC_PATH, 'index.tsx'),
        module: {
            rules: [
                {
                    test: /\.(ts||tsx)$/,
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        browsers: ['> 1% in KR'],
                                    },
                                    debug: true,
                                },
                            ],
                            '@babel/preset-react',
                        ],
                        plugins: ['react-refresh/babel'],
                    },
                },
                {
                    test: /.css/,
                    exclude: /node_modules/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.{png|jpe?g|gif}$/,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
            alias: {
                '@': path.resolve(__dirname, 'src/'),
                '@Pages': path.resolve(__dirname, 'src/pages/'),
                '@Components': path.resolve(__dirname, 'src/components/'),
            },
        },
        plugins: [
            new RefreshWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: './index.html',
            }),
        ],
        cache: {
            type: isEnvDevelopment ? 'memory' : 'filesystem',
        },
        output: {
            path: BUILD_PATH,
            filename: isEnvProduction ? 'js/[name].[contenthash:8].js' : 'js/bundle.js',
            publicPath: '/dist/',
        },
        devServer: {
            publicPath: '/dist/',
            contentBase: path.join(__dirname, 'public'),
            hot: true,
            open: true,
        },
    };
};
