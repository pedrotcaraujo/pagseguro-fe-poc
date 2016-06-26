var webpack = require('webpack');
var WebPackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebPackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyAPIFallback: true
}).listen(8080, 'localhost');