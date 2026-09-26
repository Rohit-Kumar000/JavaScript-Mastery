# JavaScript Lexical Scope

## 1. What is Lexical Scope?

**Lexical Scope** ka matlab hai ki variable ka scope uske **code mein likhe hue location** se decide hota hai.

Simple:

```text
Lexical Scope = Code mein variable/function kahan likha gaya hai
```

JavaScript ye decide karta hai ki kaunsa variable accessible hai based on **where the code is written**, not where a function is called.

---

# 2. Basic Example

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

Why?

`greet()` function ke andar `name` nahi hai.

JavaScript outer scope mein `name` ko find karta hai.

```text
greet()
  ↓
Current Scope
  ↓
Outer Scope
  ↓
name = "Rohit"
```

---

# 3. Inner Scope Can Access Outer Scope

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

`inner()` can access:

```text
c → its own scope
b → outer scope
a → global scope
```

---

# 4. Scope Chain

Lexical scope creates a **scope chain**.

Example:

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

When JavaScript searches for `c`:

```text
inner scope
    ↓
outer scope
    ↓
global scope
```

This is called the **scope chain**.

---

# 5. Inner to Outer Access

The most important rule:

```text
Inner Scope → Can access Outer Scope
```

Example:

```javascript
let name = "Rohit";

function outer() {

    let age = 23;

    function inner() {

        console.log(name);
        console.log(age);
    }

    inner();
}

outer();
```

Both values are accessible inside `inner()`.

---

# 6. Outer Cannot Access Inner

The opposite is not true.

```javascript
function outer() {

    let age = 23;

    function inner() {
        let city = "Mohali";
    }

    console.log(city);
}
```

This gives an error.

Why?

Because `city` belongs to `inner()`.

```text
outer
│
└── inner
    └── city
```

`outer` cannot directly access variables inside `inner`.

---

# 7. Lexical Scope is Based on Code Structure

Consider:

```javascript
let name = "Rohit";

function greet() {
    console.log(name);
}
```

The function was written in a scope where `name` is accessible.

So it can access `name`.

This is determined by the **code structure**.

---

# 8. Function Calling Does Not Change Lexical Scope

This is an important concept.

```javascript
let name = "Rohit";

function greet() {
    console.log(name);
}

function test() {

    let name = "Aman";

    greet();
}

test();
```

Output:

```text
Rohit
```

Many beginners may expect:

```text
Aman
```

But the output is:

```text
Rohit
```

Why?

Because `greet()` was **defined in the global scope**.

It does not get its lexical scope from where it is called.

---

# 9. Very Important Example

```javascript
let name = "Rohit";

function greet() {
    console.log(name);
}

function test() {

    let name = "Aman";

    greet();
}

test();
```

Think like this:

```text
Where was greet() written?

Global Scope
     ↓
name = "Rohit"
```

Therefore:

```text
greet() → uses global name
        → "Rohit"
```

The `name = "Aman"` inside `test()` is not part of `greet()`'s lexical scope.

---

# 10. Lexical Scope vs Dynamic Scope

JavaScript uses **lexical scoping**.

### Lexical Scope

Depends on:

```text
Where the function is written
```

### Dynamic Scope

Would depend on:

```text
Where the function is called
```

JavaScript does **not** use dynamic scope for normal variable lookup.

Remember:

```text
JavaScript → Lexical Scope
```

---

# 11. Nested Functions

Lexical scope is very easy to see with nested functions.

```javascript
function outer() {

    let message = "Hello";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();
```

Output:

```text
Hello
```

`inner()` can access `message` because `message` is in its outer lexical scope.

---

# 12. Lexical Scope and Shadowing

Lexical scope also works with variable shadowing.

```javascript
let name = "Rohit";

function outer() {

    let name = "Aman";

    function inner() {

        let name = "Rahul";

        console.log(name);
    }

    inner();
}

outer();
```

Output:

```text
Rahul
```

Why?

JavaScript searches from the nearest scope first:

```text
inner scope
    ↓
name = "Rahul"  ← found
```

So it stops searching.

---

# 13. Another Example

```javascript
let x = 10;

function outer() {

    let x = 20;

    function inner() {

        let x = 30;

        console.log(x);
    }

    inner();
}

outer();
```

Output:

```text
30
```

Search happens like:

```text
inner scope
    ↓
x = 30 ✅

outer scope
    ↓
x = 20

global scope
    ↓
x = 10
```

JavaScript uses the first matching variable it finds.

---

# 14. Lexical Scope and Closures

Lexical scope is the foundation of **closures**.

Example:

```javascript
function outer() {

    let message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;
}

let greet = outer();

greet();
```

Output:

```text
Hello
```

Even though `outer()` has finished executing, `inner()` still has access to `message`.

This behavior is called a **closure**.

Closures will be covered later in:

```text
13-Advanced-Functions/02-Closures.md
```

For now, remember:

```text
Lexical Scope
     ↓
Outer variables can be remembered
     ↓
Closures become possible
```

---

# 15. Lexical Scope with Blocks

Lexical scope also applies to blocks.

```javascript
let a = 10;

{
    let b = 20;

    console.log(a);
    console.log(b);
}
```

Output:

```text
10
20
```

The block can access the outer `a`.

But outside:

```javascript
console.log(b);
```

❌ Error

Because `b` belongs to the block scope.

---

# 16. Practical Example

```javascript
let company = "ABC";

function employee() {

    let name = "Rohit";

    function details() {

        let role = "Developer";

        console.log(company);
        console.log(name);
        console.log(role);
    }

    details();
}

employee();
```

Output:

```text
ABC
Rohit
Developer
```

Scope structure:

```text
Global
│
├── company
│
└── employee()
      │
      ├── name
      │
      └── details()
            │
            └── role
```

`details()` can access:

```text
role
name
company
```

---

# Important Points

- JavaScript uses **lexical scope**.
- Lexical scope depends on where code is written.
- It does not depend on where a function is called.
- Inner scopes can access outer scopes.
- Outer scopes cannot directly access inner variables.
- JavaScript searches variables through the scope chain.
- The nearest matching variable is used.
- Lexical scope is the foundation for closures.

---

# Quick Revision

### Lexical Scope

```javascript
let name = "Rohit";

function greet() {
    console.log(name);
}
```

`greet()` can access `name` because `name` exists in its outer lexical scope.

### Nested Scope

```text
Global
  ↓
outer()
  ↓
inner()
```

`inner()` can access variables from:

```text
inner()
outer()
global
```

### Most Important Rule

```text
Where a function is written
        ↓
determines its lexical scope
```

Not:

```text
Where the function is called
```

### Remember

```text
Lexical Scope
     ↓
Based on code structure
     ↓
Creates Scope Chain
     ↓
Helps enable Closures
```

**Next file:**

```text
09-Scope-and-Hoisting/03-Hoisting.md
```