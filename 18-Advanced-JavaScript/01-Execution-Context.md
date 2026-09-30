# JavaScript Execution Context

## 1. What is Execution Context?

**Execution Context** ek environment hai jahan JavaScript code ko execute karti hai.

Simple words mein:

> JavaScript jab code run karti hai, to code ko execute karne ke liye ek environment create karti hai. Isi environment ko **Execution Context** kehte hain.

Example:

```javascript
let a = 10;

console.log(a);
```

JavaScript is code ko directly random way mein execute nahi karti.

Pehle execution context create hota hai, phir code execute hota hai.

---

# 2. Types of Execution Context

JavaScript mein mainly 3 types ke execution contexts ko samjha jata hai:

```text
Execution Context
│
├── Global Execution Context
├── Function Execution Context
└── Eval Execution Context
```

Modern JavaScript learning mein sabse important:

```text
Global Execution Context
Function Execution Context
```

---

# 3. Global Execution Context

Jab JavaScript program start hota hai, sabse pehle **Global Execution Context** create hota hai.

Example:

```javascript
let name = "Rohit";

console.log(name);
```

Program start hote hi JavaScript global execution context create karti hai.

Conceptually:

```text
Global Execution Context
│
├── Global Variables
├── Global Functions
└── Global Code
```

---

# 4. Execution Context Has Two Main Phases

Execution Context ko generally do phases mein samjha jata hai:

```text
Execution Context
│
├── 1. Creation Phase
└── 2. Execution Phase
```

---

# 5. Creation Phase

Creation phase mein JavaScript execution ke liye environment prepare karti hai.

Is phase mein:

```text
Variables
Functions
Scope-related information
this
```

jaise components set up hote hain.

Example:

```javascript
var a = 10;

function greet() {

    console.log("Hello");

}
```

Execution se pehle JavaScript environment ko prepare karti hai.

---

# 6. Execution Phase

Execution phase mein JavaScript actual code ko execute karti hai.

Example:

```javascript
var a = 10;

console.log(a);
```

Execution roughly:

```text
1. a ko value assign
2. console.log execute
3. 10 print
```

---

# 7. Creation and Execution Example

Consider:

```javascript
var a = 10;

function greet() {

    console.log("Hello");

}

console.log(a);

greet();
```

Conceptually:

```text
Creation Phase
│
├── a → initialized
└── greet → function available

Execution Phase
│
├── a = 10
├── console.log(a)
└── greet()
```

---

# 8. Hoisting

Execution context ko samajhne ke liye **hoisting** important hai.

Example:

```javascript
console.log(a);

var a = 10;
```

Output:

```text
undefined
```

Ye isliye hota hai kyunki `var` declaration execution se pehle environment mein register ho jati hai.

Conceptually:

```javascript
var a;

console.log(a);

a = 10;
```

---

# 9. Function Hoisting

Function declarations bhi execution se pehle available hoti hain.

Example:

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

JavaScript function declaration ko execution environment mein pehle register kar deti hai.

---

# 10. `let` and `const`

`let` aur `const` ka behavior `var` se different hai.

Example:

```javascript
console.log(a);

let a = 10;
```

Ye error produce karega:

```text
ReferenceError
```

Isi tarah:

```javascript
console.log(b);

const b = 20;
```

bhi error dega.

Is period ko **Temporal Dead Zone (TDZ)** kaha jata hai.

---

# 11. Temporal Dead Zone

TDZ wo period hai jahan `let` ya `const` declaration scope mein exist karti hai, lekin initialization se pehle access nahi ki ja sakti.

Example:

```javascript
console.log(a);

let a = 10;
```

Error:

```text
ReferenceError
```

Conceptually:

```text
let a
│
├── Declaration
│
├── TDZ
│
└── Initialization → 10
```

---

# 12. Function Execution Context

Jab koi function call hota hai, JavaScript us function ke liye ek new **Function Execution Context** create karti hai.

Example:

```javascript
function greet() {

    let message = "Hello";

    console.log(message);

}

greet();
```

Jab:

```javascript
greet();
```

execute hota hai, function ka execution context create hota hai.

```text
Global Execution Context
        │
        ↓
Function Execution Context
```

---

# 13. Multiple Function Calls

Example:

```javascript
function greet() {

    console.log("Hello");

}

greet();
greet();
```

Har function call ke liye execution ka separate context create hota hai.

Conceptually:

```text
Global Context
    │
    ├── greet() → Function Context
    │
    └── greet() → Function Context
```

Ek call complete hone ke baad uska execution context execution flow se remove ho jata hai.

---

# 14. Function Parameters

Function execution context mein parameters bhi available hote hain.

```javascript
function add(a, b) {

    let sum = a + b;

    console.log(sum);

}

add(10, 20);
```

Function context mein:

```text
a → 10
b → 20
sum → 30
```

---

# 15. Local Variables

Function ke andar declare ki gayi variables function execution context ka part hoti hain.

```javascript
function test() {

    let x = 10;

    console.log(x);

}

test();
```

`x` function ke andar accessible hai.

Lekin:

```javascript
console.log(x);
```

function ke bahar accessible nahi hai.

---

# 16. Scope and Execution Context

Execution context aur scope related concepts hain, lekin exactly same nahi hain.

Example:

```javascript
let globalValue = 100;

function test() {

    let localValue = 50;

    console.log(globalValue);
    console.log(localValue);

}

test();
```

Function ke andar:

```text
localValue → local scope
globalValue → outer/global scope
```

---

# 17. Nested Function

```javascript
function outer() {

    let a = 10;

    function inner() {

        let b = 20;

        console.log(a);
        console.log(b);

    }

    inner();

}

outer();
```

Execution flow:

```text
Global Context
      ↓
outer() Context
      ↓
inner() Context
```

`inner()` apne outer environment se `a` ko access kar sakta hai.

Ye concept baad mein **Closures** samajhne mein important hoga.

---

# 18. Execution Context and Call Stack

Execution Context ko **Call Stack** ke saath samajhna important hai.

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

Execution:

```text
Global Context
      ↓
first()
      ↓
second()
```

Call Stack roughly:

```text
| second() |
| first()  |
| global   |
------------
```

`second()` complete hone ke baad:

```text
| first() |
| global  |
-----------
```

Phir `first()` complete hone ke baad:

```text
| global |
---------
```

Call Stack ko next file mein detail mein padhenge.

---

# 19. Execution Context Flow

Example:

```javascript
console.log("Start");

function greet() {

    console.log("Hello");

}

greet();

console.log("End");
```

Flow:

```text
1. Global Execution Context
2. "Start" print
3. greet() call
4. Function Execution Context
5. "Hello" print
6. Function context complete
7. "End" print
```

Output:

```text
Start
Hello
End
```

---

# 20. Global Execution Context Example

```javascript
var name = "Rohit";

function greet() {

    console.log(`Hello ${name}`);

}

greet();
```

Conceptually:

```text
Global Execution Context
│
├── name
├── greet
└── execution
```

Then:

```text
greet()
   ↓
Function Execution Context
   ↓
console.log()
```

---

# 21. `this` in Global Context

Execution context mein `this` bhi important concept hai.

Global context mein `this` ka exact value environment ke according change ho sakta hai.

For example, browser ke classic script environment mein global `this` commonly global object ko refer karta hai.

```javascript
console.log(this);
```

Browser mein classic script ke context mein ye generally:

```text
Window
```

ko refer karta hai.

Lekin modules aur different JavaScript environments mein behavior different ho sakta hai.

---

# 22. Execution Context Components

Simplified mental model:

```text
Execution Context
│
├── Lexical Environment
├── Variable Environment
└── this binding
```

Modern JavaScript specifications mein execution context ka model detailed hai, lekin beginner level par above structure useful mental model hai.

---

# 23. Lexical Environment

Lexical Environment ka relation variables, functions aur outer environment se hota hai.

Example:

```javascript
let a = 10;

function test() {

    let b = 20;

    console.log(a);
    console.log(b);

}
```

`test()` ke environment mein:

```text
b → local binding
a → outer environment se accessible
```

---

# 24. Environment Chain

Nested functions mein JavaScript outer environments ko search kar sakti hai.

Example:

```javascript
let a = 10;

function outer() {

    let b = 20;

    function inner() {

        let c = 30;

        console.log(a);
        console.log(b);
        console.log(c);

    }

    inner();

}

outer();
```

Search conceptually:

```text
inner
 ↓
outer
 ↓
global
```

Agar `c` nahi milta, JavaScript outer environment mein search kar sakti hai.

---

# 25. Variable Lookup

Example:

```javascript
let name = "Rohit";

function outer() {

    let age = 25;

    function inner() {

        console.log(name);
        console.log(age);

    }

    inner();

}

outer();
```

`inner()` mein:

```text
name
 ↓
outer → nahi
 ↓
global → mil gaya

age
 ↓
outer → mil gaya
```

---

# 26. Creation Phase and `var`

Example:

```javascript
console.log(a);

var a = 10;
```

Conceptual model:

```text
Creation Phase
a → undefined

Execution Phase
console.log(a) → undefined
a = 10
```

---

# 27. Creation Phase and Function

Example:

```javascript
greet();

function greet() {

    console.log("Hello");

}
```

Conceptual model:

```text
Creation Phase
greet → function

Execution Phase
greet() → executes
```

---

# 28. Important Difference: `var`, `let`, `const`

```text
             var        let        const
------------------------------------------------
Declaration  Yes        Yes        Yes
Hoisting     Yes        Yes*       Yes*
TDZ          No         Yes        Yes
Reassign     Yes        Yes        No
```

`*` `let` aur `const` declaration hoist hoti hain, lekin initialization se pehle access karne par TDZ ke karan error hota hai.

---

# 29. Complete Example

```javascript
var x = 10;

function outer() {

    var y = 20;

    function inner() {

        var z = 30;

        console.log(x);
        console.log(y);
        console.log(z);

    }

    inner();

}

outer();
```

Output:

```text
10
20
30
```

Execution flow:

```text
Global Execution Context
        │
        ↓
outer() Execution Context
        │
        ↓
inner() Execution Context
```

Variable lookup:

```text
z → inner
y → outer
x → global
```

---

# 30. Important Interview Question

### Q. What is Execution Context?

**Answer:**

Execution Context is the environment in which JavaScript code is evaluated and executed. It contains the information needed to execute the code, including variable/function bindings and relevant environment information.

---

# 31. Important Interview Question

### Q. What are the types of Execution Context?

Commonly discussed types:

```text
1. Global Execution Context
2. Function Execution Context
3. Eval Execution Context
```

Modern JavaScript development mein Global aur Function Execution Context sabse commonly relevant hain.

---

# 32. Important Interview Question

### Q. What are the phases of Execution Context?

```text
1. Creation Phase
2. Execution Phase
```

Creation phase mein execution environment prepare hota hai.

Execution phase mein code execute hota hai.

---

# 33. Important Interview Question

### Q. What is Function Execution Context?

Jab function invoke hota hai, JavaScript us function ke execution ke liye ek function execution context create karti hai.

Example:

```javascript
function test() {

    console.log("Hello");

}

test();
```

`test()` call hone par function execution context create hota hai.

---

# Quick Revision

```text
Execution Context
│
├── Global Execution Context
├── Function Execution Context
└── Eval Execution Context
```

Execution phases:

```text
Creation Phase
      ↓
Execution Phase
```

Function call:

```text
function()
    ↓
Function Execution Context
    ↓
Execution
    ↓
Complete
```

Nested functions:

```text
Global
  ↓
Outer
  ↓
Inner
```

Variable lookup:

```text
Inner
 ↓
Outer
 ↓
Global
```

---

# Final Mental Model

JavaScript code:

```javascript
let x = 10;

function greet() {

    console.log(x);

}

greet();
```

Conceptually:

```text
                 JavaScript
                     │
                     ↓
          Global Execution Context
                     │
             ┌───────┴───────┐
             ↓               ↓
            x=10           greet
                             │
                             ↓
                         greet()
                             │
                             ↓
                Function Execution Context
                             │
                             ↓
                        console.log(x)
                             │
                             ↓
                    Outer Environment
                             │
                             ↓
                         x = 10
```

---

## Key Points

```text
✓ Execution Context = environment for executing JavaScript code

✓ Global code starts in Global Execution Context

✓ Function call creates Function Execution Context

✓ Execution Context has a creation/setup phase and execution phase

✓ Hoisting is closely related to how declarations are initialized

✓ let/const have a Temporal Dead Zone before initialization

✓ Nested functions can access outer environments

✓ Execution Context and Call Stack work together

✓ Scope and Execution Context are related but not identical
```

---

## Next File

```text
18-Advanced-JavaScript/02-Call-Stack.md
```