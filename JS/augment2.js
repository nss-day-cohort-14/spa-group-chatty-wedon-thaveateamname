// var Chatty = (function (originalChatty) {
// 	var newMessage = " ";
// 	var getInput = document.getElementById("userInput");
// 	originalChatty.setMessage = function () {

// 	};


// })(originalChatty || {});
var newMessage = " ";
var getInput = document.getElementById("userInput");
getInput.addEventListener("click", retrieveInput);
var getOutput = document.getElementById("messageContainer");

function retrieveInput(event) {
	var lengthForId = messageArray.length + 1;
	var output = " ";
	getInput.addEventListener("keydown", function (event) {
		if (event.keyCode === 13) {
			var input = getInput.value;
			output += `<div class="individualMessage" id="button--${lengthForId}">`
			output += `<div>${input}</div>`
			output += `<button id="button--${lengthForId}"
			output += `</div>`
			getOutput.innerHTML += output;
			output = "";
			getInput.value = " ";
		}
	})
};

