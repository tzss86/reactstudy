class Mouse extends React.Component {
	constructor(props) {
		super(props);
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOverCapture = this.handleMouseOverCapture.bind(this);
	}
	handleMouseOver(event) {
		console.log("handleMouseOver");
		console.log(this, event);
		event.persist();

		setTimeout(() => {
			console.log(this, event.target);
		}, 3000);
	}
	handleMouseOverCapture(event) {
		console.log("handleMouseOverCapture");
		console.log(this, event);
	}
	render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"div",
				{ style: { border: '1px solid red' },
					onMouseOver: this.handleMouseOver,
					onMouseOverCapture: this.handleMouseOverCapture },
				"\u6253\u5F00\u6D4F\u89C8\u5668\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u79FB\u52A8\u9F20\u6807\u5230\u6B64\u67E5\u770B\u6253\u5370\u4FE1\u606F"
			)
		);
	}
}