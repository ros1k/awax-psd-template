const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: "./js/app.js",
    output: {
        filename: "./js/out.js"
    },
    watch: true,
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?-url', 'sass-loader']
                })
            }


        ]
    },
    plugins: [
        new ExtractTextPlugin('css/style.css'),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:9000/'
        })
        ],
    devServer: {
        contentBase: path.join(__dirname, "./"),
        compress: true,
        port: 9000
    }
}


