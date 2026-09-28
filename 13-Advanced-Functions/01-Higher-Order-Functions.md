# JavaScript Higher-Order Functions

## 1. What is a Higher-Order Function?

A function jo:

- kisi function ko **argument ke roop mein accept** kare, ya
- kisi function ko **return** kare

use **Higher-Order Function** kehte hain.

Simple:

```text id="x7h0q9"
Function ko argument mein lena
        OR
Function ko return karna
        ↓
Higher-Order Function
```

---

# 2. Function as an Argument

JavaScript mein functions ko variables ki tarah use kar sakte hain.

```javascript id="q5fr9m"
function greet() {
    console.log("Hello");
}

function execute(func) {
    func();
}

execute(greet);
```

Output:

```text id="lq8g9v"
Hello
```

Yahan:

```text id="7j0y3s"
greet
  ↓
execute() ko argument mein diya
  ↓
execute() ne function ko call kiya
```

Isliye `execute()` ek **Higher-Order Function** hai.

---

# 3. Important: `greet` vs `greet()`

Ye difference important hai.

```javascript id="g8v7s1"
execute(greet);
```

Yahan function pass ho raha hai.

But:

```javascript id="u0z9hw"
execute(greet());
```

Yahan `greet()` immediately execute ho jayega aur uska result pass hoga.

Remember:

```text id="l2nj9d"
greet
→ Function ko refer karta hai

greet()
→ Function ko execute karta hai
```

---

# 4. Function Returning a Function

Higher-order function function ko return bhi kar sakta hai.

```javascript id="v1o3k2"
function outer() {

    function inner() {
        console.log("Hello");
    }

    return inner;
}

const result = outer();

result();
```

Output:

```text id="0u8k6w"
Hello
```

Yahan:

```text id="lqgjl4"
outer()
  ↓
returns inner function
  ↓
result
  ↓
result()
```

---

# 5. Simple Example

```javascript id="8j0s0b"
function multiplier(x) {

    return function(y) {
        return x * y;
    };

}

const double = multiplier(2);

console.log(double(5));
```

Output:

```text id="z8d8hh"
10
```

Yahan `multiplier()` ek function return kar raha hai.

---

# 6. Built-in Higher-Order Functions

JavaScript mein bahut saare built-in methods Higher-Order Functions hain.

Common examples:

```text id="e0x9j7"
map()
filter()
reduce()
forEach()
find()
some()
every()
```

Ye methods functions ko arguments ke roop mein accept karte hain.

---

# 7. `forEach()`

Example:

```javascript id="3ohj44"
const numbers = [1, 2, 3, 4];

numbers.forEach(function(number) {
    console.log(number);
});
```

Output:

```text id="t5p4h3"
1
2
3
4
```

`forEach()` ko hum ek function de rahe hain.

Therefore:

```text id="c8kn8m"
forEach()
→ Higher-Order Function
```

---

# 8. `map()`

```javascript id="7l7y0u"
const numbers = [1, 2, 3];

const result = numbers.map(function(number) {
    return number * 2;
});

console.log(result);
```

Output:

```text id="9e5s4n"
[2, 4, 6]
```

`map()` bhi ek function accept karta hai.

---

# 9. `filter()`

```javascript id="a3d0qf"
const numbers = [1, 2, 3, 4, 5];

const result = numbers.filter(function(number) {
    return number > 2;
});

console.log(result);
```

Output:

```text id="j4n1q8"
[3, 4, 5]
```

Again, `filter()` ek function ko argument mein accept karta hai.

---

# 10. Arrow Function with Higher-Order Functions

Higher-order functions ke saath arrow functions commonly use hote hain.

Instead of:

```javascript id="v6n4j9"
numbers.map(function(number) {
    return number * 2;
});
```

we can write:

```javascript id="9q2h3x"
numbers.map(number => number * 2);
```

Ye shorter aur clean hai.

---

# 11. Custom Higher-Order Function

Hum apna khud ka Higher-Order Function bhi bana sakte hain.

```javascript id="1z3f8v"
function calculate(a, b, operation) {

    return operation(a, b);

}

function add(x, y) {
    return x + y;
}

console.log(calculate(10, 20, add));
```

Output:

```text id="n2g0ck"
30
```

Yahan:

```text id="3a7v0q"
calculate()
→ Higher-Order Function

add()
→ Callback Function
```

---

# 12. Higher-Order Function vs Callback

Dono ko confuse mat karna.

```javascript id="nq9jv6"
function calculate(a, b, operation) {
    return operation(a, b);
}
```

`calculate()`:

```text id="zq1r4y"
Higher-Order Function
```

`operation`:

```text id="x4v0r1"
Callback Function
```

Because `operation` ko baad mein execute kiya ja raha hai.

---

# 13. Real-Life Example

Imagine:

```text id="8e8q5w"
You give a task to a person
        ↓
Person performs the task
```

JavaScript:

```text id="5z5q8v"
Higher-Order Function
        ↓
takes another function
        ↓
executes that function
```

---

# 14. Important Concept

JavaScript functions are **first-class objects**.

Iska matlab functions ko:

```text id="n5z2y4"
✓ Variable mein store kar sakte hain
✓ Argument ke roop mein pass kar sakte hain
✓ Return kar sakte hain
✓ Object/property mein store kar sakte hain
```

Example:

```javascript id="7m4n0d"
const greet = function() {
    console.log("Hello");
};

greet();
```

Function ko variable mein store kiya gaya.

---

# Quick Revision

Higher-Order Function:

```text id="l5e2z7"
Function ko argument mein leta hai
        OR
Function ko return karta hai
```

Example:

```javascript id="3w5e8x"
function execute(func) {
    func();
}
```

Built-in examples:

```text id="k4j6q9"
forEach()
map()
filter()
reduce()
find()
some()
every()
```

Remember:

```text id="9y7d2k"
Higher-Order Function
→ Function ke saath kaam karta hai

Callback Function
→ Jo function argument ke roop mein pass hota hai
```

---

## Next File

```text id="x8r2v6"
13-Advanced-Functions/02-Closures.md
```

Next topic: **Closures** — JavaScript ka ek important concept jo initially thoda confusing lag sakta hai, but examples se easy ho jayega.