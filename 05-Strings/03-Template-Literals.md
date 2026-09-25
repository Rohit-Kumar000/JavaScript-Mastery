# JavaScript Template Literals

## 1. What are Template Literals?

Template literals are a modern way to create strings in JavaScript.

They use **backticks** instead of single or double quotes.

```javascript
let name = `Rohit`;
```

Backtick:

```text
`
```

---

# 2. Why Use Template Literals?

Template literals are especially useful when we want to:

- Add variables inside a string
- Write expressions inside a string
- Create multiline strings
- Avoid complicated string concatenation

---

# 3. Basic Example

Normal string:

```javascript
let name = "Rohit";

console.log("My name is " + name);
```

Using template literal:

```javascript
let name = "Rohit";

console.log(`My name is ${name}`);
```

Output:

```text
My name is Rohit
```

Template literals make the code easier to read.

---

# 4. ${} Syntax

Variables are inserted using:

```text
${variable}
```

Example:

```javascript
let name = "Rohit";
let age = 23;

console.log(`My name is ${name} and I am ${age} years old.`);
```

Output:

```text
My name is Rohit and I am 23 years old.
```

---

# 5. Multiple Variables

```javascript
let firstName = "Rohit";
let lastName = "Kumar";
let city = "Mohali";

console.log(`My name is ${firstName} ${lastName} and I live in ${city}.`);
```

Output:

```text
My name is Rohit Kumar and I live in Mohali.
```

---

# 6. Expressions Inside Template Literals

We can also write JavaScript expressions inside `${}`.

Example:

```javascript
let a = 10;
let b = 20;

console.log(`Sum = ${a + b}`);
```

Output:

```text
Sum = 30
```

Another example:

```javascript
let age = 23;

console.log(`Next year I will be ${age + 1}`);
```

Output:

```text
Next year I will be 24
```

---

# 7. Function Inside Template Literal

A function can also be called inside `${}`.

```javascript
function greet() {
    return "Hello Rohit";
}

console.log(`${greet()}`);
```

Output:

```text
Hello Rohit
```

Example:

```javascript
function add(a, b) {
    return a + b;
}

console.log(`Result: ${add(10, 20)}`);
```

Output:

```text
Result: 30
```

---

# 8. Multiline Strings

With normal quotes, writing multiline text is inconvenient.

Template literals make it easy.

```javascript
let message = `Hello Rohit,
Welcome to JavaScript.
Keep learning and practicing.`;

console.log(message);
```

Output:

```text
Hello Rohit,
Welcome to JavaScript.
Keep learning and practicing.
```

No `\n` is required.

---

# 9. Template Literals vs Concatenation

### Using `+`

```javascript
let name = "Rohit";
let age = 23;

console.log("My name is " + name + " and I am " + age + " years old.");
```

### Using Template Literal

```javascript
console.log(`My name is ${name} and I am ${age} years old.`);
```

The second method is generally easier to read.

---

# 10. Using Conditions

Expressions can contain conditional results.

Example:

```javascript
let age = 23;

console.log(`I am ${age >= 18 ? "Adult" : "Minor"}`);
```

Output:

```text
I am Adult
```

Here:

```javascript
age >= 18 ? "Adult" : "Minor"
```

is a ternary expression.

---

# 11. Using Object Properties

```javascript
let user = {
    name: "Rohit",
    age: 23
};

console.log(`Name: ${user.name}`);
console.log(`Age: ${user.age}`);
```

Output:

```text
Name: Rohit
Age: 23
```

---

# 12. Using Array Values

```javascript
let fruits = ["Apple", "Mango", "Banana"];

console.log(`My favorite fruit is ${fruits[1]}`);
```

Output:

```text
My favorite fruit is Mango
```

---

# 13. Literal Backticks

If you need to use a backtick inside a template literal, you can escape it.

```javascript
let message = `This is a \`backtick\``;

console.log(message);
```

Output:

```text
This is a `backtick`
```

---

# 14. Important Rule

This will **not** work as variable interpolation:

```javascript
let name = "Rohit";

console.log("Hello ${name}");
```

Output:

```text
Hello ${name}
```

Why?

Because `" "` is a normal string.

Correct:

```javascript
console.log(`Hello ${name}`);
```

Output:

```text
Hello Rohit
```

Remember:

```text
${} works inside template literals.
Template literals use backticks ` `
```

---

# 15. Practical Example

```javascript
let name = "Rohit";
let course = "MCA";
let age = 23;

let message = `
Name: ${name}
Age: ${age}
Course: ${course}
`;

console.log(message);
```

Output:

```text
Name: Rohit
Age: 23
Course: MCA
```

---

# Important Points

- Template literals use backticks: `` ` ``
- Variables are inserted using `${}`.
- Expressions can be used inside `${}`.
- Functions can be called inside `${}`.
- Template literals support multiline strings.
- They are usually easier to read than long string concatenation.
- `${}` interpolation works with backticks, not normal quotes.

---

# Quick Revision

Normal string:

```javascript
let name = "Rohit";

console.log("Hello " + name);
```

Template literal:

```javascript
let name = "Rohit";

console.log(`Hello ${name}`);
```

Expression:

```javascript
let a = 10;
let b = 20;

console.log(`Total = ${a + b}`);
```

Multiline:

```javascript
let message = `
Hello Rohit
Welcome to JavaScript
`;

console.log(message);
```

### Remember

```text
` `          → Template literal
${variable}  → Insert variable
${expression} → Execute expression
```

**Easy trick:**

```text
Normal String:
"Hello " + name

Template Literal:
`Hello ${name}`
```