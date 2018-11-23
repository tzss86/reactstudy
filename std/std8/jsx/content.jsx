const React = require('react');
const ReactDOM = require ('react-dom');


class Content extends React.Component {
	constructor(props){
		super(props);
		this.submit = this.submit.bind(this);
	}

	submit(event) {
	    let emailAddress = this.refs.emailAddress
	    let comments = this.refs.comments
	    console.log(ReactDOM.findDOMNode(emailAddress).value)
	    console.log(ReactDOM.findDOMNode(comments).value)
	}

	render() {
	    this.prompt = '输入你的邮箱，谢谢';
	    return (
	      <div className="well">
	        <p>{this.prompt}</p>
	        <div className="form-group">
	          邮箱: <input ref="emailAddress" className="form-control" type="text" placeholder="rui@gmail.com"/>
	        </div>
	        <div className="form-group">
	          内容: <textarea ref="comments" className="form-control"  placeholder="学习React基础"/>
	        </div>
	        <div className="form-group">
	          <a className="btn btn-primary" onClick={this.submit}>Submit</a>
	        </div>
	      </div>
	    )
	}
}

module.exports =  Content;