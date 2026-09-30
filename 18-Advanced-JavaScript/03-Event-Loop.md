# JavaScript Event Loop

## 1. What is Event Loop?

**Event Loop** JavaScript ke asynchronous behavior ko handle karne mein important role play karta hai.

Simple words mein:

> Event Loop continuously check karta hai ki Call Stack empty hai ya nahi, aur jab stack empty hota hai to waiting callbacks ko execution ke liye stack par bhejne mein help karta hai.

---

# 2. Why Do We Need Event Loop?

JavaScript generally **single-threaded** execution model follow karti hai.

Matlab ek time par JavaScript execution thread par ek main piece of JavaScript code execute hota hai.

Example:

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

Lekin browser mein kuch operations time le sakte hain:

```text
setTimeout()
fetch()
DOM events
network requests
```

JavaScript ko in operations ke complete hone ka wait karke main thread ko block nahi karna chahiye.

Yahin asynchronous APIs aur Event Loop important hote hain.

---

# 3. JavaScript Runtime

Simplified JavaScript runtime:

```text
┌─────────────────────────────────┐
│       JavaScript Runtime        │
│                                 │
│  ┌──────────────┐               │
│  │ Call Stack   │               │
│  └──────────────┘               │
│                                 │
│  ┌──────────────┐               │
│  │ Web APIs     │               │
│  └──────────────┘               │
│                                 │
│  ┌──────────────┐               │
│  │ Queue(s)     │               │
│  └──────────────┘               │
│                                 │
│  ┌──────────────┐               │
│  │ Event Loop   │               │
│  └──────────────┘               │
└─────────────────────────────────┘
```

Browser environment mein Web APIs browser provide karta hai.

---

# 4. Simple `setTimeout()` Example

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

Important:

`setTimeout()` 2000ms ke baad callback ko eligible banata hai.

Ye guarantee nahi karta ki callback exactly 2000ms par execute hoga.

---

# 5. Why Does `End` Come Before `Hello`?

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
Timer handled by runtime
 ↓
console.log("End")
 ↓
2 seconds complete
 ↓
Callback queue
 ↓
Event Loop
 ↓
Call Stack
 ↓
Hello
```

---

# 6. Call Stack + Web API + Queue + Event Loop

Example:

```javascript
console.log("A");

setTimeout(() => {

    console.log("B");

}, 1000);

console.log("C");
```

Flow:

```text
                 JavaScript
                     │
                     ↓
                Call Stack
                     │
                     ↓
                setTimeout()
                     │
                     ↓
                 Web API
                     │
                     ↓
             Timer completes
                     │
                     ↓
              Callback Queue
                     │
                     ↓
                Event Loop
                     │
                     ↓
                Call Stack
                     │
                     ↓
                    B
```

Output:

```text
A
C
B
```

---

# 7. Event Loop Main Job

Event Loop repeatedly checks:

```text
Is Call Stack empty?
```

Agar:

```text
Call Stack = Empty
```

aur queue mein executable callback available hai, to Event Loop us callback ko Call Stack par bhejne mein help karta hai.

Simplified:

```text
Queue
  ↓
Event Loop
  ↓
Call Stack
```

---

# 8. Event Loop Example

```javascript
console.log("1");

setTimeout(() => {

    console.log("2");

}, 0);

console.log("3");
```

Output:

```text
1
3
2
```

Bahut important:

```text
setTimeout(..., 0)
```

ka matlab ye nahi hai ki callback immediately execute hoga.

Callback current synchronous code complete hone ke baad execute ho sakta hai.

---

# 9. Why `setTimeout(0)` Is Not Immediate

Example:

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

Reason:

```text
Current synchronous code
        ↓
complete
        ↓
Call Stack empty
        ↓
Callback can be processed
```

---

# 10. Synchronous vs Asynchronous

### Synchronous

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

One operation ke baad next operation execute hota hai.

### Asynchronous

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

---

# 11. Browser APIs

Browser environment JavaScript ko additional APIs provide karta hai.

Examples:

```text
setTimeout()
setInterval()
fetch()
DOM events
Web APIs
```

Ye JavaScript language ke core syntax ka same part nahi hain; browser environment in capabilities ko provide karta hai.

---

# 12. `setInterval()`

`setInterval()` callback ko repeatedly schedule kar sakta hai.

Example:

```javascript
setInterval(() => {

    console.log("Hello");

}, 1000);
```

Conceptually:

```text
1 sec → Hello
2 sec → Hello
3 sec → Hello
4 sec → Hello
...
```

Interval ko stop karne ke liye:

```javascript
const id = setInterval(() => {

    console.log("Hello");

}, 1000);

clearInterval(id);
```

---

# 13. Event Loop with `setInterval()`

Simplified:

```text
setInterval()
     ↓
Timer mechanism
     ↓
Callback becomes eligible
     ↓
Queue
     ↓
Event Loop
     ↓
Call Stack
```

Callback tab execute hoga jab Call Stack ko execute karne ka opportunity mile.

---

# 14. Microtasks and Macrotasks

Modern JavaScript mein queues ko samajhna important hai.

Commonly:

```text
Microtask Queue
Task / Macrotask Queue
```

Examples of microtasks:

```text
Promise.then()
Promise.catch()
Promise.finally()
queueMicrotask()
```

Common tasks:

```text
setTimeout()
setInterval()
some browser events
```

---

# 15. Promise Example

```javascript
console.log("Start");

Promise.resolve().then(() => {

    console.log("Promise");

});

console.log("End");
```

Output:

```text
Start
End
Promise
```

Promise callback synchronous code complete hone ke baad microtask queue se process hota hai.

---

# 16. Microtask vs Timer

Example:

```javascript
console.log("A");

setTimeout(() => {

    console.log("B");

}, 0);

Promise.resolve().then(() => {

    console.log("C");

});

console.log("D");
```

Output:

```text
A
D
C
B
```

Reason:

```text
A
 ↓
setTimeout → Task
 ↓
Promise → Microtask
 ↓
D
 ↓
Synchronous code complete
 ↓
Microtask processed
 ↓
C
 ↓
Task processed
 ↓
B
```

---

# 17. Important Rule

Simplified browser model:

```text
Synchronous code
      ↓
Microtasks
      ↓
Tasks
```

Microtask queue ko generally task queue se pehle drain kiya jata hai after the current JavaScript execution completes.

---

# 18. Multiple Microtasks

```javascript
console.log("Start");

Promise.resolve().then(() => {

    console.log("Promise 1");

});

Promise.resolve().then(() => {

    console.log("Promise 2");

});

console.log("End");
```

Output:

```text
Start
End
Promise 1
Promise 2
```

Microtasks queue order mein process hote hain.

---

# 19. Multiple Timers

```javascript
setTimeout(() => {

    console.log("Timer 1");

}, 0);

setTimeout(() => {

    console.log("Timer 2");

}, 0);
```

Normally callbacks queue mein scheduling order ke according process ho sakte hain:

```text
Timer 1
Timer 2
```

Lekin exact browser scheduling details environment aur other work par depend kar sakti hain.

---

# 20. Event Loop Visual Model

```text
              ┌───────────────┐
              │  Call Stack   │
              └───────┬───────┘
                      │
                      ↓
              ┌───────────────┐
              │   Web APIs    │
              └───────┬───────┘
                      │
              ┌───────┴────────┐
              ↓                ↓
       Microtask Queue     Task Queue
              │                │
              └───────┬────────┘
                      ↓
                 Event Loop
                      │
                      ↓
                 Call Stack
```

---

# 21. `fetch()` and Event Loop

Example:

```javascript
console.log("Start");

fetch("/data")
    .then(() => {

        console.log("Data received");

    });

console.log("End");
```

Output generally:

```text
Start
End
Data received
```

Network operation complete hone ke baad Promise reaction microtask ke through process hoti hai.

---

# 22. Event Loop and DOM Events

Example:

```javascript
button.addEventListener("click", () => {

    console.log("Button clicked");

});
```

User button click karta hai.

Simplified:

```text
User Click
    ↓
Browser Event System
    ↓
Callback becomes eligible
    ↓
Event Loop
    ↓
Call Stack
    ↓
Callback executes
```

---

# 23. Blocking the Call Stack

Agar JavaScript long-running synchronous operation perform kare:

```javascript
for (let i = 0; i < 10000000000; i++) {

}
```

to Call Stack busy rahega.

Is duration mein other callbacks ko execution opportunity nahi milegi.

Isko simplified terms mein **blocking the main thread** kaha ja sakta hai.

---

# 24. Blocking Example

```javascript
console.log("Start");

for (let i = 0; i < 10000000000; i++) {

}

console.log("End");
```

Jab tak loop complete nahi hota:

```text
Call Stack
     ↓
Busy
     ↓
Other JavaScript callbacks wait
```

---

# 25. Event Loop Does Not Create Parallel JavaScript Execution

Event Loop ka purpose ye nahi hai ki JavaScript ke multiple callbacks simultaneously execute kare.

Instead:

```text
One callback
     ↓
Call Stack
     ↓
Execute
     ↓
Complete
```

Then next work.

Browser/runtime background operations ko handle kar sakta hai, but JavaScript callback execution main thread par sequentially process ho sakti hai.

---

# 26. Important Example

```javascript
console.log("1");

setTimeout(() => {

    console.log("2");

}, 0);

Promise.resolve().then(() => {

    console.log("3");

});

console.log("4");
```

Output:

```text
1
4
3
2
```

Step-by-step:

```text
1 → synchronous
4 → synchronous
3 → microtask
2 → task
```

---

# 27. Nested Microtask Example

```javascript
Promise.resolve().then(() => {

    console.log("A");

    Promise.resolve().then(() => {

        console.log("B");

    });

});

Promise.resolve().then(() => {

    console.log("C");

});
```

Output:

```text
A
C
B
```

Reason:

Initial microtasks:

```text
A
C
```

`A` execute hone ke during `B` new microtask ke form mein queue hota hai.

Current queued microtask `C` process hone ke baad `B` execute hota hai.

---

# 28. Microtask Starvation

Agar continuously new microtasks create hote rahein, task queue ko execution opportunity delay ho sakti hai.

Example concept:

```javascript
function loop() {

    Promise.resolve().then(loop);

}

loop();
```

Ye continuously microtasks create kar sakta hai aur other tasks ko delay kar sakta hai.

Is type ke behavior ko **microtask starvation** ke context mein discuss kiya jata hai.

---

# 29. Event Loop and `async/await`

`async/await` bhi Promise-based asynchronous behavior se connected hai.

Example:

```javascript
async function getData() {

    console.log("Start");

    await Promise.resolve();

    console.log("After await");

}

getData();

console.log("End");
```

Output:

```text
Start
End
After await
```

`await` ke baad ka continuation asynchronous Promise-based scheduling ke through resume hota hai.

---

# 30. Real-World Example

Suppose website par:

```text
User clicks "Load Data"
        ↓
fetch()
        ↓
Network request
        ↓
User page par other interaction kar sakta hai
        ↓
Response received
        ↓
Promise callback
        ↓
Event Loop
        ↓
Call Stack
        ↓
UI update
```

Isse browser ko long network wait ke dauran synchronous JavaScript execution ko unnecessarily block nahi karna padta.

---

# 31. Event Loop Summary

```text
JavaScript Code
      ↓
Call Stack
      ↓
Async operation
      ↓
Runtime / Web API
      ↓
Queue
      ↓
Event Loop
      ↓
Call Stack
      ↓
Callback execution
```

---

# 32. Important Interview Question

### Q. What is Event Loop?

**Answer:**

Event Loop JavaScript runtime ka mechanism hai jo Call Stack aur queued asynchronous callbacks ke beech coordination karta hai. Jab Call Stack current work se free hota hai, Event Loop queued work ko execution ke liye process karne mein help karta hai.

---

# 33. Important Interview Question

### Q. Is JavaScript single-threaded?

JavaScript ka main execution model traditionally single-threaded hota hai, meaning one main JavaScript execution thread par code sequentially execute hota hai.

Browser/runtime asynchronous APIs aur other mechanisms provide karte hain jisse long-running operations ke wait ko JavaScript execution se coordinate kiya ja sakta hai.

---

# 34. Important Interview Question

### Q. Does `setTimeout(fn, 0)` execute immediately?

No.

```javascript
setTimeout(fn, 0);
```

callback ko immediately Call Stack par nahi daalta.

Current synchronous code complete hone ke baad, jab callback task processing ke liye eligible hota hai aur runtime usse schedule karta hai, tab woh execute ho sakta hai.

---

# 35. Important Interview Question

### Q. Which runs first: Promise or `setTimeout()`?

Typical browser JavaScript execution mein, agar dono current synchronous execution ke during schedule hue hain:

```javascript
Promise.resolve().then(() => {
    console.log("Promise");
});

setTimeout(() => {
    console.log("Timer");
}, 0);
```

Output:

```text
Promise
Timer
```

Because Promise reaction **microtask** hoti hai aur microtasks generally next task se pehle process kiye jate hain after current execution completes.

---

# 36. Quick Revision

### Event Loop

```text
Call Stack ko monitor karta hai
```

### `setTimeout`

```text
Timer
 ↓
Task becomes eligible
 ↓
Task Queue
 ↓
Event Loop
 ↓
Call Stack
```

### Promise

```text
Promise
 ↓
Microtask Queue
 ↓
Event Loop processing
 ↓
Call Stack
```

### Priority — Simplified

```text
Current synchronous code
        ↓
Microtasks
        ↓
Tasks
```

### Important

```text
setTimeout(..., 0)
≠
Immediately execute
```

---

# Final Mental Model

```text
                     JavaScript Runtime

                         Call Stack
                             │
                             ↓
                    ┌────────────────┐
                    │ Current Code   │
                    └───────┬────────┘
                            │
             ┌──────────────┴──────────────┐
             ↓                             ↓
       Browser / Runtime              Promise
         APIs                         reactions
             │                             │
             ↓                             ↓
        Task Queue                  Microtask Queue
             │                             │
             └──────────────┬──────────────┘
                            ↓
                        Event Loop
                            │
                            ↓
                       Call Stack
```

## One-Line Definition

> **Event Loop JavaScript runtime mein asynchronous callbacks ko appropriate time par Call Stack tak pahunchane mein coordinate karta hai.**

---

## Next File

```text
18-Advanced-JavaScript/04-Closures.md
```