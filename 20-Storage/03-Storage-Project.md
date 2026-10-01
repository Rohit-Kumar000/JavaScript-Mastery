# Storage Project — Todo App

## 1. Project Overview

Is project mein hum ek simple **Todo App** banayenge jisme:

- Todo add kar sakte hain
- Todo delete kar sakte hain
- Todo complete kar sakte hain
- Todos `localStorage` mein save honge
- Page refresh ke baad todos available rahenge
- Browser reopen karne ke baad bhi saved todos normally available rahenge

---

# 2. Project Structure

```text
Storage-Project
│
├── index.html
├── style.css
└── script.js
```

---

# 3. HTML Structure

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Todo App</title>

    <link
        rel="stylesheet"
        href="style.css"
    >
</head>

<body>

    <div class="container">

        <h1>Todo App</h1>

        <div class="input-box">

            <input
                type="text"
                id="todoInput"
                placeholder="Enter a todo..."
            >

            <button id="addBtn">
                Add
            </button>

        </div>

        <ul id="todoList"></ul>

    </div>

    <script src="script.js"></script>

</body>

</html>
```

---

# 4. CSS

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f4f4f4;
}

.container {
    width: 400px;
    margin: 80px auto;
    background: white;
    padding: 25px;
    border-radius: 10px;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

.input-box {
    display: flex;
    gap: 10px;
}

input {
    flex: 1;
    padding: 10px;
}

button {
    padding: 10px 15px;
    cursor: pointer;
}

li {
    list-style: none;
    margin-top: 10px;
    padding: 10px;
    background: #eee;
    display: flex;
    justify-content: space-between;
}

.completed {
    text-decoration: line-through;
}
```

---

# 5. JavaScript Variables

```javascript
const todoInput =
    document.getElementById("todoInput");

const addBtn =
    document.getElementById("addBtn");

const todoList =
    document.getElementById("todoList");
```

---

# 6. Todo Array

Todos ko array mein store karenge.

```javascript
let todos = [];
```

Example:

```javascript
let todos = [
    {
        id: 1,
        text: "Learn JavaScript",
        completed: false
    }
];
```

---

# 7. Save Todos

Ek function banayenge:

```javascript
function saveTodos() {

    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );

}
```

Yahan:

```text
todos
  ↓
JSON.stringify()
  ↓
String
  ↓
localStorage
```

---

# 8. Load Todos

Page load hone par saved todos retrieve karenge.

```javascript
function loadTodos() {

    const savedTodos =
        localStorage.getItem("todos");

    if (savedTodos) {

        todos =
            JSON.parse(savedTodos);

    }

}
```

---

# 9. Render Todos

Array ke todos ko HTML mein display karne ke liye:

```javascript
function renderTodos() {

    todoList.innerHTML = "";

    todos.forEach(todo => {

        const li =
            document.createElement("li");

        li.textContent =
            todo.text;

        todoList.appendChild(li);

    });

}
```

---

# 10. Add Todo

Input se todo lena:

```javascript
function addTodo() {

    const text =
        todoInput.value.trim();

    if (!text) {

        return;

    }

    const todo = {

        id: Date.now(),

        text: text,

        completed: false

    };

    todos.push(todo);

    saveTodos();

    renderTodos();

    todoInput.value = "";

}
```

---

# 11. Add Button Event

```javascript
addBtn.addEventListener(
    "click",
    addTodo
);
```

Ab Add button click karne par todo add hoga.

---

# 12. Complete Basic JavaScript

```javascript
const todoInput =
    document.getElementById("todoInput");

const addBtn =
    document.getElementById("addBtn");

const todoList =
    document.getElementById("todoList");

let todos = [];

function saveTodos() {

    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );

}

function loadTodos() {

    const savedTodos =
        localStorage.getItem("todos");

    if (savedTodos) {

        todos =
            JSON.parse(savedTodos);

    }

}

function renderTodos() {

    todoList.innerHTML = "";

    todos.forEach(todo => {

        const li =
            document.createElement("li");

        li.textContent =
            todo.text;

        todoList.appendChild(li);

    });

}

function addTodo() {

    const text =
        todoInput.value.trim();

    if (!text) {

        return;

    }

    const todo = {

        id: Date.now(),

        text: text,

        completed: false

    };

    todos.push(todo);

    saveTodos();

    renderTodos();

    todoInput.value = "";

}

addBtn.addEventListener(
    "click",
    addTodo
);

loadTodos();

renderTodos();
```

---

# 13. Delete Button

Ab har todo ke saath Delete button add karenge.

```javascript
function renderTodos() {

    todoList.innerHTML = "";

    todos.forEach(todo => {

        const li =
            document.createElement("li");

        const span =
            document.createElement("span");

        span.textContent =
            todo.text;

        const deleteBtn =
            document.createElement("button");

        deleteBtn.textContent =
            "Delete";

        deleteBtn.addEventListener(
            "click",
            () => {

                deleteTodo(todo.id);

            }
        );

        li.appendChild(span);

        li.appendChild(deleteBtn);

        todoList.appendChild(li);

    });

}
```

---

# 14. Delete Todo Function

```javascript
function deleteTodo(id) {

    todos =
        todos.filter(
            todo => todo.id !== id
        );

    saveTodos();

    renderTodos();

}
```

---

# 15. Complete Todo

Ab todo ko complete/uncomplete karenge.

```javascript
function toggleTodo(id) {

    todos =
        todos.map(todo => {

            if (todo.id === id) {

                return {
                    ...todo,
                    completed:
                        !todo.completed
                };

            }

            return todo;

        });

    saveTodos();

    renderTodos();

}
```

---

# 16. Add Complete Event

```javascript
span.addEventListener(
    "click",
    () => {

        toggleTodo(todo.id);

    }
);
```

---

# 17. Completed Class

Render function mein:

```javascript
if (todo.completed) {

    span.classList.add(
        "completed"
    );

}
```

---

# 18. Final Render Function

```javascript
function renderTodos() {

    todoList.innerHTML = "";

    todos.forEach(todo => {

        const li =
            document.createElement("li");

        const span =
            document.createElement("span");

        span.textContent =
            todo.text;

        if (todo.completed) {

            span.classList.add(
                "completed"
            );

        }

        span.addEventListener(
            "click",
            () => {

                toggleTodo(todo.id);

            }
        );

        const deleteBtn =
            document.createElement("button");

        deleteBtn.textContent =
            "Delete";

        deleteBtn.addEventListener(
            "click",
            () => {

                deleteTodo(todo.id);

            }
        );

        li.appendChild(span);

        li.appendChild(deleteBtn);

        todoList.appendChild(li);

    });

}
```

---

# 19. Final JavaScript

```javascript
const todoInput =
    document.getElementById("todoInput");

const addBtn =
    document.getElementById("addBtn");

const todoList =
    document.getElementById("todoList");

let todos = [];

function saveTodos() {

    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );

}

function loadTodos() {

    const savedTodos =
        localStorage.getItem("todos");

    if (savedTodos) {

        todos =
            JSON.parse(savedTodos);

    }

}

function renderTodos() {

    todoList.innerHTML = "";

    todos.forEach(todo => {

        const li =
            document.createElement("li");

        const span =
            document.createElement("span");

        span.textContent =
            todo.text;

        if (todo.completed) {

            span.classList.add(
                "completed"
            );

        }

        span.addEventListener(
            "click",
            () => {

                toggleTodo(todo.id);

            }
        );

        const deleteBtn =
            document.createElement("button");

        deleteBtn.textContent =
            "Delete";

        deleteBtn.addEventListener(
            "click",
            () => {

                deleteTodo(todo.id);

            }
        );

        li.appendChild(span);

        li.appendChild(deleteBtn);

        todoList.appendChild(li);

    });

}

function addTodo() {

    const text =
        todoInput.value.trim();

    if (!text) {

        return;

    }

    const todo = {

        id: Date.now(),

        text: text,

        completed: false

    };

    todos.push(todo);

    saveTodos();

    renderTodos();

    todoInput.value = "";

}

function deleteTodo(id) {

    todos =
        todos.filter(
            todo => todo.id !== id
        );

    saveTodos();

    renderTodos();

}

function toggleTodo(id) {

    todos =
        todos.map(todo => {

            if (todo.id === id) {

                return {
                    ...todo,
                    completed:
                        !todo.completed
                };

            }

            return todo;

        });

    saveTodos();

    renderTodos();

}

addBtn.addEventListener(
    "click",
    addTodo
);

loadTodos();

renderTodos();
```

---

# 20. How Data is Stored

Agar user ye todos add kare:

```text
Learn JavaScript
Practice DOM
Learn Git
```

localStorage mein approximately JSON form mein data hoga:

```json
[
    {
        "id": 123456,
        "text": "Learn JavaScript",
        "completed": false
    },
    {
        "id": 123457,
        "text": "Practice DOM",
        "completed": false
    },
    {
        "id": 123458,
        "text": "Learn Git",
        "completed": false
    }
]
```

---

# 21. Project Data Flow

```text
User
 ↓
Input
 ↓
Add Todo
 ↓
Array
 ↓
JSON.stringify()
 ↓
localStorage
```

Page refresh:

```text
localStorage
 ↓
getItem()
 ↓
JSON.parse()
 ↓
Array
 ↓
renderTodos()
 ↓
HTML
```

---

# 22. Delete Flow

```text
Delete Button
      ↓
deleteTodo(id)
      ↓
filter()
      ↓
Updated Array
      ↓
saveTodos()
      ↓
localStorage
      ↓
renderTodos()
```

---

# 23. Complete Flow

```text
                  Todo App
                     │
          ┌──────────┼──────────┐
          ↓          ↓          ↓
        Add       Complete    Delete
          │          │          │
          └──────────┼──────────┘
                     ↓
                  todos[]
                     ↓
                saveTodos()
                     ↓
               localStorage
```

---

# 24. Important Concepts Used

Is project mein tumne multiple JavaScript concepts use kiye:

```text
✓ Variables
✓ Arrays
✓ Objects
✓ Functions
✓ Arrow Functions
✓ DOM Manipulation
✓ Event Listeners
✓ forEach()
✓ map()
✓ filter()
✓ Template/Data rendering
✓ JSON.stringify()
✓ JSON.parse()
✓ localStorage
✓ addEventListener()
✓ createElement()
✓ appendChild()
✓ classList
```

---

# 25. Improvements You Can Add

Project ko aur better banane ke liye:

```text
1. Edit Todo
2. Clear All button
3. Completed Todo count
4. Active Todo count
5. Search Todo
6. Filter All/Active/Completed
7. Enter key se Todo add
8. Confirmation before delete
9. Dark mode
10. Date and time
11. Due date
12. Priority
13. Drag and drop
```

---

# 26. Clear All Button

HTML:

```html
<button id="clearBtn">
    Clear All
</button>
```

JavaScript:

```javascript
const clearBtn =
    document.getElementById(
        "clearBtn"
    );

clearBtn.addEventListener(
    "click",
    () => {

        todos = [];

        saveTodos();

        renderTodos();

    }
);
```

---

# 27. Enter Key Support

```javascript
todoInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            addTodo();

        }

    }
);
```

---

# 28. Todo Count

HTML:

```html
<p id="count"></p>
```

JavaScript:

```javascript
const count =
    document.getElementById("count");
```

Update:

```javascript
count.textContent =
    `Total Todos: ${todos.length}`;
```

---

# 29. Completed Count

```javascript
const completed =
    todos.filter(
        todo => todo.completed
    ).length;

console.log(
    `Completed: ${completed}`
);
```

---

# 30. Active Count

```javascript
const active =
    todos.filter(
        todo => !todo.completed
    ).length;

console.log(
    `Active: ${active}`
);
```

---

# 31. Search Todo

Suppose:

```javascript
const search =
    "JavaScript";
```

Filter:

```javascript
const result =
    todos.filter(todo =>
        todo.text
            .toLowerCase()
            .includes(
                search.toLowerCase()
            )
    );
```

---

# 32. Filter Completed Todos

```javascript
const completedTodos =
    todos.filter(
        todo => todo.completed
    );
```

---

# 33. Filter Active Todos

```javascript
const activeTodos =
    todos.filter(
        todo => !todo.completed
    );
```

---

# 34. Edit Todo

Basic idea:

```javascript
function editTodo(id) {

    const todo =
        todos.find(
            todo => todo.id === id
        );

    if (!todo) {

        return;

    }

    const newText =
        prompt(
            "Edit Todo",
            todo.text
        );

    if (!newText) {

        return;

    }

    todo.text =
        newText.trim();

    saveTodos();

    renderTodos();

}
```

---

# 35. Project Architecture

```text
Todo App
│
├── Input
│
├── Add Todo
│
├── Todo Array
│
├── Render Todos
│
├── Complete Todo
│
├── Delete Todo
│
└── localStorage
       │
       ├── Save
       └── Load
```

---

# 36. Why JSON.stringify()?

localStorage strings store karta hai.

Array:

```javascript
[
    "HTML",
    "CSS",
    "JavaScript"
]
```

ko directly useful structured storage format mein rakhne ke liye:

```javascript
JSON.stringify(array)
```

use karte hain.

---

# 37. Why JSON.parse()?

localStorage se value string ke form mein milti hai.

Isliye:

```javascript
JSON.parse(
    localStorage.getItem("todos")
);
```

string ko JavaScript array/object mein convert karta hai.

---

# 38. Important Pattern

Ye pattern yaad rakho:

```javascript
const data = [
    ...
];

localStorage.setItem(
    "data",
    JSON.stringify(data)
);
```

Retrieve:

```javascript
const data =
    JSON.parse(
        localStorage.getItem("data")
    ) || [];
```

Ye JavaScript projects mein bahut commonly useful pattern hai.

---

# 39. Practice Tasks

Project complete karne ke baad khud ye features add karo:

### Task 1

Todo edit functionality add karo.

### Task 2

Clear All button add karo.

### Task 3

Search functionality add karo.

### Task 4

Active/Completed filters add karo.

### Task 5

Total, Active aur Completed count show karo.

### Task 6

Dark mode add karo aur theme ko `localStorage` mein save karo.

### Task 7

Todo ke saath creation date save karo.

### Task 8

Page refresh ke baad saara data correctly restore karo.

---

# 40. Final Revision

### Save

```javascript
localStorage.setItem(
    "todos",
    JSON.stringify(todos)
);
```

### Load

```javascript
todos =
    JSON.parse(
        localStorage.getItem("todos")
    ) || [];
```

### Add

```javascript
todos.push(todo);
```

### Delete

```javascript
todos =
    todos.filter(
        todo => todo.id !== id
    );
```

### Update

```javascript
todos =
    todos.map(todo => {

        if (todo.id === id) {

            return {
                ...todo,
                completed:
                    !todo.completed
            };

        }

        return todo;

    });
```

### Render

```javascript
renderTodos();
```

---

# 41. Final Project Flow

```text
                USER
                  │
                  ↓
             Enter Todo
                  │
                  ↓
              addTodo()
                  │
                  ↓
               todos[]
                  │
                  ↓
             saveTodos()
                  │
                  ↓
            localStorage
                  │
                  ↓
            renderTodos()
                  │
                  ↓
              TODO LIST
                  │
          ┌───────┴───────┐
          ↓               ↓
       Complete         Delete
          │               │
          └───────┬───────┘
                  ↓
              todos[]
                  ↓
             localStorage
```

## Final Goal

Is project ke baad tumhe clearly samajh aana chahiye:

```text
localStorage
     +
JSON
     +
Arrays
     +
Objects
     +
DOM
     +
Events
     =
Persistent Todo App
```