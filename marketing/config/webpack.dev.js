const {merge} = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common.js');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html',
        },
    },
    plugins: [  
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap',
            },
            // shared: ['react', 'react-dom'],
            shared: packageJson.dependencies,
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
}

module.exports = merge(common, devConfig);