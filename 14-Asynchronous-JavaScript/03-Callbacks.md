# JavaScript Callbacks

## 1. What is a Callback?

**Callback** ek function hota hai jo kisi doosre function ko argument ke roop mein pass kiya jata hai, taaki use baad mein execute kiya ja sake.

Example:

```javascript
function greet(name) {
    console.log("Hello " + name);
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

Yahan `greet` ek **callback function** hai.

---

## 2. Function as an Argument

JavaScript mein functions ko variables ki tarah pass kiya ja sakta hai.

```javascript
function sayHello() {
    console.log("Hello");
}

function execute(callback) {
    callback();
}

execute(sayHello);
```

Output:

```text
Hello
```

Flow:

```text
sayHello()
    ↓
execute()
    ↓
callback()
```

---

## 3. Anonymous Callback

Callback ke liye alag function banana zaroori nahi hai.

```javascript
function execute(callback) {
    callback();
}

execute(function () {
    console.log("Hello");
});
```

Yahan anonymous function callback hai.

---

## 4. Arrow Function as Callback

Arrow function bhi callback ke roop mein use kar sakte hain.

```javascript
function execute(callback) {
    callback();
}

execute(() => {
    console.log("Hello");
});
```

Output:

```text
Hello
```

---

## 5. Callback with Parameters

Callback ko parameters bhi pass kar sakte hain.

```javascript
function calculate(a, b, callback) {
    const result = a + b;
    callback(result);
}

calculate(10, 20, (result) => {
    console.log(result);
});
```

Output:

```text
30
```

Flow:

```text
10 + 20
   ↓
30
   ↓
callback(30)
   ↓
console.log(30)
```

---

## 6. Synchronous Callback

Har callback asynchronous nahi hota.

Example:

```javascript
[1, 2, 3].forEach((number) => {
    console.log(number);
});
```

Output:

```text
1
2
3
```

`forEach()` callback ko synchronously execute karta hai.

---

## 7. Asynchronous Callback

Callback asynchronous operation ke complete hone ke baad bhi execute ho sakta hai.

Example:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Hello");
}, 1000);

console.log("End");
```

Output:

```text
Start
End
Hello
```

Yahan `setTimeout()` ke andar wala function callback hai.

---

## 8. Callback with `setTimeout()`

```javascript
function greet() {
    console.log("Hello");
}

setTimeout(greet, 2000);
```

Approximately 2 seconds baad:

```text
Hello
```

Yahan:

```text
greet
↓
Callback
↓
setTimeout()
```

---

## 9. Callback Function vs Callback Invocation

Ye difference important hai.

Correct:

```javascript
setTimeout(greet, 1000);
```

Yahan `greet` function pass hua hai.

Generally ye nahi:

```javascript
setTimeout(greet(), 1000);
```

Kyuki `greet()` function ko immediately call kar deta hai aur uska returned value pass hota hai.

---

## 10. Multiple Callbacks

```javascript
function first(callback) {
    console.log("First");
    callback();
}

function second() {
    console.log("Second");
}

first(second);
```

Output:

```text
First
Second
```

Flow:

```text
first()
  ↓
"First"
  ↓
callback()
  ↓
second()
  ↓
"Second"
```

---

## 11. Callback Hell

Jab callbacks bahut deeply nested ho jaate hain, code difficult to read aur maintain karna ho sakta hai.

Example:

```javascript
doTask1(() => {

    doTask2(() => {

        doTask3(() => {

            doTask4(() => {

                console.log("Done");

            });

        });

    });

});
```

Is tarah ke deeply nested callback structure ko commonly **Callback Hell** kaha jata hai.

Visual shape:

```text
doTask1(
    doTask2(
        doTask3(
            doTask4(
                ...
            )
        )
    )
)
```

---

## 12. Why Callback Hell is a Problem?

Deep nesting se:

```text
✓ Code difficult to read
✓ Debugging difficult
✓ Maintenance difficult
✓ Error handling complex
✓ Logic samajhna difficult
```

ho sakta hai.

Isi problem ko solve karne ke liye **Promises** aur baad mein **async/await** useful approaches provide karte hain.

---

## 13. Callback Example

```javascript
function getUser(callback) {

    setTimeout(() => {

        const user = {
            name: "Rohit"
        };

        callback(user);

    }, 1000);
}

getUser((user) => {
    console.log(user.name);
});
```

Output after approximately 1 second:

```text
Rohit
```

Flow:

```text
getUser()
    ↓
setTimeout()
    ↓
1 second
    ↓
callback(user)
    ↓
console.log()
```

---

## 14. Callback Error Handling

Callbacks ke saath error handle karne ka ek common pattern **error-first callback** hai.

```javascript
function getData(callback) {

    const success = true;

    if (success) {
        callback(null, "Data received");
    } else {
        callback("Something went wrong", null);
    }
}

getData((error, data) => {

    if (error) {
        console.log(error);
        return;
    }

    console.log(data);
});
```

Success output:

```text
Data received
```

Basic pattern:

```text
callback(error, data)
```

---

## 15. Callback vs Promise

### Callback

```javascript
getData((data) => {
    console.log(data);
});
```

### Promise

```javascript
getData()
    .then((data) => {
        console.log(data);
    });
```

Promises asynchronous code ko chain karne aur errors handle karne ka structured way provide karte hain.

---

# Quick Revision

### Callback

```text
Function passed as an argument
        ↓
Executed later/by another function
```

Example:

```javascript
function execute(callback) {
    callback();
}

execute(() => {
    console.log("Hello");
});
```

### Important

```text
Callback ≠ Always Asynchronous
```

Callback synchronous bhi ho sakta hai:

```javascript
[1, 2, 3].forEach(callback);
```

Aur asynchronous bhi:

```javascript
setTimeout(callback, 1000);
```

### Callback Hell

```text
Nested callbacks
      ↓
Complex code
      ↓
Promises / async-await
```

---

## Next File

```text
14-Asynchronous-JavaScript/04-Promises.md
```