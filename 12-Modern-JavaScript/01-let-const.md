# JavaScript let and const

## 1. What are `let` and `const`?

`let` and `const` are modern ways to declare variables in JavaScript.

```javascript
let name = "Rohit";
const age = 23;
```

Both are **block scoped**.

---

# 2. `let`

`let` is used when the variable's value may change later.

```javascript
let age = 23;

age = 24;

console.log(age);
```

Output:

```text
24
```

So, `let` allows **reassignment**.

---

# 3. `const`

`const` is used when you do not want to reassign the variable.

```javascript
const pi = 3.14;

console.log(pi);
```

Trying to reassign it:

```javascript
const pi = 3.14;

pi = 4;
```

❌ Error

---

# 4. `let` vs `const`

| Feature | `let` | `const` |
|---|---|---|
| Reassign | Yes | No |
| Redeclare in same scope | No | No |
| Block scoped | Yes | Yes |
| Must have initial value | No | Yes |

---

# 5. Block Scope

A block is created using `{ }`.

```javascript
{
    let name = "Rohit";
    const age = 23;

    console.log(name);
    console.log(age);
}
```

Both variables are accessible inside the block.

Outside:

```javascript
console.log(name);
```

❌ Error

---

# 6. `let` Cannot Be Redeclared

This is not allowed in the same scope:

```javascript
let name = "Rohit";

let name = "Aman";
```

❌ Error

But reassignment is allowed:

```javascript
let name = "Rohit";

name = "Aman";
```

✅ Correct

---

# 7. `const` Must Be Initialized

This is invalid:

```javascript
const name;
```

❌ Error

You must provide a value:

```javascript
const name = "Rohit";
```

✅ Correct

---

# 8. `const` with Objects

`const` prevents reassignment of the variable, but object properties can still be changed.

```javascript
const user = {
    name: "Rohit",
    age: 23
};

user.age = 24;
```

✅ Allowed

But:

```javascript
user = {
    name: "Aman"
};
```

❌ Not allowed

The variable cannot be reassigned.

---

# 9. `const` with Arrays

Same concept applies to arrays.

```javascript
const numbers = [10, 20, 30];

numbers.push(40);

console.log(numbers);
```

Output:

```text
[10, 20, 30, 40]
```

This is allowed.

But:

```javascript
numbers = [50, 60];
```

❌ Error

---

# 10. Which One Should You Use?

General rule:

```text
Value will not be reassigned
        ↓
      const
```

```text
Value will be reassigned
        ↓
       let
```

Example:

```javascript
const name = "Rohit";

let score = 0;

score = 10;
score = 20;
```

---

# 11. Why Prefer `const`?

Using `const` makes your code easier to understand.

When you see:

```javascript
const username = "Rohit";
```

you know that `username` will not be reassigned.

So a common modern JavaScript practice is:

> Use `const` by default, and use `let` when reassignment is required.

---

# Quick Revision

```text
let
→ Can be reassigned
→ Cannot be redeclared in same scope
→ Block scoped
```

```text
const
→ Cannot be reassigned
→ Cannot be redeclared in same scope
→ Block scoped
→ Must be initialized
```

Remember:

```text
const → default choice
let   → when value needs to change
var   → generally avoid in modern JavaScript
```

---

## Next File

```text
12-Modern-JavaScript/02-Destructuring.md
```

Next we will learn **Array and Object Destructuring**.