let modalCard = document.getElementById("modalCreateBackground");
let taskValue = document.getElementById("formText");
let groupList = document.getElementById("groupList");
let list = document.getElementsByClassName("list")

let listNumber = 1;

// Core Function //
async function submitNewTask(taskCreated) {
  let createList = document.createElement("li");
  let checkButton = document.createElement("button");
  let listDetail = document.createElement("p");

  createList.classList.add("list");

  checkButton.classList.add("checkButton");
  checkButton.setAttribute("id", "checkButton" + listNumber);
  checkButton.setAttribute("onclick", "checkedTask(this.id)");

  listDetail.classList.add("listDetail");

  if (taskCreated) {
    let currentValue = new Promise(function (resolve) {
      setTimeout(() => {
        resolve(taskCreated);
      }, 1000);
    });
    listDetail.textContent = await currentValue;
    createList.appendChild(checkButton);
    createList.appendChild(listDetail);
    groupList.appendChild(createList);

    listNumber += 1;

    taskValue.value = "";
    closeModal();
  }
}

function clearAllTask() {
  alert("Cleared");
}

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
