class Mouse extends React.Component {
	constructor(props){
		super(props);
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOverCapture = this.handleMouseOverCapture.bind(this);
	}
	handleMouseOver(event){
		console.log("handleMouseOver");
		console.log(this,event);
		event.persist();

		setTimeout(()=>{
	      console.log(this,event.target);
	    }, 3000);
	}
	handleMouseOverCapture(event){
		console.log("handleMouseOverCapture");
		console.log(this,event);
	}
	render(){
		return (
			<div>
				<div style={{border: '1px solid red'}} 
				onMouseOver={this.handleMouseOver} 
				onMouseOverCapture={this.handleMouseOverCapture}>
				打开浏览器开发者工具，移动鼠标到此查看打印信息</div>
			</div>
		)
	}
}