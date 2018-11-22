var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const Loader = Component => {
	//创建一个高阶组件

	class _Load extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				label: 'CommonLabel',
				handleClick: this.handleClick.bind(this)
			};
		}
		getUrl() {
			return 'http://baidu.com';
		}
		handleClick(event) {
			document.getElementById('frame').src = this.getUrl();
		}
		componentDidMount() {
			console.log(ReactDOM.findDOMNode(this));
		}
		render() {
			console.log(this.state);
			return React.createElement(Component, _extends({}, this.state, this.props));
		}
	}

	_Load.displayName = 'PowerfulComponent';

	return _Load;
};