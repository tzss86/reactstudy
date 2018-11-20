class Hello extends React.Component {
	render() {
		return React.createElement(
			'h1',
			{ id: this.props.id, title: this.props.title },
			'hello  ',
			this.props.lib,
			'  world'
		);
	}
}

ReactDOM.render(React.createElement(
	'div',
	null,
	React.createElement(Hello, { id: '1', title: 'A', lib: 'A lib' }),
	React.createElement(Hello, { id: '2', title: 'B', lib: 'B lib' }),
	React.createElement(Hello, { id: '3', title: 'C', lib: 'C lib' })
), document.getElementById('content'));
