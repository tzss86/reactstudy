# 回顾
------

##### 1. 函数式编程与UI

* 在React中，可以将UI看作是`UI=f(state)`传入应用状态到函数，最终返回UI。

##### 2. 创建组件的方式

```javascript
//class 定义组件 并继承自 React Component
class MyButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: 'good'
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        console.log(this);
    }
    render(){
        return (
            <button onClick={this.handleClick}>{this.props.text}</button>
        )
    }
}
MyButton.propTypes = {
    text: PropTypes.string
};
MyButton.defaultProps ={
    text: "submit"
};
// 无状态函数组件
const MyButton = ({text}, context) => (<button>{text}</button>)
```

##### 3. 第三方管理应用状态库：Redux or MobX