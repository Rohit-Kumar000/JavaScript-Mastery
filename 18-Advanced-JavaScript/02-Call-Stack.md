# JavaScript Call Stack

## 1. What is Call Stack?

**Call Stack** JavaScript ka ek mechanism hai jo track karta hai ki currently kaunsa function execute ho raha hai.

Simple words mein:

> Call Stack JavaScript ko ye track karne mein help karta hai ki functions kis order mein call hue aur kis order mein complete hone hain.

Call Stack **LIFO** principle follow karta hai:

```text
LIFO = Last In, First Out
```

Matlab jo function sabse last mein stack mein aata hai, woh sabse pehle complete hota hai.

---

# 2. Simple Example

```javascript
function greet() {

    console.log("Hello");

}

greet();
```

Jab program execute hota hai:

```text
Global
  ↓
greet()
```

Call Stack:

```text
┌─────────────┐
│   greet()   │
├─────────────┤
│   global    │
└─────────────┘
```

`greet()` complete hone ke baad stack se remove ho jata hai.

```text
┌─────────────┐
│   global    │
└─────────────┘
```

---

# 3. LIFO Principle

Call Stack:

```text
       ↓
┌─────────────┐
│ function C  │ ← Last added
├─────────────┤
│ function B  │
├─────────────┤
│ function A  │
└─────────────┘
```

Sabse pehle:

```text
C
```

complete hoga.

Then:

```text
B
```

Then:

```text
A
```

Isliye:

```text
Last In → First Out
```

---

# 4. Function Calls

Example:

```javascript
function one() {

    console.log("One");

}

function two() {

    console.log("Two");

}

one();
two();
```

Execution:

```text
one()
 ↓
complete

two()
 ↓
complete
```

Stack:

```text
one()
 ↓
remove

two()
 ↓
remove
```

---

# 5. Nested Function Calls

Ab important example:

```javascript
function first() {

    second();

}

function second() {

    third();

}

function third() {

    console.log("Hello");

}

first();
```

Execution flow:

```text
first()
  ↓
second()
  ↓
third()
  ↓
console.log()
```

Call Stack:

```text
┌─────────────┐
│  third()    │
├─────────────┤
│  second()   │
├─────────────┤
│  first()    │
├─────────────┤
│  global     │
└─────────────┘
```

---

# 6. Stack Removal

Jab `third()` complete hota hai:

```text
┌─────────────┐
│  second()   │
├─────────────┤
│  first()    │
├─────────────┤
│  global     │
└─────────────┘
```

Then `second()` complete:

```text
┌─────────────┐
│  first()    │
├─────────────┤
│  global     │
└─────────────┘
```

Then `first()` complete:

```text
┌─────────────┐
│  global     │
└─────────────┘
```

---

# 7. Call Stack and Execution Context

Call Stack aur Execution Context closely related hain.

Jab function call hota hai:

```text
Function Call
     ↓
Function Execution Context
     ↓
Call Stack mein push
```

Example:

```javascript
function greet() {

    console.log("Hello");

}

greet();
```

Conceptually:

```text
greet()
   ↓
Execution Context created
   ↓
Call Stack mein add
   ↓
Function executes
   ↓
Function complete
   ↓
Stack se remove
```

---

# 8. Push and Pop

Call Stack ke do important operations:

```text
push()
pop()
```

### Push

New function ko stack mein add karna.

```text
Stack
─────
A
```

Then B call:

```text
Stack
─────
B
A
```

### Pop

Completed function ko stack se remove karna.

```text
Stack
─────
B
A
```

B complete:

```text
Stack
─────
A
```

---

# 9. Complete Flow

Example:

```javascript
function A() {

    B();

}

function B() {

    C();

}

function C() {

    console.log("Hello");

}

A();
```

Step 1:

```text
┌─────────┐
│ global  │
└─────────┘
```

Step 2 — `A()`:

```text
┌─────────┐
│ A()     │
├─────────┤
│ global  │
└─────────┘
```

Step 3 — `B()`:

```text
┌─────────┐
│ B()     │
├─────────┤
│ A()     │
├─────────┤
│ global  │
└─────────┘
```

Step 4 — `C()`:

```text
┌─────────┐
│ C()     │
├─────────┤
│ B()     │
├─────────┤
│ A()     │
├─────────┤
│ global  │
└─────────┘
```

Step 5 — `C()` complete:

```text
┌─────────┐
│ B()     │
├─────────┤
│ A()     │
├─────────┤
│ global  │
└─────────┘
```

Step 6 — `B()` complete:

```text
┌─────────┐
│ A()     │
├─────────┤
│ global  │
└─────────┘
```

Step 7 — `A()` complete:

```text
┌─────────┐
│ global  │
└─────────┘
```

---

# 10. Call Stack is Synchronous

Normal JavaScript code generally executes synchronously.

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

JavaScript next statement execute karne se pehle current statement ka execution handle karti hai.

---

# 11. Synchronous Function Example

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

Execution:

```text
first()
 ↓
complete

second()
 ↓
complete
```

---

# 12. Stack Overflow

Agar function repeatedly khud ko call karta rahe aur stop condition na ho, Call Stack fill ho sakta hai.

Example:

```javascript
function test() {

    test();

}

test();
```

Yahan:

```text
test()
 ↓
test()
 ↓
test()
 ↓
test()
 ↓
test()
 ↓
...
```

Function continuously stack mein add hota rahega.

Eventually JavaScript error de sakti hai:

```text
RangeError: Maximum call stack size exceeded
```

---

# 13. Recursion

Function ka khud ko call karna **Recursion** kehlata hai.

Example:

```javascript
function countdown(n) {

    if (n === 0) {

        return;

    }

    console.log(n);

    countdown(n - 1);

}

countdown(5);
```

Output:

```text
5
4
3
2
1
```

Call Stack:

```text
countdown(5)
     ↓
countdown(4)
     ↓
countdown(3)
     ↓
countdown(2)
     ↓
countdown(1)
     ↓
countdown(0)
```

---

# 14. Recursion and Stack Removal

`countdown(0)` par return hone ke baad stack reverse order mein clear hota hai.

```text
countdown(0) → remove
countdown(1) → remove
countdown(2) → remove
countdown(3) → remove
countdown(4) → remove
countdown(5) → remove
```

Isliye recursion mein Call Stack ko samajhna important hai.

---

# 15. Call Stack in Browser

Browser mein JavaScript engine Call Stack ke saath doosre components ke saath interact karta hai.

Simplified model:

```text
JavaScript
    │
    ↓
Call Stack
    │
    ├── Web APIs
    │
    ├── Callback Queue
    │
    └── Event Loop
```

Ye concepts next file **Event Loop** mein important honge.

---

# 16. Call Stack and `console.log()`

Example:

```javascript
function greet() {

    console.log("Hello");

}

greet();
```

Flow:

```text
Global
  ↓
greet()
  ↓
console.log()
  ↓
"Hello"
  ↓
console.log complete
  ↓
greet complete
  ↓
global
```

---

# 17. Multiple Nested Calls

```javascript
function A() {

    console.log("A start");

    B();

    console.log("A end");

}

function B() {

    console.log("B start");

    C();

    console.log("B end");

}

function C() {

    console.log("C");

}

A();
```

Output:

```text
A start
B start
C
B end
A end
```

Why?

Because `A()` ke andar `B()` call hua.

`B()` ke andar `C()` call hua.

`C()` complete hone ke baad:

```text
B() continues
```

Then `B()` complete hone ke baad:

```text
A() continues
```

---

# 18. Stack Visualization

Same example:

```text
A()
 ↓
B()
 ↓
C()
```

At maximum:

```text
┌──────────────┐
│     C()      │
├──────────────┤
│     B()      │
├──────────────┤
│     A()      │
├──────────────┤
│    global    │
└──────────────┘
```

C complete:

```text
┌──────────────┐
│     B()      │
├──────────────┤
│     A()      │
├──────────────┤
│    global    │
└──────────────┘
```

---

# 19. Call Stack and Error Messages

Errors ke stack trace mein function call chain dikh sakti hai.

Example:

```javascript
function first() {

    second();

}

function second() {

    third();

}

function third() {

    throw new Error("Something went wrong");

}

first();
```

Error ke saath stack trace roughly ye indicate kar sakta hai:

```text
third
second
first
```

Isse developer ko samajhne mein help milti hai ki error kis call chain se aaya.

---

# 20. Debugging with Call Stack

Browser DevTools mein debugger use karke current Call Stack dekha ja sakta hai.

Example:

```javascript
function first() {

    second();

}

function second() {

    debugger;

    console.log("Hello");

}

first();
```

`debugger` execution ko pause kar sakta hai.

DevTools mein Call Stack section current function calls dikha sakta hai.

---

# 21. Call Stack vs Heap

JavaScript memory ko samajhne ke liye **Stack** aur **Heap** ko distinguish karna useful hai.

Simplified model:

```text
Memory
│
├── Call Stack
│   └── Function execution
│
└── Heap
    └── Objects / dynamic data
```

Example:

```javascript
const user = {
    name: "Rohit"
};
```

Object memory ko conceptual level par Heap se associate kiya jata hai, while execution frames Call Stack se associated hote hain.

---

# 22. Call Stack vs Callback Queue

Ye dono different hain.

### Call Stack

Currently executing functions ko track karta hai.

### Callback Queue

Async operations ke callbacks ko wait karne ke liye queue kar sakti hai.

Simplified:

```text
Call Stack
    ↓
currently executing code

Callback Queue
    ↓
waiting callbacks
```

Event Loop decide karta hai ki callback kab Call Stack par ja sakta hai.

---

# 23. Why Call Stack Matters?

Call Stack samajhne se ye concepts easier hote hain:

```text
✓ Function execution
✓ Nested functions
✓ Recursion
✓ Stack overflow
✓ Synchronous execution
✓ Error stack traces
✓ Event Loop
✓ Asynchronous JavaScript
```

---

# 24. Common Mistake

Ye sochna:

```text
Function call hua
↓
Function immediately disappear
```

Actually:

```text
Function call
↓
Execution Context
↓
Call Stack
↓
Function executes
↓
Function returns
↓
Call Stack se remove
```

---

# 25. Practical Example

```javascript
function login() {

    validate();

}

function validate() {

    checkUser();

}

function checkUser() {

    console.log("User checked");

}

login();
```

Maximum Call Stack:

```text
┌──────────────┐
│ checkUser()  │
├──────────────┤
│ validate()   │
├──────────────┤
│ login()      │
├──────────────┤
│ global       │
└──────────────┘
```

Execution complete hone ke baad:

```text
checkUser()
     ↓
validate()
     ↓
login()
     ↓
global
```

---

# 26. Important Interview Question

### Q. What is Call Stack?

**Answer:**

Call Stack is a mechanism used by JavaScript to keep track of function calls and their execution order. It follows the **LIFO (Last In, First Out)** principle.

---

# 27. Important Interview Question

### Q. What is LIFO?

**Answer:**

LIFO means **Last In, First Out**.

Jo item sabse last mein add hota hai, woh sabse pehle remove hota hai.

```text
A
B
C ← Last In

C ← First Out
B
A
```

---

# 28. Important Interview Question

### Q. What causes Stack Overflow?

Usually jab Call Stack mein function calls continuously add hote rahein aur return na karein.

Example:

```javascript
function test() {

    test();

}

test();
```

Eventually:

```text
RangeError: Maximum call stack size exceeded
```

---

# 29. Important Interview Question

### Q. What is the relationship between Execution Context and Call Stack?

Jab function execute hota hai, uske liye execution context create hota hai aur execution flow ke dauran Call Stack mein function call frame maintain hota hai.

Example:

```text
Function Call
     ↓
Execution Context
     ↓
Call Stack
     ↓
Execution
     ↓
Return
     ↓
Remove
```

---

# 30. Quick Revision

### Call Stack

```text
Function calls ko track karta hai
```

### Principle

```text
LIFO
Last In → First Out
```

### Push

```text
New function → Stack
```

### Pop

```text
Completed function → Stack se remove
```

### Nested Calls

```text
A()
 ↓
B()
 ↓
C()
```

### Stack Overflow

```text
Infinite / excessive function calls
        ↓
Call Stack fills
        ↓
RangeError
```

### Recursion

```text
Function
   ↓
Calls itself
   ↓
New stack frame
```

---

# Final Mental Model

```text
                 JavaScript
                     │
                     ↓
                 Call Stack
                     │
              ┌──────┴──────┐
              ↓             ↓
          Function A    Function B
              │
              ↓
          Function C
              │
              ↓
           Execute
              │
              ↓
           Return
              │
              ↓
        Stack se remove
```

Aur nested call mein:

```text
┌──────────────┐
│    C()       │ ← First to finish
├──────────────┤
│    B()       │
├──────────────┤
│    A()       │
├──────────────┤
│   global     │
└──────────────┘
```

---

## Next File

```text
18-Advanced-JavaScript/03-Event-Loop.md
```