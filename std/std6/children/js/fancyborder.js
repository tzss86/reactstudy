const FancyBorder = props => {
	return React.createElement(
		'div',
		{ className: 'fancy-border-' + props.color },
		props.children
	);
};