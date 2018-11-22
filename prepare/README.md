# 准备工作
------
#### 1. 心里准备
##### 1.1 为什么要学习React？
* React是一个前端UI组件库，UI组件通过React使用Javascript创建，而非特殊模版语言创造。
* React解决管理视图对数据变更的响应问题，将UI作为函数，数据作为参数调用函数，渲染可预测是视图。
* React采用虚拟DOM的架构使得Web页面渲染瓶颈得以优化，性能提升。

##### 1.2 为什么要学习JSX？
* JSX是React.createElement()的语法糖，它简化了创建UI组件的编写方式。
* JSX --> 编译器（babel）--> JS --> 浏览器

#### 2. 环境准备
* Node
* npm
* react
* babel
* webpack

#### 3. 其他注意事项
* SPA 架构

<img src="./images/pre_1.png" width="80%" height="auto">

* React技术栈：
    - 数据模型与后端：Redux
    - 路由库：React Router
    - 组件集合库: React-Bootstrap

* 坑

    - `npm install --save-dev react-dom` 报错：
    
    <img src="./images/pre_2.png" width="60%" height="auto">

        原因：全局环境与本地环境不一致产生冲突
        解决办法：`npm rm -g react-dom`，`npm cache clean --force`，`npm install --save-dev react-dom`
    
    <img src="./images/pre_3.png" width="40%" height="auto">

    <img src="./images/pre_4.png" width="50%" height="auto">

    <img src="./images/pre_5.png" width="50%" height="auto">

* 常识
    - npm 安装的react 和react-dom 里有2个文件夹，cjs(用于Node中)与umd(用于所有地方，可以是browser)