var Chatty = (function(oldIife) {

  var messageArray = [];

  var messageRequest = new XMLHttpRequest();

  messageRequest.open("GET", "initialMessage.json");

  messageRequest.send();

  messageRequest.addEventListener("error", xhrTransferError);

  messageRequest.addEventListener("load", parseData);

  var counter = 0;

  var newMessages = document.getElementById("messageContainer");

  oldIife.getMessageArray = function() {
    return messageArray;
  };

  oldIife.addMessages = function(message) {
    messageArray.push({message});
  };

function xhrTransferError() {
  // console.log("error", An error occurred while transfering the data);
}

function parseData() {
  messageArray = JSON.parse(this.responseText).messages;
  for (currentMessage in messageArray) {
    var messageCard = "";
    var originalMessage = messageArray[currentMessage];

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
