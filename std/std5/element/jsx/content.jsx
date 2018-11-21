class Content extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		
		this.handleRadio = this.handleRadio.bind(this);
		this.handleCheckbox = this.handleCheckbox.bind(this);
		
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
		

		this.state = {
			name:"rui",
			password:"123456",
			description : "description is here",
			radioGroup: {angular:false, react:true, vue:false},
			checkboxGroup:{node:false, react:true, express:false, mongodb:false},
			selectedValue: 'node',
			multiselectValue:['A','B']
		}
	}

	handleChange(event) {
		console.log('onChange', event.target.value, event.target.checked);
		this.setState({[event.target.name]:event.target.value});
	}

	handleSubmit(event){
		console.log('onSubmit',event.target.value, event.target.checked);
		fetch(this.props['data-url'], {method: 'POST', body: JSON.stringify(this.state)})
  		.then((response) => { return response.json()})
  		.then((data) => { console.log('Submitted: ', data)})
	}

	handleRadio(event){
		console.log('Radio',event.target.value, event.target.checked);
		let obj = this.state.radioGroup;
		for(let key in obj){
			if(event.target.value == key){
				obj[key] = event.target.checked;
			} else {
				obj[key] =  ! event.target.checked;
			}
		}
		this.setState({radioGroup:obj});
	}

	handleCheckbox(event){
		console.log('Checkbox',event.target.value, event.target.checked);
		let obj = this.state.checkboxGroup;
		obj[event.target.value] = event.target.checked;
		this.setState({checkboxGroup: obj});
	}

	handleInput(event){
		console.log('onInput ', event.target.value, event.target.checked);
	}

	handleSelectChange(event){
		console.log('Select',event.target.value);
		this.setState({selectedValue: event.target.value});
	}

	handleMultiSelectChange(event){
		console.log('MultiSelect',event.target.value,event.target.selected);

		var options = event.target.options;
		var value = [];
		for (var i = 0, l = options.length; i < l; i++) {
			console.log(options[i].selected);
			if (options[i].selected) {
		  		value.push(options[i].value);
			}
		}

		this.setState({multiselectValue: value});
	}

	
	render(){
		return <div className="container">
			<form onSubmit={this.handleSubmit}>
		        <h2>输入姓名</h2>
		        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
				<hr/>
				<h2>输入密码</h2>
				<input type="password" name="password" value={this.state.password} onChange={this.handleChange} onInput={this.handleInput} />
				<hr/>
				<textarea name="description" value={this.state.description} onChange={this.handleChange}/>
		        <hr/>
    			<h2>单选 radio</h2>
    			<label>
		          <input type="radio" name="radioGroup" value='angular' checked={this.state.radioGroup['angular']} onChange={this.handleRadio}/>
		          Angular
		        </label>
		        <br/>
		        <label>
		          <input type="radio" name="radioGroup" value='react'  checked={this.state.radioGroup['react']} onChange={this.handleRadio}/>
		          React
		        </label>
		        <br/>
		        <label>
		          <input type="radio" name="radioGroup"  value='vue' checked={this.state.radioGroup['vue']} onChange={this.handleRadio}/>
		          Vue
		        </label>
		        <hr/>
		        <h2>多选 checkbox</h2>
		        <label>
		          <input type="checkbox" name="checkboxGroup" value='node' checked={this.state.checkboxGroup['node']} onChange={this.handleCheckbox}/>
		          Node
		        </label>
		        <br/>
		        <label>
		          <input type="checkbox" name="checkboxGroup" value='react'  checked={this.state.checkboxGroup['react']} onChange={this.handleCheckbox}/>
		          React
		        </label>
		        <br/>
		        <label>
		          <input type="checkbox" name="checkboxGroup"  value='express' checked={this.state.checkboxGroup['express']} onChange={this.handleCheckbox}/>
		          Express
		        </label>
		        <br/>
		        <label>
		          <input type="checkbox" name="checkboxGroup" value='mongodb' checked={this.state.checkboxGroup['mongodb']} onChange={this.handleCheckbox}/>
		          MongoDB
		        </label>
		        <hr/>
		        <select  value={this.state.selectedValue} onChange={this.handleSelectChange}>
		          <option value="ruby">Ruby</option>
		          <option value="node">Node</option>
		          <option value="python">Python</option>
		        </select>
		        <hr/>
		        <select  multiple={true} value={this.state.multiselectValue} onChange={this.handleMultiSelectChange}>
		          <option value="A">A</option>
		          <option value="B">B</option>
		          <option value="C">C</option>
		        </select>
		        <hr/>
		        <h2>提交按钮</h2>
		        <input type="button" onClick={this.handleSubmit}/>
			</form>
		</div>
	}

}

































