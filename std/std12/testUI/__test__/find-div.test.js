describe('HelloWorld', ()=>{
	const TestUtils = require('react-dom/test-utils');
	const React = require('react');

	it('has a div', (done)=>{

		class HelloWorld extends React.Component {
			render(){
				return <div>{this.props.children}</div>
			}
		}

		let hello = TestUtils.renderIntoDocument(<HelloWorld>Hello Rui!</HelloWorld>);
		expect(TestUtils.scryRenderedDOMComponentsWithTag(hello, 'div').length).toBe(1)
    	console.log('found this many divs: ', TestUtils.scryRenderedDOMComponentsWithTag(hello, 'div').length)

		done()
	})
})