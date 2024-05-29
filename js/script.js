// Add New Tasks Variable
let input_task = document.querySelector(".input-task");
let add_to_list = document.querySelector(".add-to-list");
let clear = document.querySelector(".clear");
// Menu List Variable
let menu = document.querySelector(".list-menu");
let menu_item = document.querySelectorAll(".list-menu li");
let menu_item_text = document.querySelectorAll("li p");
// Complete-Delete-Edit Buttons Variable
let complete;
let deleted;
let edit;
// Add New Task
add_to_list.addEventListener("click", add_item);
function add_item(){
    menu.innerHTML += 
    `<li>
        <p>${input_task.value}</p>
        <div class="edit-items">
            <img src="./img/check-double-fill.svg" alt="complete" class="complete">
            <img src="./img/delete-bin-6-line.svg" alt="delete" class="delete">
            <img src="./img/edit-2-line.svg" alt="edit" class="edit">
        </div>
    </li>`;
};
// Clear Task
clear.addEventListener("click",reset_input);
function reset_input(){
    input_task.value = "";
};
// Complete-Delete-Edit Buttons
menu.onclick = function(event){
    let target = event.target;
    if (target.classList.contains("complete")) {
        complete_task(event);
    }
    else if(target.classList.contains("delete")){
        delete_task(event);
    }
    else if(target.classList.contains("edit")){
        edit_task(event);
    }
    else{
        return;
    }
};
// Complete Fi=unction
function complete_task(event){
    event.target.parentNode.parentNode.firstElementChild.style.textDecoration = "line-through";
    // if (complete) {
    //     event.target.parentNode.parentNode.firstElementChild.style.textDecoration = "none";
    // }
    // else{
    //     event.target.parentNode.parentNode.firstElementChild.style.textDecoration = "line-through";
    // }
};
// Delete Function
function delete_task(event){
    event.target.parentNode.parentNode.style.display = "none";
}
// Edit Function
function edit_task(event){
    event.target.parentNode.parentNode.firstElementChild.innerHTML = input_task.value
}