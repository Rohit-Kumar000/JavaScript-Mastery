# JavaScript Form Events

## 1. What are Form Events?

Forms mein user:

```text
Type karta hai
Select karta hai
Focus karta hai
Submit karta hai
```

JavaScript in actions ko events ke through handle kar sakti hai.

Common form events:

```text
input
change
focus
blur
submit
```

---

# 2. Reading Input Value

HTML:

```html
<input id="name" type="text">
```

JavaScript:

```javascript
let input = document.querySelector("#name");

console.log(input.value);
```

`.value` se input ke andar ki current value milti hai.

---

# 3. Input Event

`input` event tab run hota hai jab user input ki value change karta hai.

```javascript
let input = document.querySelector("#name");

input.addEventListener("input", function() {
    console.log(input.value);
});
```

Agar user type kare:

```text
R
Ro
Roh
Rohi
Rohit
```

event har change par run hoga.

---

# 4. Input Event Example

HTML:

```html
<input id="name" type="text">

<p id="result"></p>
```

JavaScript:

```javascript
let input = document.querySelector("#name");
let result = document.querySelector("#result");

input.addEventListener("input", function() {
    result.textContent = input.value;
});
```

Ab user jo type karega, wahi paragraph mein live show hoga.

---

# 5. `change` Event

`change` event tab fire hota hai jab value change hokar commit ho jati hai.

Example:

```javascript
input.addEventListener("change", function() {
    console.log("Value changed");
});
```

Text input mein ye commonly tab fire hota hai jab user value change karke input se bahar chala jata hai.

---

# 6. `input` vs `change`

```text
input
→ Value change hote hi run

change
→ Value change commit hone par run
```

Example:

```javascript
input.addEventListener("input", function() {
    console.log("Typing...");
});
```

Useful for:

```text
Live search
Character counter
Live preview
```

`change` useful ho sakta hai:

```text
Dropdown
Checkbox
Radio buttons
Form controls
```

---

# 7. Focus Event

`focus` tab run hota hai jab user input par click karta hai ya keyboard se usse focus karta hai.

```javascript
input.addEventListener("focus", function() {
    console.log("Input focused");
});
```

Example:

```javascript
input.addEventListener("focus", function() {
    input.style.border = "2px solid blue";
});
```

---

# 8. Blur Event

`blur` tab run hota hai jab input focus lose karta hai.

```javascript
input.addEventListener("blur", function() {
    console.log("Input lost focus");
});
```

Example:

```javascript
input.addEventListener("blur", function() {
    input.style.border = "1px solid gray";
});
```

---

# 9. Focus vs Blur

Simple:

```text
focus
→ Input mein aaye

blur
→ Input se bahar jaye
```

Example:

```javascript
input.addEventListener("focus", function() {
    console.log("Started editing");
});

input.addEventListener("blur", function() {
    console.log("Stopped editing");
});
```

---

# 10. Form Submit Event

HTML:

```html
<form id="form">

    <input id="name" type="text">

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

---

# 11. Why `preventDefault()`?

Form submit hone par browser apna default action perform kar sakta hai.

JavaScript application mein hum aksar khud form ko handle karna chahte hain.

Isliye:

```javascript
event.preventDefault();
```

use karte hain.

It stops the browser's default form submission behavior.

---

# 12. Getting Form Data

HTML:

```html
<form id="form">

    <input id="name" type="text">

    <input id="email" type="email">

    <button type="submit">Submit</button>

</form>
```

JavaScript:

```javascript
let form = document.querySelector("#form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;

    console.log(name);
    console.log(email);

});
```

---

# 13. Form Example

HTML:

```html
<form id="form">

    <input id="name" type="text" placeholder="Enter name">

    <button type="submit">Submit</button>

</form>

<p id="result"></p>
```

JavaScript:

```javascript
let form = document.querySelector("#form");
let nameInput = document.querySelector("#name");
let result = document.querySelector("#result");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    result.textContent = "Hello " + nameInput.value;

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

# 14. Checking Empty Input

We can check whether the user entered anything.

```javascript
form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (nameInput.value === "") {
        console.log("Please enter your name");
        return;
    }

    console.log("Form submitted");

});
```

---

# 15. Using `trim()`

Sometimes user may enter only spaces:

```text
"     "
```

We can remove extra spaces from the beginning and end:

```javascript
let name = nameInput.value.trim();
```

Then:

```javascript
if (name === "") {
    console.log("Name is required");
}
```

This is better than checking only:

```javascript
nameInput.value === ""
```

---

# 16. Required Input

HTML itself can also provide basic validation.

```html
<input
    id="name"
    type="text"
    required
>
```

Now the browser can prevent submission when the field is empty.

---

# 17. Email Input

HTML:

```html
<input
    id="email"
    type="email"
    required
>
```

The browser can perform basic email-format validation when the form is submitted.

---

# 18. Password Input

```html
<input
    id="password"
    type="password"
>
```

The typed text is hidden visually.

To read it:

```javascript
let password = document.querySelector("#password");

console.log(password.value);
```

---

# 19. Checkbox

HTML:

```html
<input id="terms" type="checkbox">
<label for="terms">I agree</label>
```

Check whether it is selected:

```javascript
let terms = document.querySelector("#terms");

console.log(terms.checked);
```

Result:

```text
true
```

or:

```text
false
```

---

# 20. Checkbox Example

```javascript
form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (!terms.checked) {
        console.log("Please accept the terms");
        return;
    }

    console.log("Form submitted");

});
```

---

# 21. Radio Buttons

HTML:

```html
<input type="radio" name="gender" value="male">
Male

<input type="radio" name="gender" value="female">
Female
```

Radio buttons with the same `name` belong to the same group.

To find the selected value:

```javascript
let selected = document.querySelector(
    'input[name="gender"]:checked'
);

if (selected) {
    console.log(selected.value);
}
```

---

# 22. Select / Dropdown

HTML:

```html
<select id="city">

    <option value="mohali">Mohali</option>
    <option value="chandigarh">Chandigarh</option>
    <option value="delhi">Delhi</option>

</select>
```

JavaScript:

```javascript
let city = document.querySelector("#city");

console.log(city.value);
```

If Chandigarh is selected:

```text
chandigarh
```

---

# 23. Select Change Event

```javascript
city.addEventListener("change", function() {
    console.log(city.value);
});
```

Every time the selected option changes, the event runs.

---

# 24. Form Reset

HTML:

```html
<form id="form">

    <input id="name" type="text">

    <button type="reset">Reset</button>

</form>
```

The browser can reset the form automatically.

JavaScript se bhi:

```javascript
form.reset();
```

This resets the form controls to their initial values.

---

# 25. Form Reset Event

You can listen for reset:

```javascript
form.addEventListener("reset", function() {
    console.log("Form reset");
});
```

---

# 26. Complete Form Example

HTML:

```html
<form id="form">

    <input
        id="name"
        type="text"
        placeholder="Enter name"
        required
    >

    <input
        id="email"
        type="email"
        placeholder="Enter email"
        required
    >

    <label>
        <input id="terms" type="checkbox">
        I agree to the terms
    </label>

    <button type="submit">Submit</button>

</form>

<p id="result"></p>
```

JavaScript:

```javascript
let form = document.querySelector("#form");

let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let terms = document.querySelector("#terms");

let result = document.querySelector("#result");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = nameInput.value.trim();
    let email = emailInput.value.trim();

    if (name === "") {
        result.textContent = "Please enter your name";
        return;
    }

    if (email === "") {
        result.textContent = "Please enter your email";
        return;
    }

    if (!terms.checked) {
        result.textContent = "Please accept the terms";
        return;
    }

    result.textContent = "Form submitted successfully";

});
```

---

# 27. Common Form Events

| Event | Use |
|---|---|
| `input` | Value changes while typing |
| `change` | Value change is committed |
| `focus` | Input gets focus |
| `blur` | Input loses focus |
| `submit` | Form submitted |
| `reset` | Form reset |

---

# 28. Important Form Properties

```javascript
input.value
```

Gets the current value.

```javascript
checkbox.checked
```

Checks whether checkbox is selected.

```javascript
select.value
```

Gets selected option value.

```javascript
form.reset()
```

Resets the form.

---

# 29. Common Mistakes

### Mistake 1

Using:

```javascript
input.textContent
```

for an input field.

Usually use:

```javascript
input.value
```

for form controls.

---

### Mistake 2

Forgetting `preventDefault()` when handling a form with JavaScript:

```javascript
form.addEventListener("submit", function(event) {

    event.preventDefault();

});
```

---

### Mistake 3

Checking only spaces:

```javascript
if (input.value === "") {}
```

Better:

```javascript
if (input.value.trim() === "") {}
```

---

# Quick Revision

```text
.value
→ Get input value

.checked
→ Check checkbox/radio state

input
→ React while value changes

change
→ React when value change is committed

focus
→ Input gets focus

blur
→ Input loses focus

submit
→ Form submitted

preventDefault()
→ Stop default form action

reset()
→ Reset form
```

---

# Remember

The basic form flow is:

```text
User enters data
        ↓
Read .value
        ↓
Validate data
        ↓
Handle submit
        ↓
Show result / Send data
```

This same pattern is used in:

```text
Login Forms
Registration Forms
Contact Forms
Search Forms
Checkout Forms
```

---

## Next File

```text
11-Events/05-Event-Bubbling.md
```

Next we will learn:

```text
Event Bubbling
Event Capturing
event.target
event.currentTarget
stopPropagation()
Event Delegation
```