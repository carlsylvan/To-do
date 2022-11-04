let toDoList = []

class ListItem {
    constructor(taskName, taskDescription) {
        this.taskName = taskName;
        this.taskDescription = taskDescription;
    }
}


for (let i = 0; i < 4; i++) {
    let newListItem = new ListItem ("Dammsuga", "Dammsug alla golvytor");
    toDoList.push(newListItem);
} 


console.log(toDoList);