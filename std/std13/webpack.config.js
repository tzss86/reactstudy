const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "js/[name].bundle.js",
		publicPath: '/'
	},
	devtool: "source-map",
	devServer: {
    	hot: true
   	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
						{
							loader: "babel-loader"
						}, 
						{
							loader: "eslint-loader",
			          		options: { fix: true }
		        		}
		        	]
			},
			{
				test: /\.html$/,
				use: [
						{
							loader: "html-loader",
							options: { minimize: true }
						}
					]
			},
			{
				test: /\.css$/,
				use: [ MiniCssExtractPlugin.loader, "css-loader" ]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: { 
								name: '[name].[ext]',
								outputPath: 'images/'
						}
					}
				]
			},
			{
				test: /\.(woff|ttf|eot|otf|woff2)$/,
				use: [
					{
						loader: "file-loader",
						options: { 
								name: '[name].[ext]',
								outputPath: 'fonts/'
						}
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(["dist"]),
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "index.html"
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].[chunkhash].css",
			chunkFilename: "css/[id].[chunkhash].css"
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
	    extensions: ['.js', '.jsx'],
	}
};