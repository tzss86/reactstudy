# 项目结构
------

项目的源代码放在src中，我们创建下列结构（若是多人合作或大型项目的结构多数按照高可复用方式划分，这里主要以复习知识点为主，所以结构简单化）：

#### 1. 结构

* components —— 我们的组件
* css —— 样式
* fonts —— 字体
* images —— 图标
* lib —— 通用库
* store —— 管理数据状态
* index.html —— 主页面
* index.js —— 入口模块

#### 2. 资产管理

之前我们只引入了css的管理，现在把fonts与images也加进来，file-loader可以处理它们。

```javascript
module.exports ={
    ...
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/[name].bundle.js",
        publicPath: '/'
    },
    ...
    module: {
        rules: [
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
    }
};

```
*outputPath* 指定输出的路径字体到fonts文件夹下，图标添加到images文件夹下。我们在 *output* 输入配置中设置了 *publicPath ："/"* ，它统一指定了资产发布的前缀，所以资产的浏览器位置是 *publicPath+outputPath+name* 例如：某字体文件在浏览器的位置是： "/fonts/simkai.ttf" ，一张图片在浏览器的位置是："/images/default.png"。


[编码](./part3.md)

