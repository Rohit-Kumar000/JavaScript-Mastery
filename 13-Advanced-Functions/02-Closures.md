# JavaScript Closures

## 1. What is a Closure?

Closure tab banta hai jab:

> Ek inner function, apne outer function ke variables ko remember karta hai, even after outer function finish ho chuka ho.

Simple:

```text
Outer Function
      ↓
Inner Function
      ↓
Remembers outer variables
      ↓
Closure
```

---

# 2. Basic Example

```javascript
function outer() {

    let name = "Rohit";

    function inner() {
        console.log(name);
    }

    inner();
}

outer();
```

Output:

```text
Rohit
```

`inner()` function `outer()` ke `name` variable ko access kar raha hai.

---

# 3. Returning Inner Function

Closure ko properly samajhne ke liye inner function ko return karte hain.

```javascript
function outer() {

    let name = "Rohit";

    function inner() {
        console.log(name);
    }

    return inner;
}

const result = outer();

result();
```

Output:

```text
Rohit
```

Yahan `outer()` execute ho chuka hai, phir bhi `result()` ke paas `name` ki access hai.

**Ye Closure hai.**

---

# 4. How Does It Work?

```javascript
function outer() {

    let name = "Rohit";

    return function() {
        console.log(name);
    };
}

const greet = outer();

greet();
```

Flow:

```text
outer()
   ↓
name = "Rohit"
   ↓
inner function returned
   ↓
outer() finished
   ↓
greet()
   ↓
name still available
```

---

# 5. Closure Remembers Variables

Example:

```javascript
function createCounter() {

    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

const counter = createCounter();

counter();
counter();
counter();
```

Output:

```text
1
2
3
```

`count` variable remember ho raha hai.

---

# 6. Why Doesn't `count` Reset?

Normally agar function dobara execute ho:

```javascript
function test() {
    let count = 0;
}
```

to `count` har baar new create hota hai.

But closure mein:

```javascript
const counter = createCounter();
```

inner function `count` ko remember karta hai.

Isliye:

```text
counter()
→ 1

counter()
→ 2

counter()
→ 3
```

---

# 7. Multiple Closures

Hum multiple counters bana sakte hain.

```javascript
function createCounter() {

    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());

console.log(counter2());
```

Output:

```text
1
2
1
```

Why?

`counter1` aur `counter2` ke paas separate `count` variables hain.

---

# 8. Closure with Parameters

```javascript
function greeting(name) {

    return function() {
        console.log("Hello " + name);
    };

}

const greetRohit = greeting("Rohit");

greetRohit();
```

Output:

```text
Hello Rohit
```

Inner function ne `name` ko remember kiya.

---

# 9. Practical Example

```javascript
function createMultiplier(number) {

    return function(value) {
        return value * number;
    };

}

const double = createMultiplier(2);

console.log(double(5));
console.log(double(10));
```

Output:

```text
10
20
```

`double` function `number = 2` ko remember karta hai.

---

# 10. Closures and Private Data

Closure ka ek important use hai:

> Data ko directly outside access na hone dena.

Example:

```javascript
function bankAccount() {

    let balance = 1000;

    return {
        getBalance() {
            return balance;
        },

        deposit(amount) {
            balance += amount;
        }
    };
}

const account = bankAccount();

console.log(account.getBalance());

account.deposit(500);

console.log(account.getBalance());
```

Output:

```text
1000
1500
```

But:

```javascript
console.log(account.balance);
```

Output:

```text
undefined
```

`balance` directly accessible nahi hai.

---

# 11. Closure = Remembering Environment

Easy definition:

```text
Closure is a function
that remembers variables
from its outer scope.
```

Example:

```javascript
function outer() {

    let message = "Hello";

    return function inner() {
        console.log(message);
    };
}
```

`inner()` remembers `message`.

---

# 12. Common Use Cases

Closures are commonly used for:

```text
✓ Counters
✓ Private variables
✓ Data encapsulation
✓ Function factories
✓ Callbacks
✓ Event handlers
```

---

# Quick Revision

### Basic Closure

```javascript
function outer() {

    let name = "Rohit";

    return function() {
        console.log(name);
    };
}

const result = outer();

result();
```

Important point:

```text
Outer function finishes
        ↓
Inner function still remembers
outer variables
        ↓
Closure
```

---

# Easy Trick

Remember:

```text
Closure
   ↓
"Function + Remembered Outer Variables"
```

A closure is not a special syntax.

It automatically happens when an inner function keeps access to variables from its outer scope.

---

## Next File

```text
13-Advanced-Functions/03-IIFE.md
```

Next topic: **IIFE (Immediately Invoked Function Expression)**.