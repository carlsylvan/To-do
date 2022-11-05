let listItems = document.getElementsByTagName("li");
let addButton = document.getElementById("addButton");
let removeButton = document.getElementById("remove");
let i = 0;

addButton.addEventListener("click", addListItem); 
removeButton.addEventListener("click", removeListItem);

function addListItem() {
    let newLi = document.createElement("li");
    let newRemove = document.createElement("button");
    let inputValue = document.getElementById("myInput").value;
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
    document.getElementById("newtask").style.display = "none";
    console.log("klick");
}


// for (let i = 0; i < listItems.length; i++) {
//     let span = document.createElement("span");
//     let txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     listItems[i].appendChild(span);
// }

// function removeListItem() {
//     var span = this.parentElement;
//     span.style.display = "none";
// }
