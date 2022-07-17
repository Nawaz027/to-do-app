const input = document.querySelector(".input");
const add = document.querySelector(".add");
const remove = document.querySelector(".delete");
const taskHolder = document.querySelector(".taskHolder");

function addFunction() {
    // let inputValue = input.value;
  if (input.value === "") {
    alert("Please provide input");
  } else {
    let taskDiv = document.createElement("div");
    let taskP = document.createElement("span");
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    editButton.textContent = "Edit";
    deleteButton.textContent = "Delete";

    taskDiv.classList.add("task-div");
    taskP.classList.add("task-para");
    editButton.classList.add("edit-button");
    deleteButton.classList.add("delete-button");

    taskDiv.append(taskP);
    taskDiv.append(editButton);
    taskDiv.append(deleteButton);
    taskHolder.append(taskDiv);

    taskP.textContent = input.value;
    input.value = "";

    /*Edit button function*/

    function editButtonClickHandler() {
      if (editButton.textContent === "Edit") {
        editButton.style.backgroundColor = "yellow";
        editButton.style.color = "black";
        taskP.setAttribute("contenteditable", true);
        editButton.textContent = "Save";
      } else {

        // editButton.style.backgroundColor = "white";
        editButton.style.color = "black";
        taskP.setAttribute("contenteditable", false);
        editButton.textContent = "Edit";
      }
    }
    /*Delete button function*/

    function deleteButtonClickHandler() {
      taskDiv.remove();
      return taskDiv;
    }

    editButton.addEventListener("click", editButtonClickHandler);

    deleteButton.addEventListener("click", deleteButtonClickHandler);
  }
}

add.addEventListener("click", addFunction);
remove.addEventListener('click', () => {
    input.value = "";
})
