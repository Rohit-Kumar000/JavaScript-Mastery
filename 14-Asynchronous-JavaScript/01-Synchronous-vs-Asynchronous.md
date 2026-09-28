# JavaScript Synchronous vs Asynchronous

## 1. What is Synchronous JavaScript?

**Synchronous** ka matlab hai ki JavaScript code **one by one, sequence mein** execute karta hai.

Example:

```javascript
console.log("First");
console.log("Second");
console.log("Third");
```

Output:

```text
First
Second
Third
```

Flow:

```text
First
  ↓
Second
  ↓
Third
```

JavaScript next statement par tabhi jaata hai jab previous statement complete ho jata hai.

---

## 2. Simple Synchronous Example

```javascript
function first() {
    console.log("First");
}

function second() {
    console.log("Second");
}

first();
second();
```

Output:

```text
First
Second
```

Execution order same hai:

```text
first()
  ↓
second()
```

---

## 3. What is Asynchronous JavaScript?

**Asynchronous** ka matlab hai ki kuch operations ka result baad mein mil sakta hai, aur JavaScript is waiting period mein doosra code continue kar sakta hai.

Example:

```javascript
console.log("Start");

setTimeout(() => {
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

Yahan `"Hello"` approximately 2 seconds baad print hota hai.

---

## 4. Why Did "End" Come Before "Hello"?

Code:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Hello");
}, 2000);

console.log("End");
```

Flow:

```text
Start
  ↓
setTimeout()
  ↓
End
  ↓
2 seconds
  ↓
Hello
```

`setTimeout()` asynchronous operation start karta hai, isliye JavaScript next statement:

```javascript
console.log("End");
```

ko execute kar sakta hai.

---

## 5. Synchronous Example

```javascript
console.log("A");
console.log("B");
console.log("C");
```

Output:

```text
A
B
C
```

Flow:

```text
A → B → C
```

Har statement previous statement ke baad execute hota hai.

---

## 6. Asynchronous Example

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

console.log("C");
```

Output:

```text
A
C
B
```

Flow:

```text
A
 ↓
setTimeout()
 ↓
C
 ↓
B
```

---

## 7. `setTimeout()` Example

```javascript
setTimeout(() => {
    console.log("Hello");
}, 3000);
```

Meaning:

```text
Callback ko approximately 3 seconds ke baad run karna.
```

Important:

`3000` milliseconds = `3 seconds`

---

## 8. `setTimeout(0)` Example

Ye example important hai:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");
```

Output:

```text
Start
End
Timeout
```

Even though timeout `0` milliseconds ka hai, callback current synchronous code ke beech mein immediately execute nahi hota.

---

## 9. Real-Life Example

### Synchronous

Restaurant mein ek person ka order process ho raha hai:

```text
Order 1
  ↓
Complete
  ↓
Order 2
  ↓
Complete
```

Order 2 ko Order 1 ke complete hone ka wait karna padega.

### Asynchronous

```text
Order placed
     ↓
Kitchen prepares food
     ↓
You can do other work
     ↓
Food ready
     ↓
You receive food
```

Ye asynchronous concept ko samajhne ke liye simple analogy hai.

---

## 10. Synchronous vs Asynchronous

| Synchronous | Asynchronous |
|---|---|
| Code sequence mein execute hota hai | Kuch work baad mein complete ho sakta hai |
| Next code previous work ke baad execute hota hai | JavaScript other work continue kar sakta hai |
| Simple execution flow | Delayed/event-based execution possible |
| Example: normal function calls | Example: `setTimeout()`, `fetch()` |

---

## 11. Common Asynchronous Operations

JavaScript environment mein asynchronous behavior commonly in operations ke saath dekhne ko milta hai:

```text
setTimeout()
setInterval()
fetch()
Promises
DOM Events
Network Requests
```

---

## 12. Why Do We Need Asynchronous JavaScript?

Web applications mein kuch operations time le sakte hain.

For example:

```text
API Request
    ↓
Server
    ↓
Response
```

Agar response aane tak application ka baaki kaam completely ruk jaye, user experience poor ho sakta hai.

Asynchronous programming JavaScript ko waiting operations ke saath efficiently kaam karne mein help karta hai.

---

## 13. Important Concept

Ye mat samajhna ki:

```text
JavaScript = Everything Asynchronous
```

Actually normal JavaScript code **synchronously execute** hota hai.

Asynchronous behavior runtime environment ke mechanisms ke through handle hota hai.

Example:

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

console.log("C");
```

Normal code:

```text
A
C
```

Aur timer ka callback baad mein:

```text
B
```

---

## Quick Revision

### Synchronous

```text
One by one
     ↓
Statement 1
     ↓
Statement 2
     ↓
Statement 3
```

### Asynchronous

```text
Start operation
      ↓
Continue other code
      ↓
Operation completes later
      ↓
Result/callback handled
```

### Most Important Example

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Async");
}, 1000);

console.log("End");
```

Output:

```text
Start
End
Async
```

Remember:

```text
Synchronous
→ One-by-one execution

Asynchronous
→ Some work completes later
→ JavaScript can continue with other work
```

---

## Next File

```text
14-Asynchronous-JavaScript/02-Call-Stack.md
```