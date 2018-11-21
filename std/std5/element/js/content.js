class Content extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
		this.handleRadio = this.handleRadio.bind(this);
		this.handleCheckbox = this.handleCheckbox.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);

		this.state = {
			firstName: "lirui",
			password: "123456",
			description: "这里是描述",
			radioGroup: { angular: false, react: true, vue: false },
			checkboxGroup: { node: false, react: true, express: false, mongodb: false },
			selectedValue: 'node',
			multiselectValue: ['A', 'B']
		};
	}

	handleChange(event) {
		console.log('onChange', event.target.value, event.target.checked);
		if (event.target.name == "password") {
			this.setState({ password: event.target.value });
		} else if (event.target.name == "description") {
			this.setState({ description: event.target.value });
		}
	}

	handleSubmit(event) {
		console.log('onSubmit', event.target.value, event.target.checked);
		fetch(this.props['data-url'], { method: 'POST', body: JSON.stringify(this.state) }).then(response => {
			return response.json();
		}).then(data => {
			console.log('Submitted: ', data);
		});
	}

	handleRadio(event) {
		console.log('Radio', event.target.value, event.target.checked);
		let obj = {};
		obj[event.target.value] = event.target.checked;
		this.setState({ radioGroup: obj });
	}

	handleCheckbox(event) {
		console.log('Checkbox', event.target.value, event.target.checked);
		let obj = this.state.checkboxGroup;
		obj[event.target.value] = event.target.checked;
		this.setState({ checkboxGroup: obj });
	}

	handleInput(event) {
		console.log('onInput ', event.target.value, event.target.checked);
	}

	handleSelectChange(event) {
		console.log('Select', event.target.value, event.target.selected);
		this.setState({ selectedValue: event.target.value });
	}

	handleMultiSelectChange(event) {
		console.log('MultiSelect', event.target.value, event.target.selected);
		//this.setState({multiselectValue: event.target.value});
	}

	handleFirstNameChange(event) {
		console.log(event.target.value, event.target.selected);
		this.setState({ firstName: event.target.value });
	}

	render() {
		return React.createElement(
			"div",
			{ className: "container" },
			React.createElement(
				"form",
				{ onSubmit: this.handleSubmit },
				React.createElement(
					"h2",
					null,
					"\u8F93\u5165\u59D3\u540D"
				),
				React.createElement("input", { type: "text", name: "firstName", value: this.state.firstName, onChange: this.handleFirstNameChange }),
				React.createElement("hr", null),
				React.createElement(
					"h2",
					null,
					"\u8F93\u5165\u5BC6\u7801"
				),
				React.createElement("input", { type: "password", name: "password", value: this.state.password, onChange: this.handleChange, onInput: this.handleInput }),
				React.createElement("hr", null),
				React.createElement("textarea", { name: "description", value: this.state.description, onChange: this.handleChange }),
				React.createElement("hr", null),
				React.createElement(
					"h2",
					null,
					"\u5355\u9009 radio"
				),
				React.createElement(
					"label",
					null,
					React.createElement("input", { type: "radio", name: "radioGroup", value: "angular", checked: this.state.radioGroup['angular'], onChange: this.handleRadio }),
					"Angular"
				),
				React.createElement("br", null),
				React.createElement(
					"label",
					null,
					React.createElement("input", { type: "radio", name: "radioGroup", value: "react", checked: this.state.radioGroup['react'], onChange: this.handleRadio }),
					"React"
				),
				React.createElement("br", null),
				React.createElement(
					"label",
					null,
					React.createElement("input", { type: "radio", name: "radioGroup", value: "vue", checked: this.state.radioGroup['vue'], onChange: this.handleRadio }),
					"Vue"
				),
				React.createElement("hr", null),
				React.createElement(
					"h2",
					null,
					"\u591A\u9009 checkbox"
				),
				React.createElement(
					"label",
					null,
					React.createElement("input", { type: "checkbox", name: "checkboxGroup", value: "node", checked: this.state.checkboxGroup['node'], onChange: this.handleCheckbox }),
					"Node"
				),
				React.createElement("br", null),
				React.createElement(
					"label",
					null,
					React.createElement("input", { type: "checkbox", name: "checkboxGroup", value: "react", checked: this.state.checkboxGroup['react'], onChange: this.handleCheckbox }),
					"React"
				),
				React.createElement("br", null),
				React.createElement(
					"label",
					null,
					React.createElement("input", { type: "checkbox", name: "checkboxGroup", value: "express", checked: this.state.checkboxGroup['express'], onChange: this.handleCheckbox }),
					"Express"
				),
				React.createElement("br", null),
				React.createElement(
					"label",
					null,
					React.createElement("input", { type: "checkbox", name: "checkboxGroup", value: "mongodb", checked: this.state.checkboxGroup['mongodb'], onChange: this.handleCheckbox }),
					"MongoDB"
				),
				React.createElement("hr", null),
				React.createElement(
					"select",
					{ value: this.state.selectedValue, onChange: this.handleSelectChange },
					React.createElement(
						"option",
						{ value: "ruby" },
						"Ruby"
					),
					React.createElement(
						"option",
						{ value: "node" },
						"Node"
					),
					React.createElement(
						"option",
						{ value: "python" },
						"Python"
					)
				),
				React.createElement("hr", null),
				React.createElement(
					"select",
					{ multiple: true, value: this.state.multiselectValue, onChange: this.handleMultiSelectChange },
					React.createElement(
						"option",
						{ value: "A" },
						"A"
					),
					React.createElement(
						"option",
						{ value: "B" },
						"B"
					),
					React.createElement(
						"option",
						{ value: "C" },
						"C"
					)
				),
				React.createElement("hr", null),
				React.createElement(
					"h2",
					null,
					"\u63D0\u4EA4\u6309\u94AE"
				),
				React.createElement("input", { type: "button", defaultValue: "Send", onClick: this.handleSubmit })
			)
		);
	}

}