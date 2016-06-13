var Chatty = (function(oldIife) {

var messageArray = [];

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
  messageArray = JSON.parse(this.responseText);
  for (currentMessage in messageArray.messages) {
    var messageCard = "";
    var originalMessage = messageArray.messages[currentMessage];

    counter++;
    messageCard = `<div id="message--${counter}" class="individualMessage">${originalMessage.message}<button id="deleteMessage--${counter}">Delete</button></div>`;

    var newDiv = document.createElement("article");
    newDiv.innerHTML = messageCard;
    var newAttr = document.createAttribute("id");
    newAttr.value = `cardWrapper--${counter}`;
    newDiv.setAttributeNode(newAttr);
    newMessages.appendChild(newDiv);

    }
  }



  return oldIife;

}(Chatty || {}));
