import { Task } from "./models/task"

let task1 = new Task(1, "Hugga ved", "unfinished");
let task2 = new Task(2, "Ladda kaminen", "unfinished");
let task3 = new Task(3, "Tänd brasan", "unfinished");

let listItems = [task1, task2, task3];

let addButton = document.getElementById("addButton");

addButton.addEventListener("click", addListItem); 

function loadToLS() {
    localStorage.setItem("listItems", JSON.stringify(listItems));
};

function loadFromLS() {
    let itemsFromLs = JSON.parse(localStorage.getItem("listItems"));
    listItems = itemsFromLs.map((mappedList) => {
        return new Task(mappedList.taskId, mappedList.taskDescription, mappedList.status);
    })
    
}

function updateHtml() {
    loadFromLS();
    for (let i = 0; i < listItems.length; i++) {
        let newLi = document.createElement("li");
        let newRemove = document.createElement("button");
    
        newRemove.innerHTML = "Ta bort";
        newRemove.id = "remove" + (listItems[i].taskId);
    
        newRemove.addEventListener("click", () => newLi.parentNode.removeChild(newLi));
        newRemove.addEventListener("click", () => listItems[i].status = "removed");
    
        newLi.innerHTML = listItems[i].taskDescription;
        newLi.id = "task" + listItems[i].taskId;
    
        document.getElementById("taskList").appendChild(newLi);
        document.getElementById("task" + listItems[i].taskId).appendChild(newRemove);
        console.log(listItems);
    }
    }

    function addListItem() {
        let inputValue = document.getElementById("myInput").value;
    
        newListItem = new Task ((listItems.length + 1), inputValue, "unfinished");
        listItems.push(newListItem);
        loadToLS;
        if (inputValue === "") {
            alert("Skriv en uppgift!");
        } else {
            for (let i = 0; i < listItems.length; i++) {
                let newLi = document.createElement("li");
                let newRemove = document.createElement("button");
            
                newRemove.innerHTML = "Ta bort";
                newRemove.id = "remove" + (listItems[i].taskId);
            
                newRemove.addEventListener("click", () => newLi.parentNode.removeChild(newLi));
                newRemove.addEventListener("click", () => listItems[i].status = "removed");
            
                newLi.innerHTML = listItems[i].taskDescription;
                newLi.id = "task" + listItems[i].taskId;
            
                document.getElementById("taskList").appendChild(newLi);
                document.getElementById("task" + listItems[i].taskId).appendChild(newRemove);
            }
        }   
    }
// let listItemsObj = JSON.parse(listItemsFromLs);

// for (let i = 0; i < listItems.length; i++) {
//     let newLi = document.createElement("li");
//     let newRemove = document.createElement("button");

//     newRemove.innerHTML = "Ta bort";
//     newRemove.id = "remove" + (listItems[i].taskId);
//     newRemove.addEventListener("click", () => newLi.parentNode.removeChild(newLi));

//     newLi.innerHTML = listItems[i].taskDescription;
//     newLi.id = "task" + listItems[i].taskId;

//     document.getElementById("taskList").appendChild(newLi);
//     document.getElementById("task" + listItems[i].taskId).appendChild(newRemove);
//     loadToLS();
// }

// Uppdatera classen Task (listitems i localStorage) till att ha fler värden (t.ex finished/inte), ha listItems i localstorage. När klicka ta bort, ändra i listitem från Unfinished till Removed.

// Gamla addListItem 

// for (let i = 0; i < listItems.length; i++) {
//     let newLi = document.createElement("li");
//     let newRemove = document.createElement("button");

//     newRemove.innerHTML = "Ta bort";
//     newRemove.id = "remove" + (listItems[i].taskId);
//     newRemove.addEventListener("click", () => newLi.parentNode.removeChild(newLi));

//     newLi.innerHTML = listItems[i].taskDescription;
//     newLi.id = "task" + listItems[i].taskId;

//     document.getElementById("taskList").appendChild(newLi);
//     document.getElementById("task" + listItems[i].taskId).appendChild(newRemove);
// }

// function addListItem() {
//     let inputValue = document.getElementById("myInput").value;

//     newListItem = new Task ((listItems.length + 1), inputValue, "unfinished");
//     listItems.push(newListItem);
//     loadToLS();
//     if (inputValue === "") {
//         alert("Skriv en uppgift!");
//     } else {
//     for (let i = (listItems.length - 1); i < listItems.length; i++) {
//         let newLi = document.createElement("li");
//         let newRemove = document.createElement("button");
    
//         newRemove.innerHTML = "Ta bort";
//         newRemove.id = "remove" + (listItems[i].taskId);

//         newRemove.addEventListener("click", () => newLi.parentNode.removeChild(newLi));

//         newLi.innerHTML = listItems[i].taskDescription;
//         newLi.id = "task" + listItems[i].taskId;
    
//         document.getElementById("taskList").appendChild(newLi);
//         document.getElementById("task" + listItems[i].taskId).appendChild(newRemove);
//     }
//     }   
// }