# JavaScript Async / Await

## 1. What is `async`?

`async` keyword ka use kisi function ko **asynchronous function** banane ke liye hota hai.

An `async` function **always a Promise return karta hai**.

Example:

```javascript
async function greet() {
    return "Hello";
}

greet().then((message) => {
    console.log(message);
});
```

Output:

```text
Hello
```

---

## 2. What is `await`?

`await` ka use Promise ke result ka wait karne ke liye hota hai.

```javascript
async function getData() {

    const result = await Promise.resolve("Data received");

    console.log(result);
}

getData();
```

Output:

```text
Data received
```

`await` normally `async` function ke andar use hota hai.

---

## 3. Why Use Async/Await?

Promise chaining:

```javascript
getData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
```

Same thing using `async/await`:

```javascript
async function showData() {

    try {

        const data = await getData();

        console.log(data);

    } catch (error) {

        console.log(error);

    }
}
```

`async/await` asynchronous code ko **synchronous-looking aur readable** style mein likhne deta hai.

---

## 4. Simple Example

```javascript
function getData() {

    return new Promise((resolve) => {

        resolve("Hello");

    });

}

async function show() {

    const data = await getData();

    console.log(data);

}

show();
```

Output:

```text
Hello
```

Flow:

```text
getData()
   ↓
Promise
   ↓
await
   ↓
data
   ↓
console.log()
```

---

## 5. Async Function Returns a Promise

Important concept:

```javascript
async function test() {
    return 10;
}
```

`test()` directly `10` return nahi karta.

Ye Promise return karta hai.

```javascript
test().then((value) => {
    console.log(value);
});
```

Output:

```text
10
```

---

## 6. `await` with Promise

```javascript
async function example() {

    const value = await Promise.resolve(100);

    console.log(value);

}

example();
```

Output:

```text
100
```

Yahan:

```text
Promise.resolve(100)
       ↓
     await
       ↓
      100
```

---

## 7. Asynchronous Example

```javascript
function getData() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Data loaded");

        }, 2000);

    });

}

async function showData() {

    console.log("Waiting...");

    const data = await getData();

    console.log(data);

}

showData();
```

Output:

```text
Waiting...
Data loaded
```

`Data loaded` approximately 2 seconds baad milega.

---

## 8. `try...catch` with Async/Await

Errors handle karne ke liye `try...catch` commonly use hota hai.

```javascript
async function getData() {

    try {

        const data = await Promise.reject("Something went wrong");

        console.log(data);

    } catch (error) {

        console.log(error);

    }

}

getData();
```

Output:

```text
Something went wrong
```

---

## 9. Complete Pattern

```javascript
async function getData() {

    try {

        const result = await somePromise;

        console.log(result);

    } catch (error) {

        console.log(error);

    }

}
```

Remember:

```text
try
 ↓
Async operation
 ↓
Success → continue

Error
 ↓
catch
```

---

## 10. Multiple `await`

Ek function mein multiple `await` use kar sakte hain.

```javascript
async function calculate() {

    const a = await Promise.resolve(10);

    const b = await Promise.resolve(20);

    console.log(a + b);

}

calculate();
```

Output:

```text
30
```

---

## 11. Sequential Execution

Multiple independent operations ko sequentially await karne par:

```javascript
const a = await task1();
const b = await task2();
```

Flow:

```text
task1()
   ↓
complete
   ↓
task2()
   ↓
complete
```

Agar tasks independent hain aur unhe parallel mein start karna hai, `Promise.all()` useful hota hai.

---

## 12. Async/Await with `Promise.all()`

```javascript
async function getData() {

    const [user, posts] = await Promise.all([
        getUser(),
        getPosts()
    ]);

    console.log(user);
    console.log(posts);

}
```

Yahan dono independent Promises ko together handle kiya ja sakta hai.

---

## 13. Important Example

```javascript
function getNumber() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(50);

        }, 1000);

    });

}

async function calculate() {

    const number = await getNumber();

    console.log(number + 50);

}

calculate();
```

Output after approximately 1 second:

```text
100
```

---

## 14. Async/Await vs Promise

### Promise

```javascript
getData()
    .then((data) => {

        console.log(data);

    })
    .catch((error) => {

        console.log(error);

    });
```

### Async/Await

```javascript
async function show() {

    try {

        const data = await getData();

        console.log(data);

    } catch (error) {

        console.log(error);

    }

}
```

Dono Promises ke saath kaam karte hain.

---

## 15. Important: `await` Does Not Freeze Everything

Example:

```javascript
async function show() {

    const data = await getData();

    console.log(data);

}
```

`await` ka matlab ye nahi hai ki **poora JavaScript program freeze** ho gaya.

`async` function ka execution Promise settle hone tak pause/resume model follow karta hai, jabki JavaScript runtime doosre available work ko handle kar sakta hai.

---

## 16. Real-Life Example

Suppose website ko server se user data lena hai:

```text
Request
   ↓
Server
   ↓
Wait for Response
   ↓
Data received
   ↓
Display User
```

Async/await:

```javascript
async function getUser() {

    try {

        const response = await fetch("/user");

        const user = await response.json();

        console.log(user);

    } catch (error) {

        console.log("Unable to get user");

    }

}
```

---

# Quick Revision

### `async`

```text
Function ko Promise-returning function banata hai.
```

### `await`

```text
Promise ke settle hone ka wait karta hai
aur fulfilled value provide karta hai.
```

### Error Handling

```text
try
 ↓
await
 ↓
Success

catch
 ↓
Error
```

### Basic Structure

```javascript
async function example() {

    try {

        const result = await somePromise;

        console.log(result);

    } catch (error) {

        console.log(error);

    }

}
```

### Most Important

```text
Promise
   ↓
async / await
   ↓
Cleaner asynchronous code
```

---

## Next File

```text
14-Asynchronous-JavaScript/06-Error-Handling.md
```