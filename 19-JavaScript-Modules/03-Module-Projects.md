# JavaScript Module Projects

## 1. Introduction

Is section mein hum ES Modules ka practical use projects ke through samjhenge.

Ab tak humne seekha:

```text
✓ import
✓ export
✓ named export
✓ default export
✓ namespace import
✓ module scope
✓ ES Modules
✓ dynamic import
✓ module structure
```

Ab in concepts ko real projects mein use karenge.

---

# 2. Project 1 — Calculator Using Modules

## Folder Structure

```text
01-Calculator
│
├── index.html
├── app.js
├── math.js
└── style.css
```

---

# 3. `math.js`

```javascript
export function add(a, b) {

    return a + b;

}

export function subtract(a, b) {

    return a - b;

}

export function multiply(a, b) {

    return a * b;

}

export function divide(a, b) {

    if (b === 0) {

        return "Cannot divide by zero";

    }

    return a / b;

}
```

---

# 4. `app.js`

```javascript
import {
    add,
    subtract,
    multiply,
    divide
} from "./math.js";

console.log("Addition:", add(20, 10));

console.log("Subtraction:", subtract(20, 10));

console.log("Multiplication:", multiply(20, 10));

console.log("Division:", divide(20, 10));
```

Output:

```text
Addition: 30
Subtraction: 10
Multiplication: 200
Division: 2
```

---

# 5. `index.html`

```html
<!DOCTYPE html>
<html>

<head>

    <title>Module Calculator</title>

</head>

<body>

    <h1>JavaScript Module Calculator</h1>

    <script type="module" src="./app.js"></script>

</body>

</html>
```

---

# 6. Project 1 Concept

```text
app.js
  │
  │ import
  ↓
math.js
  │
  ├── add()
  ├── subtract()
  ├── multiply()
  └── divide()
```

Is project mein calculation logic separate module mein hai.

---

# 7. Project 2 — User Module

Ab ek user management mini project banate hain.

## Folder Structure

```text
02-User-Module
│
├── index.html
├── app.js
├── user.js
└── data.js
```

---

# 8. `data.js`

```javascript
export const users = [

    {
        id: 1,
        name: "Rohit",
        age: 25
    },

    {
        id: 2,
        name: "Rahul",
        age: 24
    },

    {
        id: 3,
        name: "Aman",
        age: 26
    }

];
```

---

# 9. `user.js`

```javascript
export function showUsers(users) {

    users.forEach(user => {

        console.log(
            `${user.id}. ${user.name} - ${user.age}`
        );

    });

}

export function findUser(users, id) {

    return users.find(user => user.id === id);

}
```

---

# 10. `app.js`

```javascript
import { users } from "./data.js";

import {
    showUsers,
    findUser
} from "./user.js";

showUsers(users);

const user = findUser(users, 2);

console.log("Selected User:", user);
```

Output:

```text
1. Rohit - 25
2. Rahul - 24
3. Aman - 26

Selected User:
{
    id: 2,
    name: "Rahul",
    age: 24
}
```

---

# 11. Project 3 — Counter Using Modules

## Folder Structure

```text
03-Counter
│
├── index.html
├── app.js
└── counter.js
```

---

# 12. `counter.js`

```javascript
let count = 0;

export function increment() {

    count++;

    return count;

}

export function decrement() {

    count--;

    return count;

}

export function reset() {

    count = 0;

    return count;

}

export function getCount() {

    return count;

}
```

---

# 13. `app.js`

```javascript
import {
    increment,
    decrement,
    reset,
    getCount
} from "./counter.js";

console.log(getCount());

console.log(increment());

console.log(increment());

console.log(decrement());

console.log(reset());
```

Output:

```text
0
1
2
1
0
```

---

# 14. Why Counter Module Is Useful

Notice:

```javascript
let count = 0;
```

export nahi kiya gaya.

Only functions export ki gayi hain:

```javascript
export function increment() {}
export function decrement() {}
export function reset() {}
```

Isliye outside code directly `count` ko modify nahi kar sakta.

Ye **encapsulation** ka practical example hai.

---

# 15. Project 4 — Counter UI

Ab browser UI ke saath counter banate hain.

## Folder Structure

```text
04-Counter-UI
│
├── index.html
├── app.js
├── counter.js
└── style.css
```

---

# 16. `counter.js`

```javascript
let count = 0;

export function increment() {

    count++;

    return count;

}

export function decrement() {

    count--;

    return count;

}

export function reset() {

    count = 0;

    return count;

}
```

---

# 17. `index.html`

```html
<!DOCTYPE html>
<html>

<head>

    <title>Counter</title>

</head>

<body>

    <h1 id="count">0</h1>

    <button id="increase">+</button>

    <button id="decrease">-</button>

    <button id="reset">Reset</button>

    <script type="module" src="./app.js"></script>

</body>

</html>
```

---

# 18. `app.js`

```javascript
import {
    increment,
    decrement,
    reset
} from "./counter.js";

const countElement =
    document.getElementById("count");

const increaseButton =
    document.getElementById("increase");

const decreaseButton =
    document.getElementById("decrease");

const resetButton =
    document.getElementById("reset");


increaseButton.addEventListener("click", () => {

    countElement.textContent = increment();

});


decreaseButton.addEventListener("click", () => {

    countElement.textContent = decrement();

});


resetButton.addEventListener("click", () => {

    countElement.textContent = reset();

});
```

---

# 19. Project Architecture

```text
index.html
     │
     ↓
   app.js
     │
     ↓
counter.js
     │
     ↓
Counter Logic
```

UI logic:

```text
app.js
```

Counter logic:

```text
counter.js
```

---

# 20. Project 5 — To-Do App Using Modules

Ab ek useful project banate hain.

## Folder Structure

```text
05-Todo-App
│
├── index.html
├── app.js
│
├── modules
│   ├── todo.js
│   └── storage.js
│
└── style.css
```

---

# 21. `todo.js`

```javascript
let todos = [];

export function addTodo(title) {

    const todo = {

        id: Date.now(),
        title: title,
        completed: false

    };

    todos.push(todo);

    return todo;

}

export function deleteTodo(id) {

    todos = todos.filter(
        todo => todo.id !== id
    );

}

export function toggleTodo(id) {

    todos = todos.map(todo => {

        if (todo.id === id) {

            return {
                ...todo,
                completed: !todo.completed
            };

        }

        return todo;

    });

}

export function getTodos() {

    return todos;

}
```

---

# 22. `storage.js`

```javascript
export function saveTodos(todos) {

    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );

}

export function loadTodos() {

    const data =
        localStorage.getItem("todos");

    return data
        ? JSON.parse(data)
        : [];

}
```

---

# 23. `app.js`

```javascript
import {
    addTodo,
    deleteTodo,
    toggleTodo,
    getTodos
} from "./modules/todo.js";

import {
    saveTodos,
    loadTodos
} from "./modules/storage.js";

console.log("Todo App Loaded");
```

Yahan application logic separate modules se aa raha hai.

---

# 24. Project 6 — API Module

Ab API calls ko separate module mein rakhte hain.

## Folder Structure

```text
06-API-Project
│
├── index.html
├── app.js
│
└── modules
    └── api.js
```

---

# 25. `api.js`

```javascript
export async function getUsers() {

    const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

    if (!response.ok) {

        throw new Error(
            "Failed to fetch users"
        );

    }

    return await response.json();

}
```

---

# 26. `app.js`

```javascript
import { getUsers } from "./modules/api.js";

async function showUsers() {

    try {

        const users = await getUsers();

        console.log(users);

    } catch (error) {

        console.error(error);

    }

}

showUsers();
```

---

# 27. Why Separate API Module?

Instead of:

```javascript
app.js
```

mein saare API calls likhne ke:

```text
app.js
    ↓
api.js
    ↓
API
```

Isse code cleaner aur reusable hota hai.

---

# 28. Project 7 — Calculator UI

Ab proper calculator structure:

```text
07-Calculator-UI
│
├── index.html
├── app.js
│
├── modules
│   ├── calculator.js
│   └── display.js
│
└── style.css
```

---

# 29. `calculator.js`

```javascript
export function calculate(
    first,
    second,
    operator
) {

    switch (operator) {

        case "+":
            return first + second;

        case "-":
            return first - second;

        case "*":
            return first * second;

        case "/":

            if (second === 0) {

                throw new Error(
                    "Cannot divide by zero"
                );

            }

            return first / second;

        default:

            throw new Error(
                "Invalid operator"
            );

    }

}
```

---

# 30. `display.js`

```javascript
export function showResult(element, result) {

    element.textContent = result;

}

export function showError(element, message) {

    element.textContent = message;

}
```

---

# 31. `app.js`

```javascript
import {
    calculate
} from "./modules/calculator.js";

import {
    showResult,
    showError
} from "./modules/display.js";

const result =
    document.getElementById("result");

try {

    const answer =
        calculate(20, 10, "+");

    showResult(result, answer);

} catch (error) {

    showError(
        result,
        error.message
    );

}
```

---

# 32. Project 8 — Authentication Module

Real applications mein authentication logic separate module mein ho sakta hai.

```text
08-Auth-Module
│
├── index.html
├── app.js
│
└── modules
    └── auth.js
```

---

# 33. `auth.js`

```javascript
let loggedIn = false;

export function login(username, password) {

    if (
        username === "rohit" &&
        password === "1234"
    ) {

        loggedIn = true;

        return true;

    }

    return false;

}

export function logout() {

    loggedIn = false;

}

export function isLoggedIn() {

    return loggedIn;

}
```

---

# 34. `app.js`

```javascript
import {
    login,
    logout,
    isLoggedIn
} from "./modules/auth.js";

console.log(
    login("rohit", "1234")
);

console.log(
    isLoggedIn()
);

logout();

console.log(
    isLoggedIn()
);
```

Output:

```text
true
true
false
```

---

# 35. Project 9 — Theme Module

Dark/light theme functionality ko separate module mein rakh sakte hain.

```text
09-Theme
│
├── index.html
├── app.js
└── theme.js
```

`theme.js`:

```javascript
export function setDarkTheme() {

    document.body.classList.add("dark");

}

export function setLightTheme() {

    document.body.classList.remove("dark");

}

export function toggleTheme() {

    document.body.classList.toggle("dark");

}
```

---

# 36. `app.js`

```javascript
import {
    setDarkTheme,
    setLightTheme,
    toggleTheme
} from "./theme.js";

document
    .getElementById("dark")
    .addEventListener(
        "click",
        setDarkTheme
    );

document
    .getElementById("light")
    .addEventListener(
        "click",
        setLightTheme
    );

document
    .getElementById("toggle")
    .addEventListener(
        "click",
        toggleTheme
    );
```

---

# 37. Project 10 — Utility Module

Common helper functions ko `utils.js` mein rakh sakte hain.

```javascript
export function capitalize(text) {

    return text
        .charAt(0)
        .toUpperCase()
        + text.slice(1);

}

export function reverse(text) {

    return text
        .split("")
        .reverse()
        .join("");

}

export function isEmpty(value) {

    return value.trim() === "";

}
```

Use:

```javascript
import {
    capitalize,
    reverse,
    isEmpty
} from "./utils.js";

console.log(
    capitalize("rohit")
);

console.log(
    reverse("JavaScript")
);

console.log(
    isEmpty("")
);
```

---

# 38. Project 11 — Notes App Structure

```text
11-Notes-App
│
├── index.html
├── app.js
│
├── modules
│   ├── notes.js
│   ├── storage.js
│   └── ui.js
│
└── style.css
```

Responsibilities:

```text
notes.js
→ Note logic

storage.js
→ localStorage

ui.js
→ DOM/UI

app.js
→ Application coordination
```

---

# 39. Project 12 — Shopping Cart

```text
12-Shopping-Cart
│
├── index.html
├── app.js
│
└── modules
    ├── products.js
    ├── cart.js
    └── ui.js
```

Responsibilities:

```text
products.js
→ Product data

cart.js
→ Add/remove/update cart

ui.js
→ Display products/cart

app.js
→ Connect everything
```

---

# 40. `products.js`

```javascript
export const products = [

    {
        id: 1,
        name: "Laptop",
        price: 50000
    },

    {
        id: 2,
        name: "Headphones",
        price: 3000
    },

    {
        id: 3,
        name: "Keyboard",
        price: 1500
    }

];
```

---

# 41. `cart.js`

```javascript
let cart = [];

export function addToCart(product) {

    cart.push(product);

}

export function removeFromCart(id) {

    cart = cart.filter(
        product => product.id !== id
    );

}

export function getCart() {

    return cart;

}

export function getTotal() {

    return cart.reduce(
        (total, product) =>
            total + product.price,
        0
    );

}
```

---

# 42. `app.js`

```javascript
import {
    products
} from "./modules/products.js";

import {
    addToCart,
    getCart,
    getTotal
} from "./modules/cart.js";

addToCart(products[0]);

addToCart(products[1]);

console.log(getCart());

console.log(
    "Total:",
    getTotal()
);
```

Output:

```text
Total: 53000
```

---

# 43. Project 13 — Weather App Structure

```text
13-Weather-App
│
├── index.html
├── app.js
│
├── modules
│   ├── weather.js
│   ├── ui.js
│   └── storage.js
│
└── style.css
```

Responsibilities:

```text
weather.js
→ API request

ui.js
→ Weather display

storage.js
→ Save recent city

app.js
→ Main application
```

---

# 44. Project 14 — GitHub Profile App

Ye project modules ke saath API practice ke liye useful hai.

```text
14-GitHub-Profile
│
├── index.html
├── app.js
│
└── modules
    ├── github.js
    ├── ui.js
    └── validation.js
```

---

# 45. `github.js`

```javascript
export async function getProfile(username) {

    const response = await fetch(
        `https://api.github.com/users/${username}`
    );

    if (!response.ok) {

        throw new Error(
            "GitHub user not found"
        );

    }

    return await response.json();

}
```

---

# 46. `validation.js`

```javascript
export function validateUsername(username) {

    return username.trim().length > 0;

}
```

---

# 47. `ui.js`

```javascript
export function showProfile(user) {

    console.log("Name:", user.name);

    console.log(
        "Username:",
        user.login
    );

    console.log(
        "Repositories:",
        user.public_repos
    );

}
```

---

# 48. `app.js`

```javascript
import {
    getProfile
} from "./modules/github.js";

import {
    validateUsername
} from "./modules/validation.js";

import {
    showProfile
} from "./modules/ui.js";

async function loadProfile(username) {

    if (!validateUsername(username)) {

        console.log(
            "Enter a username"
        );

        return;

    }

    try {

        const user =
            await getProfile(username);

        showProfile(user);

    } catch (error) {

        console.error(error.message);

    }

}

loadProfile("Rohit-Kumar000");
```

---

# 49. Project 15 — Quiz App

```text
15-Quiz-App
│
├── index.html
├── app.js
│
├── modules
│   ├── questions.js
│   ├── quiz.js
│   └── ui.js
│
└── style.css
```

---

# 50. `questions.js`

```javascript
export const questions = [

    {
        question: "What is JavaScript?",
        options: [
            "Programming Language",
            "Database",
            "Operating System",
            "Browser"
        ],
        answer: "Programming Language"
    },

    {
        question: "Which keyword exports data?",
        options: [
            "send",
            "export",
            "share",
            "include"
        ],
        answer: "export"
    }

];
```

---

# 51. `quiz.js`

```javascript
let score = 0;

export function checkAnswer(
    selected,
    correct
) {

    if (selected === correct) {

        score++;

        return true;

    }

    return false;

}

export function getScore() {

    return score;

}

export function resetScore() {

    score = 0;

}
```

---

# 52. `app.js`

```javascript
import {
    questions
} from "./modules/questions.js";

import {
    checkAnswer,
    getScore
} from "./modules/quiz.js";

console.log(questions);

checkAnswer(
    "Programming Language",
    questions[0].answer
);

console.log(
    "Score:",
    getScore()
);
```

---

# 53. Project 16 — Expense Tracker

```text
16-Expense-Tracker
│
├── index.html
├── app.js
│
├── modules
│   ├── expenses.js
│   ├── storage.js
│   └── ui.js
│
└── style.css
```

Responsibilities:

```text
expenses.js
→ Add/delete expenses

storage.js
→ localStorage

ui.js
→ Display expenses

app.js
→ Main logic
```

---

# 54. Project 17 — E-Commerce Structure

Larger project:

```text
17-Ecommerce
│
├── index.html
├── app.js
│
├── modules
│   ├── products.js
│   ├── cart.js
│   ├── wishlist.js
│   ├── auth.js
│   ├── storage.js
│   ├── api.js
│   └── ui.js
│
└── style.css
```

Module architecture:

```text
                    app.js
                      │
        ┌─────────────┼─────────────┐
        ↓             ↓             ↓
     products        cart          auth
        │             │             │
        └───────┬─────┴─────────────┘
                ↓
              ui.js
                ↓
             Browser
```

---

# 55. Module Project Rules

Projects banate waqt:

```text
✓ One module → one responsibility
✓ Reusable logic → export
✓ Required logic → import
✓ UI logic separate rakho
✓ API logic separate rakho
✓ Storage logic separate rakho
✓ Sensitive internal state unnecessarily export mat karo
```

---

# 56. Bad Structure

```text
app.js
│
├── API
├── DOM
├── Storage
├── Authentication
├── Products
├── Cart
├── Validation
└── 3000+ lines
```

Large project mein ye difficult ho sakta hai.

---

# 57. Better Structure

```text
app.js
│
├── modules
│   ├── api.js
│   ├── auth.js
│   ├── products.js
│   ├── cart.js
│   ├── storage.js
│   └── ui.js
```

---

# 58. Project Architecture

A common simple architecture:

```text
             app.js
               │
       ┌───────┼───────┐
       ↓       ↓       ↓
      API     Logic    UI
       │       │       │
       ↓       ↓       ↓
    Server   State    DOM
```

---

# 59. Module Communication

Modules directly ya indirectly ek doosre se communicate kar sakte hain.

Example:

```text
api.js
  ↓
products.js
  ↓
cart.js
  ↓
ui.js
```

Each module exposes only what other modules need.

---

# 60. Encapsulation in Projects

Example:

```javascript
let cart = [];

export function addToCart(product) {

    cart.push(product);

}
```

`cart` private hai.

Public interface:

```text
addToCart()
removeFromCart()
getCart()
getTotal()
```

Ye module design ko controlled banata hai.

---

# 61. Project Naming

Good:

```text
api.js
storage.js
auth.js
cart.js
products.js
ui.js
```

Avoid unnecessarily vague names:

```text
stuff.js
random.js
everything.js
test2.js
```

---

# 62. Mini Project Challenge

### Challenge: Student Management App

Create:

```text
student-app
│
├── index.html
├── app.js
│
└── modules
    ├── students.js
    ├── validation.js
    └── ui.js
```

Requirements:

```text
✓ Add student
✓ Delete student
✓ Find student
✓ Display students
✓ Validate student name
```

---

# 63. Mini Project Challenge — Notes App

Create:

```text
notes-app
│
├── index.html
├── app.js
│
└── modules
    ├── notes.js
    ├── storage.js
    └── ui.js
```

Requirements:

```text
✓ Add note
✓ Delete note
✓ Edit note
✓ Save notes
✓ Load notes
```

---

# 64. Mini Project Challenge — Weather App

Create:

```text
weather-app
│
├── index.html
├── app.js
│
└── modules
    ├── weather.js
    ├── ui.js
    └── storage.js
```

Requirements:

```text
✓ Search city
✓ Fetch weather
✓ Display temperature
✓ Display weather condition
✓ Save last searched city
```

---

# 65. Mini Project Challenge — GitHub Profile

Create:

```text
github-profile
│
├── index.html
├── app.js
│
└── modules
    ├── github.js
    ├── ui.js
    └── validation.js
```

Requirements:

```text
✓ Search username
✓ Fetch GitHub profile
✓ Show avatar
✓ Show username
✓ Show repositories
✓ Handle invalid username
```

---

# 66. Final Project Idea

### JavaScript Dashboard

Use everything you've learned:

```text
dashboard
│
├── index.html
├── app.js
│
├── modules
│   ├── auth.js
│   ├── api.js
│   ├── storage.js
│   ├── theme.js
│   ├── dashboard.js
│   ├── users.js
│   └── ui.js
│
└── style.css
```

Features:

```text
✓ Login
✓ Dark/Light mode
✓ API data
✓ User information
✓ Local storage
✓ Dashboard cards
✓ Logout
```

---

# 67. Module Project Checklist

Before considering a project complete:

```text
[ ] index.html
[ ] app.js
[ ] Separate modules
[ ] import/export
[ ] Module scope
[ ] UI separated
[ ] Logic separated
[ ] API separated
[ ] Storage separated
[ ] Error handling
[ ] Clean folder structure
```

---

# 68. Final Revision

```text
ES Modules
    │
    ├── export
    │
    ├── import
    │
    ├── named exports
    │
    ├── default exports
    │
    ├── namespace imports
    │
    ├── dynamic imports
    │
    ├── module scope
    │
    └── module projects
             │
             ├── Calculator
             ├── Counter
             ├── Todo App
             ├── API App
             ├── Weather App
             ├── GitHub App
             ├── Quiz App
             └── E-Commerce
```

## One-Line Definition

> **Module-based projects divide an application into small, reusable files where each module has a clear responsibility and communicates with other modules through `import` and `export`.**