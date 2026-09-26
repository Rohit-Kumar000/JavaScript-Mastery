# JavaScript Hoisting

## 1. What is Hoisting?

**Hoisting** JavaScript ka behavior hai jisme declarations ko execution se pehle JavaScript ke scope/environment setup ke during register kiya jata hai.

Simple way:

```text
Hoisting = JavaScript declarations ko code execute hone se pehle recognize karta hai.
```

Important:

> Hoisting ka matlab ye nahi hai ki JavaScript literally code ko upar move kar deta hai.

---

# 2. Basic Example with `var`

```javascript
console.log(name);

var name = "Rohit";
```

Output:

```text
undefined
```

Why?

JavaScript `var` declaration ko pehle register karta hai:

```javascript
var name;

console.log(name);

name = "Rohit";
```

Isliye error nahi aaya, but value abhi assign nahi hui thi.

---

# 3. `var` Hoisting

`var` declaration hoist hoti hai aur initially `undefined` hoti hai.

```javascript
console.log(age);

var age = 23;
```

Output:

```text
undefined
```

Remember:

```text
var declaration → hoisted
var initialization → execution ke time hoti hai
```

---

# 4. Declaration vs Initialization

Ye difference bahut important hai.

```javascript
var age = 23;
```

Isme:

```text
var age → Declaration
= 23    → Initialization/Assignment
```

Hoisting mein mainly declaration register hoti hai.

Value assignment baad mein execution ke time hoti hai.

Conceptually:

```javascript
var age;

console.log(age);

age = 23;
```

---

# 5. `let` and Hoisting

`let` bhi hoisted hota hai, lekin usko declaration se pehle access nahi kar sakte.

Example:

```javascript
console.log(age);

let age = 23;
```

Output:

```text
ReferenceError
```

Aisa isliye hota hai kyunki `age` declaration se pehle **Temporal Dead Zone (TDZ)** mein hota hai.

---

# 6. `const` and Hoisting

`const` ke saath bhi same behavior hai.

```javascript
console.log(pi);

const pi = 3.14;
```

Output:

```text
ReferenceError
```

`const` bhi declaration se pehle access nahi kiya ja sakta.

---

# 7. `var` vs `let` vs `const`

| Keyword | Hoisted | Before Declaration Access |
|---|---|---|
| `var` | Yes | `undefined` |
| `let` | Yes | ReferenceError |
| `const` | Yes | ReferenceError |

Important:

```text
var
→ Hoisted
→ Initially undefined

let
→ Hoisted
→ TDZ
→ Cannot access before declaration

const
→ Hoisted
→ TDZ
→ Cannot access before declaration
```

---

# 8. Function Declaration Hoisting

Function declarations are also hoisted.

Example:

```javascript
greet();

function greet() {
    console.log("Hello Rohit");
}
```

Output:

```text
Hello Rohit
```

This works because the complete function declaration is available when the code starts executing.

---

# 9. Function Declaration

Example:

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
```

You can also call it before its declaration:

```javascript
console.log(add(10, 20));

function add(a, b) {
    return a + b;
}
```

Output:

```text
30
```

---

# 10. Function Expression

Function expressions behave differently.

```javascript
console.log(add(10, 20));

var add = function(a, b) {
    return a + b;
};
```

This does not work as a callable function before the assignment.

Because:

```text
var add
→ hoisted as undefined

add(...)
→ trying to call undefined
```

This results in:

```text
TypeError
```

---

# 11. Function Expression with `let`

```javascript
console.log(add(10, 20));

let add = function(a, b) {
    return a + b;
};
```

This gives:

```text
ReferenceError
```

Because `add` is in the Temporal Dead Zone before its declaration is reached.

---

# 12. Arrow Function and Hoisting

Arrow functions are usually stored in variables.

Example:

```javascript
console.log(add(10, 20));

const add = (a, b) => {
    return a + b;
};
```

This gives:

```text
ReferenceError
```

because `add` is a `const` variable and cannot be accessed before its declaration.

---

# 13. Function Declaration vs Function Expression

### Function Declaration

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

✅ Works

### Function Expression

```javascript
greet();

const greet = function() {
    console.log("Hello");
};
```

❌ ReferenceError

### Arrow Function

```javascript
greet();

const greet = () => {
    console.log("Hello");
};
```

❌ ReferenceError

---

# 14. Hoisting Inside Functions

Hoisting also happens inside functions.

```javascript
function test() {

    console.log(age);

    var age = 23;
}

test();
```

Output:

```text
undefined
```

Conceptually:

```javascript
function test() {

    var age;

    console.log(age);

    age = 23;
}
```

---

# 15. Function Scope Hoisting

Each function has its own scope.

```javascript
let age = 30;

function test() {

    var age = 23;

    console.log(age);
}

test();

console.log(age);
```

Output:

```text
23
30
```

The inner `age` is separate from the outer `age`.

---

# 16. Hoisting and `var` Shadowing

Example:

```javascript
var name = "Rohit";

function test() {

    console.log(name);

    var name = "Aman";
}

test();
```

Output:

```text
undefined
```

Why?

Inside `test()`, the local `var name` is hoisted.

Conceptually:

```javascript
var name = "Rohit";

function test() {

    var name;

    console.log(name);

    name = "Aman";
}
```

So JavaScript uses the local `name`, which is currently `undefined`.

---

# 17. Hoisting Does NOT Mean Everything Moves Up

This is a common misunderstanding.

Suppose:

```javascript
console.log(age);

let age = 23;
```

It is incorrect to imagine:

```javascript
let age = 23;

console.log(age);
```

JavaScript does not simply move the line to the top.

Instead, declarations are processed during the setup phase, while initialization happens when execution reaches the declaration.

---

# 18. Hoisting and Execution Phases

A simplified mental model:

```text
JavaScript starts
       ↓
Creates execution context
       ↓
Registers declarations
       ↓
Starts executing code
       ↓
Assignments happen when reached
```

For:

```javascript
var age = 23;
```

Think:

```text
Setup:
age → undefined

Execution:
age → 23
```

For:

```javascript
let age = 23;
```

Think:

```text
Setup:
age → declared but unavailable before initialization

Execution:
age → 23
```

---

# 19. Temporal Dead Zone (Preview)

Consider:

```javascript
console.log(age);

let age = 23;
```

Between the start of the scope and the `let` declaration being initialized, `age` is in the:

```text
Temporal Dead Zone (TDZ)
```

Accessing it during this period causes:

```text
ReferenceError
```

TDZ is covered in detail in:

```text
09-Scope-and-Hoisting/04-Temporal-Dead-Zone.md
```

---

# 20. Best Practice

Although JavaScript supports hoisting, don't rely on it unnecessarily.

Prefer writing code in a clear order:

```javascript
const name = "Rohit";

console.log(name);
```

Instead of:

```javascript
console.log(name);

const name = "Rohit";
```

For functions, calling a function declaration before its definition is valid, but keeping related code organized can make programs easier to read.

---

# Important Points

- Hoisting is JavaScript's declaration-processing behavior.
- Declarations are registered before normal execution.
- `var` is hoisted and initialized to `undefined`.
- `let` and `const` are hoisted but remain unavailable in the TDZ until initialized.
- Function declarations can be called before their declaration.
- Function expressions are not callable before their assignment.
- Arrow functions stored in variables behave similarly to `let`/`const` variables.
- Hoisting does not literally move source code to the top.
- Initialization happens during normal execution.

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

### Function Declaration

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

```text
Works ✅
```

### Function Expression

```javascript
greet();

const greet = function() {
    console.log("Hello");
};
```

```text
ReferenceError ❌
```

### Arrow Function

```javascript
greet();

const greet = () => {
    console.log("Hello");
};
```

```text
ReferenceError ❌
```

### Remember

```text
var
→ Hoisted
→ undefined before assignment

let
→ Hoisted
→ TDZ before initialization

const
→ Hoisted
→ TDZ before initialization

Function Declaration
→ Can be called before declaration
```

**Next file:**

```text
09-Scope-and-Hoisting/04-Temporal-Dead-Zone.md
```