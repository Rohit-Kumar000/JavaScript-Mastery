# JavaScript DOM Basics

## 1. What is DOM?

DOM stands for:

```text
Document Object Model
```

The DOM is a programming representation of an HTML document.

JavaScript uses the DOM to:

- Access HTML elements
- Change HTML content
- Change CSS styles
- Change attributes
- Create new elements
- Remove elements
- Handle user interactions

Simple:

```text
HTML
  ↓
Browser creates DOM
  ↓
JavaScript can access and modify it
```

---

# 2. Example HTML

Suppose we have:

```html
<h1>Hello Rohit</h1>
<p>Welcome to JavaScript</p>
```

The browser converts this HTML into a DOM structure that JavaScript can work with.

Conceptually:

```text
Document
│
├── h1
│   └── "Hello Rohit"
│
└── p
    └── "Welcome to JavaScript"
```

---

# 3. DOM is a Tree Structure

The DOM represents the document like a tree.

Example:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>My Page</title>
    </head>

    <body>
        <h1>Hello</h1>
        <p>Welcome</p>
    </body>
</html>
```

DOM structure:

```text
Document
│
└── html
    │
    ├── head
    │   └── title
    │
    └── body
        ├── h1
        └── p
```

This is called the **DOM Tree**.

---

# 4. What is a Node?

Everything in the DOM is represented as a **node**.

Common node types include:

```text
Document Node
Element Node
Text Node
Comment Node
```

Example:

```html
<h1>Hello</h1>
```

Here:

```text
h1 → Element Node

"Hello" → Text Node
```

---

# 5. Document Object

JavaScript provides a global `document` object.

Example:

```javascript
console.log(document);
```

The `document` object represents the current HTML document.

Through `document`, we can access the page.

---

# 6. Selecting an Element

Suppose HTML is:

```html
<h1 id="title">Hello Rohit</h1>
```

JavaScript:

```javascript
let heading = document.getElementById("title");

console.log(heading);
```

Here:

```text
document
   ↓
getElementById()
   ↓
<h1>
```

---

# 7. Changing HTML Content

HTML:

```html
<h1 id="title">Hello</h1>
```

JavaScript:

```javascript
let heading = document.getElementById("title");

heading.textContent = "Hello Rohit";
```

Now the page displays:

```text
Hello Rohit
```

---

# 8. `textContent`

`textContent` gets or changes the text inside an element.

Example:

```javascript
let heading = document.getElementById("title");

console.log(heading.textContent);
```

To change it:

```javascript
heading.textContent = "JavaScript";
```

---

# 9. `innerHTML`

`innerHTML` gets or changes the HTML inside an element.

Example:

```html
<div id="box"></div>
```

JavaScript:

```javascript
let box = document.getElementById("box");

box.innerHTML = "<h2>Hello</h2>";
```

The browser creates an `h2` element inside the `div`.

---

# 10. `textContent` vs `innerHTML`

### textContent

```javascript
element.textContent = "<h1>Hello</h1>";
```

The browser treats it as text.

Output:

```text
<h1>Hello</h1>
```

### innerHTML

```javascript
element.innerHTML = "<h1>Hello</h1>";
```

The browser interprets it as HTML.

Output:

```text
Hello
```

Important:

```text
textContent → Text
innerHTML   → HTML
```

---

# 11. Changing CSS

HTML:

```html
<h1 id="title">Hello</h1>
```

JavaScript:

```javascript
let heading = document.getElementById("title");

heading.style.color = "red";
heading.style.backgroundColor = "yellow";
```

The CSS changes directly through JavaScript.

---

# 12. Changing Multiple Styles

```javascript
heading.style.color = "blue";
heading.style.fontSize = "30px";
heading.style.backgroundColor = "lightgray";
```

CSS property names written in JavaScript usually use **camelCase**.

CSS:

```css
background-color
font-size
```

JavaScript:

```javascript
backgroundColor
fontSize
```

---

# 13. Changing Attributes

HTML:

```html
<img id="photo" src="old.jpg">
```

JavaScript:

```javascript
let image = document.getElementById("photo");

image.setAttribute("src", "new.jpg");
```

Now the image source changes.

---

# 14. Reading an Attribute

```javascript
let image = document.getElementById("photo");

console.log(image.getAttribute("src"));
```

`getAttribute()` returns the attribute value.

---

# 15. Removing an Attribute

```javascript
image.removeAttribute("src");
```

This removes the `src` attribute.

---

# 16. Creating an Element

JavaScript can create new HTML elements.

```javascript
let paragraph = document.createElement("p");
```

Now:

```text
paragraph
```

contains a newly created `<p>` element.

---

# 17. Adding Text to the New Element

```javascript
let paragraph = document.createElement("p");

paragraph.textContent = "Hello from JavaScript";
```

The element exists in memory, but it is not yet displayed on the page.

---

# 18. Adding Element to the Page

Suppose HTML:

```html
<div id="container"></div>
```

JavaScript:

```javascript
let paragraph = document.createElement("p");

paragraph.textContent = "Hello from JavaScript";

let container = document.getElementById("container");

container.appendChild(paragraph);
```

Now the paragraph appears inside the container.

---

# 19. Removing an Element

HTML:

```html
<p id="message">Hello</p>
```

JavaScript:

```javascript
let message = document.getElementById("message");

message.remove();
```

The element is removed from the DOM.

---

# 20. DOM and JavaScript Relationship

Remember this flow:

```text
HTML
 ↓
Browser
 ↓
DOM
 ↓
JavaScript
 ↓
Select Element
 ↓
Change / Create / Remove
 ↓
Updated Page
```

---

# 21. Example: Complete DOM Modification

HTML:

```html
<h1 id="title">Old Heading</h1>

<button id="btn">Change</button>
```

JavaScript:

```javascript
let title = document.getElementById("title");
let button = document.getElementById("btn");

button.addEventListener("click", function() {
    title.textContent = "New Heading";
});
```

When the button is clicked:

```text
Old Heading
     ↓
Button Click
     ↓
JavaScript runs
     ↓
textContent changes
     ↓
New Heading
```

Events will be covered in detail in:

```text
11-Events
```

---

# 22. DOM is Provided by the Browser

Important:

DOM is **not the JavaScript language itself**.

The browser provides the DOM Web API.

JavaScript can use that API to interact with web pages.

For example:

```javascript
document.getElementById("title");
```

`document` is provided by the browser environment.

---

# 23. DOM vs HTML

HTML:

```html
<h1>Hello</h1>
```

is the markup used to create the page.

DOM:

```text
Document
  ↓
html
  ↓
body
  ↓
h1
```

is the browser's object-based representation of that document.

JavaScript interacts with the DOM.

---

# 24. Important DOM Methods

You will use these frequently:

```javascript
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector()
document.querySelectorAll()

document.createElement()

element.appendChild()
element.remove()

element.setAttribute()
element.getAttribute()
element.removeAttribute()
```

You will learn these properly in the next files.

---

# 25. Quick Revision

```text
DOM
↓
Document Object Model
```

DOM allows JavaScript to:

```text
Select elements
Change content
Change styles
Change attributes
Create elements
Remove elements
Handle events
```

Important objects/methods:

```javascript
document
document.getElementById()
document.querySelector()
document.createElement()
```

Important properties:

```javascript
element.textContent
element.innerHTML
element.style
```

---

# Remember

```text
HTML
   ↓
Browser creates DOM
   ↓
JavaScript accesses DOM
   ↓
JavaScript modifies DOM
   ↓
Web page changes
```

The DOM is basically the **bridge between JavaScript and the HTML page**.

---

## Next File

```text
10-DOM/02-Selecting-Elements.md
```

In the next file we will learn all the important ways to select HTML elements:

```text
getElementById()
getElementsByClassName()
getElementsByTagName()
querySelector()
querySelectorAll()
```