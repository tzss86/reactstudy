class Clock extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentTime: new Date()
		};

		this.launchClock();
	}

	launchClock() {
		setInterval(() => {

			console.log("更新时间");

			this.setState({
				currentTime: new Date()
			});
		}, 1000);
	}

	render() {
		return React.createElement(
			"div",
			null,
			React.createElement(ClockDisplay, { time: this.state.currentTime }),
			React.createElement(DigitalDisplay, { time: this.state.currentTime })
		);
	}
}