class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`欢迎订阅 , ${this.state.login}!`);
  }

  render() {
    return (
      <div>
        <Dialog title="欢迎学习React" message="可以提供你的联系邮箱吗？" bcolor="blue">
          <input value={this.state.login} onChange={this.handleChange} />
          <button onClick={this.handleSignUp}>订阅</button>
        </Dialog>
        <Dialog title="学习React" message="欢迎查阅" bcolor="red">
          <p>这里是一些基础知识讲解</p>
        </Dialog>
      </div>
    );
  }
}