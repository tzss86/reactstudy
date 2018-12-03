describe('HelloWorld', ()=>{
	const TestUtils = require('react-dom/test-utils');
	const React = require('react');

	it('has props', (done)=>{

		class HelloWorld extends React.Component {
			render(){
				return <div>{this.props.children}</div>
			}
		}

		let hello = TestUtils.renderIntoDocument(<HelloWorld>Hello Rui!</HelloWorld>);
		expect(hello.props).toBeDefined();
		console.log('hello props:', hello.props);

		done()
	})
})