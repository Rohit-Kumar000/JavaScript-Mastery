# JavaScript Function Basics

## 1. What is a Function?

A **function** is a reusable block of code that performs a specific task.

Instead of writing the same code again and again, we can put it inside a function and call it whenever we need it.

Example:

```javascript
function greet() {
    console.log("Hello Rohit");
}
```

Calling the function:

```javascript
greet();
```

Output:

```text
Hello Rohit
```

Simple:

```text
Function = Reusable block of code
```

---

# 2. Why Use Functions?

Without a function:

```javascript
console.log("Hello Rohit");
console.log("Hello Rohit");
console.log("Hello Rohit");
```

With a function:

```javascript
function greet() {
    console.log("Hello Rohit");
}

greet();
greet();
greet();
```

Benefits:

- Code reuse
- Less repetition
- Easier to understand
- Easier to maintain
- Helps organize code

---

# 3. Function Declaration

Basic syntax:

```javascript
function functionName() {
    // code
}
```

Example:

```javascript
function greet() {
    console.log("Hello");
}
```

Here:

```text
function → keyword
greet    → function name
()       → parameters area
{}       → function body
```

---

# 4. Calling a Function

Creating a function does not automatically execute it.

```javascript
function greet() {
    console.log("Hello");
}
```

Nothing happens until we call it:

```javascript
greet();
```

Output:

```text
Hello
```

So:

```text
Function Declaration → Create function
Function Call        → Execute function
```

---

# 5. Function Without Parameters

A function can work without parameters.

```javascript
function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();
```

Output:

```text
Welcome to JavaScript
```

---

# 6. Function with Parameters

Parameters allow us to pass data into a function.

```javascript
function greet(name) {
    console.log(`Hello ${name}`);
}

greet("Rohit");
```

Output:

```text
Hello Rohit
```

Here:

```text
name → Parameter
"Rohit" → Argument
```

We will study parameters and arguments in detail in the next file.

---

# 7. Multiple Parameters

A function can have multiple parameters.

```javascript
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
```

Output:

```text
30
```

Here:

```text
a → 10
b → 20
```

---

# 8. Function with Different Arguments

The same function can be called with different values.

```javascript
function greet(name) {
    console.log(`Hello ${name}`);
}

greet("Rohit");
greet("Aman");
greet("Rahul");
```

Output:

```text
Hello Rohit
Hello Aman
Hello Rahul
```

This is one of the main benefits of functions.

---

# 9. Function Performing a Calculation

```javascript
function square(number) {
    console.log(number * number);
}

square(5);
```

Output:

```text
25
```

Another example:

```javascript
function calculateArea(length, width) {
    console.log(length * width);
}

calculateArea(10, 5);
```

Output:

```text
50
```

---

# 10. Function Expression

A function can also be stored inside a variable.

```javascript
const greet = function() {
    console.log("Hello Rohit");
};

greet();
```

This is called a **Function Expression**.

Difference:

Function declaration:

```javascript
function greet() {
    console.log("Hello");
}
```

Function expression:

```javascript
const greet = function() {
    console.log("Hello");
};
```

---

# 11. Function Name

A function name should describe what the function does.

Good:

```javascript
function calculateTotal() {
    // code
}
```

```javascript
function printName() {
    // code
}
```

```javascript
function checkAge() {
    // code
}
```

Avoid unclear names:

```javascript
function abc() {
    // code
}
```

Use meaningful names whenever possible.

---

# 12. Function Scope

Variables declared inside a function are generally accessible only inside that function.

```javascript
function test() {
    let name = "Rohit";

    console.log(name);
}

test();
```

This works.

But:

```javascript
console.log(name);
```

outside the function will cause an error because `name` is local to the function.

---

# 13. Global Variable Inside Function

A variable declared outside a function can generally be accessed inside it.

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

But it is important to understand scope carefully before relying heavily on global variables.

---

# 14. Local Variable

A variable created inside a function is called a local variable.

```javascript
function test() {
    let age = 23;

    console.log(age);
}
```

`age` is local to the function.

---

# 15. Calling a Function Multiple Times

```javascript
function welcome() {
    console.log("Welcome!");
}

welcome();
welcome();
welcome();
```

Output:

```text
Welcome!
Welcome!
Welcome!
```

The same code can be reused multiple times.

---

# 16. Function Calling Another Function

One function can call another function.

```javascript
function greet() {
    console.log("Hello");
}

function welcome() {
    greet();
    console.log("Welcome to JavaScript");
}

welcome();
```

Output:

```text
Hello
Welcome to JavaScript
```

---

# 17. Function as a Value

Functions are values in JavaScript.

Example:

```javascript
function greet() {
    console.log("Hello");
}

let myFunction = greet;

myFunction();
```

Output:

```text
Hello
```

Notice:

```javascript
let myFunction = greet;
```

There are no parentheses.

If you write:

```javascript
let myFunction = greet();
```

then the function is executed immediately.

---

# 18. Function Naming Rules

Function names follow similar naming rules as variables.

Valid:

```javascript
function greetUser() {}

function calculateTotal() {}

function getData2() {}
```

Invalid:

```javascript
function 2user() {}

function user-name() {}
```

Function names are also case-sensitive:

```javascript
function greet() {}

function Greet() {}
```

These are different functions.

---

# 19. Function Hoisting

Function declarations can generally be called before their declaration.

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Output:

```text
Hello
```

This happens because function declarations are hoisted.

Function expressions behave differently:

```javascript
greet();

const greet = function() {
    console.log("Hello");
};
```

This causes an error because the variable cannot be accessed before its initialization.

Hoisting will be covered properly later in:

```text
09-Scope-and-Hoisting/03-Hoisting.md
```

---

# 20. Function Without Calling

This:

```javascript
function greet() {
    console.log("Hello");
}
```

only creates the function.

This:

```javascript
greet();
```

executes it.

Remember:

```text
function greet() {} → Create

greet();             → Execute
```

---

# 21. Practical Example

```javascript
function calculateTotal(price, quantity) {
    console.log(price * quantity);
}

calculateTotal(100, 3);
```

Output:

```text
300
```

Another example:

```javascript
function checkNumber(number) {

    if (number > 0) {
        console.log("Positive");
    } else if (number < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}

checkNumber(10);
```

Output:

```text
Positive
```

---

# Important Points

- A function is a reusable block of code.
- Function is created using the `function` keyword.
- Function runs when it is called.
- Parameters receive values inside a function.
- Arguments are the actual values passed during the call.
- A function can have zero or multiple parameters.
- Functions can be stored in variables.
- Variables inside a function are generally local to that function.
- One function can call another function.
- Function declarations are hoisted.

---

# Quick Revision

Basic function:

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

With parameter:

```javascript
function greet(name) {
    console.log(`Hello ${name}`);
}

greet("Rohit");
```

Multiple parameters:

```javascript
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
```

Function expression:

```javascript
const greet = function() {
    console.log("Hello");
};

greet();
```

### Remember

```text
Function       → Reusable code
Parameter      → Variable in function definition
Argument       → Actual value passed
Function Call  → Executes function
return         → Sends value back
```

`return` ko hum next file **03-return.md** mein detail mein samjhenge.