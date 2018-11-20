class HelloWorld extends React.Component {

	render(){
		const {lib, ...rest} = this.props;
		return React.createElement('h1',{...rest},'hello ' + lib + ' world');
	}
}

var hw1 = React.createElement(HelloWorld,{id:'1',title:'A',lib:'A lib'});
var hw2 = React.createElement(HelloWorld,{id:'2',title:'B',lib:'B lib'});
var hw3 = React.createElement(HelloWorld,{id:'3',title:'C',lib:'C lib'});

ReactDOM.render(
	React.createElement('div',null,hw1,hw2,hw3),
	document.getElementById('content')
)