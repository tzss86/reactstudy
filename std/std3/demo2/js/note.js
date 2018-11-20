class Note extends React.Component {
  confirmLeave(e) {
    let message = '你是否想离开？';
    e.returnValue = message;
    return message;
  }
  componentDidMount() {
    console.log('componentDidMount');
    window.addEventListener('beforeunload', this.confirmLeave);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    window.removeEventListener('beforeunload', this.confirmLeave);
  }
  render() {
    console.log('Render');
    return React.createElement(
      'div',
      null,
      '\u7B14\u8BB0 \u4F1A\u5728 ',
      this.props.secondsLeft,
      ' \u79D2\u540E\u5220\u9664'
    );
  }
}