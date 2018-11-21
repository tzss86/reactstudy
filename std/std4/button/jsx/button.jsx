class SaveButton extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event){
		console.log(this,event);
		console.log(event.target.innerText);
	}
	render(){
		return <button onClick={this.handleClick}>点击</button>
	}
}