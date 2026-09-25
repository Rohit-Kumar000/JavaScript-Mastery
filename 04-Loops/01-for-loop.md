# JavaScript for Loop

## 1. What is a Loop?

A loop is used to **repeat a block of code multiple times**.

For example, agar hume `Hello` 5 times print karna ho:

Without loop:

```javascript
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
```

Ye code unnecessarily long hai.

Using a loop:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Hello");
}
```

Output:

```text
Hello
Hello
Hello
Hello
Hello
```

---

# 2. Basic Syntax

```javascript
for (initialization; condition; update) {
    // code
}
```

Example:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

---

# 3. Three Parts of a for Loop

A `for` loop has three main parts:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### 1. Initialization

```javascript
let i = 1;
```

Loop starts here.

### 2. Condition

```javascript
i <= 5;
```

As long as this condition is `true`, the loop runs.

### 3. Update

```javascript
i++;
```

After every iteration, `i` increases by 1.

---

# 4. How the Loop Works

Example:

```javascript
for (let i = 1; i <= 3; i++) {
    console.log(i);
}
```

Execution:

```text
i = 1
↓
1 <= 3 → true
↓
print 1
↓
i++

i = 2
↓
2 <= 3 → true
↓
print 2
↓
i++

i = 3
↓
3 <= 3 → true
↓
print 3
↓
i++

i = 4
↓
4 <= 3 → false
↓
loop stops
```

Output:

```text
1
2
3
```

---

# 5. Print Numbers

Print `1` to `10`:

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

---

# 6. Print Numbers in Reverse

```javascript
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
```

Output:

```text
10
9
8
7
6
5
4
3
2
1
```

Here:

```javascript
i--
```

decreases `i` by 1.

---

# 7. Increment by More Than 1

You don't have to increase by only 1.

```javascript
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
```

Output:

```text
0
2
4
6
8
10
```

---

# 8. Print Odd Numbers

```javascript
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}
```

Output:

```text
1
3
5
7
9
```

---

# 9. Print Even Numbers

```javascript
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
```

Output:

```text
2
4
6
8
10
```

---

# 10. for Loop with Array

Loops are commonly used with arrays.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

Output:

```text
Apple
Mango
Banana
```

Important:

```javascript
fruits.length
```

gives the number of elements.

And:

```javascript
fruits[i]
```

accesses the element at index `i`.

---

# 11. for Loop with String

```javascript
let name = "Rohit";

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}
```

Output:

```text
R
o
h
i
t
```

---

# 12. Sum of Numbers

We can use a loop to calculate a sum.

```javascript
let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}

console.log(sum);
```

Output:

```text
15
```

Calculation:

```text
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
10 + 5 = 15
```

---

# 13. Multiplication Table

Example: table of `5`.

```javascript
let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(number * i);
}
```

Output:

```text
5
10
15
20
25
30
35
40
45
50
```

With proper format:

```javascript
let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}
```

Output:

```text
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
...
5 * 10 = 50
```

---

# 14. Nested for Loop

A loop can be placed inside another loop.

```javascript
for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }

}
```

The inner loop runs completely for each iteration of the outer loop.

Nested loops are useful for:

- Patterns
- Tables
- Matrix operations
- Comparing multiple values

---

# 15. Infinite Loop

Be careful with the condition.

This creates an infinite loop:

```javascript
for (let i = 1; i <= 5;) {
    console.log(i);
}
```

Why?

Because `i` never changes.

So:

```text
i = 1
1 <= 5 → true
i = 1
1 <= 5 → true
...
```

The loop never ends.

Correct:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

---

# 16. Scope of `let` in for Loop

The variable declared using `let` inside a `for` loop is block-scoped.

```javascript
for (let i = 1; i <= 3; i++) {
    console.log(i);
}
```

Outside the loop:

```javascript
console.log(i);
```

This gives an error because `i` exists only inside the loop.

---

# 17. Common Mistake

Don't use:

```javascript
i <= 10
```

when you actually want to loop through array indexes.

Example:

```javascript
let fruits = ["Apple", "Mango", "Banana"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

Why `<`?

Because array indexes start from `0`.

```text
Apple  → index 0
Mango  → index 1
Banana → index 2
```

So the last valid index is:

```text
length - 1
```

---

# Important Points

- A loop repeats code.
- `for` is useful when you know how many times you want to repeat something.
- `initialization` runs first.
- `condition` is checked before each iteration.
- `update` runs after each iteration.
- `i++` increases by 1.
- `i--` decreases by 1.
- `break` can stop a loop.
- `continue` can skip an iteration.
- `for` loops are commonly used with arrays and strings.

---

# Quick Revision

Basic structure:

```javascript
for (initialization; condition; update) {
    // code
}
```

Example:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Remember:

```text
Initialization
      ↓
Condition
      ↓
Code
      ↓
Update
      ↓
Condition
      ↓
...
```

Simple rule:

```text
for loop → Repeat code
```