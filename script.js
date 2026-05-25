let taskInput = document.getElementById("taskInput");
let addBtn= document.getElementById("addBtn");
let taskList= document.getElementById("taskList");

addBtn.addEventListener("click", function(){
    let task = taskInput.value;
    if (task === "") {
        return;}

let li = document.createElement("li");
li.innerText = task;

let deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";
li.appendChild(deleteBtn);

deleteBtn.addEventListener("click", function(){
li.remove();
});

li.addEventListener("click", function(){
 if (li.style.textDecoration === "line-through") {
    li.style.textDecoration = "none";
} else {
        li.style.textDecoration = "line-through"
    }
});

taskList.appendChild(li);
taskInput.value = "";

});