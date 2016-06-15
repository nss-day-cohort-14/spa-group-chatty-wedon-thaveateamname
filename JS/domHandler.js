/////////CLEAR ALL BUTTON///////////////
//retrieve ID of "Clear Message Board" button//
var clearButton = document.getElementById("clearButton");
var getMessage = document.getElementsByClassName("individualMessage");
var messageContainer = document.getElementById("messageContainer");
var getNav = document.getElementById("navBar");
var darkTheme = document.getElementById("darkTheme");
var largeText = document.getElementById("largeText");
var bodyEl = document.body;
var input = document.getElementById("userInput");

getMessage.contentEditable = "true"

//Event to clear board//
clearButton.addEventListener("click", clearBoard);

//Function to clear//
function clearBoard() {
	messageContainer.innerHTML = "";
}


/////////CHECKBOXES///////////////
darkTheme.addEventListener("change", function changeTheme() {
	bodyEl.classList.toggle("dark");
	messageContainer.classList.toggle("dark");
	getNav.classList.toggle("dark");
});
//////////LARGE TEXT////////////////
largeText.addEventListener("change", function changesize() {
	bodyEl.classList.toggle("large");
	messageContainer.classList.toggle("large");
	getNav.classList.toggle("large");

});


/////////DISABLE BUTTON///////////////

input.addEventListener("keypress", function enableButton () {
	if (messageContainer.innerHTML !== "") {
		clearButton.disabled = false;
	}
});

bodyEl.addEventListener("click", function disabledButton () {
	if (messageContainer.childNodes.length === 0) {
		clearButton.disabled = true;
	}
	else if (messageContainer.childNodes.length > 0) {
				clearButton.disabled = false;
	}
});	




