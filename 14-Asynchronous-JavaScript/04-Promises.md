# JavaScript Promises

## 1. What is a Promise?

**Promise** JavaScript ka ek object hai jo kisi asynchronous operation ke future result ko represent karta hai.

Simple words mein:

> Promise batata hai ki koi asynchronous operation abhi chal raha hai, successfully complete hoga, ya fail hoga.

Promise ki 3 states hoti hain:

```text id="0t2x9p"
Pending
   ↓
Fulfilled
   OR
Rejected
```

---

## 2. Promise States

### Pending

Operation abhi complete nahi hua.

```text id="6k4v1m"
Promise
  ↓
Pending
```

### Fulfilled

Operation successfully complete hua.

```text id="x8p3q7"
Promise
  ↓
Fulfilled
```

### Rejected

Operation fail hua.

```text id="m5r9z2"
Promise
  ↓
Rejected
```

---

## 3. Creating a Promise

Promise banane ke liye `Promise` constructor use kar sakte hain.

```javascript id="4q8n1w"
const promise = new Promise((resolve, reject) => {

    resolve("Success");

});
```

Yahan:

```text id="h7m2kx"
resolve()
→ Success

reject()
→ Failure
```

---

## 4. `resolve()`

`resolve()` Promise ko successfully complete karta hai.

```javascript id="c5v9pz"
const promise = new Promise((resolve, reject) => {

    resolve("Task completed");

});
```

Promise fulfilled ho gaya.

---

## 5. `reject()`

`reject()` Promise ko failed state mein le jata hai.

```javascript id="n3x7qa"
const promise = new Promise((resolve, reject) => {

    reject("Task failed");

});
```

Promise rejected ho gaya.

---

## 6. `.then()`

`.then()` successful Promise result ko handle karne ke liye use hota hai.

```javascript id="w6k2mr"
const promise = new Promise((resolve) => {

    resolve("Success");

});

promise.then((result) => {

    console.log(result);

});
```

Output:

```text id="j4p8vz"
Success
```

---

## 7. `.catch()`

`.catch()` rejected Promise ko handle karne ke liye use hota hai.

```javascript id="q9m3xc"
const promise = new Promise((resolve, reject) => {

    reject("Something went wrong");

});

promise.catch((error) => {

    console.log(error);

});
```

Output:

```text id="a7k5ny"
Something went wrong
```

---

## 8. `.finally()`

`.finally()` Promise fulfill ho ya reject, dono situations ke baad execute hota hai.

```javascript id="r2v8kc"
const promise = new Promise((resolve) => {

    resolve("Success");

});

promise
    .then((result) => {
        console.log(result);
    })
    .finally(() => {
        console.log("Operation finished");
    });
```

Output:

```text id="d6x1qp"
Success
Operation finished
```

---

## 9. Promise with `setTimeout()`

Promises ko asynchronous operations ke saath use kar sakte hain.

```javascript id="m8q4vz"
const promise = new Promise((resolve) => {

    setTimeout(() => {

        resolve("Data received");

    }, 2000);

});

promise.then((data) => {

    console.log(data);

});
```

Approximately 2 seconds baad:

```text id="k3w7pn"
Data received
```

---

## 10. Promise Example

```javascript id="s5n9xm"
function getData() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve("Data loaded");

        }, 1000);

    });

}

getData().then((data) => {

    console.log(data);

});
```

Output after approximately 1 second:

```text id="v4p2ka"
Data loaded
```

---

## 11. Promise with Success and Failure

```javascript id="x7m3qz"
function login(username, password) {

    return new Promise((resolve, reject) => {

        if (username === "Rohit" && password === "1234") {

            resolve("Login successful");

        } else {

            reject("Invalid username or password");

        }

    });

}
```

Use:

```javascript id="p6n8yw"
login("Rohit", "1234")
    .then((message) => {

        console.log(message);

    })
    .catch((error) => {

        console.log(error);

    });
```

Output:

```text id="b2k5rm"
Login successful
```

---

## 12. Promise Chaining

Ek Promise ke result ko next `.then()` mein use kar sakte hain.

```javascript id="c9v4xp"
Promise.resolve(10)

    .then((number) => {

        return number * 2;

    })

    .then((number) => {

        return number + 5;

    })

    .then((result) => {

        console.log(result);

    });
```

Output:

```text id="z7m1qk"
25
```

Flow:

```text id="n4p8wc"
10
 ↓
× 2
 ↓
20
 ↓
+ 5
 ↓
25
```

---

## 13. Returning a Promise

Promise ko function se return karna common hai.

```javascript id="u5x2mz"
function getUser() {

    return new Promise((resolve) => {

        resolve("Rohit");

    });

}

getUser().then((name) => {

    console.log(name);

});
```

Output:

```text id="e8q3vy"
Rohit
```

---

## 14. Promise Error Handling

```javascript id="f7m2ka"
function getData() {

    return new Promise((resolve, reject) => {

        reject("Server error");

    });

}

getData()
    .then((data) => {

        console.log(data);

    })
    .catch((error) => {

        console.log(error);

    });
```

Output:

```text id="r3x9pn"
Server error
```

---

## 15. Promise vs Callback

Callback:

```javascript id="a6k4vz"
getData((data) => {

    console.log(data);

});
```

Promise:

```javascript id="q8m1yc"
getData()
    .then((data) => {

        console.log(data);

    });
```

Promises asynchronous code ko chain aur error handling ke liye more structured approach dete hain.

---

## 16. Important Promise Example

```javascript id="t4n7xp"
console.log("Start");

Promise.resolve("Promise completed")
    .then((result) => {

        console.log(result);

    });

console.log("End");
```

Output:

```text id="w9c2mk"
Start
End
Promise completed
```

Reason:

`.then()` callback microtask ke roop mein schedule hota hai, isliye current synchronous code complete hone ke baad execute hota hai.

---

# Quick Revision

### Promise

```text id="k5p8vr"
Future result represent karta hai
```

### States

```text id="m2x7qc"
Pending
   ↓
Fulfilled
   OR
Rejected
```

### Methods

```text id="v9n3wk"
then()
→ Success

catch()
→ Error

finally()
→ Completion ke baad
```

### Basic Structure

```javascript id="h4q8mz"
const promise = new Promise((resolve, reject) => {

    // Async operation

    resolve("Success");

    // OR

    reject("Error");

});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```

### Remember

```text id="j6x1pn"
Callback
   ↓
Promise
   ↓
async / await
```

Promises asynchronous JavaScript ko handle karne ka structured way provide karte hain.

---

## Next File

```text id="c8v4y2"
14-Asynchronous-JavaScript/05-async-await.md
```