const createNoteButtonElement = document.getElementById("create-notes");
const notesDeleteElement = document.getElementById("delete-notes");
let noteParentDivElement = document.getElementById("parent-notes");

function createNewNote() {
	console.log("here");
	const mainNotes = document.createElement("div");
	mainNotes.classList.add("notes");
	const textarea = document.createElement("textarea");
	textarea.classList.add("text-input");
	textarea.placeholder = "Enter text";
	const deleteNotesButton = document.createElement("button");
	const deleteIconImg = document.createElement("img");
	deleteIconImg.src = "images/delete.png";
	deleteIconImg.style = "width:20px; height:20px";
	deleteNotesButton.style = "border:none; background:none";

	deleteNotesButton.appendChild(deleteIconImg);

	mainNotes.appendChild(textarea);
	mainNotes.appendChild(deleteNotesButton);

	noteParentDivElement.appendChild(mainNotes);
}

function deleteNotes(e) {
	console.log("e", e.target);
	if (e.target.tagName === "IMG") {
		e.target.parentElement.parentElement.remove();
	}
}

createNoteButtonElement.addEventListener("click", createNewNote);

noteParentDivElement.addEventListener("click", deleteNotes);
