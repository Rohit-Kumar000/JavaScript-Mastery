# JavaScript DOM - Attributes

## 1. What is an Attribute?

HTML element ke andar jo extra information di jaati hai, usse **attribute** kehte hain.

Example:

```html
<img src="photo.jpg" alt="Profile Photo">
```

Yahan:

```text
src  → Attribute
alt  → Attribute
```

Another example:

```html
<input id="username" class="input-box" type="text">
```

Yahan:

```text
id
class
type
```

sab attributes hain.

---

# 2. Why Do We Use Attributes?

JavaScript se hum attributes ko:

```text
Read
Change
Add
Remove
Check
```

kar sakte hain.

Example:

```javascript
let image = document.querySelector("img");

image.setAttribute("src", "new.jpg");
```

---

# 3. `getAttribute()`

`getAttribute()` kisi element ka attribute **read** karne ke liye use hota hai.

HTML:

```html
<img id="photo" src="profile.jpg">
```

JavaScript:

```javascript
let image = document.querySelector("#photo");

console.log(image.getAttribute("src"));
```

Output:

```text
profile.jpg
```

---

# 4. Getting Different Attributes

HTML:

```html
<a id="link" href="https://example.com" class="website">
    Visit
</a>
```

JavaScript:

```javascript
let link = document.querySelector("#link");

console.log(link.getAttribute("href"));
console.log(link.getAttribute("class"));
console.log(link.getAttribute("id"));
```

Output:

```text
https://example.com
website
link
```

---

# 5. `setAttribute()`

`setAttribute()` kisi attribute ko **add ya change** karne ke liye use hota hai.

Syntax:

```javascript
element.setAttribute("attribute", "value");
```

Example:

```javascript
let image = document.querySelector("img");

image.setAttribute("src", "new-image.jpg");
```

Now:

```html
<img src="new-image.jpg">
```

---

# 6. Changing `href`

HTML:

```html
<a id="link" href="https://google.com">
    Google
</a>
```

JavaScript:

```javascript
let link = document.querySelector("#link");

link.setAttribute("href", "https://github.com");
```

Now the link points to GitHub.

---

# 7. Changing `src`

HTML:

```html
<img id="photo" src="old.jpg">
```

JavaScript:

```javascript
let image = document.querySelector("#photo");

image.setAttribute("src", "new.jpg");
```

The image source changes.

---

# 8. Adding an Attribute

Suppose:

```html
<p id="message">Hello</p>
```

We can add an attribute:

```javascript
let message = document.querySelector("#message");

message.setAttribute("title", "This is a message");
```

Now:

```html
<p id="message" title="This is a message">
    Hello
</p>
```

---

# 9. `removeAttribute()`

`removeAttribute()` removes an attribute.

HTML:

```html
<input id="username" disabled>
```

JavaScript:

```javascript
let input = document.querySelector("#username");

input.removeAttribute("disabled");
```

Now the input is enabled.

---

# 10. `hasAttribute()`

`hasAttribute()` checks whether an attribute exists.

Example:

```html
<input id="username" disabled>
```

JavaScript:

```javascript
let input = document.querySelector("#username");

console.log(input.hasAttribute("disabled"));
```

Output:

```text
true
```

If the attribute doesn't exist:

```javascript
console.log(input.hasAttribute("class"));
```

Output may be:

```text
false
```

---

# 11. `getAttribute()` vs `setAttribute()`

Remember:

```text
getAttribute()
→ Get / Read

setAttribute()
→ Add / Change

removeAttribute()
→ Remove

hasAttribute()
→ Check
```

Example:

```javascript
let image = document.querySelector("img");

image.getAttribute("src");

image.setAttribute("src", "new.jpg");

image.hasAttribute("src");

image.removeAttribute("src");
```

---

# 12. Working with `id`

HTML:

```html
<h1 id="title">Hello</h1>
```

Get ID:

```javascript
let heading = document.querySelector("h1");

console.log(heading.getAttribute("id"));
```

Change ID:

```javascript
heading.setAttribute("id", "main-title");
```

Remove ID:

```javascript
heading.removeAttribute("id");
```

---

# 13. Working with `class`

HTML:

```html
<div class="box">Hello</div>
```

Get class:

```javascript
let box = document.querySelector("div");

console.log(box.getAttribute("class"));
```

Change class:

```javascript
box.setAttribute("class", "container");
```

Now:

```html
<div class="container">
    Hello
</div>
```

---

# 14. `class` vs `classList`

There are two common ways to work with classes.

### `className`

```javascript
box.className = "container";
```

### `classList`

```javascript
box.classList.add("container");
```

`classList` is usually better when you want to add/remove individual classes.

Example:

```html
<div class="box active"></div>
```

With `className`:

```javascript
box.className = "container";
```

This replaces the existing classes.

With `classList`:

```javascript
box.classList.add("container");
```

Existing classes remain.

Result:

```html
<div class="box active container"></div>
```

---

# 15. Boolean Attributes

Some HTML attributes work like on/off switches.

Examples:

```text
disabled
checked
selected
required
readonly
multiple
```

Example:

```html
<button id="btn" disabled>Submit</button>
```

The button is disabled.

Remove:

```javascript
let button = document.querySelector("#btn");

button.removeAttribute("disabled");
```

Now the button becomes enabled.

---

# 16. `checked`

HTML:

```html
<input type="checkbox" id="agree" checked>
```

Check whether the attribute exists:

```javascript
let checkbox = document.querySelector("#agree");

console.log(checkbox.hasAttribute("checked"));
```

But when working with the checkbox's **current state**, the `checked` property is often more useful:

```javascript
console.log(checkbox.checked);
```

It returns:

```text
true
```

or:

```text
false
```

---

# 17. Attribute vs Property

This is an important concept.

HTML:

```html
<input id="name" value="Rohit">
```

`value` is an HTML attribute.

You can read the attribute:

```javascript
let input = document.querySelector("#name");

console.log(input.getAttribute("value"));
```

You can also read the current property:

```javascript
console.log(input.value);
```

They can differ after the user changes the input.

Simple rule:

```text
Attribute
→ HTML markup information

Property
→ Current value/state on the DOM object
```

---

# 18. Input `value`

For form elements, you will often use:

```javascript
input.value
```

Example:

```html
<input id="username" type="text">
```

JavaScript:

```javascript
let input = document.querySelector("#username");

input.value = "Rohit";
```

The input now contains:

```text
Rohit
```

You can read it:

```javascript
console.log(input.value);
```

---

# 19. `disabled` Property

Instead of:

```javascript
button.setAttribute("disabled", "");
```

you can use:

```javascript
button.disabled = true;
```

Enable:

```javascript
button.disabled = false;
```

This is often more convenient for boolean states.

---

# 20. `checked` Property

For a checkbox:

```javascript
checkbox.checked = true;
```

Uncheck:

```javascript
checkbox.checked = false;
```

Example:

```javascript
let checkbox = document.querySelector("#agree");

console.log(checkbox.checked);
```

---

# 21. Common HTML Attributes

You will frequently work with:

```text
id
class
src
href
alt
title
value
type
placeholder
disabled
checked
required
```

Examples:

```html
<img src="image.jpg" alt="Profile">

<a href="https://github.com">GitHub</a>

<input type="text" placeholder="Enter name">

<button disabled>Submit</button>
```

---

# 22. Changing Placeholder

HTML:

```html
<input id="username" placeholder="Enter username">
```

JavaScript:

```javascript
let input = document.querySelector("#username");

input.setAttribute("placeholder", "Enter your name");
```

---

# 23. Changing `alt`

HTML:

```html
<img id="photo" src="photo.jpg" alt="Old text">
```

JavaScript:

```javascript
let image = document.querySelector("#photo");

image.setAttribute("alt", "Profile photo");
```

---

# 24. Changing Multiple Attributes

```javascript
let image = document.querySelector("#photo");

image.setAttribute("src", "profile.jpg");
image.setAttribute("alt", "Rohit's profile photo");
image.setAttribute("title", "Profile");
```

---

# 25. Example: Change Link

HTML:

```html
<a id="link" href="https://google.com">
    Open Website
</a>
```

JavaScript:

```javascript
let link = document.querySelector("#link");

link.setAttribute("href", "https://github.com");

link.setAttribute("target", "_blank");
```

Now the link:

- Opens GitHub
- Opens in a new tab

---

# 26. Example: Enable / Disable Button

HTML:

```html
<button id="btn" disabled>Submit</button>
```

JavaScript:

```javascript
let button = document.querySelector("#btn");

button.disabled = false;
```

Now the button is enabled.

To disable again:

```javascript
button.disabled = true;
```

---

# 27. Example: Change Image

HTML:

```html
<img id="photo" src="image1.jpg" alt="Image">
```

JavaScript:

```javascript
let image = document.querySelector("#photo");

image.setAttribute("src", "image2.jpg");
```

The image changes from `image1.jpg` to `image2.jpg`.

---

# 28. Example: Get User Input

HTML:

```html
<input id="username" type="text">
```

JavaScript:

```javascript
let input = document.querySelector("#username");

console.log(input.value);
```

If user enters:

```text
Rohit
```

Output:

```text
Rohit
```

This is very commonly used with forms.

---

# 29. Important Difference

### `getAttribute()`

Reads the HTML attribute:

```javascript
input.getAttribute("value");
```

### Property

Reads the current DOM state/value:

```javascript
input.value;
```

For form controls, properties like:

```text
value
checked
disabled
selected
```

are often the more useful choice for current state.

---

# 30. Quick Revision

```javascript
element.getAttribute("name");
```

```text
→ Get attribute
```

```javascript
element.setAttribute("name", "value");
```

```text
→ Add / change attribute
```

```javascript
element.removeAttribute("name");
```

```text
→ Remove attribute
```

```javascript
element.hasAttribute("name");
```

```text
→ Check attribute
```

Common properties:

```javascript
input.value;
checkbox.checked;
button.disabled;
```

---

# Remember

```text
HTML Attribute
      ↓
getAttribute()
      ↓
Read

setAttribute()
      ↓
Add / Change

removeAttribute()
      ↓
Remove

hasAttribute()
      ↓
Check
```

For form elements:

```text
value
checked
disabled
selected
```

are commonly accessed as DOM properties.

---

## Next File

```text
10-DOM/05-Styles.md
```

Next we will learn how to handle CSS properly with JavaScript:

```text
style
className
classList
add()
remove()
toggle()
contains()
```