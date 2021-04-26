document.addEventListener('mousemove', _.throttle(mouseMoveEventAction, 200));

function mouseMoveEventAction(e) {
	showTopBar(isInsideThreshold(e.clientY));
}

function showTopBar(isActive) {
	if(isActive)
		document.getElementById("navibar").style.top = "0";
	else
		document.getElementById("navibar").style.top = "-300px";
}

function isInsideThreshold(cursorY) {
	var threshold = 200;
	var clientHeight = document.documentElement.clientHeight;
  	return cursorY > (clientHeight - threshold);
}