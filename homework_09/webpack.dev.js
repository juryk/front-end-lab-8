let config = require('./webpack.common.js');

config.devServer = {
    host: 'localhost',
    port: 8080
}
config.devtool = "source-map"

module.exports = config;
