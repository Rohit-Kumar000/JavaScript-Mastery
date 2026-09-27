# JavaScript Event Listeners

## 1. What is an Event Listener?

Event listener JavaScript ko batata hai:

> "Jab ye event ho, tab ye code run karna."

Example:

```javascript
button.addEventListener("click", function() {
    console.log("Button clicked");
});
```

Yahan:

```text
button
→ Element

"click"
→ Event

function()
→ Event hone par run hone wala code
```

---

# 2. Basic Syntax

```javascript
element.addEventListener("event", function() {
    // code
});
```

Example:

```javascript
let button = document.querySelector("#btn");

button.addEventListener("click", function() {
    console.log("Hello JavaScript");
});
```

---

# 3. Named Function

Event listener mein hum ek separately defined function bhi use kar sakte hain.

```javascript
function greet() {
    console.log("Hello Rohit");
}

button.addEventListener("click", greet);
```

Important:

```javascript
greet
```

✅ Correct

```javascript
greet()
```

❌ Wrong for this use

Because `greet()` function ko immediately call karega, jabki hume function ko event hone par call karwana hai.

---

# 4. Anonymous Function

Function ka koi naam nahi hai:

```javascript
button.addEventListener("click", function() {
    console.log("Clicked");
});
```

This is called an **anonymous function**.

It is commonly used when the function is only needed for that particular event listener.

---

# 5. Arrow Function

Arrow function bhi use kar sakte hain:

```javascript
button.addEventListener("click", () => {
    console.log("Clicked");
});
```

With one line:

```javascript
button.addEventListener("click", () => console.log("Clicked"));
```

---

# 6. Multiple Event Listeners

Same element par multiple listeners add kar sakte hain.

```javascript
button.addEventListener("click", function() {
    console.log("First");
});

button.addEventListener("click", function() {
    console.log("Second");
});
```

Click karne par dono functions run ho sakte hain.

---

# 7. Different Events

Same element par different events bhi laga sakte hain.

```javascript
button.addEventListener("click", function() {
    console.log("Clicked");
});

button.addEventListener("mouseenter", function() {
    console.log("Mouse entered");
});

button.addEventListener("mouseleave", function() {
    console.log("Mouse left");
});
```

---

# 8. Removing Event Listener

Event listener remove karne ke liye:

```javascript
removeEventListener()
```

use hota hai.

Example:

```javascript
function hello() {
    console.log("Hello");
}

button.addEventListener("click", hello);

button.removeEventListener("click", hello);
```

Ab `hello` listener remove ho gaya.

---

# 9. Important Rule for Removing

This will **not** work as expected:

```javascript
button.addEventListener("click", function() {
    console.log("Hello");
});

button.removeEventListener("click", function() {
    console.log("Hello");
});
```

Reason:

Dono anonymous functions alag function objects hain.

Correct approach:

```javascript
function hello() {
    console.log("Hello");
}

button.addEventListener("click", hello);

button.removeEventListener("click", hello);
```

Same function reference required hota hai.

---

# 10. `once` Option

Agar listener ko sirf **ek baar** run karwana hai:

```javascript
button.addEventListener("click", function() {
    console.log("Clicked");
}, {
    once: true
});
```

Ab:

```text
First click
→ Function runs

Second click
→ Function does not run
```

---

# 11. `once` Example

```javascript
let button = document.querySelector("#btn");

button.addEventListener("click", function() {
    alert("Welcome!");
}, {
    once: true
});
```

User ko alert sirf first click par milega.

---

# 12. Event Listener Options

`addEventListener()` ka third argument options object ho sakta hai.

Example:

```javascript
element.addEventListener("click", function() {
    console.log("Clicked");
}, {
    once: true
});
```

Common options:

```text
once
capture
passive
```

For now, `once` is the most important beginner-level option.

---

# 13. `capture`

Events can travel through the DOM in different phases.

You may see:

```javascript
element.addEventListener("click", handler, {
    capture: true
});
```

`capture: true` means the listener participates in the **capturing phase**.

Example:

```javascript
parent.addEventListener("click", function() {
    console.log("Parent");
}, {
    capture: true
});
```

Event bubbling and capturing will be covered in detail later.

---

# 14. `passive`

`passive` is commonly used with events such as scrolling/touch events.

Example:

```javascript
window.addEventListener("scroll", function() {
    console.log("Scrolling");
}, {
    passive: true
});
```

It tells the browser that the listener will not call `preventDefault()`.

For normal button clicks, you usually don't need to worry about it.

---

# 15. Event Listener with Event Object

You can receive the event object:

```javascript
button.addEventListener("click", function(event) {
    console.log(event);
});
```

Now you can access information about the event.

Example:

```javascript
button.addEventListener("click", function(event) {
    console.log(event.type);
});
```

Output:

```text
click
```

---

# 16. `event.target`

```javascript
button.addEventListener("click", function(event) {
    console.log(event.target);
});
```

It tells you which element triggered the event.

---

# 17. `event.currentTarget`

```javascript
button.addEventListener("click", function(event) {
    console.log(event.currentTarget);
});
```

It refers to the element whose listener is currently executing.

For a simple listener:

```text
target
currentTarget
```

are often the same.

They can differ when events bubble from child elements to parent elements.

---

# 18. Example with Input

HTML:

```html
<input id="name" type="text">
```

JavaScript:

```javascript
let input = document.querySelector("#name");

input.addEventListener("input", function(event) {
    console.log(event.target.value);
});
```

If the user types:

```text
Rohit
```

the value can be read using:

```javascript
event.target.value
```

---

# 19. Event Listener on Document

We can listen for events on the entire document.

Example:

```javascript
document.addEventListener("keydown", function(event) {
    console.log(event.key);
});
```

Now JavaScript can detect keyboard keys pressed on the page.

---

# 20. Event Listener on Window

We can also listen on `window`.

Example:

```javascript
window.addEventListener("resize", function() {
    console.log("Window resized");
});
```

This runs when the browser window size changes.

---

# 21. Common Event Listener Examples

### Click

```javascript
button.addEventListener("click", handler);
```

### Mouse Enter

```javascript
box.addEventListener("mouseenter", handler);
```

### Keyboard

```javascript
document.addEventListener("keydown", handler);
```

### Input

```javascript
input.addEventListener("input", handler);
```

### Form

```javascript
form.addEventListener("submit", handler);
```

---

# 22. `onclick` vs `addEventListener()`

You may also see:

```javascript
button.onclick = function() {
    console.log("Clicked");
};
```

This works.

But:

```javascript
button.addEventListener("click", function() {
    console.log("Clicked");
});
```

is generally preferred for modern JavaScript.

One important difference is that assigning `onclick` replaces the previous `onclick` handler:

```javascript
button.onclick = function() {
    console.log("First");
};

button.onclick = function() {
    console.log("Second");
};
```

Only the second assignment remains.

With `addEventListener()`, multiple listeners can coexist:

```javascript
button.addEventListener("click", function() {
    console.log("First");
});

button.addEventListener("click", function() {
    console.log("Second");
});
```

---

# 23. Practical Example

HTML:

```html
<button id="btn">Click Me</button>
<p id="message"></p>
```

JavaScript:

```javascript
let button = document.querySelector("#btn");
let message = document.querySelector("#message");

function showMessage() {
    message.textContent = "Button was clicked!";
}

button.addEventListener("click", showMessage);
```

To remove it later:

```javascript
button.removeEventListener("click", showMessage);
```

---

# 24. Practical Example - Run Once

```javascript
button.addEventListener("click", function() {
    message.textContent = "This runs only once";
}, {
    once: true
});
```

---

# 25. Quick Revision

```text
addEventListener()
→ Add event listener

removeEventListener()
→ Remove event listener

once: true
→ Run only once

capture: true
→ Use capturing phase

event.target
→ Element that triggered the event

event.currentTarget
→ Element whose listener is running
```

---

# Remember

The most important syntax:

```javascript
element.addEventListener("event", function(event) {

    // Your code

});
```

And when removing a listener:

```javascript
element.removeEventListener("event", functionName);
```

Use the **same function reference** when removing.

---

## Next File

```text
11-Events/03-Event-Object.md
```

Next we will properly learn the **Event Object** and its important properties like:

```text
event.target
event.currentTarget
event.type
event.key
event.preventDefault()
event.clientX
event.clientY
```