let secondsLeft = 5;
let interval = setInterval(() => {
	if (secondsLeft == 0) {
		ReactDOM.render(React.createElement(
			'div',
			null,
			'\u5728 ',
			secondsLeft,
			' \u79D2\u540E\uFF0CNote \u88AB\u79FB\u9664'
		), document.getElementById('content'));
		clearInterval(interval);
	} else {
		ReactDOM.render(React.createElement(
			'div',
			null,
			React.createElement(Note, { secondsLeft: secondsLeft })
		), document.getElementById('content'));
	}
	secondsLeft--;
}, 1000);