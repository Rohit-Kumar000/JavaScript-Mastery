# JavaScript Input and Output

## 1. What is Input and Output?

### Input

Input means **taking data from the user or another source**.

Example:

```text
User enters their name
        ↓
JavaScript receives the name
```

### Output

Output means **showing or displaying information**.

Example:

```text
JavaScript
    ↓
Shows "Hello Rohit"
```

---

# 2. console.log()

`console.log()` is used to display output in the browser console.

```javascript
console.log("Hello World");
```

Output:

```text
Hello World
```

We can also print variables:

```javascript
let name = "Rohit";

console.log(name);
```

---

# 3. alert()

`alert()` displays a message in a popup box.

```javascript
alert("Hello Rohit");
```

The browser shows a popup containing the message.

---

# 4. prompt()

`prompt()` is used to take input from the user.

```javascript
let name = prompt("Enter your name:");

console.log(name);
```

If the user enters:

```text
Rohit
```

Then:

```javascript
console.log(name);
```

will output:

```text
Rohit
```

### Important

`prompt()` normally returns the user's input as a **string**.

Example:

```javascript
let age = prompt("Enter your age:");

console.log(typeof age);
```

Even if the user enters:

```text
23
```

the type is:

```text
string
```

---

# 5. Converting User Input to Number

If you need a number from `prompt()`, convert it using `Number()`.

```javascript
let age = Number(prompt("Enter your age:"));

console.log(age);
```

Now the value can be used as a number.

Example:

```javascript
let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));

console.log(a + b);
```

If the user enters:

```text
10
20
```

Output:

```text
30
```

---

# 6. document.write()

`document.write()` can write content directly into the webpage.

```javascript
document.write("Hello World");
```

It displays:

```text
Hello World
```

However, it is generally **not recommended for modern JavaScript applications** because using it after the page has loaded can replace the entire document.

For learning basic output, you may see it, but prefer DOM methods in real projects.

---

# 7. Input and Output Example

```javascript
let name = prompt("Enter your name:");

console.log("Hello " + name);
```

If the user enters:

```text
Rohit
```

Output:

```text
Hello Rohit
```

---

# 8. Input, Processing and Output

A basic program usually follows:

```text
Input
  ↓
Processing
  ↓
Output
```

Example:

```javascript
let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));

let sum = a + b;

console.log(sum);
```

Here:

```text
Input     → a and b
Processing → a + b
Output    → sum
```

---

# 9. Common Mistake

### Adding two prompt values directly

```javascript
let a = prompt("Enter first number:");
let b = prompt("Enter second number:");

console.log(a + b);
```

If the user enters:

```text
10
20
```

Output:

```text
1020
```

Why?

Because both values are strings.

Correct:

```javascript
let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));

console.log(a + b);
```

Output:

```text
30
```

---

# 10. Important Points

- `console.log()` → Output in console.
- `alert()` → Shows a popup message.
- `prompt()` → Takes input from the user.
- `prompt()` normally returns a string.
- Use `Number()` when you need numeric input.
- `document.write()` writes directly to the webpage but is generally avoided in modern applications.

---

# Quick Revision

```text
Input:
prompt()

Output:
console.log()
alert()
document.write()
```

### Basic Flow

```text
User Input
    ↓
Processing
    ↓
Output
```

### Remember

```javascript
let age = prompt("Enter age:");
```

`age` is normally a **String**.

For a number:

```javascript
let age = Number(prompt("Enter age:"));
```