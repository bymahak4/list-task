const newTaskForm   = document.querySelector(".add-task-form");
const addListTask   = document.querySelector(".list-task");
const searchBar     = document.querySelector(".input-search-bar");


const newTask = (e) => `<div class="task-container">
    <p class="task-name">${e}</p>
    <p class="task-item-delete">X</p>
  </div>`
;

newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const lengthErrorMsg    = document.querySelector(".length-error");
    const taskbox           = newTaskForm.add.value.trim();
    
    if (taskbox.length > 0) {
        addListTask.innerHTML += newTask(taskbox);
        newTaskForm.reset();
        if (lengthErrorMsg != null) {
            lengthErrorMsg.remove();
        }
    } else if (lengthErrorMsg === null) {
        newTaskForm.innerHTML += `<p class="text-center length-error">Ingrese una tarea</p>`;
    }
});


addListTask.addEventListener("click", (e) => {
    if (e.target.classList.contains("task-item-delete")) {
        e.target.parentElement.remove();
    }
});


const searchFunction = (input) => {
    const taskNameContainer = document.querySelectorAll(".task-container");

    Array.from(taskNameContainer).forEach((item) => {
        if(!item.firstElementChild.innerHTML.toLowerCase().includes(input)) {
            item.classList.add("filtered");
        } else if (item.firstElementChild.innerHTML.toLowerCase().includes(input)) {
            item.classList.remove("filtered");
        }
    });
};

searchBar.addEventListener("keyup", () => {
    let input = searchBar.value.trim().toLocaleLowerCase();
    searchFunction(input);
});

