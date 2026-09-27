# JavaScript Spread and Rest

## 1. What is `...`?

JavaScript mein `...` ko **Spread** ya **Rest** operator ke liye use kiya jata hai.

```javascript
...
```

Same syntax hai, lekin context ke according iska meaning change hota hai.

---

# 2. Spread Operator

Spread ka meaning:

> Kisi array ya object ki values ko expand karna.

Example:

```javascript
const numbers = [10, 20, 30];

console.log(...numbers);
```

Output:

```text
10 20 30
```

Yahan array ki values expand ho gayi.

---

# 3. Copy an Array

```javascript
const numbers = [10, 20, 30];

const copy = [...numbers];

console.log(copy);
```

Output:

```text
[10, 20, 30]
```

Ab `copy` ek separate array hai.

---

# 4. Combine Arrays

```javascript
const a = [10, 20];
const b = [30, 40];

const result = [...a, ...b];

console.log(result);
```

Output:

```text
[10, 20, 30, 40]
```

Spread arrays ko easily combine kar sakta hai.

---

# 5. Add Values While Copying

```javascript
const numbers = [20, 30];

const result = [10, ...numbers, 40];

console.log(result);
```

Output:

```text
[10, 20, 30, 40]
```

---

# 6. Spread with Objects

Objects ko bhi spread kar sakte hain.

```javascript
const user = {
    name: "Rohit",
    age: 23
};

const copy = { ...user };

console.log(copy);
```

---

# 7. Combine Objects

```javascript
const user = {
    name: "Rohit"
};

const details = {
    age: 23,
    city: "Mohali"
};

const result = {
    ...user,
    ...details
};

console.log(result);
```

Output:

```text
{
    name: "Rohit",
    age: 23,
    city: "Mohali"
}
```

---

# 8. Overwriting Object Properties

If two objects have the same property:

```javascript
const user = {
    name: "Rohit",
    age: 23
};

const updatedUser = {
    ...user,
    age: 24
};

console.log(updatedUser);
```

Output:

```text
{
    name: "Rohit",
    age: 24
}
```

The later value replaces the earlier one.

---

# 9. Rest Operator

Rest ka meaning:

> Multiple values ko collect karke ek array ya object mein rakhna.

Example:

```javascript
function numbers(...values) {
    console.log(values);
}

numbers(10, 20, 30);
```

Output:

```text
[10, 20, 30]
```

Here `...values` collects all arguments into an array.

---

# 10. Rest in Functions

```javascript
function sum(...numbers) {

    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(sum(10, 20, 30));
```

Output:

```text
60
```

This allows the function to accept any number of arguments.

---

# 11. Rest with Other Parameters

Rest parameter must come at the end.

Correct:

```javascript
function show(first, ...others) {
    console.log(first);
    console.log(others);
}

show(10, 20, 30, 40);
```

Output:

```text
10
[20, 30, 40]
```

Here:

```text
first
→ 10

others
→ [20, 30, 40]
```

---

# 12. Rest in Array Destructuring

```javascript
const numbers = [10, 20, 30, 40];

const [first, ...others] = numbers;

console.log(first);
console.log(others);
```

Output:

```text
10
[20, 30, 40]
```

Here `...others` collects the remaining values.

---

# 13. Rest in Object Destructuring

```javascript
const user = {
    name: "Rohit",
    age: 23,
    city: "Mohali"
};

const { name, ...details } = user;

console.log(name);
console.log(details);
```

Output:

```text
Rohit

{
    age: 23,
    city: "Mohali"
}
```

---

# 14. Spread vs Rest

The easiest way to remember:

```text
Spread
→ Expands / spreads values
```

```text
Rest
→ Collects / gathers values
```

Example:

### Spread

```javascript
const numbers = [10, 20, 30];

const copy = [...numbers];
```

Array values are **spread out**.

### Rest

```javascript
function show(...numbers) {
    console.log(numbers);
}
```

Arguments are **collected**.

---

# 15. Simple Comparison

| Feature | Spread | Rest |
|---|---|---|
| Symbol | `...` | `...` |
| Purpose | Expand | Collect |
| Common use | Arrays/Objects | Functions/Destructuring |
| Example | `[...arr]` | `(...args)` |

---

# 16. Common Mistake

Rest parameter cannot be followed by another parameter.

Wrong:

```javascript
function test(...numbers, name) {
}
```

❌ Error

Correct:

```javascript
function test(name, ...numbers) {
}
```

✅ Correct

---

# 17. Practical Example

Suppose we have:

```javascript
const oldUser = {
    name: "Rohit",
    age: 23
};
```

We want to create an updated object without changing the original:

```javascript
const newUser = {
    ...oldUser,
    age: 24
};

console.log(newUser);
```

This is a common use of the spread operator.

---

# Quick Revision

### Spread

```javascript
const arr = [10, 20, 30];

const copy = [...arr];
```

```javascript
const result = [...arr, 40];
```

```javascript
const user2 = { ...user };
```

Remember:

```text
Spread → Expand
```

---

### Rest

```javascript
function test(...args) {
    console.log(args);
}
```

```javascript
const [first, ...others] = numbers;
```

```javascript
const { name, ...details } = user;
```

Remember:

```text
Rest → Collect
```

---

# Easy Trick

Just remember:

```text
... → Spread
        ↓
     Spread out

... → Rest
        ↓
     Collect the rest
```

Context decides whether `...` is Spread or Rest.

---

## Next File

```text
12-Modern-JavaScript/04-Optional-Chaining.md
```

Next we will learn **Optional Chaining (`?.`)**.