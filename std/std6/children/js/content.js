class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = { login: '' };
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    alert(`欢迎订阅 , ${this.state.login}!`);
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        Dialog,
        { title: "\u6B22\u8FCE\u5B66\u4E60React", message: "\u53EF\u4EE5\u63D0\u4F9B\u4F60\u7684\u8054\u7CFB\u90AE\u7BB1\u5417\uFF1F", bcolor: "blue" },
        React.createElement("input", { value: this.state.login, onChange: this.handleChange }),
        React.createElement(
          "button",
          { onClick: this.handleSignUp },
          "\u8BA2\u9605"
        )
      ),
      React.createElement(
        Dialog,
        { title: "\u5B66\u4E60React", message: "\u6B22\u8FCE\u67E5\u9605", bcolor: "red" },
        React.createElement(
          "p",
          null,
          "\u8FD9\u91CC\u662F\u4E00\u4E9B\u57FA\u7840\u77E5\u8BC6\u8BB2\u89E3"
        )
      )
    );
  }
}