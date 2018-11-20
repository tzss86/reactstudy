class Hello extends React.Component {
	render(){
		return <h1 id={this.props.id} title={this.props.title}>
		hello  {this.props.lib}  world
		</h1>;
	}
}

ReactDOM.render(
	<div>
		<Hello id='1' title='A' lib='A lib'/>
		<Hello id='2' title='B' lib='B lib'/>
		<Hello id='3' title='C' lib='C lib'/>
	</div>,
	document.getElementById('content')
)