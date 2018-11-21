# 表单使用与组建扩展
------
#### 1. 表单使用
* 传统HTML表单元素的状态变化与用户输入同步，但是React是用声明方式来描述UI，输入需要动态反映到state属性中。
* 在React中，表单元素的值在render()中必须包含它的最新值，所以需要通过下面的步骤来实现组件内部状态与视图同步：
    - 在render()中使用来自state的值定义元素
    - 用onChange捕获表单元素的变更
    - 在事件处理函数中更新内部状态
    - 将值保存在state中，然后重新执行render()以更新视图
```javascript
handleChange(event){
    this.setState({title:event.target.value});
}
render(){
    return <input type="text" name="title" value={this.state.title} onChange={this.handleChange.bind(this)} />
}
```

* 上面这种操作成为 *单项绑定* ，只有从状态到视图的单项数据流动。
* 向上面这样的组件成为 *受控组件* 它保持组件内部状态始终与视图同步。
* React中，表单定义从`<form></form>`开始。form可以注册事件，推荐的是`onChange`事件，它监听表单中任何输入变化时都会触发。而在传统DOM的change事件只在失去焦点后才触发，React中的change事件类似于DOM中的onInput。form还有一个`onSubmit`事件，当表单被提交时触发。

##### 1.1 创建受控组件
受控组件需要状态来设置value值和监听change事件

##### 1.2 创建非受控组件


