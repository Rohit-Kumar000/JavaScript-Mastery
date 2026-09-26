# JavaScript Temporal Dead Zone (TDZ)

## 1. What is Temporal Dead Zone?

**Temporal Dead Zone (TDZ)** wo time period hai jab `let` ya `const` variable scope mein exist karta hai, lekin usse **declaration se pehle access nahi kar sakte**.

Simple:

```text
TDZ = Variable declaration se pehle ka period
      jisme let/const ko access nahi kar sakte.
```

---

# 2. Basic Example

```javascript
console.log(age);

let age = 23;
```

Output:

```text
ReferenceError
```

Why?

`age` declaration se pehle TDZ mein hai.

---

# 3. TDZ Kab Start Hoti Hai?

Example:

```javascript
{
    // TDZ starts

    console.log(age);

    let age = 23;

    // TDZ ends
}
```

Conceptually:

```text
Block starts
     ↓
TDZ starts
     ↓
let age = 23
     ↓
TDZ ends
```

Declaration ke baad variable normally access ho sakta hai.

---

# 4. Correct Example

```javascript
let age = 23;

console.log(age);
```

Output:

```text
23
```

Yahan `console.log()` declaration ke baad hai.

So:

```text
Declaration
     ↓
Initialization
     ↓
Access
```

---

# 5. `const` Also Has TDZ

```javascript
console.log(pi);

const pi = 3.14;
```

Output:

```text
ReferenceError
```

`const` bhi declaration se pehle TDZ mein hota hai.

---

# 6. `var` Does NOT Have TDZ

```javascript
console.log(age);

var age = 23;
```

Output:

```text
undefined
```

Why?

`var` declaration hoist hoti hai aur initial value `undefined` hoti hai.

```text
var
→ Hoisted
→ Initialized with undefined
```

Whereas:

```text
let / const
→ Hoisted
→ TDZ
→ Cannot access before initialization
```

---

# 7. `let` vs `var`

### var

```javascript
console.log(x);

var x = 10;
```

Output:

```text
undefined
```

### let

```javascript
console.log(x);

let x = 10;
```

Output:

```text
ReferenceError
```

Main difference:

```text
var → undefined

let → ReferenceError because of TDZ
```

---

# 8. TDZ in a Block

```javascript
let name = "Rohit";

{
    console.log(name);

    let name = "Aman";
}
```

Output:

```text
ReferenceError
```

This may look confusing.

You might think JavaScript should use the outer `name`.

But the inner `name` already belongs to the block's scope.

It is in TDZ until:

```javascript
let name = "Aman";
```

is initialized.

---

# 9. Why Outer Variable Is Not Used

Example:

```javascript
let name = "Rohit";

{
    console.log(name);

    let name = "Aman";
}
```

Inside the block:

```text
Block Scope
    ↓
name → TDZ
```

JavaScript knows that a local `name` exists.

So it does not go outside and use:

```text
Global name → "Rohit"
```

Instead, it tries to access the local `name`, which is still in TDZ.

Therefore:

```text
ReferenceError
```

---

# 10. TDZ with Functions

Example:

```javascript
let age = 23;

function test() {

    console.log(age);

    let age = 30;
}

test();
```

Output:

```text
ReferenceError
```

Why?

Inside `test()` there is a local:

```javascript
let age = 30;
```

That local `age` is in TDZ before its declaration is initialized.

So JavaScript does not use the outer `age`.

---

# 11. TDZ and Function Parameters

Function parameters are initialized when the function starts.

Example:

```javascript
function greet(name) {
    console.log(name);
}

greet("Rohit");
```

Output:

```text
Rohit
```

The parameter `name` is available inside the function.

But default parameter expressions can have their own TDZ-related behavior.

For beginner-level JavaScript, remember:

```text
Function parameter
→ Available when function execution starts
```

---

# 12. TDZ with `const`

`const` has an additional rule:

It must be initialized when declared.

Correct:

```javascript
const age = 23;
```

Incorrect:

```javascript
const age;
```

This gives:

```text
SyntaxError
```

And:

```javascript
console.log(age);

const age = 23;
```

gives:

```text
ReferenceError
```

because of TDZ.

---

# 13. TDZ is Not the Same as Scope

These are two different concepts.

### Scope

Tells us:

```text
Where can I access the variable?
```

### TDZ

Tells us:

```text
When can I access the let/const variable
after entering its scope?
```

Example:

```javascript
{
    console.log(age);

    let age = 23;
}
```

Here:

```text
Scope → block

TDZ → from start of block until initialization
```

---

# 14. TDZ Timeline

Example:

```javascript
{
    // TDZ starts

    let age = 23;

    // TDZ ends

    console.log(age);
}
```

Think:

```text
┌─────────────────────────────┐
│ Block starts                │
│                             │
│   TDZ                       │
│   ↓                         │
│   let age = 23              │
│   ↑                         │
│   TDZ ends                  │
│                             │
│   console.log(age)          │
│   ✅ Allowed                │
└─────────────────────────────┘
```

---

# 15. Common Beginner Mistake

Wrong:

```javascript
console.log(username);

let username = "Rohit";
```

Correct:

```javascript
let username = "Rohit";

console.log(username);
```

Best practice:

> Declare and initialize variables before using them.

---

# 16. TDZ and `typeof`

Normally:

```javascript
console.log(typeof abc);
```

If `abc` has never been declared, the result is:

```text
"undefined"
```

But with a `let`/`const` declaration in the same scope:

```javascript
console.log(typeof age);

let age = 23;
```

This gives:

```text
ReferenceError
```

because `age` is in the TDZ.

---

# 17. TDZ and `var`

Compare:

```javascript
console.log(typeof age);

var age = 23;
```

Output:

```text
"undefined"
```

But:

```javascript
console.log(typeof age);

let age = 23;
```

Output:

```text
ReferenceError
```

This is another practical difference between `var` and `let`.

---

# 18. How to Avoid TDZ Problems

The easiest rule:

```text
Declare → Initialize → Use
```

Example:

```javascript
const name = "Rohit";
let age = 23;

console.log(name);
console.log(age);
```

Avoid:

```javascript
console.log(name);
const name = "Rohit";
```

---

# 19. Real Example

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
}

userDetails();
```

Everything is declared before it is accessed.

Therefore there is no TDZ problem.

---

# Important Points

- TDZ stands for **Temporal Dead Zone**.
- TDZ applies to `let` and `const`.
- `let` and `const` are hoisted but cannot be accessed before initialization.
- Accessing them during TDZ causes a `ReferenceError`.
- `var` does not have TDZ behavior.
- TDZ starts when the scope is entered.
- TDZ ends when the variable is initialized.
- A variable in TDZ can shadow an outer variable.
- `const` must be initialized when declared.
- Best practice is to declare variables before using them.

---

# Quick Revision

### `var`

```javascript
console.log(x);

var x = 10;
```

```text
undefined
```

### `let`

```javascript
console.log(x);

let x = 10;
```

```text
ReferenceError
```

### `const`

```javascript
console.log(x);

const x = 10;
```

```text
ReferenceError
```

### Simple Formula

```text
let / const
      ↓
Scope starts
      ↓
TDZ
      ↓
Declaration + Initialization
      ↓
TDZ ends
      ↓
Variable can be accessed
```

### Remember

```text
var
→ Hoisted
→ undefined

let
→ Hoisted
→ TDZ
→ ReferenceError before initialization

const
→ Hoisted
→ TDZ
→ ReferenceError before initialization
→ Must be initialized during declaration
```

---

# 09-Scope-and-Hoisting Completed

```text
09-Scope-and-Hoisting
│
├── 01-Scope.md
├── 02-Lexical-Scope.md
├── 03-Hoisting.md
└── 04-Temporal-Dead-Zone.md
```

Next section:

```text
10-DOM
```

Start with:

```text
10-DOM/01-DOM-Basics.md
```