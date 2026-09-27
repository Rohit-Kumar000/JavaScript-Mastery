# JavaScript DOM - Projects

This file contains small projects to practice the DOM concepts learned so far.

We will use:

```text
Selecting Elements
Changing Text
Changing CSS
classList
Creating Elements
Adding Elements
Removing Elements
```

---

# Project 1 - Change Text

## HTML

```html
<h1 id="title">Hello World</h1>

<button id="btn">Change Text</button>
```

## JavaScript

```javascript
let title = document.querySelector("#title");
let button = document.querySelector("#btn");

button.addEventListener("click", function() {
    title.textContent = "Hello JavaScript";
});
```

### What happens?

Initially:

```text
Hello World
```

After clicking:

```text
Hello JavaScript
```

### Concepts Used

```text
querySelector()
textContent
addEventListener()
```

---

# Project 2 - Change Color

## HTML

```html
<h1 id="title">JavaScript</h1>

<button id="btn">Change Color</button>
```

## JavaScript

```javascript
let title = document.querySelector("#title");
let button = document.querySelector("#btn");

button.addEventListener("click", function() {
    title.style.color = "red";
});
```

Clicking the button changes the heading color.

### Concepts Used

```text
querySelector()
style.color
addEventListener()
```

---

# Project 3 - Show / Hide Element

## HTML

```html
<p id="message">Hello JavaScript</p>

<button id="btn">Show / Hide</button>
```

## CSS

```css
.hidden {
    display: none;
}
```

## JavaScript

```javascript
let message = document.querySelector("#message");
let button = document.querySelector("#btn");

button.addEventListener("click", function() {
    message.classList.toggle("hidden");
});
```

### How it works?

If:

```text
hidden class doesn't exist
```

JavaScript adds it.

If:

```text
hidden class already exists
```

JavaScript removes it.

### Main Concept

```javascript
classList.toggle()
```

---

# Project 4 - Simple Counter

This is one of the most useful beginner DOM projects.

## HTML

```html
<h1 id="count">0</h1>

<button id="increase">+</button>
<button id="decrease">-</button>
```

## JavaScript

```javascript
let count = 0;

let display = document.querySelector("#count");

let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");

increase.addEventListener("click", function() {
    count++;
    display.textContent = count;
});

decrease.addEventListener("click", function() {
    count--;
    display.textContent = count;
});
```

### How it works?

Initially:

```text
count = 0
```

When `+` is clicked:

```text
count++
```

When `-` is clicked:

```text
count--
```

Then:

```javascript
display.textContent = count;
```

updates the page.

---

# Project 5 - Add List Items

## HTML

```html
<input id="itemInput" type="text">

<button id="addBtn">Add</button>

<ul id="list"></ul>
```

## JavaScript

```javascript
let input = document.querySelector("#itemInput");
let button = document.querySelector("#addBtn");
let list = document.querySelector("#list");

button.addEventListener("click", function() {

    let li = document.createElement("li");

    li.textContent = input.value;

    list.append(li);

    input.value = "";
});
```

### How it works?

User enters:

```text
JavaScript
```

Then clicks:

```text
Add
```

JavaScript creates:

```html
<li>JavaScript</li>
```

and adds it to the list.

---

# Project 6 - Remove List Item

HTML:

```html
<ul id="list">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

JavaScript:

```javascript
let list = document.querySelector("#list");

let items = list.querySelectorAll("li");

items.forEach(function(item) {

    item.addEventListener("click", function() {
        item.remove();
    });

});
```

Now clicking a list item removes it.

Example:

```text
HTML
CSS
JavaScript
```

Click `CSS`:

```text
HTML
JavaScript
```

---

# Project 7 - Dark Mode

## HTML

```html
<button id="btn">Dark Mode</button>

<div id="box">
    <h2>JavaScript</h2>
    <p>Learning DOM</p>
</div>
```

## CSS

```css
.dark {
    background-color: black;
    color: white;
}
```

## JavaScript

```javascript
let button = document.querySelector("#btn");
let box = document.querySelector("#box");

button.addEventListener("click", function() {
    box.classList.toggle("dark");
});
```

Every click toggles dark mode.

---

# Project 8 - Change Image

## HTML

```html
<img id="photo" src="image1.jpg" width="300">

<button id="btn">Change Image</button>
```

## JavaScript

```javascript
let image = document.querySelector("#photo");
let button = document.querySelector("#btn");

button.addEventListener("click", function() {
    image.setAttribute("src", "image2.jpg");
});
```

The image changes after clicking the button.

### Concepts Used

```text
setAttribute()
src
addEventListener()
```

---

# Project 9 - Input Greeting

## HTML

```html
<input id="nameInput" type="text">

<button id="btn">Greet</button>

<h2 id="result"></h2>
```

## JavaScript

```javascript
let input = document.querySelector("#nameInput");
let button = document.querySelector("#btn");
let result = document.querySelector("#result");

button.addEventListener("click", function() {

    result.textContent = "Hello " + input.value;

});
```

If user enters:

```text
Rohit
```

Output:

```text
Hello Rohit
```

---

# Project 10 - Character Counter

## HTML

```html
<textarea id="text"></textarea>

<p>
    Characters:
    <span id="count">0</span>
</p>
```

## JavaScript

```javascript
let text = document.querySelector("#text");
let count = document.querySelector("#count");

text.addEventListener("input", function() {

    count.textContent = text.value.length;

});
```

If the user types:

```text
Hello
```

Output:

```text
Characters: 5
```

### New Concept

```javascript
input
```

The `input` event runs whenever the value changes while the user types.

---

# Project 11 - Simple Calculator

## HTML

```html
<input id="num1" type="number">

<input id="num2" type="number">

<button id="add">Add</button>

<h2 id="result">0</h2>
```

## JavaScript

```javascript
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");

let button = document.querySelector("#add");

let result = document.querySelector("#result");

button.addEventListener("click", function() {

    let a = Number(num1.value);
    let b = Number(num2.value);

    result.textContent = a + b;

});
```

### Why `Number()`?

Input values are generally received as strings.

For example:

```text
"10"
"20"
```

We convert them:

```javascript
Number(num1.value)
```

into numbers before addition.

---

# Project 12 - Background Color Changer

## HTML

```html
<button id="red">Red</button>
<button id="blue">Blue</button>
<button id="green">Green</button>
```

## JavaScript

```javascript
let red = document.querySelector("#red");
let blue = document.querySelector("#blue");
let green = document.querySelector("#green");

red.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
});

blue.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
});

green.addEventListener("click", function() {
    document.body.style.backgroundColor = "green";
});
```

### New Concept

```javascript
document.body
```

It refers to the `<body>` element of the page.

---

# Project 13 - Random Color

HTML:

```html
<button id="btn">Change Color</button>
```

JavaScript:

```javascript
let button = document.querySelector("#btn");

button.addEventListener("click", function() {

    let color = "#" + Math.floor(Math.random() * 16777215)
        .toString(16);

    document.body.style.backgroundColor = color;

});
```

Every click generates a random color.

---

# Project 14 - Add and Remove Class

## HTML

```html
<div id="box">Hello JavaScript</div>

<button id="add">Add Class</button>

<button id="remove">Remove Class</button>
```

## CSS

```css
.active {
    background-color: black;
    color: white;
    padding: 20px;
}
```

## JavaScript

```javascript
let box = document.querySelector("#box");

let add = document.querySelector("#add");
let remove = document.querySelector("#remove");

add.addEventListener("click", function() {
    box.classList.add("active");
});

remove.addEventListener("click", function() {
    box.classList.remove("active");
});
```

This helps you understand how JavaScript can control CSS classes.

---

# DOM Practice Order

Don't try to build all projects at once.

Follow this order:

```text
1. Change Text
       ↓
2. Change Color
       ↓
3. Show / Hide
       ↓
4. Counter
       ↓
5. Add List Items
       ↓
6. Remove List Items
       ↓
7. Dark Mode
       ↓
8. Change Image
       ↓
9. Input Greeting
       ↓
10. Character Counter
       ↓
11. Calculator
       ↓
12. Background Changer
```

---

# Practice Challenge

After completing the examples, try making these **without looking at the solution**.

## Challenge 1

Create:

```text
Input
Button
Paragraph
```

When the button is clicked, show the input value inside the paragraph.

---

## Challenge 2

Create:

```text
+
-
Reset
```

buttons and make a counter.

Expected:

```text
+
→ Increase

-
→ Decrease

Reset
→ 0
```

---

## Challenge 3

Create a button that changes:

```text
Light Mode
↕
Dark Mode
```

Use:

```javascript
classList.toggle()
```

---

## Challenge 4

Create an input and button.

When the button is clicked:

```text
Input → New <li>
```

Add it to a `<ul>`.

---

## Challenge 5

Create a button that removes the last `<li>` from a list.

Hint:

```javascript
list.lastElementChild
```

---

# DOM Concepts You Should Know Now

After completing this section, you should understand:

```text
document
querySelector()
querySelectorAll()

getElementById()
getElementsByClassName()
getElementsByTagName()

textContent
innerText
innerHTML

style

className
classList

classList.add()
classList.remove()
classList.toggle()
classList.contains()

createElement()

append()
appendChild()
prepend()

remove()
removeChild()

replaceWith()

getAttribute()
setAttribute()
removeAttribute()
hasAttribute()

value
checked
disabled

addEventListener()
```

---

# DOM Mental Model

Remember this simple pattern:

```text
HTML
  ↓
Select Element
  ↓
Store in Variable
  ↓
Listen for Event
  ↓
Change Element
```

Example:

```javascript
let button = document.querySelector("#btn");

button.addEventListener("click", function() {

    let heading = document.querySelector("#title");

    heading.textContent = "Hello JavaScript";

});
```

This basic pattern is used again and again in real JavaScript projects.

---

# Final Revision

```text
DOM
│
├── Select
│   ├── querySelector()
│   └── querySelectorAll()
│
├── Change
│   ├── textContent
│   ├── innerHTML
│   └── style
│
├── Classes
│   ├── add()
│   ├── remove()
│   ├── toggle()
│   └── contains()
│
├── Attributes
│   ├── getAttribute()
│   ├── setAttribute()
│   ├── removeAttribute()
│   └── hasAttribute()
│
├── Create
│   └── createElement()
│
├── Add
│   ├── append()
│   ├── appendChild()
│   └── prepend()
│
└── Remove
    ├── remove()
    └── removeChild()
```

**DOM ka main idea:**

```text
Find → Listen → Change
```

Agar ye flow samajh aa gaya, to DOM ke basic concepts clear hain.