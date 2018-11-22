const Button = props => React.createElement(
  'button',
  { className: 'btn' },
  props.buttonLabel
);
Button.defaultProps = { buttonLabel: 'Btn' };

Button.propTypes = {
  handler: PropTypes.func.isRequired,
  title: PropTypes.string,
  email(props, propName, componentName) {
    let emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!emailRegularExpression.test(props[propName])) {
      return new Error('Email validation failed!');
    }
  }
};