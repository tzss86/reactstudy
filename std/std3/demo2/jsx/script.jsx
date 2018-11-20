let secondsLeft = 5;
let interval = setInterval(()=>{
	if(secondsLeft == 0){
		ReactDOM.render(
			<div>
				在 {secondsLeft} 秒后，Note 被移除
			</div>,
			document.getElementById('content')
		);
		clearInterval(interval);
	} else {
		ReactDOM.render(
	      <div>
	        <Note secondsLeft={secondsLeft}/>
	      </div>,
	      document.getElementById('content')
	    )
	}
	secondsLeft--
},1000);