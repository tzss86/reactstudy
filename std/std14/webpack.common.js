const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
		another: './src/another-module.js'
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			filename: 'index.html'
		})
	],
	output:{
		filename: 'js/[name].bundle.js',
		chunkFilename: 'js/[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/asset/',

	},
	optimization: {
     splitChunks: {
       chunks: 'all'
     }
   }
};