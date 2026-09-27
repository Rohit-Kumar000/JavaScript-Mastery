# JavaScript DOM - Selecting Elements

## 1. What is Element Selection?

DOM mein **element selection** ka matlab hai HTML page se kisi element ko JavaScript ke through find karna.

Example:

```html
<h1 id="title">Hello Rohit</h1>
```

JavaScript:

```javascript
let heading = document.getElementById("title");
```

Now `heading` contains the selected `<h1>` element.

Simple:

```text
HTML Element
     ↓
JavaScript selects it
     ↓
We can modify it
```

---

# 2. Why Do We Need to Select Elements?

Element select karne ke baad hum uske saath different operations kar sakte hain:

```text
Change text
Change HTML
Change CSS
Change attributes
Add events
Remove element
Create new elements
```

Example:

```javascript
let heading = document.getElementById("title");

heading.textContent = "Welcome to JavaScript";
```

---

# 3. `getElementById()`

This method selects **one element by its `id`**.

HTML:

```html
<h1 id="title">Hello</h1>
```

JavaScript:

```javascript
let heading = document.getElementById("title");

console.log(heading);
```

---

# 4. ID Must Be Correct

HTML:

```html
<h1 id="title">Hello</h1>
```

Correct:

```javascript
document.getElementById("title");
```

Wrong:

```javascript
document.getElementById("Title");
```

Because IDs are case-sensitive.

---

# 5. `getElementById()` Returns One Element

Example:

```html
<h1 id="title">Hello</h1>
```

```javascript
let heading = document.getElementById("title");

console.log(heading);
```

You get the actual element.

You can directly modify it:

```javascript
heading.textContent = "Hello Rohit";
```

---

# 6. What If ID Doesn't Exist?

```javascript
let element = document.getElementById("abc");

console.log(element);
```

If no matching element exists:

```text
null
```

So:

```javascript
console.log(element.textContent);
```

would cause an error because `element` is `null`.

---

# 7. `getElementsByClassName()`

This method selects elements by their class name.

HTML:

```html
<p class="text">Hello</p>
<p class="text">JavaScript</p>
<p class="text">DOM</p>
```

JavaScript:

```javascript
let elements = document.getElementsByClassName("text");

console.log(elements);
```

It returns a **live HTMLCollection** containing all matching elements.

---

# 8. Accessing Elements from HTMLCollection

Because multiple elements can be returned, you can access them using an index.

```javascript
let elements = document.getElementsByClassName("text");

console.log(elements[0]);
console.log(elements[1]);
console.log(elements[2]);
```

Remember:

```text
Index starts from 0
```

So:

```text
elements[0] → First
elements[1] → Second
elements[2] → Third
```

---

# 9. Changing One Element

```javascript
let elements = document.getElementsByClassName("text");

elements[0].style.color = "red";
```

Only the first matching element changes.

---

# 10. Changing All Elements

You can use a loop:

```javascript
let elements = document.getElementsByClassName("text");

for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "red";
}
```

Now all matching elements become red.

---

# 11. `getElementsByTagName()`

This method selects elements by their HTML tag name.

Example:

```html
<p>Hello</p>
<p>JavaScript</p>
<p>DOM</p>
```

JavaScript:

```javascript
let paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);
```

It returns an **HTMLCollection** of all matching `<p>` elements.

---

# 12. Selecting Different Tags

For `<h1>`:

```javascript
document.getElementsByTagName("h1");
```

For `<div>`:

```javascript
document.getElementsByTagName("div");
```

For `<button>`:

```javascript
document.getElementsByTagName("button");
```

For all elements:

```javascript
document.getElementsByTagName("*");
```

---

# 13. `querySelector()`

`querySelector()` is one of the most useful DOM methods.

It selects the **first element that matches a CSS selector**.

Example:

```html
<h1 class="title">Hello</h1>
<h1 class="title">JavaScript</h1>
```

JavaScript:

```javascript
let heading = document.querySelector(".title");

console.log(heading);
```

Only the first `.title` is selected.

---

# 14. Selecting by ID with `querySelector()`

HTML:

```html
<h1 id="title">Hello</h1>
```

JavaScript:

```javascript
let heading = document.querySelector("#title");
```

Important:

```text
# → ID
. → Class
```

---

# 15. Selecting by Class

HTML:

```html
<p class="text">Hello</p>
```

JavaScript:

```javascript
let paragraph = document.querySelector(".text");
```

---

# 16. Selecting by Tag

HTML:

```html
<p>Hello</p>
```

JavaScript:

```javascript
let paragraph = document.querySelector("p");
```

It selects the first `<p>`.

---

# 17. `querySelector()` with Multiple Matches

HTML:

```html
<p class="text">One</p>
<p class="text">Two</p>
<p class="text">Three</p>
```

```javascript
let paragraph = document.querySelector(".text");

console.log(paragraph.textContent);
```

Output:

```text
One
```

Only the **first matching element** is returned.

---

# 18. `querySelectorAll()`

`querySelectorAll()` selects **all elements matching a CSS selector**.

Example:

```html
<p class="text">One</p>
<p class="text">Two</p>
<p class="text">Three</p>
```

JavaScript:

```javascript
let paragraphs = document.querySelectorAll(".text");

console.log(paragraphs);
```

It returns a **NodeList** containing all matching elements.

---

# 19. Accessing NodeList Elements

```javascript
let paragraphs = document.querySelectorAll(".text");

console.log(paragraphs[0]);
console.log(paragraphs[1]);
console.log(paragraphs[2]);
```

Again:

```text
Index starts from 0
```

---

# 20. Looping Through `querySelectorAll()`

A `NodeList` returned by `querySelectorAll()` supports `forEach()`.

```javascript
let paragraphs = document.querySelectorAll(".text");

paragraphs.forEach(function(element) {
    element.style.color = "blue";
});
```

All matching elements become blue.

---

# 21. `querySelector()` vs `querySelectorAll()`

```text
querySelector()
→ First matching element

querySelectorAll()
→ All matching elements
```

Example:

```javascript
document.querySelector(".text");
```

Returns:

```text
First .text
```

While:

```javascript
document.querySelectorAll(".text");
```

Returns:

```text
All .text elements
```

---

# 22. CSS Selectors with `querySelector()`

Because `querySelector()` uses CSS selectors, you can use different patterns.

### ID

```javascript
document.querySelector("#title");
```

### Class

```javascript
document.querySelector(".text");
```

### Tag

```javascript
document.querySelector("p");
```

### Multiple selectors

```javascript
document.querySelector("h1, p");
```

This selects the first matching `h1` or `p`.

---

# 23. Descendant Selector

HTML:

```html
<div class="container">
    <p>Hello</p>
</div>
```

JavaScript:

```javascript
let paragraph = document.querySelector(".container p");
```

This means:

```text
Find a p inside .container
```

---

# 24. Child Selector

HTML:

```html
<div class="container">
    <p>Hello</p>
</div>
```

JavaScript:

```javascript
let paragraph = document.querySelector(".container > p");
```

`>` means **direct child**.

---

# 25. Attribute Selector

HTML:

```html
<input type="text">
<input type="password">
```

Select text input:

```javascript
let input = document.querySelector('input[type="text"]');
```

CSS selector syntax works here because `querySelector()` accepts CSS selectors.

---

# 26. Selecting from a Specific Element

You don't always have to search the entire document.

Example:

```html
<div id="container">
    <p>Hello</p>
    <p>JavaScript</p>
</div>
```

First select the container:

```javascript
let container = document.getElementById("container");
```

Then search inside it:

```javascript
let paragraph = container.querySelector("p");
```

This searches for the first `<p>` inside `container`.

---

# 27. `querySelectorAll()` Inside an Element

```javascript
let container = document.getElementById("container");

let paragraphs = container.querySelectorAll("p");
```

Now only `<p>` elements inside `container` are selected.

---

# 28. HTMLCollection vs NodeList

This is important.

### `getElementsByClassName()`

Returns:

```text
HTMLCollection
```

### `getElementsByTagName()`

Returns:

```text
HTMLCollection
```

### `querySelectorAll()`

Returns:

```text
NodeList
```

Simple table:

| Method | Result |
|---|---|
| `getElementById()` | Element / `null` |
| `getElementsByClassName()` | HTMLCollection |
| `getElementsByTagName()` | HTMLCollection |
| `querySelector()` | Element / `null` |
| `querySelectorAll()` | NodeList |

---

# 29. Live vs Static Collections

This is an important concept.

`getElementsByClassName()` and `getElementsByTagName()` return **live HTMLCollections**.

That means the collection can automatically reflect changes to the DOM.

Example:

```javascript
let items = document.getElementsByClassName("item");
```

If matching elements are added or removed later, the collection can update.

---

`querySelectorAll()` returns a **static NodeList**.

```javascript
let items = document.querySelectorAll(".item");
```

The returned NodeList does not automatically update when the DOM changes later.

For beginner-level work, just remember:

```text
getElementsBy...
→ Live HTMLCollection

querySelectorAll()
→ Static NodeList
```

---

# 30. Which Method Should You Use?

### Need one element by ID?

Use:

```javascript
document.getElementById("title");
```

### Need first matching element?

Use:

```javascript
document.querySelector(".title");
```

### Need all matching elements?

Use:

```javascript
document.querySelectorAll(".title");
```

### Need elements by class?

You can use:

```javascript
document.getElementsByClassName("title");
```

or:

```javascript
document.querySelectorAll(".title");
```

### Need elements by tag?

You can use:

```javascript
document.getElementsByTagName("p");
```

or:

```javascript
document.querySelectorAll("p");
```

---

# 31. Common Beginner Mistake

Wrong:

```javascript
document.getElementsByClassName("text").style.color = "red";
```

Why?

Because `getElementsByClassName()` can return multiple elements.

You need to access an individual element:

```javascript
let elements = document.getElementsByClassName("text");

elements[0].style.color = "red";
```

Or loop:

```javascript
for (let element of elements) {
    element.style.color = "red";
}
```

---

# 32. Another Common Mistake

Wrong:

```javascript
document.querySelectorAll(".text").style.color = "red";
```

`querySelectorAll()` returns multiple elements.

Correct:

```javascript
let elements = document.querySelectorAll(".text");

elements.forEach(function(element) {
    element.style.color = "red";
});
```

---

# 33. Quick Example

HTML:

```html
<h1 id="title">JavaScript</h1>

<p class="text">HTML</p>
<p class="text">CSS</p>
<p class="text">JavaScript</p>

<button>Click Me</button>
```

JavaScript:

```javascript
let title = document.getElementById("title");

let paragraphs = document.querySelectorAll(".text");

title.style.color = "red";

paragraphs.forEach(function(paragraph) {
    paragraph.style.color = "blue";
});
```

Result:

```text
h1 → Red

All .text paragraphs → Blue
```

---

# Important Points

```text
getElementById()
→ Select one element by ID

getElementsByClassName()
→ Select elements by class
→ HTMLCollection

getElementsByTagName()
→ Select elements by tag
→ HTMLCollection

querySelector()
→ First matching CSS selector

querySelectorAll()
→ All matching CSS selectors
→ NodeList
```

Remember:

```text
#id       → ID
.class    → Class
tag       → Tag
```

---

# Quick Revision

```javascript
document.getElementById("title");
```

```text
One element by ID
```

```javascript
document.getElementsByClassName("text");
```

```text
All matching classes
```

```javascript
document.getElementsByTagName("p");
```

```text
All matching tags
```

```javascript
document.querySelector(".text");
```

```text
First matching element
```

```javascript
document.querySelectorAll(".text");
```

```text
All matching elements
```

### Most Important Difference

```text
querySelector()
       ↓
First match

querySelectorAll()
       ↓
All matches
```

### Remember This Flow

```text
document
   ↓
Select Element
   ↓
Store in Variable
   ↓
Modify Element
```

Example:

```javascript
let heading = document.querySelector("#title");

heading.textContent = "Hello Rohit";
```

**Next file:**

```text
10-DOM/03-Changing-Elements.md
```

Isme hum sikhenge:

```text
textContent
innerHTML
innerText
style
classList
createElement
append
appendChild
remove
```