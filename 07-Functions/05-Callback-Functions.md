# JavaScript Callback Functions

## 1. What is a Callback Function?

A **callback function** is a function that is passed as an argument to another function.

Example:

```javascript
function greet() {
    console.log("Hello Rohit");
}

function execute(callback) {
    callback();
}

execute(greet);
```

Output:

```text
Hello Rohit
```

Here:

```text
greet     → Callback function
execute   → Function receiving the callback
callback  → Parameter that stores the function
```

Simple:

```text
Callback = A function passed to another function
```

---

# 2. Why Use Callbacks?

Callbacks are useful when we want one function to decide **when or where another function should run**.

Example:

```javascript
function greet() {
    console.log("Hello");
}

function welcome(callback) {
    console.log("Welcome");
    callback();
}

welcome(greet);
```

Output:

```text
Welcome
Hello
```

---

# 3. Passing a Function as an Argument

Functions in JavaScript are values, so they can be passed to other functions.

```javascript
function sayHello() {
    console.log("Hello");
}

function runFunction(fn) {
    fn();
}

runFunction(sayHello);
```

Output:

```text
Hello
```

Notice:

```javascript
runFunction(sayHello);
```

We pass the function itself.

Not:

```javascript
runFunction(sayHello());
```

The second version executes `sayHello()` immediately and passes its result.

---

# 4. Callback with Parameters

A callback can also receive values.

```javascript
function greet(name) {
    console.log(`Hello ${name}`);
}

function processUser(callback) {
    callback("Rohit");
}

processUser(greet);
```

Output:

```text
Hello Rohit
```

Flow:

```text
processUser()
      ↓
callback("Rohit")
      ↓
greet("Rohit")
      ↓
Hello Rohit
```

---

# 5. Using an Arrow Function as Callback

You don't always need to create a separate function.

You can directly pass an arrow function.

```javascript
function execute(callback) {
    callback();
}

execute(() => {
    console.log("Hello Rohit");
});
```

Output:

```text
Hello Rohit
```

This is very common in modern JavaScript.

---

# 6. Callback with Array Methods

Callbacks are heavily used with array methods.

Example with `forEach()`:

```javascript
let numbers = [10, 20, 30];

numbers.forEach(function(number) {
    console.log(number);
});
```

Output:

```text
10
20
30
```

Here:

```javascript
function(number) {
    console.log(number);
}
```

is the callback function.

---

# 7. forEach() with Arrow Function

The same example can be written shorter:

```javascript
let numbers = [10, 20, 30];

numbers.forEach(number => {
    console.log(number);
});
```

Even shorter:

```javascript
numbers.forEach(number => console.log(number));
```

---

# 8. Callback with map()

`map()` also takes a callback function.

```javascript
let numbers = [1, 2, 3, 4];

let result = numbers.map(number => {
    return number * 2;
});

console.log(result);
```

Output:

```text
[2, 4, 6, 8]
```

Here:

```javascript
number => number * 2
```

is the callback.

---

# 9. Callback with filter()

```javascript
let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter(number => {
    return number % 2 === 0;
});

console.log(evenNumbers);
```

Output:

```text
[2, 4, 6]
```

The function passed to `filter()` is the callback.

---

# 10. Callback with setTimeout()

Callbacks are also used with asynchronous operations.

```javascript
setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);
```

Here:

```javascript
() => {
    console.log("Hello after 2 seconds");
}
```

is the callback function.

The callback runs after approximately 2 seconds.

---

# 11. Simple Real-Life Example

Imagine you order food.

```text
You order food
      ↓
Restaurant prepares food
      ↓
Food is ready
      ↓
You get notified
```

The notification can be thought of as a callback.

In programming:

```text
Do something
     ↓
When finished
     ↓
Run callback
```

---

# 12. Callback Example

```javascript
function downloadFile(callback) {

    console.log("Downloading file...");

    callback();
}

function fileDownloaded() {
    console.log("File downloaded successfully");
}

downloadFile(fileDownloaded);
```

Output:

```text
Downloading file...
File downloaded successfully
```

This example shows the basic idea of:

```text
Main operation → Callback after operation
```

---

# 13. Callback Hell

When many callbacks are nested inside each other, the code can become difficult to read.

Example:

```javascript
doSomething(() => {

    doSomethingElse(() => {

        doAnotherThing(() => {

            doSomethingAgain(() => {

                console.log("Finished");

            });

        });

    });

});
```

This type of deeply nested callback structure is commonly called **Callback Hell**.

Modern JavaScript often uses **Promises** and `async/await` to make asynchronous code easier to manage.

These topics will be covered later in:

```text
14-Asynchronous-JavaScript
```

---

# 14. Callback vs Normal Function

A function itself:

```javascript
function greet() {
    console.log("Hello");
}
```

When passed to another function:

```javascript
execute(greet);
```

It becomes a callback in that context.

So:

```text
Function → General concept

Callback → A function being passed to another function
```

---

# 15. Important: Don't Add ()

This is one of the most common mistakes.

Correct:

```javascript
function greet() {
    console.log("Hello");
}

function execute(callback) {
    callback();
}

execute(greet);
```

Incorrect:

```javascript
execute(greet());
```

Why?

```javascript
greet()
```

means:

> Execute the function now.

While:

```javascript
greet
```

means:

> Pass the function itself.

Remember:

```text
greet   → Function
greet() → Function execution
```

---

# 16. Practical Example

Create a function that performs an operation and then calls another function.

```javascript
function calculate(a, b, callback) {

    let result = a + b;

    callback(result);
}

function showResult(result) {
    console.log(`Result: ${result}`);
}

calculate(10, 20, showResult);
```

Output:

```text
Result: 30
```

Flow:

```text
calculate(10, 20, showResult)
            ↓
       10 + 20
            ↓
           30
            ↓
    showResult(30)
            ↓
       Result: 30
```

---

# 17. Callback with Arrow Function

The same example can be written using an arrow function:

```javascript
function calculate(a, b, callback) {

    let result = a + b;

    callback(result);
}

calculate(10, 20, result => {
    console.log(`Result: ${result}`);
});
```

Output:

```text
Result: 30
```

---

# Important Points

- A callback is a function passed to another function.
- The receiving function can call the callback.
- Callbacks can receive parameters.
- `forEach()`, `map()`, and `filter()` commonly use callbacks.
- `setTimeout()` also accepts a callback.
- Arrow functions are commonly used as callbacks.
- `functionName` passes a function.
- `functionName()` executes the function.
- Too many nested callbacks can lead to Callback Hell.
- Promises and `async/await` provide cleaner approaches for many asynchronous tasks.

---

# Quick Revision

### Basic Callback

```javascript
function greet() {
    console.log("Hello");
}

function execute(callback) {
    callback();
}

execute(greet);
```

### Arrow Callback

```javascript
execute(() => {
    console.log("Hello");
});
```

### forEach()

```javascript
let numbers = [10, 20, 30];

numbers.forEach(number => {
    console.log(number);
});
```

### map()

```javascript
let numbers = [1, 2, 3];

let result = numbers.map(number => number * 2);
```

### filter()

```javascript
let numbers = [1, 2, 3, 4];

let even = numbers.filter(number => number % 2 === 0);
```

### Remember

```text
Callback = Function passed to another function

greet   → Pass the function
greet() → Execute the function
```