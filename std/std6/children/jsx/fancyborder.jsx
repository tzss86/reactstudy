const FancyBorder = props => {
	return (<div className={'fancy-border-' + props.color}>{props.children}</div>);
}
