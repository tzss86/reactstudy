const Button = props => React.createElement(
  "button",
  { className: "btn btn-primary", onClick: props.handleClick },
  props.label
);
const Link = props => React.createElement(
  "a",
  { onClick: props.handleClick, href: "#" },
  props.label
);
const Logo = props => React.createElement("img", { onClick: props.handleClick, width: "40", src: "images/logo.png", href: "#" });