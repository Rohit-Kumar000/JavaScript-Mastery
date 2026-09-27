# JavaScript Events - Basics

## 1. What is an Event?

Event ka matlab hai **browser ya user ke dwara kiya gaya koi action**.

Examples:

```text
Click
Typing
Mouse movement
Form submit
Key press
Page load
```

For example:

```text
User clicks button
       ↓
Click Event
       ↓
JavaScript runs code
```

---

# 2. Common JavaScript Events

Some commonly used events:

```text
click
dblclick
mouseover
mouseout
keydown
keyup
input
change
submit
load
```

---

# 3. Click Event

Sabse common event hai `click`.

HTML:

```html id="r1f0hj"
<button id="btn">Click Me</button>
```

JavaScript:

```javascript id="j4r0qh"
let button = document.querySelector("#btn");

button.addEventListener("click", function() {
    console.log("Button clicked");
});
```

Button click karne par:

```text id="gfl8f6"
Button clicked
```

console mein print hoga.

---

# 4. `addEventListener()`

`addEventListener()` ka use kisi element par event ko listen karne ke liye hota hai.

Syntax:

```javascript id="n9hmb8"
element.addEventListener("event", function() {
    // code
});
```

Example:

```javascript id="j2jjst"
button.addEventListener("click", function() {
    console.log("Clicked");
});
```

Simple:

```text id="12k5g6"
Element
   ↓
addEventListener()
   ↓
Event
   ↓
Code runs
```

---

# 5. Event Handler Function

Example:

```javascript id="d4byx5"
button.addEventListener("click", function() {
    console.log("Hello");
});
```

Yahan:

```text id="i5krv4"
"click"
→ Event type

function()
→ Event hone par chalne wala code
```

---

# 6. Changing Text on Click

HTML:

```html id="k6d3jr"
<h1 id="title">Hello</h1>

<button id="btn">Change</button>
```

JavaScript:

```javascript id="ocm8yb"
let title = document.querySelector("#title");
let button = document.querySelector("#btn");

button.addEventListener("click", function() {
    title.textContent = "Hello JavaScript";
});
```

---

# 7. Mouse Events

## `click`

Single click:

```javascript id="1v4fdu"
element.addEventListener("click", function() {
    console.log("Clicked");
});
```

---

## `dblclick`

Double click:

```javascript id="qzz2s9"
element.addEventListener("dblclick", function() {
    console.log("Double clicked");
});
```

---

## `mouseover`

Mouse element ke upar aane par:

```javascript id="0g98vf"
element.addEventListener("mouseover", function() {
    console.log("Mouse over element");
});
```

---

## `mouseout`

Mouse element se bahar jaane par:

```javascript id="j3z7f3"
element.addEventListener("mouseout", function() {
    console.log("Mouse left element");
});
```

---

# 8. `mouseenter` and `mouseleave`

These are also commonly used.

### mouseenter

```javascript id="ymt1h5"
element.addEventListener("mouseenter", function() {
    console.log("Mouse entered");
});
```

### mouseleave

```javascript id="d8r3t5"
element.addEventListener("mouseleave", function() {
    console.log("Mouse left");
});
```

For simple mouse enter/leave behavior, these are often easier to reason about than `mouseover`/`mouseout`.

---

# 9. Keyboard Events

JavaScript can detect keyboard actions.

Main events:

```text id="k7qz0b"
keydown
keyup
```

---

# 10. `keydown`

Runs when a key is pressed down.

```javascript id="cbh7z5"
document.addEventListener("keydown", function() {
    console.log("Key pressed");
});
```

Press any keyboard key and the message appears.

---

# 11. `keyup`

Runs when the key is released.

```javascript id="q0n1oc"
document.addEventListener("keyup", function() {
    console.log("Key released");
});
```

---

# 12. Detect Which Key Was Pressed

We can use the event object.

```javascript id="ykf2ev"
document.addEventListener("keydown", function(event) {
    console.log(event.key);
});
```

If you press:

```text id="fb4z8w"
A
```

Output:

```text id="0u3kyr"
a
```

If you press:

```text id="z8f6ml"
Enter
```

Output:

```text id="m09w7h"
Enter
```

---

# 13. Keyboard Event Example

```javascript id="0zv9e4"
document.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        console.log("Enter pressed");
    }

});
```

Now JavaScript only reacts when Enter is pressed.

---

# 14. Input Event

The `input` event runs whenever the value of an input changes.

HTML:

```html id="xk2m49"
<input id="username" type="text">
```

JavaScript:

```javascript id="r3b4fc"
let input = document.querySelector("#username");

input.addEventListener("input", function() {
    console.log(input.value);
});
```

If user types:

```text id="8wqj5u"
Rohit
```

Console can show the changing value as the user types.

---

# 15. `change` Event

The `change` event runs when the value has been changed and the control commits that change.

Example:

```javascript id="q2c8g7"
input.addEventListener("change", function() {
    console.log("Value changed");
});
```

For text inputs, it commonly fires after the user changes the value and then leaves the input.

For controls such as `<select>`, it is commonly used to detect the selected value changing.

---

# 16. `input` vs `change`

Important difference:

```text id="n9f8gp"
input
→ Reacts while the user is changing the value

change
→ Reacts when the change is committed
```

Example:

```javascript id="bb0d4s"
input.addEventListener("input", function() {
    console.log("Typing...");
});
```

This is useful for:

- Live search
- Character counter
- Live preview
- Form validation

---

# 17. Form Submit Event

HTML:

```html id="z3f1ym"
<form id="form">

    <input type="text">

    <button type="submit">Submit</button>

</form>
```

JavaScript:

```javascript id="f1dq84"
let form = document.querySelector("#form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    console.log("Form submitted");

});
```

---

# 18. Why `preventDefault()`?

Normally, submitting a form can cause the browser to perform its default action, such as navigating/reloading depending on the form setup.

```javascript id="l1o9dr"
event.preventDefault();
```

stops that default browser action.

This is very useful when you want to handle the form using JavaScript.

---

# 19. Page Load Events

You can also react when the document has loaded.

A common modern approach is:

```javascript id="f15uw1"
document.addEventListener("DOMContentLoaded", function() {
    console.log("HTML loaded");
});
```

This runs after the HTML has been parsed.

---

# 20. `load` Event

The `load` event waits for the page's resources to finish loading.

Example:

```javascript id="n1e0e2"
window.addEventListener("load", function() {
    console.log("Page fully loaded");
});
```

This can include resources such as images.

---

# 21. Inline Event Handler

You may see this older style:

```html id="73okbq"
<button onclick="hello()">Click</button>
```

JavaScript:

```javascript id="l7wq4g"
function hello() {
    console.log("Hello");
}
```

This works, but for modern code, `addEventListener()` is generally preferred.

---

# 22. Why Prefer `addEventListener()`?

Instead of:

```html id="5m78lj"
<button onclick="hello()">Click</button>
```

Prefer:

```javascript id="fr8fnp"
button.addEventListener("click", hello);
```

Benefits:

```text id="j4y2ul"
Cleaner HTML
Better separation of HTML and JavaScript
Can attach multiple listeners
Easier to manage larger projects
```

---

# 23. Using a Named Function

You don't always need an anonymous function.

Example:

```javascript id="e7f2bt"
function hello() {
    console.log("Hello Rohit");
}

button.addEventListener("click", hello);
```

Notice:

```javascript id="q26yck"
hello
```

not:

```javascript id="x4yqtl"
hello()
```

Because we are passing the function itself to be called later.

---

# 24. Multiple Events

You can attach different events to the same element.

```javascript id="w0q4p6"
button.addEventListener("click", function() {
    console.log("Clicked");
});

button.addEventListener("dblclick", function() {
    console.log("Double clicked");
});
```

---

# 25. Multiple Event Listeners of the Same Type

You can also add multiple listeners for the same event.

```javascript id="h4k3mq"
button.addEventListener("click", function() {
    console.log("First function");
});

button.addEventListener("click", function() {
    console.log("Second function");
});
```

Both functions can run when the button is clicked.

This is one advantage of `addEventListener()` over assigning a single `onclick` handler.

---

# 26. Removing an Event Listener

If you want to remove a listener, you need a named function reference.

```javascript id="04lqhh"
function hello() {
    console.log("Hello");
}

button.addEventListener("click", hello);
```

Remove it:

```javascript id="qpld9b"
button.removeEventListener("click", hello);
```

Now that particular listener is removed.

---

# 27. Common Events Quick Table

| Event | Meaning |
|---|---|
| `click` | Element clicked |
| `dblclick` | Double clicked |
| `mouseenter` | Mouse enters |
| `mouseleave` | Mouse leaves |
| `keydown` | Key pressed down |
| `keyup` | Key released |
| `input` | Input value changes while editing |
| `change` | Value change is committed |
| `submit` | Form submitted |
| `DOMContentLoaded` | HTML document parsed |
| `load` | Page/resources loaded |

---

# 28. Example - Button + Input

HTML:

```html id="3shd2h"
<input id="name" type="text">

<button id="btn">Submit</button>

<h2 id="result"></h2>
```

JavaScript:

```javascript id="wjxkpk"
let input = document.querySelector("#name");
let button = document.querySelector("#btn");
let result = document.querySelector("#result");

button.addEventListener("click", function() {

    result.textContent = "Hello " + input.value;

});
```

If user enters:

```text id="8v1b0b"
Rohit
```

Output:

```text id="zvpxb7"
Hello Rohit
```

---

# 29. Example - Live Character Counter

HTML:

```html id="yrk6u5"
<textarea id="text"></textarea>

<p>
    Characters:
    <span id="count">0</span>
</p>
```

JavaScript:

```javascript id="dy4q1v"
let text = document.querySelector("#text");
let count = document.querySelector("#count");

text.addEventListener("input", function() {

    count.textContent = text.value.length;

});
```

Now the counter updates while the user types.

---

# 30. Example - Enter Key

```javascript id="4d1wlo"
document.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        console.log("Enter pressed");
    }

});
```

This is useful for things like:

```text id="f20nq5"
Search
Chat
Forms
Games
Keyboard controls
```

---

# 31. The Event Object

When an event happens, JavaScript can provide information about that event.

Example:

```javascript id="1q1xqq"
button.addEventListener("click", function(event) {

    console.log(event);

});
```

The `event` object contains information about what happened.

For example:

```javascript id="yrj7mb"
console.log(event.type);
```

Output:

```text id="o8ofn6"
click
```

---

# 32. `event.target`

`event.target` tells you which element actually triggered the event.

```javascript id="a9p4zi"
button.addEventListener("click", function(event) {

    console.log(event.target);

});
```

If the button was clicked, the button element is the target.

---

# 33. `event.currentTarget`

Inside an event listener, `event.currentTarget` refers to the element on which that listener is currently running.

Example:

```javascript id="9r9n4e"
button.addEventListener("click", function(event) {

    console.log(event.currentTarget);

});
```

For a simple button listener, `target` and `currentTarget` are often the same.

They can differ when events involve bubbling.

---

# 34. Important Difference

```text id="1buw4g"
event.target
→ Element that triggered the event

event.currentTarget
→ Element whose listener is currently running
```

We will understand this more deeply in **Event Bubbling**.

---

# 35. Basic Event Flow

Remember this pattern:

```text id="2y7x7b"
Select Element
      ↓
Add Event Listener
      ↓
User Performs Action
      ↓
Event Happens
      ↓
Function Runs
      ↓
DOM Changes
```

Example:

```javascript id="r6s5cf"
let button = document.querySelector("#btn");

button.addEventListener("click", function() {

    document.querySelector("#title").textContent =
        "Button clicked!";

});
```

---

# 36. Common Beginner Mistakes

### Mistake 1

Wrong:

```javascript id="7b6sv6"
button.addEventListener(click, function() {});
```

Correct:

```javascript id="71wn2q"
button.addEventListener("click", function() {});
```

Event name should normally be a string.

---

### Mistake 2

Wrong:

```javascript id="6k71r3"
button.addEventListener("click", hello());
```

Correct:

```javascript id="r1sl1h"
button.addEventListener("click", hello);
```

We pass the function, rather than calling it immediately.

---

### Mistake 3

Selecting a non-existing element:

```javascript id="z7nj0u"
let button = document.querySelector("#wrongId");

button.addEventListener("click", function() {});
```

If the selector returns `null`, this causes an error.

---

# 37. Quick Revision

### Click

```javascript id="1ny4j3"
element.addEventListener("click", function() {});
```

### Double click

```javascript id="0nqk2s"
element.addEventListener("dblclick", function() {});
```

### Keyboard

```javascript id="t5hqub"
document.addEventListener("keydown", function(event) {
    console.log(event.key);
});
```

### Input

```javascript id="i4l3h4"
input.addEventListener("input", function() {
    console.log(input.value);
});
```

### Form

```javascript id="8d4iq9"
form.addEventListener("submit", function(event) {
    event.preventDefault();
});
```

### Remove listener

```javascript id="9u3v8n"
element.removeEventListener("click", functionName);
```

---

# Remember

```text id="cnxjhf"
Event
→ Something happens

addEventListener()
→ Listen for that event

Function
→ Code that runs when event occurs

event
→ Information about the event
```

Most important pattern:

```javascript id="m1e5tq"
element.addEventListener("event", function(event) {

    // Code

});
```

---

## Next File

```text id="9f4f6j"
11-Events/02-Event-Listeners.md
```

Next we will go deeper into:

```text id="5mj5wh"
addEventListener()
removeEventListener()
named functions
anonymous functions
multiple listeners
event options
once
capture
```