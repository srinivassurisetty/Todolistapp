let totalTasks = 0;

function addTodo() {
    const input = document.getElementById("todoInput");
    const todoText = input.value.trim();
    if (todoText !== "") {
        const todoList = document.getElementById("todoList");
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", toggleCompleted);
        const textNode = document.createTextNode(todoText);
        const deleteBtn = document.createElement("span");
        deleteBtn.className = "delete-btn";
        deleteBtn.innerHTML = "&times;";
        deleteBtn.addEventListener("click", deleteTodo);
        li.appendChild(checkbox);
        li.appendChild(textNode);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
        input.value = "";
        totalTasks++;
        updateTotalTasks();
    }
}

function toggleCompleted() {
    const li = this.parentNode;
    if (this.checked) {
        li.classList.add("completed");
    } else {
        li.classList.remove("completed");
    }
}

function deleteTodo() {
    const li = this.parentNode;
    li.parentNode.removeChild(li);
    totalTasks--;
    updateTotalTasks();
}

function updateTotalTasks() {
    const totalTasksElem = document.getElementById("totalTasks");
    totalTasksElem.textContent = `Total tasks: ${totalTasks}`;
}