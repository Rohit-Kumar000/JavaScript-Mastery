# JavaScript Arrow Functions

## 1. What is an Arrow Function?

Arrow function function likhne ka **short and modern syntax** hai.

Normal function:

```javascript
function greet() {
    console.log("Hello");
}
```

Arrow function:

```javascript
const greet = () => {
    console.log("Hello");
};
```

Both perform the same basic task.

---

# 2. Basic Syntax

```javascript
const functionName = () => {
    // code
};
```

Example:

```javascript
const greet = () => {
    console.log("Hello Rohit");
};

greet();
```

Output:

```text
Hello Rohit
```

---

# 3. Arrow Function with Parameters

Normal function:

```javascript
function add(a, b) {
    return a + b;
}
```

Arrow function:

```javascript
const add = (a, b) => {
    return a + b;
};
```

Call:

```javascript
console.log(add(10, 20));
```

Output:

```text
30
```

---

# 4. Single Parameter

Agar sirf **one parameter** hai, parentheses optional hain.

With parentheses:

```javascript
const square = (number) => {
    return number * number;
};
```

Without parentheses:

```javascript
const square = number => {
    return number * number;
};
```

Both are valid.

---

# 5. Multiple Parameters

Multiple parameters ke liye parentheses required hain.

```javascript
const add = (a, b) => {
    return a + b;
};
```

Call:

```javascript
console.log(add(10, 20));
```

Output:

```text
30
```

---

# 6. No Parameters

Agar koi parameter nahi hai, to empty parentheses use karne padte hain.

```javascript
const greet = () => {
    console.log("Hello");
};
```

This is correct.

```javascript
const greet = => {
    console.log("Hello");
};
```

❌ Incorrect

---

# 7. Implicit Return

Agar arrow function mein **sirf one expression** return karna hai, to `{}` aur `return` ko hata sakte hain.

Normal:

```javascript
const add = (a, b) => {
    return a + b;
};
```

Short:

```javascript
const add = (a, b) => a + b;
```

Both return:

```text
30
```

This is called **implicit return**.

---

# 8. Explicit vs Implicit Return

### Explicit Return

```javascript
const square = (number) => {
    return number * number;
};
```

Yahan `return` explicitly likha hai.

### Implicit Return

```javascript
const square = number => number * number;
```

Yahan JavaScript automatically expression ka result return karta hai.

Remember:

```text
{} + return → Explicit return

No {}       → Implicit return
```

---

# 9. Arrow Function Returning an Object

Yahan ek important point hai.

Ye:

```javascript
const getUser = () => {
    name: "Rohit"
};
```

object return nahi karega as expected.

Object ko parentheses ke andar wrap karna hota hai:

```javascript
const getUser = () => ({
    name: "Rohit",
    age: 23
});
```

Now:

```javascript
console.log(getUser());
```

Output:

```text
{
    name: "Rohit",
    age: 23
}
```

---

# 10. Arrow Function with Multiple Lines

Agar function mein multiple statements hain, `{}` use karna hota hai.

```javascript
const calculate = (a, b) => {

    let sum = a + b;
    let result = sum * 2;

    return result;
};

console.log(calculate(10, 20));
```

Output:

```text
60
```

---

# 11. Arrow Functions with Array Methods

Arrow functions are commonly used with array methods.

Example:

```javascript
let numbers = [1, 2, 3, 4];

let result = numbers.map(number => number * 2);

console.log(result);
```

Output:

```text
[2, 4, 6, 8]
```

With `filter()`:

```javascript
let numbers = [1, 2, 3, 4, 5, 6];

let even = numbers.filter(number => number % 2 === 0);

console.log(even);
```

Output:

```text
[2, 4, 6]
```

---

# 12. Arrow Function with forEach()

```javascript
let fruits = ["Apple", "Mango", "Banana"];

fruits.forEach(fruit => {
    console.log(fruit);
});
```

Output:

```text
Apple
Mango
Banana
```

Short form:

```javascript
fruits.forEach(fruit => console.log(fruit));
```

---

# 13. Arrow Function vs Normal Function

### Normal Function

```javascript
function add(a, b) {
    return a + b;
}
```

### Arrow Function

```javascript
const add = (a, b) => a + b;
```

Main difference in syntax:

```text
Normal:
function name() {}

Arrow:
const name = () => {}
```

---

# 14. Important Difference: this

One of the most important differences is how `this` works.

Normal functions have their own `this` depending on how they are called.

Arrow functions **do not have their own `this`**. They use `this` from the surrounding lexical scope.

Example:

```javascript
const user = {
    name: "Rohit",

    greet() {
        console.log(this.name);
    }
};

user.greet();
```

Output:

```text
Rohit
```

Understanding `this` deeply comes later in:

```text
18-Advanced-JavaScript/07-this-Deep-Dive.md
```

For now remember:

```text
Normal function → has its own this behavior

Arrow function → does not create its own this
```

---

# 15. Arrow Functions and arguments

Normal functions have an `arguments` object.

```javascript
function test() {
    console.log(arguments);
}

test(10, 20, 30);
```

Arrow functions do not have their own `arguments` object.

For multiple arguments in an arrow function, use rest parameters:

```javascript
const test = (...numbers) => {
    console.log(numbers);
};

test(10, 20, 30);
```

Output:

```text
[10, 20, 30]
```

---

# 16. Arrow Functions Cannot Be Used as Constructors

Arrow functions cannot be used with `new`.

Normal function:

```javascript
function User(name) {
    this.name = name;
}

let user = new User("Rohit");
```

Arrow functions do not work as constructors:

```javascript
const User = name => {
    this.name = name;
};
```

You cannot use:

```javascript
new User("Rohit");
```

For now, just remember:

```text
Arrow function → Not a constructor
```

Classes and constructors will be covered later in OOP.

---

# 17. Practical Example

Calculate discount:

```javascript
const calculateDiscount = (price, discount) => {
    return price - (price * discount / 100);
};

console.log(calculateDiscount(1000, 20));
```

Output:

```text
800
```

Short version:

```javascript
const calculateDiscount = (price, discount) =>
    price - (price * discount / 100);
```

---

# 18. Practical Example with Condition

```javascript
const checkAge = age => {

    if (age >= 18) {
        return "Adult";
    }

    return "Minor";
};

console.log(checkAge(23));
```

Output:

```text
Adult
```

---

# 19. When to Use Arrow Functions?

Arrow functions are especially useful for:

- Short functions
- Callbacks
- Array methods
- `map()`
- `filter()`
- `forEach()`
- `setTimeout()`
- Modern JavaScript code

Example:

```javascript
let numbers = [10, 20, 30];

let result = numbers.map(number => number + 5);
```

---

# Important Points

- Arrow functions are a shorter way to write functions.
- They were introduced in modern JavaScript (ES6).
- They use `=>`.
- Single parameter can be written without parentheses.
- Multiple parameters require parentheses.
- No parameters require `()`.
- One expression can use implicit return.
- Arrow functions do not have their own `this`.
- Arrow functions do not have their own `arguments`.
- Arrow functions cannot be used as constructors.

---

# Quick Revision

### Normal Function

```javascript
function add(a, b) {
    return a + b;
}
```

### Arrow Function

```javascript
const add = (a, b) => {
    return a + b;
};
```

### Short Arrow Function

```javascript
const add = (a, b) => a + b;
```

### One Parameter

```javascript
const square = number => number * number;
```

### No Parameter

```javascript
const greet = () => console.log("Hello");
```

### Array Method

```javascript
let numbers = [1, 2, 3];

let result = numbers.map(number => number * 2);
```

### Remember

```text
() => {}        → Arrow function

(a, b) => a + b → Parameters + implicit return

number => number * 2 → One parameter

() => console.log() → No parameter
```