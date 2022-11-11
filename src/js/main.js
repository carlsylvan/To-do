import {Task} from "./models/task"

//* Placeholder tasks, will load if LS is empty
let task1 = new Task("Hugga ved", "unfinished");
let task2 = new Task("Ladda kaminen", "unfinished");
let task3 = new Task("Tända brasan", "unfinished");

let listItems = [];

//* when first loading the page. Adds placeholder tasks if none are saved from previous visit
function firstLoad() {
    let localStorageCheck = JSON.parse(localStorage.getItem("listItems"));
    if (localStorageCheck === null) {
        listItems = [task1, task2, task3];
        loadToLS();
        updateHtml();
    } else {
        loadFromLS();
        updateHtml();
    }
}

//* Load current listItems to LS
function loadToLS() {
    localStorage.setItem("listItems", JSON.stringify(listItems));
};

//* Load current LS to listItems
function loadFromLS() {
    let itemsFromLs = JSON.parse(localStorage.getItem("listItems"));
    listItems = itemsFromLs.map((mappedList) => {
        return new Task(mappedList.taskDescription, mappedList.status);
    })
}

//* Update html using listItems
function updateHtml() {
    document.getElementById("taskList").innerHTML = "";
    document.getElementById("finishedList").innerHTML = "";
    document.getElementById("removedList").innerHTML = "";

    let activeList = listItems.filter(listItems => {
        return listItems.status === "unfinished";
    });
    let checkedList = listItems.filter(listItems => {
        return listItems.status === "checked";
    });
    let removedList = listItems.filter(listItems => {
        return listItems.status === "removed";
    });

    for (let i = 0; i < activeList.length; i++) {
        let newLi = document.createElement("li");
        let removeButton = document.createElement("button");
        removeButton.innerHTML = "Remove";
        newLi.innerHTML = activeList[i].taskDescription;
        document.getElementById("taskList").appendChild(newLi);
        document.getElementById("taskList").append(removeButton);
        removeButton.addEventListener("click", () => activeList[i].status = "removed");
        removeButton.addEventListener("click", () => updateHtml());
        newLi.addEventListener("click", () => activeList[i].status = "checked");
        newLi.addEventListener("click", () => updateHtml());
    }

    for (let i = 0; i < checkedList.length; i++) {
        let newLi = document.createElement("li");
        let removeButton = document.createElement("button");
        removeButton.innerHTML = "Remove";
        newLi.innerHTML = checkedList[i].taskDescription + " &#10004;";
        document.getElementById("finishedList").appendChild(newLi);
        document.getElementById("finishedList").append(removeButton);
        removeButton.addEventListener("click", () => checkedList[i].status = "removed");
        removeButton.addEventListener("click", () => updateHtml());
        newLi.addEventListener("click", () => checkedList[i].status = "unfinished");
        newLi.addEventListener("click", () => updateHtml());
    }

    for (let i = 0; i < removedList.length; i++) {
        let newLi = document.createElement("li");
        newLi.innerHTML = removedList[i].taskDescription;
        document.getElementById("removedList").appendChild(newLi);
        newLi.addEventListener("click", () => removedList[i].status = "unfinished");
        newLi.addEventListener("click", () => updateHtml());
    }

    loadToLS();
} 

//* Add list items function
function addListItem() {
        let inputValue = document.getElementById("myInput").value;
        inputClear();
        newListItem = new Task (inputValue, "unfinished");
        document.getElementById("myInput").focus();
        if (inputValue === "") {
            alert("Write a new task!");
        } else {
            listItems.push(newListItem);
            loadToLS();
            updateHtml();
        }
}
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addListItem); 

//* Function for clearing textbox after writing new task
function inputClear() {
    document.getElementById("myInput").value = "";
}

//* Function for clearing all items from LS
function reset() {
    if (confirm("Are you sure you want to remove your tasks?") === true) {
        localStorage.clear();
        let resetTask = new Task("Add a task", "unfinished");
        listItems = [resetTask];
        localStorage.setItem("listItems", JSON.stringify(listItems));
        location.reload();
    } else {
        location.reload();
    }
}

document.getElementById("reset").addEventListener("click", reset);

//* Load page and focus on input box
firstLoad();
document.getElementById("myInput").focus();

/* Project to do list:

* Add all html using js
* Add function for clearing removed items
* Add function for ordering list items
* Better html/scss design (...)

*/