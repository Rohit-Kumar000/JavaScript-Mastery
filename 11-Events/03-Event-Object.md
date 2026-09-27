# JavaScript Event Object

## 1. What is the Event Object?

Jab koi event hota hai, JavaScript automatically ek **event object** provide karta hai.

Is object mein event ke baare mein useful information hoti hai.

Example:

```javascript
button.addEventListener("click", function(event) {
    console.log(event);
});
```

Yahan:

```text
event
→ Event object
```

---

# 2. Event Object Syntax

Event object ko function ke parameter mein receive kar sakte hain:

```javascript
element.addEventListener("click", function(event) {

    console.log(event);

});
```

Parameter ka naam kuch bhi ho sakta hai:

```javascript
function(event) {}
```

```javascript
function(e) {}
```

```javascript
function(evt) {}
```

Usually `event` ya `e` use kiya jata hai.

---

# 3. `event.type`

`event.type` batata hai ki kaunsa event hua.

```javascript
button.addEventListener("click", function(event) {
    console.log(event.type);
});
```

Output:

```text
click
```

Keyboard example:

```javascript
document.addEventListener("keydown", function(event) {
    console.log(event.type);
});
```

Output:

```text
keydown
```

---

# 4. `event.target`

`event.target` batata hai ki actual mein **kis element ne event trigger kiya**.

Example:

```javascript
button.addEventListener("click", function(event) {
    console.log(event.target);
});
```

Agar button click hua, to button element milega.

---

# 5. `event.target.textContent`

Target element ka text bhi access kar sakte hain.

HTML:

```html
<button id="btn">Click Me</button>
```

JavaScript:

```javascript
button.addEventListener("click", function(event) {
    console.log(event.target.textContent);
});
```

Output:

```text
Click Me
```

---

# 6. `event.currentTarget`

`event.currentTarget` batata hai ki **jis element par current event listener laga hua hai**.

Example:

```javascript
button.addEventListener("click", function(event) {
    console.log(event.currentTarget);
});
```

Simple case mein:

```text
event.target
=
event.currentTarget
```

Lekin event bubbling ke case mein dono different ho sakte hain.

---

# 7. `target` vs `currentTarget`

Remember:

```text
event.target
→ Actual element that triggered the event

event.currentTarget
→ Element whose event listener is currently running
```

Example:

```html
<div id="parent">
    <button id="btn">Click</button>
</div>
```

Agar listener parent par laga ho aur button click ho:

```javascript
parent.addEventListener("click", function(event) {
    console.log(event.target);
    console.log(event.currentTarget);
});
```

Then:

```text
target
→ button

currentTarget
→ parent
```

Ye concept **Event Bubbling** mein aur clear hoga.

---

# 8. `event.key`

Keyboard events mein `event.key` batata hai ki kaunsi key press hui.

```javascript
document.addEventListener("keydown", function(event) {
    console.log(event.key);
});
```

Agar press karo:

```text
A
```

Output:

```text
a
```

Agar press karo:

```text
Enter
```

Output:

```text
Enter
```

---

# 9. Keyboard Example

```javascript
document.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        console.log("Enter pressed");
    }

});
```

This is useful for:

```text
Search
Forms
Games
Keyboard shortcuts
Chat applications
```

---

# 10. `event.code`

`event.code` physical keyboard key ko identify karta hai.

Example:

```javascript
document.addEventListener("keydown", function(event) {
    console.log(event.code);
});
```

Pressing the A key usually gives:

```text
KeyA
```

Enter:

```text
Enter
```

---

# 11. `key` vs `code`

Simple difference:

```text
event.key
→ The value/action of the key

event.code
→ The physical keyboard key
```

Example:

```javascript
document.addEventListener("keydown", function(event) {

    console.log(event.key);
    console.log(event.code);

});
```

For many normal keyboard cases, `event.key` is what you'll use.

---

# 12. `event.preventDefault()`

`preventDefault()` browser ke default action ko stop karta hai.

Example:

```javascript
form.addEventListener("submit", function(event) {

    event.preventDefault();

    console.log("Form handled by JavaScript");

});
```

Normally form submit hone par browser navigation/reload kar sakta hai.

`preventDefault()` us default action ko rok deta hai.

---

# 13. Link Example

HTML:

```html
<a id="link" href="https://example.com">
    Visit
</a>
```

JavaScript:

```javascript
let link = document.querySelector("#link");

link.addEventListener("click", function(event) {

    event.preventDefault();

    console.log("Link click stopped");

});
```

Now the browser won't follow the link because the default action was prevented.

---

# 14. Form Example

HTML:

```html
<form id="form">

    <input type="text">

    <button type="submit">Submit</button>

</form>
```

JavaScript:

```javascript
let form = document.querySelector("#form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    console.log("Form submitted");

});
```

This is commonly used when JavaScript needs to validate/process the form before sending data.

---

# 15. Mouse Position

Mouse events provide position information.

### `clientX`

Horizontal position relative to the viewport.

```javascript
document.addEventListener("click", function(event) {
    console.log(event.clientX);
});
```

### `clientY`

Vertical position relative to the viewport.

```javascript
document.addEventListener("click", function(event) {
    console.log(event.clientY);
});
```

---

# 16. Mouse Position Example

```javascript
document.addEventListener("click", function(event) {

    console.log("X:", event.clientX);
    console.log("Y:", event.clientY);

});
```

If you click somewhere on the page, the browser gives the click position relative to the viewport.

---

# 17. `pageX` and `pageY`

These give the mouse position relative to the document/page.

```javascript
document.addEventListener("click", function(event) {

    console.log(event.pageX);
    console.log(event.pageY);

});
```

A major difference appears when the page is scrolled.

```text
clientX / clientY
→ Viewport position

pageX / pageY
→ Document/page position
```

---

# 18. Modifier Keys

Event objects can tell you whether modifier keys were pressed.

Examples:

```javascript
event.shiftKey
event.ctrlKey
event.altKey
event.metaKey
```

Example:

```javascript
document.addEventListener("keydown", function(event) {

    if (event.ctrlKey && event.key === "s") {
        console.log("Ctrl + S pressed");
    }

});
```

---

# 19. Mouse Button

For mouse events, `event.button` can tell which mouse button was involved.

Example:

```javascript
document.addEventListener("mousedown", function(event) {
    console.log(event.button);
});
```

Common values:

```text
0 → Left button
1 → Middle button
2 → Right button
```

---

# 20. `event.isTrusted`

This indicates whether the event was generated by a real user/browser action rather than by script.

Example:

```javascript
button.addEventListener("click", function(event) {
    console.log(event.isTrusted);
});
```

A normal user click will generally produce:

```text
true
```

This is mainly useful in situations where you need to distinguish user-generated events from script-generated ones.

---

# 21. Important Event Object Properties

| Property / Method | Purpose |
|---|---|
| `event.type` | Event type |
| `event.target` | Actual event target |
| `event.currentTarget` | Current listener element |
| `event.key` | Keyboard key |
| `event.code` | Physical keyboard key |
| `event.clientX` | Mouse X in viewport |
| `event.clientY` | Mouse Y in viewport |
| `event.pageX` | Mouse X in document |
| `event.pageY` | Mouse Y in document |
| `event.ctrlKey` | Ctrl pressed or not |
| `event.shiftKey` | Shift pressed or not |
| `event.altKey` | Alt pressed or not |
| `event.button` | Mouse button |
| `event.isTrusted` | Whether event is trusted |
| `event.preventDefault()` | Stops default browser action |

---

# 22. Practical Example - Detect Button

HTML:

```html
<button id="btn">Click Me</button>
```

JavaScript:

```javascript
let button = document.querySelector("#btn");

button.addEventListener("click", function(event) {

    console.log("Type:", event.type);
    console.log("Target:", event.target);
    console.log("Text:", event.target.textContent);

});
```

---

# 23. Practical Example - Keyboard

```javascript
document.addEventListener("keydown", function(event) {

    console.log("Key:", event.key);
    console.log("Code:", event.code);

});
```

---

# 24. Practical Example - Mouse Position

```javascript
document.addEventListener("click", function(event) {

    console.log("X:", event.clientX);
    console.log("Y:", event.clientY);

});
```

---

# 25. Practical Example - Ctrl + S

```javascript
document.addEventListener("keydown", function(event) {

    if (event.ctrlKey && event.key.toLowerCase() === "s") {

        event.preventDefault();

        console.log("Custom Save");

    }

});
```

Here:

```text
Ctrl
+
S
```

is detected.

`preventDefault()` prevents the browser's normal Save Page action.

---

# 26. Quick Revision

Remember these first:

```javascript
event.type
```

→ Which event happened?

```javascript
event.target
```

→ Which element triggered it?

```javascript
event.currentTarget
```

→ Which element's listener is running?

```javascript
event.key
```

→ Which keyboard key was pressed?

```javascript
event.preventDefault()
```

→ Stop browser's default action.

```javascript
event.clientX
event.clientY
```

→ Mouse position in viewport.

---

# Event Object Mental Model

```text
Event Happens
      ↓
Event Object Created
      ↓
Information Available
      ↓
event.target
event.type
event.key
event.clientX
...
      ↓
Use That Information
```

---

## Next File

```text
11-Events/04-Form-Events.md
```

Next we will learn how JavaScript handles forms:

```text
input
change
submit
focus
blur
value
form validation
```