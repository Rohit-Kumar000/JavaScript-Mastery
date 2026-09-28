# JavaScript Call Stack

## 1. What is Call Stack?

**Call Stack** JavaScript ka ek mechanism hai jo track karta hai ki kaunsa function currently execute ho raha hai.

Simple words mein:

> Call Stack functions ko execution ke order mein manage karta hai.

---

## 2. Basic Example

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

Jab `greet()` call hota hai:

```text
greet()
  ↓
Call Stack
  ↓
Execute
  ↓
Remove
```

---

## 3. Stack Means LIFO

Call Stack **LIFO** principle follow karta hai.

**LIFO = Last In, First Out**

Example:

```text
A
B
C
```

Agar `C` sabse last mein stack mein aaya hai, to `C` sabse pehle complete hoga.

```text
C → First Out
B → Second
A → Last
```

---

## 4. Multiple Functions

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

Execution:

```text
first()
   ↓
second()
   ↓
third()
   ↓
console.log()
```

Call Stack mein roughly:

```text
┌──────────────┐
│ third()      │
├──────────────┤
│ second()     │
├──────────────┤
│ first()      │
└──────────────┘
```

`third()` complete hone ke baad remove hoga, phir `second()`, phir `first()`.

---

## 5. Function Execution

Example:

```javascript
function add(a, b) {
    return a + b;
}

const result = add(10, 20);

console.log(result);
```

Flow:

```text
add(10, 20)
      ↓
Call Stack
      ↓
10 + 20
      ↓
return 30
      ↓
add() removed
      ↓
console.log(30)
```

Output:

```text
30
```

---

## 6. Call Stack with Normal Code

```javascript
console.log("A");
console.log("B");
console.log("C");
```

Execution:

```text
A
↓
B
↓
C
```

Har statement execute hone ke baad stack se remove ho jata hai.

---

## 7. Call Stack and Function Calls

```javascript
function one() {
    console.log("One");
}

function two() {
    one();
    console.log("Two");
}

two();
```

Flow:

```text
two()
 ↓
one()
 ↓
console.log("One")
 ↓
one() complete
 ↓
console.log("Two")
 ↓
two() complete
```

Output:

```text
One
Two
```

---

## 8. Call Stack and Recursion

Recursion mein function repeatedly Call Stack mein add hota hai.

```javascript
function count(n) {

    if (n === 0) {
        return;
    }

    console.log(n);

    count(n - 1);
}

count(3);
```

Stack roughly:

```text
count(3)
count(2)
count(1)
count(0)
```

Base case reach hone ke baad functions return hona start karte hain.

---

## 9. Stack Overflow

Agar function khud ko continuously call karta rahe:

```javascript
function test() {
    test();
}

test();
```

Koi stopping condition nahi hai.

Isliye Call Stack continuously grow karega.

Eventually JavaScript error de sakta hai:

```text
Maximum call stack size exceeded
```

Isko **Stack Overflow** kehte hain.

---

## 10. Call Stack and `setTimeout()`

Important example:

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

`setTimeout()` ka callback immediately Call Stack mein execute nahi hota.

Runtime environment timer ko handle karta hai aur callback baad mein execution ke liye available hota hai.

---

## 11. Call Stack and Asynchronous JavaScript

Basic concept:

```text
              JavaScript

             Call Stack
                 ↑
                 │
            Event Loop
                 ↑
                 │
        Async callback/task
```

Normal JavaScript code Call Stack mein execute hota hai.

Asynchronous operations complete hone ke baad unke callbacks ko runtime later execution ke liye schedule karta hai.

---

## 12. Simple Example

```javascript
console.log("1");

function test() {
    console.log("2");
}

test();

console.log("3");
```

Output:

```text
1
2
3
```

Flow:

```text
console.log("1")
       ↓
test()
       ↓
console.log("2")
       ↓
test() complete
       ↓
console.log("3")
```

---

## 13. Call Stack Visualization

Example:

```javascript
function first() {
    second();
}

function second() {
    console.log("Hello");
}

first();
```

When `first()` is running:

```text
┌──────────────────┐
│ second()         │ ← Current
├──────────────────┤
│ first()          │
└──────────────────┘
```

After `second()` completes:

```text
┌──────────────────┐
│ first()          │
└──────────────────┘
```

Finally:

```text
┌──────────────────┐
│ Empty            │
└──────────────────┘
```

---

# Quick Revision

### Call Stack

```text
Functions ko execution ke liye manage karta hai.
```

### LIFO

```text
Last In
   ↓
First Out
```

### Example

```text
first()
  ↓
second()
  ↓
third()
```

`third()` pehle complete hoga.

### Stack Overflow

```text
Infinite function calls
        ↓
Call Stack fills
        ↓
Maximum call stack size exceeded
```

### Important

```text
Call Stack
→ Current JavaScript execution

Async operations
→ Runtime environment handles

Callback later
→ Execution ke liye Call Stack par aata hai
```

---

## Next File

```text
14-Asynchronous-JavaScript/03-Callbacks.md
```