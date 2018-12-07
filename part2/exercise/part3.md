# 编码
------

编码过程我们也按照学习过程来一步步回顾。

#### 1. index.html

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no" media="screen" />
    <title>scenic</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>
```

添加`<div id="app"></div>` 作为React挂载虚拟DOM的真实DOM节点。index.html要做的事就结束了，简单吧。接下来写入口index.js

#### 2. index.js

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/common.css';

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
```

我们先不引入Redux和Router，index.js的作用在此仅仅是引入公共样式，与将<App /> 挂载到真实节点。接下来添加APP组件。

##### 3.App.jsx

```javascript
import React from 'react';
import Menu from './ui/Menu';
import ScenicList from './ui/ScenicList';

const App = () => (
  <div className="content">
    <Menu />
    <ScenicList />
  </div>
);

export default App;
```
