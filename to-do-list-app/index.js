const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
var editFlag = false;

function addTask() {
	if (inputBox.value === "") {
		alert("You must write something !");
	} else {
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);

		let img = document.createElement("img");
		img.src = "/images/editing.png";
		img.style = "width:15px; height:20px";
		li.appendChild(img);
	}
	inputBox.value = "";
	saveData();
}

listContainer.addEventListener(
	"click",
	function (e) {
		if (e.target.tagName === "LI") {
			if (!editFlag) e.target.classList.toggle("checked");
		} else if (e.target.tagName === "SPAN") {
			e.target.parentElement.remove();
		}
		saveData();
	},
	false
);

listContainer.addEventListener(
	"click",
	function (e) {
		if (e.target.tagName === "IMG") {
			if (e.target.id === "edit-check") {
				editFlag = false;
				console.log("here o: ", e.target.parentElement);
				e.target.parentElement.contentEditable = false;
				e.target.remove();
			} else {
				editFlag = true;
				console.log("here:", e.target.parentElement);
				e.target.parentElement.contentEditable = true;
				e.target.parentElement.style = "outline:none";

				const rightImg = document.createElement("IMG");
				rightImg.id = "edit-check";
				rightImg.src = "/images/check.png";
				rightImg.style = "width:15px;background-img:cover;margin-top:0px";
				e.target.parentElement.appendChild(rightImg);
				e.target.remove();
			}
		} else {
			e.target.parentElement.contentEditable = false;
		}
	},
	false
);

function saveData() {
	localStorage.setItem("data", listContainer.innerHTML);
}

function getData() {
	localStorage.clear();
	listContainer.innerHTML = localStorage.getItem("data");
}

getData();
