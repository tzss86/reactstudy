module.exports = {
	entry:'./jsx/app.jsx',
	output:{
	    path: __dirname + '/js/',
	    filename: 'bundle.js'
	},
	devtool: '#sourcemap',
	module: {
	    rules: [
	      { 
	      	test: /\.css$/, 
	      	use: ['style-loader','css-loader'] 
	      },
	      {
	        test: /\.jsx?$/,
	        exclude: /(node_modules)/,
	        use: ['babel-loader']
	      }
	    ]
	}
}