import {Task} from "./models/task"

let task1 = new Task(false, "Hugga ved", "unfinished");
let task2 = new Task(false, "Ladda kaminen", "unfinished");
let task3 = new Task(false, "Tänd brasan", "unfinished");


let listItems = [];
let addButton = document.getElementById("addButton");

addButton.addEventListener("click", addListItem); 

function loadToLS() {
    localStorage.setItem("listItems", JSON.stringify(listItems));
};

function loadFromLS() {
    let itemsFromLs = JSON.parse(localStorage.getItem("listItems"));
    listItems = itemsFromLs.map((mappedList) => {
        return new Task(mappedList.checked, mappedList.taskDescription, mappedList.status);
    })
}

function updateHtml() {
    document.getElementById("taskList").innerHTML = "";
    document.getElementById("removedList").innerHTML = "";
    let removedList = listItems.filter(listItems => {
        return listItems.status === "removed";
    })

    let activeList = listItems.filter(listItems => {
        return listItems.status === "unfinished";
    })
    // let checkedList = listItems.filter(listItems => {
    //     return listItems.status === "checked";
    // })
    for (let i = 0; i < activeList.length; i++) {
        let newLi = document.createElement("li");
        let removeButton = document.createElement("button");
        // let removedListItems = document.createElement("li");
        removeButton.innerHTML = "Remove";
        newLi.innerHTML = activeList[i].taskDescription;
        document.getElementById("taskList").appendChild(newLi);
        document.getElementById("taskList").append(removeButton);
        // document.getElementById("removedList").appendChild(removedListItems);
        removeButton.addEventListener("click", () => activeList[i].status = "removed");
        removeButton.addEventListener("click", () => updateHtml());
        removeButton.addEventListener("click", () => loadToLS());

    }
    for (let i = 0; i < removedList.length; i++) {
        let newLi = document.createElement("li");
        newLi.innerHTML = removedList[i].taskDescription;
        document.getElementById("removedList").appendChild(newLi);
        console.log(removedList);
    }
    // for (let i = 0; i < checkedList.length; i++) {
    //     let newLi = document.createElement("li");
    //     newLi.innerHTML = removedList[i].taskDescription;
    //     document.getElementById("listItems").appendChild(newLi);

    // }
} 

function addListItem() {
        let inputValue = document.getElementById("myInput").value;
        inputClear();
        newListItem = new Task (false, inputValue, "unfinished");
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
    let itemsFromLs = JSON.parse(localStorage.getItem("listItems"));
    if (itemsFromLs === null) {
        listItems = [task1, task2, task3];
        updateHtml()
    } else {
        loadFromLS();
        updateHtml();
    }
}
firstLoad();

// Uppdatera classen Task (listitems i localStorage) till att ha fler värden (t.ex finished/inte), ha listItems i localstorage. När klicka ta bort, ändra i listitem från Unfinished till Removed.


// Gammal html-update med remove-knapp:
// function updateHtml() {
//     document.getElementById("taskList").innerHTML = "";
//     for (let i = 0; i < listItems.length; i++) {
//         let newLi = document.createElement("li");
//         // let newRemove = document.createElement("button");
    
//         // newRemove.innerHTML = "Ta bort";
//         // newRemove.id = "remove" + (listItems[i].taskId);
    
//         // newRemove.addEventListener("click", () => newLi.parentNode.removeChild(newLi));
//         // newRemove.addEventListener("click", () => listItems[i].status = "removed");
//         // newRemove.addEventListener("click", () => loadToLS());
    
//         newLi.innerHTML = listItems[i].taskDescription;
//         newLi.id = "task" + listItems[i].taskId;
    
//         document.getElementById("taskList").appendChild(newLi);
//         // document.getElementById("task" + listItems[i].taskId).appendChild(newRemove);
//         console.log(listItems);
//     }
// }