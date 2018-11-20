class Note extends React.Component {
	confirmLeave(e) { 
		let message = '你是否想离开？';
		e.returnValue = message;
		return message;
	}
	componentDidMount() {
    	console.log('componentDidMount');
    	window.addEventListener('beforeunload', this.confirmLeave);
  	}
  	componentWillUnmount() {
    	console.log('componentWillUnmount');
    	window.removeEventListener('beforeunload', this.confirmLeave);
  	}
  	render() {
    	console.log('Render');
    	return <div>笔记 会在 {this.props.secondsLeft} 秒后删除</div>
  	}
}