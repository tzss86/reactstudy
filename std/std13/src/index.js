import App from "./App.jsx";
import style from "./main.css";

const arr = [1, 2, 3, 4, 5];
const iAmES6 = () => console.log(...arr);
iAmES6();

console.log("this is entry point");

if(module.hot){
	module.hot.accept();

	module.hot.accept('./App.jsx',function(){
		console.log("App.jsx update");
	});
}