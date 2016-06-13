var messageRequest = new XMLHttpRequest();

messageRequest.open("GET", "initialMessage.json");

messageRequest.send();

messageRequest.addEventListener("error", xhrTransferError);

messageRequest.addEventListener("load", parseData);

var counter = 0;

var newMessages = document.getElementById("messageContainer");

function xhrTransferError() {
  // console.log("error", An error occurred while transfering the data);
}

function parseData() {
  var messageData = JSON.parse(this.responseText);
  for (currentMessage in messageData.messages) {
    var messageCard = "";
    var originalMessage = messageData.messages[currentMessage];

    counter++;
    messageCard = `<div id="message--${counter}" class="individualMessage">${originalMessage.message}<button id="deleteMessage--${counter}">Delete</button></div>`;



  }

}


