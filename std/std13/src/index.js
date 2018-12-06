import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/main.css';

const arr = [1, 2, 3, 4, 5];
const iAmES6 = () => console.log(...arr);
iAmES6();

console.log('this is entry point');

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();

  module.hot.accept('./components/App', () => {
    console.log('App.jsx update');
  });
}
