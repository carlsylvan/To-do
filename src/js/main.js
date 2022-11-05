let listItems = document.getElementsByTagName("li");
let addButton = document.getElementById("addButton");
let i = 0;

addButton.addEventListener("click", addListItem); 
removeButton.addEventListener("click", removeListItem);

function addListItem() {
    let li = document.createElement("li");
    let removeButton = document.createElement("button");
    let inputValue = document.getElementById("myInput").value;
    removeButton.innerHTML = "Ta bort";
    removeButton.id = "remove"
    li.innerHTML = inputValue;
    if (inputValue === "") {
        alert("Write a new task!");
    } else {
        document.getElementById("taskList").appendChild(li);
        document.getElementById("taskList").appendChild(removeButton);
    }
}

function removeListItem() {
    document.getElementById("newtask").remove;
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
