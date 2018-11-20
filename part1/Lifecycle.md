# 组件生命周期
------
使用组件生命周期可以更细颗粒度的控制组件，例如：加载一些服务器端端数据，根据屏幕尺寸改变组件大小等等自包含逻辑。

#### 1. 生命周期事件的分类
* 组件的生命周期事件分为：`挂载`，`更新`，和`卸载`
* `挂载`：只执行一次
* `更新`：执行多次
* `卸载`：只执行一次
* 下图是一个组件的生命周期图：

| 分类 | 生命周期事件 | 描述  | 备注 |
| ----|----|----| ----|
| 挂载 | constructor|发生在创建元素时| 可以添加组件默认属性和初始化状态对象|
|挂载|componentWillMount|发生在挂载到DOM之前|可以在此处调用setState(),render方法会得到最新值，且不会执行额外渲染|
|挂载|componentDidMount|发生在挂载和渲染之后|因为DOM已经挂载好，在此向服务器请求数据或放置一些其他框架和库集成的代码是推荐做法。仅在浏览器端执行，服务器端不会执行，没有DOM加载的概念|
|更新|componentWillReceiveProps(nextProps)|发生在组件即将接收属性时||
|更新|shouldComponentUpdate(nextProps,nextState)|通过判断组件何时需要更新|在此返回return false可以阻止重新渲染，即componentWillUpdate不会被调用|
|更新|componentWillUpdate(nextProps,nextState)|发生在组件将要更新之前|不要在此调用setState()|
|更新|componentDidUpdate(prevProps,prevState)|发生在组件更新完成后||
|更新|render|||
|卸载|componentWillUnmount|发生在组件即将卸载|在这里清除计时器，清理DOM元素，解除事件绑定|

#### 2. 例子

