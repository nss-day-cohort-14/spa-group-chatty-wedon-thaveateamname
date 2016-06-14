var Chatty = (function(oldIife) {

	
	//retrieves ID of container//
	var messageContainer = document.getElementById("messageContainer");
	
	//Event calling function for new button ID//
	messageContainer.addEventListener("click", buttonGet);

	//Button getter function -- splits off "--" to isolate button #//
	function buttonGet() {
		var delButton = event.target.id.split("--")[1];
		var delTarget = event.target.closest(`#message--${delButton}`);
		delTarget.remove();
	}


}(Chatty || {}));