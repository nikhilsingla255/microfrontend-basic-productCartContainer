const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { devServer, plugins } = require('../container/webpack.config');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                // './CartShow': './src/index.js'
                './CartShow': './src/bootstrap.js'
            },
            // shared : ['faker'], // with this we can duplicate loading faker but with singleton we can restrict it and get only one copy
            shared: {
                faker: {
                    singleton: true
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],
}