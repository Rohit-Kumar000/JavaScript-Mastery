# JavaScript DOM - Styles

## 1. Changing CSS with JavaScript

JavaScript se hum HTML elements ki CSS change kar sakte hain.

Example:

```javascript
let heading = document.querySelector("#title");

heading.style.color = "red";
```

Ab heading ka text red ho jayega.

---

# 2. The `style` Property

`style` ka use kisi element par **inline CSS** apply karne ke liye hota hai.

Example:

```javascript
let box = document.querySelector("#box");

box.style.color = "blue";
box.style.backgroundColor = "yellow";
```

---

# 3. Changing Text Color

```javascript
heading.style.color = "red";
```

Other examples:

```javascript
heading.style.color = "green";
heading.style.color = "#ff0000";
heading.style.color = "rgb(255, 0, 0)";
```

---

# 4. Changing Background

CSS:

```css
background-color
```

JavaScript:

```javascript
box.style.backgroundColor = "black";
```

Example:

```javascript
box.style.backgroundColor = "lightblue";
```

---

# 5. Changing Font Size

CSS:

```css
font-size
```

JavaScript:

```javascript
heading.style.fontSize = "40px";
```

Important:

```text
CSS       → font-size
JavaScript → fontSize
```

---

# 6. Changing Width and Height

```javascript
box.style.width = "300px";
box.style.height = "200px";
```

---

# 7. Changing Margin

CSS:

```css
margin-top
```

JavaScript:

```javascript
box.style.marginTop = "20px";
```

Other examples:

```javascript
box.style.marginBottom = "20px";
box.style.marginLeft = "10px";
box.style.marginRight = "10px";
```

---

# 8. Changing Padding

```javascript
box.style.padding = "20px";
```

Or:

```javascript
box.style.paddingTop = "10px";
box.style.paddingBottom = "10px";
```

---

# 9. Border

```javascript
box.style.border = "2px solid black";
```

Example:

```javascript
box.style.borderRadius = "10px";
```

---

# 10. Text Alignment

```javascript
heading.style.textAlign = "center";
```

Other values:

```javascript
heading.style.textAlign = "left";
heading.style.textAlign = "right";
```

---

# 11. Font Weight

```javascript
heading.style.fontWeight = "bold";
```

You can also use:

```javascript
heading.style.fontWeight = "700";
```

---

# 12. Multiple Styles

You can apply multiple styles one by one:

```javascript
let box = document.querySelector("#box");

box.style.width = "300px";
box.style.height = "200px";
box.style.backgroundColor = "black";
box.style.color = "white";
box.style.padding = "20px";
box.style.borderRadius = "10px";
```

---

# 13. CSS Naming in JavaScript

CSS property:

```text
background-color
font-size
margin-top
border-radius
```

JavaScript:

```text
backgroundColor
fontSize
marginTop
borderRadius
```

This is called **camelCase**.

---

# 14. `style.cssText`

You can also set multiple inline styles using `cssText`.

```javascript
box.style.cssText = `
    color: white;
    background-color: black;
    padding: 20px;
    border-radius: 10px;
`;
```

This is useful when you want to set many inline styles together.

However, remember that assigning `cssText` can replace existing inline styles.

---

# 15. Removing Inline Style

Suppose:

```javascript
box.style.color = "red";
```

To remove that inline style:

```javascript
box.style.color = "";
```

Example:

```javascript
box.style.backgroundColor = "";
```

---

# 16. The Problem with Too Much `style`

Suppose your JavaScript contains:

```javascript
box.style.color = "white";
box.style.backgroundColor = "black";
box.style.padding = "20px";
box.style.borderRadius = "10px";
box.style.fontSize = "20px";
```

For small examples this is fine.

But in a bigger project, putting lots of CSS inside JavaScript can make your code difficult to manage.

A better approach is often:

```text
CSS → Styling
JavaScript → Logic
```

For this, we use classes.

---

# 17. `classList`

`classList` allows JavaScript to manage CSS classes.

HTML:

```html
<div id="box"></div>
```

CSS:

```css
.active {
    background-color: black;
    color: white;
}
```

JavaScript:

```javascript
let box = document.querySelector("#box");

box.classList.add("active");
```

Now the CSS from `.active` is applied.

---

# 18. `classList.add()`

Adds a class.

```javascript
box.classList.add("active");
```

Multiple classes:

```javascript
box.classList.add("active", "large");
```

---

# 19. `classList.remove()`

Removes a class.

```javascript
box.classList.remove("active");
```

---

# 20. `classList.toggle()`

`toggle()` is extremely useful.

```javascript
box.classList.toggle("active");
```

If `active` doesn't exist:

```text
Add active
```

If `active` already exists:

```text
Remove active
```

So:

```text
toggle = Add OR Remove
```

---

# 21. `classList.contains()`

Checks whether a class exists.

```javascript
if (box.classList.contains("active")) {
    console.log("Active class exists");
}
```

Returns:

```text
true
```

or:

```text
false
```

---

# 22. `className`

You can also change the complete class attribute using `className`.

HTML:

```html
<div id="box" class="box"></div>
```

JavaScript:

```javascript
box.className = "active";
```

Now:

```html
<div id="box" class="active"></div>
```

But remember:

```text
className
→ Replaces the complete class value
```

Whereas:

```text
classList.add()
→ Adds a class without removing existing classes
```

---

# 23. `className` vs `classList`

Suppose:

```html
<div id="box" class="box rounded"></div>
```

Using:

```javascript
box.className = "active";
```

Result:

```html
<div id="box" class="active"></div>
```

Old classes are gone.

But:

```javascript
box.classList.add("active");
```

Result:

```html
<div id="box" class="box rounded active"></div>
```

So for adding/removing individual classes, prefer `classList`.

---

# 24. Example: Dark Mode

HTML:

```html
<button id="btn">Dark Mode</button>

<div id="box">
    Hello JavaScript
</div>
```

CSS:

```css
.dark {
    background-color: black;
    color: white;
}
```

JavaScript:

```javascript
let button = document.querySelector("#btn");
let box = document.querySelector("#box");

button.addEventListener("click", function() {
    box.classList.toggle("dark");
});
```

Every click:

```text
Dark class missing
→ Add it

Dark class exists
→ Remove it
```

This is a real-world use of `classList.toggle()`.

---

# 25. Example: Hide and Show

CSS:

```css
.hidden {
    display: none;
}
```

HTML:

```html
<button id="btn">Show / Hide</button>

<p id="message">Hello JavaScript</p>
```

JavaScript:

```javascript
let button = document.querySelector("#btn");
let message = document.querySelector("#message");

button.addEventListener("click", function() {
    message.classList.toggle("hidden");
});
```

Now the paragraph can be shown and hidden.

---

# 26. `display`

You can directly change display:

```javascript
box.style.display = "none";
```

Show:

```javascript
box.style.display = "block";
```

But remember that the correct display value depends on the element/layout.

For example:

```javascript
box.style.display = "flex";
```

may be needed for a flex container.

---

# 27. `visibility`

Hide an element:

```javascript
box.style.visibility = "hidden";
```

Show it:

```javascript
box.style.visibility = "visible";
```

Difference:

```text
display: none
→ Element is removed from the layout

visibility: hidden
→ Element is hidden but its space remains
```

---

# 28. `opacity`

Change transparency:

```javascript
box.style.opacity = "0.5";
```

Fully visible:

```javascript
box.style.opacity = "1";
```

Invisible:

```javascript
box.style.opacity = "0";
```

Note:

`opacity: 0` makes the element transparent, but it can still occupy space and can still participate in interaction depending on other CSS.

---

# 29. Reading Inline Styles

You can read a style set directly through the `style` property.

```javascript
box.style.color = "red";

console.log(box.style.color);
```

Output:

```text
red
```

But if the color comes from an external CSS file, `element.style.color` may be empty.

---

# 30. `getComputedStyle()`

To get the **final computed CSS value**, use:

```javascript
let styles = getComputedStyle(box);

console.log(styles.color);
```

Example:

```javascript
let box = document.querySelector("#box");

let styles = getComputedStyle(box);

console.log(styles.backgroundColor);
console.log(styles.width);
```

This is useful when you want to know the actual style currently applied by the browser.

---

# 31. `style` vs `getComputedStyle()`

### `style`

Works mainly with inline styles:

```javascript
box.style.color
```

### `getComputedStyle()`

Returns the computed style after CSS rules are applied:

```javascript
getComputedStyle(box).color
```

Simple:

```text
style
→ Inline style

getComputedStyle()
→ Final computed style
```

---

# 32. Practical Example

HTML:

```html
<div id="box">Hello JavaScript</div>
```

CSS:

```css
.box {
    width: 300px;
    padding: 20px;
    border: 2px solid black;
}
```

JavaScript:

```javascript
let box = document.querySelector("#box");

box.classList.add("box");

box.style.backgroundColor = "lightblue";

box.style.color = "black";

box.style.textAlign = "center";
```

Here:

```text
CSS class
→ Handles general styling

JavaScript style
→ Changes dynamic styling
```

---

# 33. Best Practice

For small changes:

```javascript
box.style.color = "red";
```

is perfectly fine.

For larger groups of styles:

```css
.active {
    color: red;
    background-color: black;
}
```

Then:

```javascript
box.classList.add("active");
```

is usually cleaner.

A good general approach is:

```text
CSS
→ Design / Styling

JavaScript
→ Behavior / Logic
```

---

# Quick Revision

### Direct CSS

```javascript
element.style.color = "red";
element.style.backgroundColor = "black";
element.style.fontSize = "30px";
```

### Add class

```javascript
element.classList.add("active");
```

### Remove class

```javascript
element.classList.remove("active");
```

### Toggle class

```javascript
element.classList.toggle("active");
```

### Check class

```javascript
element.classList.contains("active");
```

### Replace all classes

```javascript
element.className = "active";
```

### Hide

```javascript
element.style.display = "none";
```

### Show

```javascript
element.style.display = "block";
```

### Get computed style

```javascript
getComputedStyle(element);
```

---

# Remember This

```text
style
   ↓
Direct inline CSS

classList
   ↓
Manage CSS classes

className
   ↓
Replace complete class value

getComputedStyle()
   ↓
Read final computed CSS
```

### Most Important Rule

```text
Small CSS change
→ style

Multiple / reusable styles
→ classList + CSS
```

---

## Next File

```text
10-DOM/06-DOM-Projects.md
```

Isme hum DOM ke concepts ko small practical projects mein use karenge, jaise:

```text
1. Change Text
2. Change Color
3. Show / Hide Element
4. Counter
5. Add / Remove List Items
6. Simple Dark Mode
```