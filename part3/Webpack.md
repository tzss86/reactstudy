# Webpack 继续学习
------

对于前面章节的学习，大多只是会用，更多的原理和细节需要持续学习，所以本节记录webpack的一些重要细节。

#### 1. 一个较为完整的webpack.config.js

```javascript
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
        extensions: ['.js', '.jsx', '.json'],
    }
};
```

#### 2.tree shaking

指：剔除没有被使用的 `export` 代码，通过使用 `UglifyJSPlugin` 来实现代码压缩清理等工作。
webpack4中当mode为production时，会自动进入UglifyJSPlugin进行压缩输出，也可以通过`--optimize-minimize` 来启动压缩

新的 webpack 4 正式版本，扩展了这个检测能力，通过 package.json 的 "sideEffects" 属性作为标记，向 compiler 提供提示，表明项目中的哪些文件是 "pure(纯的 ES2015 模块)"，由此可以安全地删除文件中未使用的部分。

#### 3. 生成环境与开发环境的配置

官网推荐使用`npm install --save-dev webpack-merge` 来添加不同环境下的配置文件，以merge的方式

```javascript
//webpack.common.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    devtool: 'source-map',
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
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/asset/'
    }
};
```

上面是公共配置，这样在webpack.dev.js 与 webpack.prod.js 中只需添加差异化配置

```javascript
//webpack.dev.js
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    openPage: 'asset/index.html'
  }
});

//webpack.prod.js
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production'
});
```

#### 4. Code splitting

如果输入块之间存在任何重复的模块，则它们将包含在两个包中。它不够灵活，不能用于动态分割核心应用程序逻辑的代码。SplitChunksPlugin 可以让我们提取公共代码。

在webpack.common.js中添加：

```javascript
optimization: {
     splitChunks: {
       chunks: 'all'
     }
   }
```
可以看到共同引用的`lodash`被提出来单独一个文件，a.bundle.js 与b.bundle.js 中不再重复引用。

