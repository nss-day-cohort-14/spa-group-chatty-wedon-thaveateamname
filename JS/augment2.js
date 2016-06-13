// var Chatty = (function (originalChatty) {
// 	var newMessage = " ";
// 	var getInput = document.getElementById("userInput");
// 	originalChatty.setMessage = function () {

// 	};


// })(originalChatty || {});
var newMessage = " ";
var getInput = document.getElementById("userInput");
getInput.addEventListener("click", createDiv);

function createDiv(event) {
	var input = "";
	getInput.addEventListener("keydown", function (event) {
		if (event.keyCode === 13) {
			input = getInput.value;
			return false;
		}
	})
};