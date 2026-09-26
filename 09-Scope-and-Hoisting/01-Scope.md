# JavaScript Scope

## 1. What is Scope?

**Scope** means the area of the program where a variable can be accessed.

Simple:

```text
Scope = Where can I use this variable?
```

Example:

```javascript
let name = "Rohit";

console.log(name);
```

Here `name` can be accessed because it is available in the current scope.

---

# 2. Why is Scope Important?

Scope helps JavaScript decide:

- Where a variable can be accessed
- Where a variable cannot be accessed
- Which variable a piece of code should use
- How variables behave inside functions and blocks

---

# 3. Types of Scope

JavaScript mainly has:

```text
1. Global Scope
2. Function Scope
3. Block Scope
4. Module Scope
```

For now, focus mainly on the first three.

---

# 4. Global Scope

A variable declared outside functions and blocks is generally in the global scope.

```javascript
let name = "Rohit";

console.log(name);
```

The variable can be accessed from places that are within its scope.

Example:

```javascript
let name = "Rohit";

function greet() {
    console.log(name);
}

greet();
```

Output:

```text
Rohit
```

The function can access the outer `name`.

---

# 5. Function Scope

A variable declared inside a function is available inside that function.

```javascript
function greet() {

    let name = "Rohit";

    console.log(name);
}

greet();
```

Output:

```text
Rohit
```

But outside the function:

```javascript
console.log(name);
```

❌ Error

Because `name` belongs to the function's scope.

---

# 6. Function Scope Example

```javascript
function calculate() {

    let result = 100;

    console.log(result);
}

calculate();
```

Here:

```text
result
```

can only be accessed inside `calculate()`.

---

# 7. Block Scope

A block is code written inside `{ }`.

Examples:

```javascript
if (true) {
    // block
}
```

```javascript
for (let i = 0; i < 5; i++) {
    // block
}
```

```javascript
{
    // block
}
```

`let` and `const` are block scoped.

Example:

```javascript
{
    let age = 23;
    const city = "Mohali";

    console.log(age);
}
```

This works.

But:

```javascript
console.log(age);
```

❌ Error

Because `age` exists only inside that block.

---

# 8. `var` and Block Scope

`var` does not have block scope.

Example:

```javascript
{
    var age = 23;
}

console.log(age);
```

Output:

```text
23
```

This is one reason modern JavaScript generally prefers `let` and `const`.

---

# 9. `let` vs `var` Scope

### let

```javascript
{
    let age = 23;
}

console.log(age);
```

❌ Error

### var

```javascript
{
    var age = 23;
}

console.log(age);
```

✅ Works

Remember:

```text
let   → Block Scoped
const → Block Scoped
var   → Function Scoped
```

---

# 10. Scope Inside a Function and Block

```javascript
function test() {

    let a = 10;

    if (true) {

        let b = 20;

        console.log(a);
        console.log(b);
    }

    console.log(a);

    console.log(b); // Error
}
```

Why?

`a` belongs to the function scope.

`b` belongs to the `if` block.

So:

```text
Function
│
├── a → available inside function
│
└── if block
    └── b → available only inside block
```

---

# 11. Outer Scope and Inner Scope

An inner scope can access variables from an outer scope.

Example:

```javascript
let name = "Rohit";

function greet() {

    console.log(name);

}

greet();
```

Output:

```text
Rohit
```

The function's scope is inside the global scope.

So it can look outside to find `name`.

---

# 12. Inner Scope Cannot Be Accessed from Outer Scope

Example:

```javascript
function greet() {

    let message = "Hello";

}

console.log(message);
```

❌ Error

The outer scope cannot access variables created inside the function.

Remember:

```text
Outer → can be accessible from inner scope

Inner → not directly accessible from outer scope
```

---

# 13. Nested Scope

Scopes can exist inside other scopes.

```javascript
let a = 10;

function outer() {

    let b = 20;

    function inner() {

        let c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    inner();
}

outer();
```

Output:

```text
10
20
30
```

The `inner()` function can access variables from its outer scopes.

This idea is important for understanding **Lexical Scope** and **Closures** later.

---

# 14. Scope Chain

When JavaScript needs a variable, it looks for it in the current scope first.

If it doesn't find it, JavaScript looks in the outer scope.

Then it continues outward.

Example:

```javascript
let a = 10;

function outer() {

    let b = 20;

    function inner() {

        let c = 30;

        console.log(c);
        console.log(b);
        console.log(a);
    }

    inner();
}

outer();
```

JavaScript searches roughly like:

```text
inner scope
    ↓
outer scope
    ↓
global scope
```

This is called the **Scope Chain**.

---

# 15. Variable Shadowing

When an inner scope creates a variable with the same name as an outer variable, the inner variable **shadows** the outer variable.

Example:

```javascript
let name = "Rohit";

function greet() {

    let name = "Aman";

    console.log(name);
}

greet();

console.log(name);
```

Output:

```text
Aman
Rohit
```

Inside the function:

```text
name → Aman
```

Outside:

```text
name → Rohit
```

The inner variable temporarily hides the outer variable within its scope.

---

# 16. Block Shadowing

Shadowing can also happen with blocks.

```javascript
let age = 23;

{
    let age = 25;

    console.log(age);
}

console.log(age);
```

Output:

```text
25
23
```

The block's `age` shadows the outer `age`.

---

# 17. Important Difference: Scope vs Value

Scope tells us **where a variable can be accessed**.

Value tells us **what data the variable contains**.

Example:

```javascript
let age = 23;
```

Here:

```text
Variable → age
Value    → 23
Scope    → current/global scope
```

---

# 18. Global Scope vs Function Scope vs Block Scope

| Scope | Example | Accessible Where |
|---|---|---|
| Global | `let x = 10` outside functions | Within its accessible outer program scope |
| Function | `let x = 10` inside function | Inside that function |
| Block | `let x = 10` inside `{}` | Inside that block |

---

# 19. Important Rule

Remember this:

```text
var
→ Function Scoped

let
→ Block Scoped

const
→ Block Scoped
```

---

# 20. Practical Example

```javascript
let username = "Rohit";

function userDetails() {

    let age = 23;

    if (age >= 18) {

        let status = "Adult";

        console.log(username);
        console.log(age);
        console.log(status);
    }

    console.log(username);
    console.log(age);

    // console.log(status); ❌
}

userDetails();
```

Here:

```text
username
→ Global scope

age
→ Function scope

status
→ Block scope
```

---

# Important Points

- Scope determines where a variable can be accessed.
- Global variables are declared in the outer/global scope.
- Function variables are available inside their function.
- `let` and `const` are block scoped.
- `var` is function scoped.
- Inner scopes can access variables from outer scopes.
- Outer scopes cannot directly access variables from inner scopes.
- JavaScript searches through the scope chain when resolving variables.
- Inner variables can shadow outer variables.

---

# Quick Revision

```javascript
let name = "Rohit";

function test() {

    let age = 23;

    if (age > 18) {

        let status = "Adult";

        console.log(name);
        console.log(age);
        console.log(status);
    }
}
```

Remember:

```text
Global Scope
     ↓
Function Scope
     ↓
Block Scope
```

And:

```text
let   → Block Scope
const → Block Scope
var   → Function Scope
```

**Next file:**

```text
09-Scope-and-Hoisting/02-Lexical-Scope.md
```