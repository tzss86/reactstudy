class Clock extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			currentTime : new Date()
		};

		this.launchClock();
	}

	launchClock(){
		setInterval(() => {

			console.log("更新时间");

			this.setState({
				currentTime : new Date()
			});
		},1000);
	}

	render(){
		return <div>
			<ClockDisplay time={this.state.currentTime}/>
			<DigitalDisplay time={this.state.currentTime}/>
		</div>
	}
}