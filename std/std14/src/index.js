import printMe from './print.js';
import { cube } from './math.js';
import _ from 'lodash';


const component = () => {

	if (process.env.NODE_ENV !== 'production') {
	   console.log('Looks like we are in development mode!');
 	}
	const ele = document.createElement('div');
	const btn = document.createElement('button');
	const arr = ['hello','webpack'];
	const last = cube(5);

	console.log(
  _.join(['1', '2', '2!'], ' ')
);

	ele.innerHTML = [last,...arr].join('-');
	btn.innerHTML = 'click me';
	btn.onclick = printMe;

	ele.appendChild(btn);
	
	return ele;
}

document.body.appendChild(component());