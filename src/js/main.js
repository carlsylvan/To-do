class ListItem {
    constructor (tasknumber, task) {
        this.tasknumber = tasknumber;
        this.task = task;
    }
}

let listItems = ["Dammsug", "Hugga ved", "Laga mat"]

let addButton = document.getElementById("addButton");

addButton.addEventListener("click", addListItem); 
// removeButton.addEventListener("click", removeListItem);

for (let i = 0; i < listItems.length; i++) {
    let newLi = document.createElement("li");
    let newRemove = document.createElement("button");

    newRemove.innerHTML = "Ta bort";
    newRemove.class = "remove"
    newLi.innerHTML = listItems[i];
    newLi.id = "newTask" + i;

    document.getElementById("taskList").appendChild(newLi);
    document.getElementById("newTask" + i).appendChild(newRemove);
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