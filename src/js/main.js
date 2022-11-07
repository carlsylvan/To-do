class Task {
    constructor (taskId, taskDescription) {
        this.taskId = taskId;
        this.taskDescription = taskDescription;
    }
}

let task1 = new Task(1, "Hugga ved");
let task2 = new Task(2, "Ladda kaminen");
let task3 = new Task(3, "Tänd brasan");

let listItems = [task1, task2, task3];

console.log(listItems);

let addButton = document.getElementById("addButton");

addButton.addEventListener("click", addListItem); 
// removeButton.addEventListener("click", removeListItem);

for (let i = 0; i < listItems.length; i++) {
    let newLi = document.createElement("li");
    let newRemove = document.createElement("button");

    newRemove.innerHTML = "Ta bort";
    newRemove.id = "remove" + (listItems[i].taskId);
    newLi.innerHTML = listItems[i].taskDescription;
    newLi.id = "task" + listItems[i].taskId;

    document.getElementById("taskList").appendChild(newLi);
    document.getElementById("task" + listItems[i].taskId).appendChild(newRemove);
}

function addListItem() {
    // let newLi = document.createElement("li");
    // let newRemove = document.createElement("button");
    let inputValue = document.getElementById("myInput").value;

    // newRemove.innerHTML = "Ta bort";
    // newRemove.id = "remove" + (listItems.length + 1);
    // newLi.innerHTML = inputValue;
    // newLi.id = "task" + (listItems.length + 1);

    newListItem = new Task ((listItems.length + 1), inputValue);
    listItems.push(newListItem);
    for (let i = 0; i < listItems.length; i++) {
        let newLi = document.createElement("li");
        let newRemove = document.createElement("button");
    
        newRemove.innerHTML = "Ta bort";
        newRemove.id = "remove" + (listItems[i].taskId);
        newLi.innerHTML = listItems[i].taskDescription;
        newLi.id = "task" + listItems[i].taskId;
    
        document.getElementById("taskList").appendChild(newLi);
        document.getElementById("task" + listItems[i].taskId).appendChild(newRemove);
    }
    // if (inputValue === "") {
    //     alert("Write a new task!");
    // } else {
    //     document.getElementById("taskList").appendChild(newLi);
    //     document.getElementById("task" + (listItems.length)).appendChild(newRemove);
    // }
}

// for (let i = 0; i < listItems.length; i++) {
//     let newLi = document.createElement("li");
//     let newRemove = document.createElement("button");

//     newRemove.innerHTML = "Ta bort";
//     newRemove.id = "remove" + (listItems[i].taskId);
//     newLi.innerHTML = listItems[i].taskDescription;
//     newLi.id = "task" + listItems[i].taskId;

//     document.getElementById("taskList").appendChild(newLi);
//     document.getElementById("task" + listItems[i].taskId).appendChild(newRemove);
// }

console.log(listItems);
function removeListItem() {

}