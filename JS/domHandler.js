
//retrieve ID of "Clear Message Board" button//
	var clearButton = document.getElementById("clearButton");
	var clearLength = document.getElementsByClassName("individualMessage");
	var messageContainer = document.getElementById("messageContainer");
	
//Event to clear board//
	clearButton.addEventListener("click", clearBoard);

//Function to clear//
	function clearBoard() {
		messageContainer.innerHTML = "";
	}
