class Tooltip extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			opacity: false
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleMouseInteraction = this.handleMouseInteraction.bind(this);
	}
	handleClick(event) {
		if (!this.props.allowToggleWithClick) {
			return false;
		}

		this.toggle();
	}
	handleMouseInteraction(event) {
		if (!this.props.allowToggleWithMouseInteraction) {
			return false;
		}

		this.toggle();
	}
	toggle() {
		const tooltipNode = ReactDOM.findDOMNode(this);
		this.setState({
			opacity: !this.state.opacity,
			top: tooltipNode.offsetTop,
			left: tooltipNode.offsetLeft
		});
	}
	render() {
		const top = this.state.top || 0;
		const style = {
			zIndex: this.state.opacity ? 1000 : -1000,
			opacity: +this.state.opacity,
			top: top + (this.props.positionShowText === 'bottom' ? +20 : -60),
			left: (this.state.left || 0) - 30
		};
		const toolTipClasses = 'tooltip ' + this.props.positionShowText;

		return React.createElement(
			'div',
			{ style: { display: 'inline' } },
			React.createElement(
				'span',
				{ style: { color: 'blue' }, onClick: this.handleClick, onMouseEnter: this.handleMouseInteraction, onMouseOut: this.handleMouseInteraction },
				this.props.children
			),
			React.createElement(
				'div',
				{ className: toolTipClasses, style: style, role: 'tooltip' },
				React.createElement('div', { className: 'tooltip-arrow' }),
				React.createElement(
					'div',
					{ className: 'tooltip-inner' },
					this.props.text
				)
			)
		);
	}
}

Tooltip.propTypes = {
	allowToggleWithClick: PropTypes.bool,
	allowToggleWithMouseInteraction: PropTypes.bool,
	positionShowText: PropTypes.oneOf(['bottom', 'top'])

};

Tooltip.defaultProps = {
	allowToggleWithClick: false,
	allowToggleWithMouseInteraction: true,
	positionShowText: 'bottom'
};

ReactDOM.render(React.createElement(
	'div',
	null,
	React.createElement(
		Tooltip,
		{ text: '\u63D0\u793A\u4E00', allowToggleWithClick: false, allowToggleWithMouseInteraction: true, positionShowText: 'top' },
		'Pro Express.js'
	),
	' was published in 2014. It was one of the first books on v4.x. And it was my second book published with Apress after ',
	React.createElement(
		Tooltip,
		{ text: '\u63D0\u793A\u4E8C' },
		'Practical Node.js'
	),
	'The main focus of this post is to compare the four Node.js/Io.js frameworks: ',
	React.createElement(
		Tooltip,
		{ text: '\u63D0\u793A\u4E09' },
		'Hapi'
	),
	', ',
	React.createElement(
		Tooltip,
		{ text: '\u63D0\u793A\u56DB' },
		'Kraken'
	),
	', ',
	React.createElement(
		Tooltip,
		{ text: '\u63D0\u793A\u4E94' },
		'Sails.js'
	),
	' and ',
	React.createElement(
		Tooltip,
		{ text: '\u63D0\u793A\u516D' },
		'Loopback'
	),
	'. There are many other frameworks to consider, but I had to draw the line somewhere.'
), document.getElementById('content'));