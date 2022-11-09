import {Task} from "./models/task"

// let task1 = new Task(1, "Hugga ved", "unfinished");
// let task2 = new Task(2, "Ladda kaminen", "unfinished");
// let task3 = new Task(3, "Tänd brasan", "unfinished");
// let task4 = new Task(4, "Lägg till en grej", "unfinished");


let task1 = new Task(false, "Add new task", "unfinished");

let listItems = [task1];
let addButton = document.getElementById("addButton");

addButton.addEventListener("click", addListItem); 

function loadToLS() {
    localStorage.setItem("listItems", JSON.stringify(listItems));
};
window.onload = updateHtml();

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

    for (let i = 0; i < removedList.length; i++) {
        let newLi = document.createElement("li");
        newLi.innerHTML = removedList[i].taskDescription;
        document.getElementById("removedList").appendChild(newLi);
        newLi.addEventListener("click", () => removedList[i].checked = true);
        newLi.addEventListener("click", () => removedList[i].status = "unfinished");
        console.log(removedList);
    }

    let activeList = listItems.filter(listItems => {
        return listItems.status === "unfinished";
    })

    for (let i = 0; i < activeList.length; i++) {
        let newLi = document.createElement("li");
        let removeButton = document.createElement("button");
        // let removedListItems = document.createElement("li");
        removeButton.innerHTML = "Remove";
        newLi.innerHTML = listItems[i].taskDescription;
        document.getElementById("taskList").appendChild(newLi);
        document.getElementById("taskList").append(removeButton);
        // document.getElementById("removedList").appendChild(removedListItems);
        newLi.addEventListener("click", () => listItems[i].checked = true);
        newLi.addEventListener("click", () => listItems[i].status = "finished");
        removeButton.addEventListener("click", () => listItems[i].status = "removed");
        removeButton.addEventListener("click", () => updateHtml());
        removeButton.addEventListener("click", () => loadToLS());
    }
} 

function addListItem() {
        let inputValue = document.getElementById("myInput").value;
        inputClear();
        newListItem = new Task (false, inputValue, "unfinished");
        if (inputValue === "") {
            alert("Skriv en uppgift!");
        } else {
            listItems.push(newListItem);
            for (let i = 0; i < listItems.length; i++) {
                loadToLS();
                loadFromLS();
                updateHtml();
            }
        }      console.log(listItems);
 
}

function inputClear(){
    document.getElementById("myInput").value = "";
}

// Uppdatera classen Task (listitems i localStorage) till att ha fler värden (t.ex finished/inte), ha listItems i localstorage. När klicka ta bort, ändra i listitem från Unfinished till Removed.


//Gammal html-update med remove-knapp:
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