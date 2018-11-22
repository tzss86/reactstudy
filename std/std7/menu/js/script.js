class Link extends React.Component {
	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'a',
				null,
				this.props.name,
				' | ',
				this.props.tag
			)
		);
	}
}

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menus: []
		};
	}

	componentDidMount() {
		fetch('https://mp.1trip.com/api/v1/scenicservice/overview/distance/10?hometype=city&homeid=%E6%88%90%E9%83%BD%E5%B8%82').then(response => {
			return response.json();
		}).then(data => {
			if (data.status) {
				let res = data.result.list.map((v, i) => {
					return { name: v.name, tag: v.tag };
				});
				this.setState({
					menus: res
				});
			}
		});
	}

	render() {
		return React.createElement(
			'div',
			null,
			this.state.menus.map((v, i) => {
				return React.createElement(
					'div',
					{ key: i },
					React.createElement(Link, v)
				);
			})
		);
	}
}

ReactDOM.render(React.createElement(Menu, null), document.getElementById('menu'));