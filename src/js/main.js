import { Task } from ".models/task";

let task1 = new Task(1, "Hugga ved");
let task2 = new Task(2, "Ladda kaminen");
let task3 = new Task(3, "Tänd brasan");

let listItems = [task1, task2, task3];

localStorage.setItem("listItems", JSON.stringify(listItems));
let listItemsFromLs = localStorage.getItem("listItems");

let addButton = document.getElementById("addButton");

addButton.addEventListener("click", addListItem); 

for (let i = 0; i < listItems.length; i++) {
    let newLi = document.createElement("li");
    let newRemove = document.createElement("button");

    newRemove.innerHTML = "Ta bort";
    newRemove.id = "remove" + (listItems[i].taskId);
    newRemove.addEventListener("click", () => newLi.parentNode.removeChild(newLi));

    newLi.innerHTML = listItems[i].taskDescription;
    newLi.id = "task" + listItems[i].taskId;

    document.getElementById("taskList").appendChild(newLi);
    document.getElementById("task" + listItems[i].taskId).appendChild(newRemove);
}

function addListItem() {
    let inputValue = document.getElementById("myInput").value;

    newListItem = new Task ((listItems.length + 1), inputValue);
    listItems.push(newListItem);
    if (inputValue === "") {
        alert("Skriv en uppgift!");
    } else {
    for (let i = (listItems.length - 1); i < listItems.length; i++) {
        let newLi = document.createElement("li");
        let newRemove = document.createElement("button");
    
        newRemove.innerHTML = "Ta bort";
        newRemove.id = "remove" + (listItems[i].taskId);

        newRemove.addEventListener("click", () => newLi.parentNode.removeChild(newLi));

        newLi.innerHTML = listItems[i].taskDescription;
        newLi.id = "task" + listItems[i].taskId;
    
        document.getElementById("taskList").appendChild(newLi);
        document.getElementById("task" + listItems[i].taskId).appendChild(newRemove);
    }
    console.log(listItems);
    }   
}


// Uppdatera classen Task (listitems i localStorage) till att ha fler värden (t.ex finished/inte), ha listItems i localstorage.