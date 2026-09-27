# JavaScript Event Bubbling

## 1. What is Event Bubbling?

Jab kisi child element par event hota hai, to event **child se parent elements ki taraf** travel kar sakta hai.

Example:

```html
<div id="parent">
    <button id="btn">Click Me</button>
</div>
```

Agar button click hota hai:

```text
Button
   ↓
Parent
   ↓
Body
   ↓
Document
```

Is process ko **Event Bubbling** kehte hain.

---

# 2. Basic Example

HTML:

```html
<div id="parent">
    <button id="btn">Click Me</button>
</div>
```

JavaScript:

```javascript
let parent = document.querySelector("#parent");
let button = document.querySelector("#btn");

button.addEventListener("click", function() {
    console.log("Button clicked");
});

parent.addEventListener("click", function() {
    console.log("Parent clicked");
});
```

Button click karne par:

```text
Button clicked
Parent clicked
```

Dono messages aa sakte hain.

Why?

Because click event button se parent ki taraf bubble karta hai.

---

# 3. Event Bubbling Flow

```text
User clicks button
        ↓
Button event listener
        ↓
Parent event listener
        ↓
Grandparent event listener
        ↓
Body
        ↓
Document
```

Ye event bubbling ka basic flow hai.

---

# 4. `event.target`

`event.target` batata hai ki **actual event kis element se start hua**.

Example:

```javascript
parent.addEventListener("click", function(event) {

    console.log(event.target);

});
```

Agar button click hua:

```text
event.target
→ button
```

---

# 5. `event.currentTarget`

`event.currentTarget` batata hai ki **jis element ka listener abhi execute ho raha hai**.

Example:

```javascript
parent.addEventListener("click", function(event) {

    console.log(event.currentTarget);

});
```

Agar button click hua:

```text
event.target
→ button

event.currentTarget
→ parent
```

---

# 6. Target vs CurrentTarget

This is very important:

```text
event.target
→ Where the event started

event.currentTarget
→ Where the current listener is attached
```

Example:

```html
<div id="parent">
    <button id="btn">Click</button>
</div>
```

```javascript
parent.addEventListener("click", function(event) {

    console.log("Target:", event.target);
    console.log("Current:", event.currentTarget);

});
```

Button click karne par:

```text
Target
→ button

CurrentTarget
→ parent
```

---

# 7. `stopPropagation()`

Agar hum nahi chahte ki event parent tak bubble ho, to:

```javascript
event.stopPropagation();
```

use kar sakte hain.

Example:

```javascript
button.addEventListener("click", function(event) {

    event.stopPropagation();

    console.log("Button clicked");

});
```

Now button ka event parent listener tak nahi jayega.

---

# 8. Example of `stopPropagation()`

```javascript
button.addEventListener("click", function(event) {

    console.log("Button clicked");

    event.stopPropagation();

});

parent.addEventListener("click", function() {

    console.log("Parent clicked");

});
```

Click button:

```text
Button clicked
```

Parent wala listener nahi chalega.

---

# 9. Event Capturing

Event bubbling ke opposite direction ko samajhne ke liye **capturing phase** important hai.

Event generally:

```text
Document
   ↓
Parent
   ↓
Button
```

ki taraf bhi travel karta hai before reaching the target.

Basic event flow:

```text
Capturing
    ↓
Target
    ↓
Bubbling
```

---

# 10. Capture Phase Example

Normally:

```javascript
parent.addEventListener("click", function() {
    console.log("Parent");
});
```

Bubbling phase mein listener run karega.

Capturing ke liye:

```javascript
parent.addEventListener("click", function() {
    console.log("Parent");
}, {
    capture: true
});
```

Now listener capture phase mein participate karega.

---

# 11. Capturing + Bubbling Example

HTML:

```html
<div id="parent">
    <button id="btn">Click</button>
</div>
```

JavaScript:

```javascript
parent.addEventListener("click", function() {
    console.log("Parent Capture");
}, {
    capture: true
});

button.addEventListener("click", function() {
    console.log("Button");
});

parent.addEventListener("click", function() {
    console.log("Parent Bubble");
});
```

Click button:

```text
Parent Capture
Button
Parent Bubble
```

This demonstrates:

```text
Capture
   ↓
Target
   ↓
Bubble
```

---

# 12. Event Propagation

Event propagation means the way an event travels through the DOM.

It has three important stages:

```text
1. Capturing Phase
2. Target Phase
3. Bubbling Phase
```

Visual:

```text
Document
    ↓
Parent
    ↓
Button
    ↑
Parent
    ↑
Document
```

---

# 13. Event Delegation

Event bubbling can be used for a very useful technique called:

> **Event Delegation**

Instead of adding listeners to many child elements, we can add one listener to their parent.

Example:

```html
<ul id="list">

    <li>Apple</li>
    <li>Banana</li>
    <li>Mango</li>

</ul>
```

Instead of:

```javascript
let items = document.querySelectorAll("li");

items.forEach(function(item) {

    item.addEventListener("click", function() {
        console.log(item.textContent);
    });

});
```

We can use one listener on the parent:

```javascript
let list = document.querySelector("#list");

list.addEventListener("click", function(event) {

    if (event.target.tagName === "LI") {
        console.log(event.target.textContent);
    }

});
```

---

# 14. Why Event Delegation?

Event delegation is useful when:

```text
Many child elements exist
Child elements are added dynamically
You want fewer event listeners
```

Example:

```text
List
 ├── Item
 ├── Item
 ├── Item
 ├── Item
 └── Item
```

Instead of adding 5 listeners:

```text
5 elements
↓
5 listeners
```

We can use:

```text
1 parent
↓
1 listener
```

---

# 15. Dynamic Elements

Event delegation is especially useful for dynamically added elements.

HTML:

```html
<ul id="list"></ul>
```

JavaScript:

```javascript
let list = document.querySelector("#list");

list.addEventListener("click", function(event) {

    if (event.target.tagName === "LI") {
        console.log(event.target.textContent);
    }

});

let item = document.createElement("li");

item.textContent = "New Item";

list.appendChild(item);
```

The newly created `<li>` can still be handled by the parent's listener.

---

# 16. Using `matches()`

Instead of checking:

```javascript
event.target.tagName === "LI"
```

we can use:

```javascript
event.target.matches("li")
```

Example:

```javascript
list.addEventListener("click", function(event) {

    if (event.target.matches("li")) {
        console.log(event.target.textContent);
    }

});
```

This can be useful when checking specific selectors.

---

# 17. `stopPropagation()` vs `preventDefault()`

These are different.

### `stopPropagation()`

Stops the event from propagating further.

```javascript
event.stopPropagation();
```

Example:

```text
Button
   ↓
Parent

stopPropagation()
   ↓
Parent doesn't receive the bubbled event
```

### `preventDefault()`

Stops the browser's default action.

```javascript
event.preventDefault();
```

Example:

```text
Link click
   ↓
preventDefault()
   ↓
Browser doesn't follow the link
```

Remember:

```text
stopPropagation()
→ Stops event propagation

preventDefault()
→ Stops default browser action
```

---

# 18. `stopImmediatePropagation()`

There is another method:

```javascript
event.stopImmediatePropagation();
```

It stops:

```text
Event propagation
+
Other listeners on the same element
```

Example:

```javascript
button.addEventListener("click", function(event) {

    event.stopImmediatePropagation();

    console.log("First");

});

button.addEventListener("click", function() {

    console.log("Second");

});
```

The second listener will not run if the first listener calls `stopImmediatePropagation()`.

You won't need this often at the beginner level, but it's useful to know.

---

# 19. Common Mistake

HTML:

```html
<div id="parent">
    <button id="btn">Click</button>
</div>
```

JavaScript:

```javascript
parent.addEventListener("click", function() {
    console.log("Parent");
});

button.addEventListener("click", function() {
    console.log("Button");
});
```

Clicking the button may print:

```text
Button
Parent
```

This is **not an error**.

It happens because of event bubbling.

---

# 20. Quick Revision

```text
Event Bubbling
→ Event travels from child toward parent

event.target
→ Element where event started

event.currentTarget
→ Element whose listener is running

stopPropagation()
→ Stops propagation

preventDefault()
→ Stops browser's default action

capture: true
→ Listener participates in capturing phase

Event Delegation
→ Handle child events using a parent listener
```

---

# Remember This Flow

```text
          Capturing
Document
    ↓
 Parent
    ↓
 Button
    ↑
 Parent
    ↑
Document
          Bubbling
```

The complete event flow is:

```text
Capturing
    ↓
Target
    ↓
Bubbling
```

---

# Final Example

```html
<ul id="list">

    <li>JavaScript</li>
    <li>HTML</li>
    <li>CSS</li>

</ul>
```

```javascript
let list = document.querySelector("#list");

list.addEventListener("click", function(event) {

    if (event.target.matches("li")) {

        console.log("Selected:", event.target.textContent);

    }

});
```

Here:

```text
User clicks <li>
       ↓
Event bubbles to <ul>
       ↓
Parent listener runs
       ↓
event.target gives clicked <li>
       ↓
Text is printed
```

This is a practical example of **Event Delegation**.

---

## Next File

```text
11-Events/06-DOM-Projects.md
```

Next we will make small **DOM + Events projects** to practice everything we learned.