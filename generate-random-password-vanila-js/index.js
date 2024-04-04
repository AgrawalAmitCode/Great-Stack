const buttonElement = document.getElementById("btn");
const inputElement = document.getElementById("password-input");
const copyElement = document.getElementById("copy-element");

function generatePassword() {
	const random = Math.random().toString(36).slice(2);
	console.log("here :", random);
	inputElement.value = random;
}

function copyPassword() {
	inputElement.select();
	document.execCommand("copy");
}

copyElement.addEventListener("click", copyPassword);

buttonElement.addEventListener("click", generatePassword);
