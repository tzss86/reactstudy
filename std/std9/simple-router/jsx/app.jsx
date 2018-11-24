import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router.jsx';

const mapping = {
	'#profile' : <div>个人信息（<a href="#">返回主页</a>）</div>,
	'#account' : <div>账户信息（<a href="#">返回主页</a>）</div>,
	'*' : <div><p>目录</p><ul><li><a href="#profile">个人信息</a></li><li><a href="#account">账户信息</a></li></ul></div>
};

ReactDOM.render(
  <Router mapping = {mapping} />,
  document.getElementById('content')
)