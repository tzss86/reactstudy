const Button = props => <button className="btn btn-primary" onClick={props.handleClick}>{props.label}</button>;
const Link = props => <a onClick={props.handleClick} href="#">{props.label}</a>;
const Logo = props => <img onClick={props.handleClick} width="40" src="images/logo.png" href="#"/>