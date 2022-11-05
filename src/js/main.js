let listItems = document.getElementsByTagName("li");
let addButton = document.getElementById("addButton");
let i = 0;

addButton.addEventListener("click", addListItem); 

function addListItem() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    li.innerHTML = inputValue;
    if (inputValue === "") {
        alert("Write a new task!");
    } else {
        document.getElementById("taskList").appendChild(li);
    }
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
