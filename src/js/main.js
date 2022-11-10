import {Task} from "./models/task"

let task1 = new Task("Hugga ved", "unfinished");
let task2 = new Task("Ladda kaminen", "unfinished");
let task3 = new Task("Tänd brasan", "unfinished");

let listItems = [];
let addButton = document.getElementById("addButton");

addButton.addEventListener("click", addListItem); 

function loadToLS() {
    localStorage.setItem("listItems", JSON.stringify(listItems));
};

function loadFromLS() {
    let itemsFromLs = JSON.parse(localStorage.getItem("listItems"));
    listItems = itemsFromLs.map((mappedList) => {
        return new Task(mappedList.taskDescription, mappedList.status);
    })
}

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
        newLi.innerHTML = checkedList[i].taskDescription;
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
    }

    loadToLS();
} 

function addListItem() {
        let inputValue = document.getElementById("myInput").value;
        inputClear();
        newListItem = new Task (inputValue, "unfinished");
        if (inputValue === "") {
            alert("Skriv en uppgift!");
        } else {
            listItems.push(newListItem);
            loadToLS();
            updateHtml();
        }
 
}

function inputClear(){
    document.getElementById("myInput").value = "";
}

function firstLoad() {
    let localStorageCheck = JSON.parse(localStorage.getItem("listItems"));
    if (localStorageCheck === null) {
        listItems = [task1, task2, task3];
        updateHtml()
    } else {
        loadFromLS();
        updateHtml();
    }
}
firstLoad();

// Uppdatera classen Task (listitems i localStorage) till att ha fler värden (t.ex finished/inte), ha listItems i localstorage. När klicka ta bort, ändra i listitem från Unfinished till Removed.