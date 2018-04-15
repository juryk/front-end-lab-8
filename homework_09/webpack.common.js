const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(sass|scss)$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader"
                }),
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            template: 'src/app.html'
        }),
        new CleanWebpackPlugin('bin'),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
};
