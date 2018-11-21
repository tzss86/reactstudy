class SaveButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event) {
		console.log(this, event);
		console.log(event.target.innerText);
	}
	render() {
		return React.createElement(
			"button",
			{ onClick: this.handleClick },
			"\u70B9\u51FB"
		);
	}
}