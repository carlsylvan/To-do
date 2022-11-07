class ListItem {
    constructor (taskId, taskDescription) {
        this.taskId = taskId;
        this.taskDescription = taskDescription;
    }
}
let listItems = [];

for (let i = 0; i < 3; i++) {
    let newListItem = new ListItem ((i + 1), "Task description");
    listItems.push(newListItem);
} 


console.log(listItems);

let addButton = document.getElementById("addButton");

addButton.addEventListener("click", addListItem); 
// removeButton.addEventListener("click", removeListItem);

for (let i = 0; i < listItems.length; i++) {
    let newLi = document.createElement("li");
    let newRemove = document.createElement("button");

    newRemove.innerHTML = "Ta bort";
    newRemove.class = "remove"
    newLi.innerHTML = listItems[i].taskDescription;
    newLi.id = "task" + listItems[i].taskId;

    document.getElementById("taskList").appendChild(newLi);
    document.getElementById("task" + listItems[i].taskId).appendChild(newRemove);
}

function addListItem() {
    let newLi = document.createElement("li");
    let newRemove = document.createElement("button");
    let inputValue = document.getElementById("myInput").value;
    listItems.push(inputValue);

    newRemove.innerHTML = "Ta bort";
    newRemove.id = "remove"
    newLi.innerHTML = inputValue;
    newLi.id = "newTask";

    let newListItem = new ListItem (i);
    listItems.push(newListItem);
    if (inputValue === "") {
        alert("Write a new task!");
    } else {
        document.getElementById("taskList").appendChild(newLi);
        document.getElementById("newTask").appendChild(newRemove);
    }
}



function removeListItem() {

}

// for (let i = 0; i < listItems.length; i++) {
//     let newLi = document.createElement("li");
//     let newRemove = document.createElement("button");
//     listItems.push(inputValue);

//     newRemove.innerHTML = "Ta bort";
//     newRemove.id = "remove"
//     newLi.innerHTML = inputValue;
//     newLi.id = "newTask";

//     if (inputValue === "") {
//         alert("Write a new task!");
//     } else {
//         document.getElementById("taskList").appendChild(newLi);
//         document.getElementById("newTask").appendChild(newRemove);
//     }