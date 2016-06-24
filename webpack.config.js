module.exports = {
	entry: {
		main: [
			'./src/main.js'
		]
	},
	output: {
		filename: './public/[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel'
			}
		]
	}
}