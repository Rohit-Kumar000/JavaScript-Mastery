# JavaScript Variables

## 1. What is a Variable?

A variable is a **container used to store data or a value**.

Example:

```javascript
let name = "Rohit";
let age = 23;
```

Here:

```text
name → Variable
"Rohit" → Value

age → Variable
23 → Value
```

Simple:

```text
Variable = A named container used to store data
```

---

## 2. Ways to Create Variables

JavaScript has three keywords for creating variables:

```text
var
let
const
```

---

## 3. var

`var` is the older way to declare a variable.

```javascript
var name = "Rohit";
```

Its value can be changed:

```javascript
name = "Aman";
```

It can also be redeclared:

```javascript
var name = "Rohit";
var name = "Aman";
```

✅ Allowed

---

## 4. let

`let` is used when the value may change.

```javascript
let age = 23;
```

We can reassign the value:

```javascript
age = 24;
```

✅ Allowed

But we cannot redeclare it in the same scope:

```javascript
let age = 23;
let age = 24;
```

❌ Error

---

## 5. const

`const` is used when a variable should not be reassigned.

```javascript
const pi = 3.14;
```

Trying to change it:

```javascript
pi = 4;
```

❌ Error

It also cannot be redeclared in the same scope.

```javascript
const pi = 3.14;
const pi = 4;
```

❌ Error

---

## 6. var vs let vs const

| Feature | var | let | const |
|---|---|---|---|
| Reassign | Yes | Yes | No |
| Redeclare | Yes | No | No |
| Block Scoped | No | Yes | Yes |
| Modern JavaScript | Avoid generally | Yes | Yes |

### Simple Rule

```text
Value will change → let

Value will not be reassigned → const

var → Mostly used in older code
```

---

## 7. Declaration

Creating a variable without giving it a value is called **declaration**.

```javascript
let name;
```

The variable exists, but no value has been assigned yet.

---

## 8. Initialization

Giving a value to a variable when it is created is called **initialization**.

```javascript
let name = "Rohit";
```

Here, the variable is declared and initialized at the same time.

---

## 9. Assignment

Giving a new value to an existing variable is called **assignment**.

```javascript
let age = 23;

age = 24;
```

Here, `24` is assigned to `age`.

---

## 10. Variable Naming Rules

### Valid Names

```javascript
let userName;
let user_age;
let age2;
let $price;
let _name;
```

### Invalid Names

```javascript
let 2age;
let user-name;
let user name;
```

❌ Invalid

A variable name cannot start with a number.

```javascript
let 2name;
```

❌ Wrong

```javascript
let name2;
```

✅ Correct

---

## 11. Case Sensitive

JavaScript is case-sensitive.

```javascript
let name = "Rohit";
let Name = "Aman";
```

These are two different variables:

```text
name
Name
```

---

## 12. Variable Scope

Scope means the **area of the program where a variable can be accessed**.

Main types:

```text
Global Scope
Function Scope
Block Scope
```

Example:

```javascript
{
    let age = 23;
}

console.log(age);
```

❌ Error

`let` is block-scoped, so it cannot be accessed outside the block.

---

## 13. Scope of var

`var` is function-scoped and is **not block-scoped**.

```javascript
{
    var age = 23;
}

console.log(age);
```

This can work because `var` does not follow block scope.

This is one reason modern JavaScript generally prefers `let` and `const`.

---

## 14. Best Practice

Use `const` when you do not need to reassign the value:

```javascript
const name = "Rohit";
```

Use `let` when the value needs to change:

```javascript
let age = 23;

age = 24;
```

Generally avoid `var` in new JavaScript code.

---

## Common Mistakes

### Reassigning a const variable

```javascript
const age = 23;

age = 24;
```

❌ Error

Use `let` instead if the value needs to change.

---

### Redeclaring a let variable

```javascript
let name = "Rohit";
let name = "Aman";
```

❌ Error

Instead:

```javascript
let name = "Rohit";
name = "Aman";
```

✅ Correct

---

# Quick Revision

```text
var   → Can reassign + redeclare
let   → Can reassign, cannot redeclare
const → Cannot reassign or redeclare

let   → Block Scoped
const → Block Scoped
var   → Function Scoped
```

### Remember:

```text
Use const by default.
Use let when the value needs to change.
Avoid var in modern JavaScript.
```