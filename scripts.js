let modalCard = document.getElementById("modalCreateBackground");
let taskValue = document.getElementById("formText");
let groupList = document.getElementById("groupList");
let listNumber = 1;

function addNewTask() {}

// Core Function //
function submitNewTask(taskCreated) {
  let list = document.createElement("li");
  let checkButton = document.createElement("button");
  let listDetail = document.createElement("p");

  list.classList.add("list");
  checkButton.classList.add("checkButton");
  checkButton.setAttribute("id", "checkButton" + listNumber);
  checkButton.setAttribute("onclick", "checkedTask(this.id)");
  listDetail.classList.add("listDetail");
  listDetail.textContent = taskCreated;

  list.appendChild(checkButton);
  list.appendChild(listDetail);

  groupList.appendChild(list);
  
  listNumber += 1;

  taskCreated = null
  closeModal();
}

function createNewTask() {}

// Function for controlling Style and animamtion //
function checkedTask(id) {
  let checkButton = document.getElementById(id);
  checkButton.style.backgroundColor != "black"
    ? (checkButton.style.backgroundColor = "black")
    : (checkButton.style.backgroundColor = "rgb(224, 224, 224)");
}

function openModal() {
  modalCard.style.display = "flex";
}

function closeModal() {
  modalCard.style.display = "none";
}

function mouseHoverEfect(x) {
  document.getElementById(x).style.backgroundColor = "rgba(0, 0, 0, 0.2)";
}

function resetMouseHover(x) {
  x == "createButton"
    ? (document.getElementById(x).style.backgroundColor = "#f8d2ff")
    : (document.getElementById(x).style.backgroundColor = "#fcebff");
}

function pressEnter(event, taskCreated) {
  let unicode = event.which;
  unicode == 13 ? submitNewTask(taskCreated) : null;
}
