let config = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


config.plugins.push(new UglifyJsPlugin());
config.plugins.push( new OptimizeCssAssetsPlugin({
    assetNameRegExp: /.css$/,
    cssProcessorOptions: { discardComments: { removeAll: true } }
  }))

module.exports = config;
