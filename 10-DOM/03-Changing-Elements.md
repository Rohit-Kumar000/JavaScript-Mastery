# JavaScript DOM - Changing Elements

## 1. What Does "Changing Elements" Mean?

DOM mein element select karne ke baad hum uske content, style, classes aur structure ko JavaScript se change kar sakte hain.

Basic flow:

```text
Select Element
      ↓
Store in Variable
      ↓
Change Element
```

Example:

```javascript
let heading = document.querySelector("#title");

heading.textContent = "Hello JavaScript";
```

---

# 2. `textContent`

`textContent` element ke andar ka text **get ya change** karne ke liye use hota hai.

HTML:

```html
<h1 id="title">Hello</h1>
```

JavaScript:

```javascript
let heading = document.querySelector("#title");

heading.textContent = "Hello Rohit";
```

Output:

```text
Hello Rohit
```

---

# 3. Getting Text with `textContent`

```javascript
let heading = document.querySelector("#title");

console.log(heading.textContent);
```

If HTML is:

```html
<h1 id="title">Hello Rohit</h1>
```

Output:

```text
Hello Rohit
```

---

# 4. `innerHTML`

`innerHTML` element ke andar ka **HTML content** get ya change karta hai.

Example:

```html
<div id="box"></div>
```

JavaScript:

```javascript
let box = document.querySelector("#box");

box.innerHTML = "<h2>Hello Rohit</h2>";
```

Now the DOM contains:

```html
<div id="box">
    <h2>Hello Rohit</h2>
</div>
```

---

# 5. `textContent` vs `innerHTML`

This difference is very important.

### textContent

```javascript
box.textContent = "<h2>Hello</h2>";
```

Browser treats it as plain text.

Output:

```text
<h2>Hello</h2>
```

### innerHTML

```javascript
box.innerHTML = "<h2>Hello</h2>";
```

Browser interprets it as HTML.

Output:

```text
Hello
```

Remember:

```text
textContent → Text
innerHTML   → HTML
```

---

# 6. `innerText`

`innerText` returns or changes the **visible text** of an element.

Example:

```html
<p id="message">Hello Rohit</p>
```

```javascript
let message = document.querySelector("#message");

console.log(message.innerText);
```

Output:

```text
Hello Rohit
```

You can also change it:

```javascript
message.innerText = "Hello JavaScript";
```

---

# 7. `textContent` vs `innerText`

They can look similar, but they are not exactly the same.

Suppose:

```html
<div id="box">
    Hello
    <span style="display: none;">Hidden Text</span>
</div>
```

`textContent` can include hidden text:

```javascript
console.log(box.textContent);
```

While `innerText` generally represents the text as rendered/visible to the user:

```javascript
console.log(box.innerText);
```

Simple rule:

```text
textContent → Text in DOM
innerText   → Visible/rendered text
```

For most basic DOM manipulation, `textContent` is a good default when you only need to work with text.

---

# 8. Changing CSS with `style`

JavaScript can directly change inline styles.

HTML:

```html
<h1 id="title">Hello</h1>
```

JavaScript:

```javascript
let heading = document.querySelector("#title");

heading.style.color = "red";
```

---

# 9. Changing Multiple CSS Properties

```javascript
heading.style.color = "blue";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "30px";
heading.style.textAlign = "center";
```

---

# 10. CSS Property Naming

CSS normally uses kebab-case:

```css
background-color
font-size
margin-top
```

JavaScript uses camelCase:

```javascript
backgroundColor
fontSize
marginTop
```

Example:

```javascript
heading.style.backgroundColor = "black";
heading.style.fontSize = "40px";
heading.style.marginTop = "20px";
```

---

# 11. Changing Classes with `className`

Suppose:

```html
<h1 id="title" class="heading">Hello</h1>
```

JavaScript:

```javascript
let heading = document.querySelector("#title");

console.log(heading.className);
```

Output:

```text
heading
```

You can replace the class:

```javascript
heading.className = "main-heading";
```

Now:

```html
<h1 id="title" class="main-heading">Hello</h1>
```

---

# 12. `classList`

`classList` is generally more useful than replacing `className`.

It allows us to:

```text
add
remove
toggle
check
```

classes.

---

# 13. `classList.add()`

HTML:

```html
<h1 id="title">Hello</h1>
```

JavaScript:

```javascript
let heading = document.querySelector("#title");

heading.classList.add("active");
```

Now:

```html
<h1 id="title" class="active">Hello</h1>
```

---

# 14. Adding Multiple Classes

```javascript
heading.classList.add("active", "large", "highlight");
```

Multiple classes can be added at once.

---

# 15. `classList.remove()`

Remove a class:

```javascript
heading.classList.remove("active");
```

---

# 16. `classList.toggle()`

`toggle()` is very useful.

If the class exists:

```text
Remove it
```

If the class doesn't exist:

```text
Add it
```

Example:

```javascript
heading.classList.toggle("active");
```

So:

```text
active exists
→ remove active

active doesn't exist
→ add active
```

This is commonly used for:

- Dark mode
- Menus
- Buttons
- Show/hide sections
- Active states

---

# 17. `classList.contains()`

Check whether an element contains a class.

```javascript
if (heading.classList.contains("active")) {
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

# 18. Creating a New Element

JavaScript can create new HTML elements.

```javascript
let paragraph = document.createElement("p");
```

Now JavaScript has created a `<p>` element.

But it is not yet visible on the page.

---

# 19. Adding Text to a New Element

```javascript
let paragraph = document.createElement("p");

paragraph.textContent = "This paragraph was created using JavaScript";
```

Now the element contains text.

But we still need to add it to the DOM.

---

# 20. `appendChild()`

Suppose HTML:

```html
<div id="container"></div>
```

JavaScript:

```javascript
let container = document.querySelector("#container");

let paragraph = document.createElement("p");

paragraph.textContent = "Hello JavaScript";

container.appendChild(paragraph);
```

Result:

```html
<div id="container">
    <p>Hello JavaScript</p>
</div>
```

---

# 21. `append()`

`append()` can also add content to an element.

```javascript
container.append(paragraph);
```

It can also add text directly:

```javascript
container.append("Hello");
```

And multiple values:

```javascript
container.append("Hello", paragraph);
```

---

# 22. `append()` vs `appendChild()`

### appendChild()

```javascript
container.appendChild(paragraph);
```

Mainly appends a **Node/element**.

### append()

```javascript
container.append(paragraph);
container.append("Hello");
```

Can append:

- Elements
- Text
- Multiple items

Simple:

```text
appendChild()
→ Node

append()
→ Node + Text + Multiple items
```

---

# 23. `prepend()`

`prepend()` adds content at the beginning.

```javascript
container.prepend(paragraph);
```

Example:

```html
<div id="container">
    <p>Old Paragraph</p>
</div>
```

After:

```javascript
container.prepend(paragraph);
```

The new paragraph comes before the old paragraph.

---

# 24. `remove()`

An element can remove itself from the DOM.

HTML:

```html
<p id="message">Hello</p>
```

JavaScript:

```javascript
let message = document.querySelector("#message");

message.remove();
```

The `<p>` is removed.

---

# 25. `removeChild()`

A parent can also remove one of its children.

HTML:

```html
<div id="container">
    <p id="message">Hello</p>
</div>
```

JavaScript:

```javascript
let container = document.querySelector("#container");
let message = document.querySelector("#message");

container.removeChild(message);
```

The paragraph is removed from the container.

---

# 26. `remove()` vs `removeChild()`

### remove()

```javascript
message.remove();
```

The element removes itself.

### removeChild()

```javascript
container.removeChild(message);
```

The parent removes its child.

Simple:

```text
element.remove()
→ Remove itself

parent.removeChild(child)
→ Parent removes child
```

---

# 27. Creating and Adding an Element

A very common pattern:

```javascript
let li = document.createElement("li");

li.textContent = "JavaScript";

let list = document.querySelector("#list");

list.append(li);
```

HTML:

```html
<ul id="list"></ul>
```

Result:

```html
<ul id="list">
    <li>JavaScript</li>
</ul>
```

---

# 28. Creating Multiple Elements

```javascript
let list = document.querySelector("#list");

for (let i = 1; i <= 3; i++) {

    let li = document.createElement("li");

    li.textContent = "Item " + i;

    list.append(li);
}
```

Result:

```text
Item 1
Item 2
Item 3
```

---

# 29. Changing Content and Style Together

HTML:

```html
<h1 id="title">Old Heading</h1>
```

JavaScript:

```javascript
let heading = document.querySelector("#title");

heading.textContent = "New Heading";

heading.style.color = "red";

heading.style.fontSize = "40px";

heading.classList.add("active");
```

One element can be modified in multiple ways.

---

# 30. Example: Change Button Text

HTML:

```html
<button id="btn">Click Me</button>
```

JavaScript:

```javascript
let button = document.querySelector("#btn");

button.textContent = "Clicked!";
```

---

# 31. Example: Hide an Element

```javascript
let box = document.querySelector("#box");

box.style.display = "none";
```

Now the element is hidden.

To show it again:

```javascript
box.style.display = "block";
```

Note:

The correct display value depends on the element and your CSS layout. For example, a flex container may need:

```javascript
box.style.display = "flex";
```

---

# 32. Better Way to Show/Hide Using Classes

HTML:

```html
<div id="box" class="hidden">Hello</div>
```

CSS:

```css
.hidden {
    display: none;
}
```

JavaScript:

```javascript
let box = document.querySelector("#box");

box.classList.remove("hidden");
```

To hide:

```javascript
box.classList.add("hidden");
```

This approach is often cleaner because the styling stays in CSS.

---

# 33. `replaceWith()`

An element can be replaced with another element.

```javascript
let oldHeading = document.querySelector("#title");

let newHeading = document.createElement("h2");

newHeading.textContent = "New Heading";

oldHeading.replaceWith(newHeading);
```

The old element is replaced by the new one.

---

# 34. `before()` and `after()`

Suppose:

```html
<p id="message">Hello</p>
```

Create another element:

```javascript
let newText = document.createElement("p");

newText.textContent = "New Paragraph";

let message = document.querySelector("#message");
```

Before:

```javascript
message.before(newText);
```

After:

```javascript
message.after(newText);
```

---

# 35. Important DOM Methods

### Content

```javascript
element.textContent
element.innerText
element.innerHTML
```

### CSS

```javascript
element.style.color
element.style.backgroundColor
element.style.fontSize
```

### Classes

```javascript
element.classList.add()
element.classList.remove()
element.classList.toggle()
element.classList.contains()
```

### Creating

```javascript
document.createElement()
```

### Adding

```javascript
element.append()
element.appendChild()
element.prepend()
```

### Removing

```javascript
element.remove()
element.removeChild()
```

### Replacing

```javascript
element.replaceWith()
```

---

# 36. Complete Example

HTML:

```html
<div id="container">
    <h1 id="title">Old Title</h1>
</div>
```

JavaScript:

```javascript
let container = document.querySelector("#container");

let title = document.querySelector("#title");

title.textContent = "JavaScript DOM";

title.style.color = "blue";

title.classList.add("active");

let paragraph = document.createElement("p");

paragraph.textContent = "Learning DOM manipulation";

container.append(paragraph);
```

Result:

```text
JavaScript DOM
Learning DOM manipulation
```

The heading's text, style and class were changed, and a new paragraph was created and added.

---

# Important Points

```text
textContent
→ Change/get text

innerHTML
→ Change/get HTML

innerText
→ Work with visible/rendered text

style
→ Change inline CSS

classList
→ Manage CSS classes

createElement()
→ Create new element

append()
→ Add content at the end

appendChild()
→ Add a Node at the end

prepend()
→ Add content at the beginning

remove()
→ Remove element

removeChild()
→ Parent removes child

replaceWith()
→ Replace element
```

---

# Quick Revision

```javascript
let heading = document.querySelector("#title");
```

### Change text

```javascript
heading.textContent = "Hello JavaScript";
```

### Change HTML

```javascript
heading.innerHTML = "<span>Hello</span>";
```

### Change CSS

```javascript
heading.style.color = "red";
```

### Add class

```javascript
heading.classList.add("active");
```

### Remove class

```javascript
heading.classList.remove("active");
```

### Toggle class

```javascript
heading.classList.toggle("active");
```

### Create element

```javascript
let p = document.createElement("p");
```

### Add element

```javascript
container.append(p);
```

### Remove element

```javascript
p.remove();
```

---

# Remember This Flow

```text
Select
  ↓
Modify
  ↓
Create
  ↓
Add
  ↓
Remove / Replace
```

Example:

```javascript
let box = document.querySelector("#box");

box.textContent = "Hello";

let p = document.createElement("p");

p.textContent = "New Paragraph";

box.append(p);
```

This is the basic foundation of **DOM Manipulation**.

---

## Next File

```text
10-DOM/04-Attributes.md
```

Next we will learn:

```text
getAttribute()
setAttribute()
removeAttribute()
hasAttribute()

id
class
src
href
value
```