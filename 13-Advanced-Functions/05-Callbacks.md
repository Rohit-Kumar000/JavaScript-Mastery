# JavaScript Callback Functions

## 1. What is a Callback Function?

Jab hum kisi function ko **dusre function ke argument** ke roop mein pass karte hain, aur baad mein us function ko execute karte hain, use **Callback Function** kehte hain.

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

Yahan:

```text
greet
↓
Callback Function

execute
↓
Higher-Order Function
```

---

# 2. Callback ka Simple Example

```javascript
function sayHello() {
    console.log("Hello");
}

function process(callback) {
    callback();
}

process(sayHello);
```

Flow:

```text
sayHello()
     ↓
process() ko pass
     ↓
callback()
     ↓
Hello
```

---

# 3. Callback Function with Parameters

Callback ko values bhi pass kar sakte hain.

```javascript
function add(a, b) {
    console.log(a + b);
}

function calculate(callback) {
    callback(10, 20);
}

calculate(add);
```

Output:

```text
30
```

---

# 4. Anonymous Callback

Callback ke liye separate function banana zaroori nahi hai.

```javascript
function execute(callback) {
    callback();
}

execute(function() {
    console.log("Hello");
});
```

Output:

```text
Hello
```

Yahan anonymous function callback hai.

---

# 5. Arrow Function as Callback

Arrow function commonly callbacks ke liye use hota hai.

```javascript
function execute(callback) {
    callback();
}

execute(() => {
    console.log("Hello");
});
```

---

# 6. Callback with `forEach()`

`forEach()` ek callback function accept karta hai.

```javascript
const numbers = [10, 20, 30];

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

Arrow function:

```javascript
numbers.forEach(number => {
    console.log(number);
});
```

---

# 7. Callback with `map()`

```javascript
const numbers = [1, 2, 3];

const result = numbers.map(function(number) {
    return number * 2;
});

console.log(result);
```

Output:

```text
[2, 4, 6]
```

Here:

```text
map()
↓
Higher-Order Function

function(number)
↓
Callback Function
```

---

# 8. Callback with `filter()`

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers.filter(function(number) {
    return number > 2;
});

console.log(result);
```

Output:

```text
[3, 4, 5]
```

---

# 9. Synchronous Callback

Callback immediately execute ho sakta hai.

```javascript
function process(callback) {

    console.log("Start");

    callback();

    console.log("End");
}

process(function() {
    console.log("Middle");
});
```

Output:

```text
Start
Middle
End
```

Flow:

```text
process()
   ↓
Start
   ↓
callback()
   ↓
Middle
   ↓
End
```

---

# 10. Asynchronous Callback

Callback ko baad mein bhi execute kiya ja sakta hai.

Example:

```javascript
console.log("Start");

setTimeout(function() {
    console.log("Hello");
}, 2000);

console.log("End");
```

Output:

```text
Start
End
Hello
```

`setTimeout()` ka callback approximately 2 seconds baad execute hota hai.

---

# 11. Why Are Callbacks Useful?

Callbacks allow us to say:

> "Ye kaam complete hone ke baad ye function run karna."

Examples:

```text
Event handling
setTimeout()
API requests
Array methods
File operations
Asynchronous programming
```

---

# 12. Callback with Event

```javascript
const button = document.querySelector("#btn");

button.addEventListener("click", function() {
    console.log("Button clicked");
});
```

Yahan:

```text
function()
↓
Callback Function
```

Event hone ke baad callback execute hota hai.

---

# 13. Callback Hell

Agar bahut saare callbacks nested ho jayein, code difficult ho sakta hai.

Example:

```javascript
doTask(function() {

    doTask(function() {

        doTask(function() {

            doTask(function() {

                console.log("Done");

            });

        });

    });

});
```

Is type ke deeply nested callback structure ko commonly **Callback Hell** kaha jata hai.

Modern JavaScript mein Promises aur `async/await` is problem ko handle karne ke cleaner ways provide karte hain.

---

# 14. Callback vs Higher-Order Function

Example:

```javascript
function execute(callback) {
    callback();
}
```

Here:

```text
execute()
↓
Higher-Order Function
```

And:

```text
callback
↓
Callback Function
```

Easy rule:

```text
Function receives another function
        ↓
Higher-Order Function

Function passed as an argument
        ↓
Callback
```

---

# 15. Practical Example

```javascript
function calculate(a, b, callback) {

    const result = a + b;

    callback(result);
}

calculate(10, 20, function(result) {

    console.log("Result:", result);

});
```

Output:

```text
Result: 30
```

Flow:

```text
calculate()
     ↓
10 + 20
     ↓
30
     ↓
callback(30)
     ↓
Result: 30
```

---

# Quick Revision

Callback:

```text
Ek function
jo dusre function ko
argument ke roop mein diya jata hai
```

Example:

```javascript
function greet() {
    console.log("Hello");
}

function execute(callback) {
    callback();
}

execute(greet);
```

Common callback examples:

```text
forEach()
map()
filter()
addEventListener()
setTimeout()
```

Remember:

```text
Callback
→ Function passed to another function

Higher-Order Function
→ Function that accepts/returns another function
```

---

# 13-Advanced-Functions Complete 🎯

```text
13-Advanced-Functions
│
├── 01-Higher-Order-Functions.md
├── 02-Closures.md
├── 03-IIFE.md
├── 04-Recursion.md
└── 05-Callbacks.md
```

## Next Section

```text
14-Asynchronous-JavaScript
```

First file:

```text
14-Asynchronous-JavaScript/01-Synchronous-vs-Asynchronous.md
```