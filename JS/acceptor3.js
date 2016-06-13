var removerButton = document.getElementById('clearButton');

removerButton.addEventListener('click', clearButton);
var msgDel = document.getElementsByTagName('h1');

function clearButton() {
	
	msgDel.remove();
}