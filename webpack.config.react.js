const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// console.log('process.env.NODE_ENV 的值是(webpack.config.js)：' + process.env.NODE_ENV);
const NODE_ENV = process.env.NODE_ENV;
const chatAppConfig = {
    entry: path.resolve(__dirname, 'app/react_web/chat_app/main.js'),
    output: {
        path: path.resolve(__dirname, 'public/chat_app'),
        filename: NODE_ENV === 'production' ? 'admin.[hash:10].js' : 'admin.js',
        publicPath: '/public/chat_app/'
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader')
            },
            {
                test: /\.(png|jpg)$/,
                loader: ['url-loader?limit=3000&name=images/[name].[hash:10].[ext]', 'image-webpack-loader']
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(NODE_ENV === 'production' ? 'admin.[hash:10].css' : 'admin.css'),
        new AssetsPlugin({
            filename: 'app/react_version/chat_app_versions.json',
            processOutput(assets) {
                return JSON.stringify(assets.main);
            }
        })
    ]
};
const testAppConfig = {
    entry: path.resolve(__dirname, 'app/react_web/test_app/main.js'),
    output: {
        path: path.resolve(__dirname, 'public/test_app'),
        filename: 'admin.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: []
};
module.exports = [chatAppConfig];
