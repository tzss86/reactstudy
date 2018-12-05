import React from "react";
import ReactDOM from "react-dom";

const App = () => {
	return (
		<div>
			<p>Hot Module Replace !</p>
			<p>hello react</p>
		</div>
	);
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));