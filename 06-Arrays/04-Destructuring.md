# JavaScript Array Destructuring

## 1. What is Destructuring?

**Destructuring** is a simple way to take values from an array and store them in separate variables.

Normally:

```javascript
let fruits = ["Apple", "Mango", "Banana"];

let first = fruits[0];
let second = fruits[1];
let third = fruits[2];

console.log(first);
console.log(second);
console.log(third);
```

With destructuring:

```javascript
let fruits = ["Apple", "Mango", "Banana"];

let [first, second, third] = fruits;

console.log(first);
console.log(second);
console.log(third);
```

Output:

```text
Apple
Mango
Banana
```

So:

```text
Array → Separate Variables
```

---

# 2. Basic Syntax

```javascript
let [variable1, variable2, variable3] = array;
```

Example:

```javascript
let numbers = [10, 20, 30];

let [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
```

Values are assigned according to their **index**.

```text
Array:
[10, 20, 30]
 ↓   ↓   ↓
 a   b   c
```

---

# 3. Skipping Values

You can skip an element using an empty space between commas.

```javascript
let numbers = [10, 20, 30];

let [a, , c] = numbers;

console.log(a);
console.log(c);
```

Output:

```text
10
30
```

Here `20` was skipped.

---

# 4. Taking Only Some Values

You don't have to destructure the complete array.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

let [first] = fruits;

console.log(first);
```

Output:

```text
Apple
```

Another example:

```javascript
let [first, second] = fruits;

console.log(first);
console.log(second);
```

Output:

```text
Apple
Mango
```

---

# 5. Default Values

You can provide a default value if the array does not contain an element.

```javascript
let fruits = ["Apple"];

let [first, second = "Mango"] = fruits;

console.log(first);
console.log(second);
```

Output:

```text
Apple
Mango
```

Because the second value was missing.

---

# 6. Default Value Only Works for undefined

```javascript
let values = [undefined];

let [a = 100] = values;

console.log(a);
```

Output:

```text
100
```

But:

```javascript
let values = [null];

let [a = 100] = values;

console.log(a);
```

Output:

```text
null
```

Default value is used when the value is `undefined`.

---

# 7. Rest Operator with Destructuring

You can collect the remaining values using `...`.

```javascript
let numbers = [10, 20, 30, 40, 50];

let [first, second, ...remaining] = numbers;

console.log(first);
console.log(second);
console.log(remaining);
```

Output:

```text
10
20
[30, 40, 50]
```

Here:

```text
first     → 10
second    → 20
remaining → [30, 40, 50]
```

Important:

> Rest element must be the last element.

Correct:

```javascript
let [a, ...rest] = numbers;
```

---

# 8. Swapping Variables

Destructuring makes swapping values very easy.

Normally:

```javascript
let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;
```

Using destructuring:

```javascript
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);
```

Output:

```text
20
10
```

This is a very useful use of destructuring.

---

# 9. Destructuring Function Return Values

A function can return an array.

```javascript
function getNumbers() {
    return [10, 20, 30];
}

let [a, b, c] = getNumbers();

console.log(a);
console.log(b);
console.log(c);
```

Output:

```text
10
20
30
```

---

# 10. Nested Array Destructuring

Nested arrays can also be destructured.

```javascript
let numbers = [10, [20, 30]];

let [a, [b, c]] = numbers;

console.log(a);
console.log(b);
console.log(c);
```

Output:

```text
10
20
30
```

Structure:

```text
[10, [20, 30]]
 ↓      ↓
 a     [b, c]
```

---

# 11. Destructuring with const

You can use `const`:

```javascript
const fruits = ["Apple", "Mango"];

const [first, second] = fruits;

console.log(first);
console.log(second);
```

---

# 12. Destructuring with let

You can also use `let`:

```javascript
let fruits = ["Apple", "Mango"];

let [first, second] = fruits;
```

The choice between `let` and `const` follows the normal variable rules.

---

# 13. Important Difference

Destructuring does **not** change the original array.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

let [first, second] = fruits;

console.log(fruits);
```

Output:

```text
["Apple", "Mango", "Banana"]
```

The original array remains unchanged.

---

# 14. Practical Example

Suppose we have student information:

```javascript
let student = ["Rohit", 23, "MCA"];

let [name, age, course] = student;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Course: ${course}`);
```

Output:

```text
Name: Rohit
Age: 23
Course: MCA
```

This makes the code easier to understand.

---

# Important Points

- Destructuring extracts values from an array.
- Array destructuring uses `[]`.
- Values are assigned according to their index.
- You can skip values using commas.
- Default values can be provided.
- `...rest` collects remaining values.
- Destructuring can be used to swap variables.
- Functions returning arrays can be destructured.
- Nested arrays can also be destructured.
- Destructuring does not modify the original array.

---

# Quick Revision

Basic:

```javascript
let numbers = [10, 20, 30];

let [a, b, c] = numbers;
```

Skip:

```javascript
let [a, , c] = numbers;
```

Default:

```javascript
let [a, b = 100] = numbers;
```

Rest:

```javascript
let [a, ...rest] = numbers;
```

Swap:

```javascript
[a, b] = [b, a];
```

Nested:

```javascript
let numbers = [10, [20, 30]];

let [a, [b, c]] = numbers;
```

### Remember

```text
Destructuring = Take values out of an array

[] = Array destructuring

,  = Skip a value

=  = Default value

... = Rest of the values
```

**06-Arrays complete ✅**

Next folder:

```text
07-Functions
```

First file:

```text
01-Function-Basics.md
```