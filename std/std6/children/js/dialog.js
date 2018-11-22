class Dialog extends React.Component {
	render() {
		return React.createElement(
			FancyBorder,
			{ color: this.props.bcolor },
			React.createElement(
				"h1",
				{ className: "Dialog-title" },
				this.props.title
			),
			React.createElement(
				"p",
				{ className: "Dialog-message" },
				this.props.message
			),
			this.props.children
		);
	}
}