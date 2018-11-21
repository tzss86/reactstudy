class Content extends React.Component {
	constructor(props) {    
	    super(props);
	    this.submit = this.submit.bind(this);
	    this.prompt = 'Please enter your email to win $1,000,000.';
	}
	submit(event) {
		let emailAddress = this.refs.emailAddress;
		let comments = this.refs.comments;
		console.log(ReactDOM.findDOMNode(emailAddress).value);
		console.log(ReactDOM.findDOMNode(comments).value);
	}
	render() {
	    return (
	      <div className="well">
	        <p>{this.prompt}</p>
	        <div className="form-group">
	          Email: <input ref="emailAddress" className="form-control" type="text" defaultValue="hi@react.co"/>
	        </div>
	        <div className="form-group">
	          Comments: <textarea ref="comments" className="form-control"  defaultValue="I like your website!"/>
	        </div>
	        <div className="form-group">
	          <a className="btn btn-primary" onClick={this.submit}>Submit</a>
	        </div>
	      </div>
	    )
	}
}