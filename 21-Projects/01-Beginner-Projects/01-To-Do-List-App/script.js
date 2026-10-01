const taskCount = document.getElementById("task-count");
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const emptyState = document.getElementById("empty-state");
const completedCount = document.getElementById("completed-count");
const trashButton = document.getElementById("trash-btn");
const trashSection = document.getElementById("trash-section");
const backButton = document.getElementById("back-btn");
const deletedList = document.getElementById("deleted-list");
const emptyTrash = document.getElementById("empty-trash");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
    localStorage.setItem("todos",JSON.stringify(todos)
    );
}

function addTodo() {
    const taskText = taskInput.value.trim();

    if(taskText === "") {
        return;
    }

    const newTodo = {
        id: Date.now(),
        text: taskText,
        completed: false,
        deleted: false,
    };
    
    todos.push(newTodo);
    saveTodos();
    taskInput.value = "";
    renderTodos();
}

addTaskButton.addEventListener("click", addTodo);

taskInput.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        addTodo();
    }
});

function renderTodos() {
    taskList.innerHTML = "";
    const activeTodos = todos.filter(function (todo) {
        return !todo.deleted;
    });

    if(activeTodos.length === 0) {
        emptyState.classList.remove("hidden");
    } else {
        emptyState.classList.add("hidden");
    }

    activeTodos.forEach(function (todo) {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");

        if(todo.completed) {
            taskItem.classList.add("completed");
        }

        taskItem.innerHTML = `
        <label class = "task-left">
            <input type = "checkbox" ${todo.completed ? "checked" : ""}>
            <span class = "custom-checkbox"></span>
            <span class = "task-text">${todo.text}</span>
        </label>

        <div class = "task-actions">
            <button class = "edit-btn" title = "Edit">✎</button>
            <button class = "delete-btn" title = "Delete">×</button>
        </div>`

        const checkbox = taskItem.querySelector("input");
        checkbox.addEventListener("change", function() {
            toggleTodo(todo.id);
        });

        const editBtn = taskItem.querySelector(".edit-btn");
        editBtn.addEventListener("click", function() {
            editTodo(todo.id)
        });

        const deleteBtn = taskItem.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", function() {
            deleteTodo(todo.id);
        });
        taskList.appendChild(taskItem);

    });

    updateCounts();
}

function toggleTodo(id) {
    todos = todos.map(function (todo) {

        if(todo.id === id) {
            return {
                ...todo, completed: !todo.completed
            }
        }
        return todo;
    });

    saveTodos();
    renderTodos();
}

function editTodo(id) {
    const todo = todos.find(function (todo) {
        return todo.id === id;
    });

    if(!todo) {
        return;
    }

    const newText = prompt("Edit your task:", todo.text);
    if(newText === null) {
        return;
    }
    const updateText = newText.trim();

    if(updateText === "") {
        return;
    }

    todos = todos.map(function (todo) {
        if(todo.id === id) {
            return {
                ...todo,text: updateText
            };
        }
        return todo;
    });
    
    saveTodos();
    renderTodos();
} 

function deleteTodo(id) {
    todos = todos.map(function (todo) {
        if(todo.id === id) {
            return {
                ...todo, deleted: true
            };
        }
        return todo;
    });

    saveTodos();
    renderTodos();
}

function updateCounts() {
    const activeTodos = todos.filter(function (todo) {
        return !todo.deleted
    });

    const totalTask = activeTodos.length;

    const completedTodos = activeTodos.filter(function (todo) {
        return todo.completed;
    });

    taskCount.textContent = totalTask;
    completedCount.textContent = completedTodos.length;
}

trashButton.addEventListener("click", function() {
    document.querySelector(".todo-header").classList.add("hidden")
    document.querySelector(".add-task").classList.add("hidden")
    document.querySelector(".task-section").classList.add("hidden")
    document.querySelector(".todo-footer").classList.add("hidden")
    trashSection.classList.remove("hidden")

    renderDeletedTodos();
});

backButton.addEventListener("click", function() {
    document.querySelector(".todo-header").classList.remove("hidden")
    document.querySelector(".add-task").classList.remove("hidden")
    document.querySelector(".task-section").classList.remove("hidden")
    document.querySelector(".todo-footer").classList.remove("hidden")
    trashSection.classList.add("hidden")

    renderTodos();
});

function renderDeletedTodos() {
    deletedList.innerHTML = "";

    const deleteTodos = todos.filter(function (todo) {
        return todo.deleted
    });

    if(deleteTodos.length === 0) {
        emptyTrash.classList.remove("hidden")
    } else {
        emptyTrash.classList.add("hidden")
    }

    deleteTodos.forEach(function (todo) {
        const deletedTask = document.createElement("div");
        deletedTask.classList.add("deleted-task")

        deletedTask.innerHTML = `
            <span class = "deleted-task-text">${todo.text}</span>
            <button class = "restore-btn">↩ Restore</button>
            <button class="permanent-delete-btn">🗑 Delete</button>
        `;

        const restoreBtn = deletedTask.querySelector(".restore-btn")
        restoreBtn.addEventListener("click", function () {
            restoreDeletedTodo(todo.id)
        })

        const permanentDeletedBtn = deletedTask.querySelector(".permanent-delete-btn")
        permanentDeletedBtn.addEventListener("click", function() {
            permanentDeletedTodo(todo.id)
        })

        deletedList.appendChild(deletedTask)
    });
}

function restoreDeletedTodo(id) {
    todos = todos.map(function (todo) {
        
        if(todo.id === id) {
            return {
                ...todo, deleted: false
            }
        }

        return todo;
    });

    saveTodos();
    renderDeletedTodos();
}

function permanentDeletedTodo(id) {
    const confirmDelete = confirm("Are you sure you want to permanently delete this task?")

    if(!confirmDelete) {
        return
    }
    todos = todos.filter(function (todo) {
        return todo.id !== id
    })

    saveTodos();
    renderDeletedTodos();
}
renderTodos();