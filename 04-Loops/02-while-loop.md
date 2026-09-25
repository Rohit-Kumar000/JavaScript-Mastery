# JavaScript while Loop

## 1. What is a while Loop?

A `while` loop is used to **repeat code as long as a condition is true**.

Syntax:

```javascript
while (condition) {
    // code
}
```

Simple rule:

```text
Condition true  → Loop runs
Condition false → Loop stops
```

---

# 2. Basic Example

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

Output:

```text
1
2
3
4
5
```

---

# 3. How while Loop Works

Example:

```javascript
let i = 1;

while (i <= 3) {
    console.log(i);
    i++;
}
```

Execution:

```text
i = 1

1 <= 3 → true
print 1
i++

i = 2

2 <= 3 → true
print 2
i++

i = 3

3 <= 3 → true
print 3
i++

i = 4

4 <= 3 → false
loop stops
```

---

# 4. Important: Update the Variable

Always make sure the condition can eventually become false.

Correct:

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

Here `i` increases, so eventually:

```text
i = 6
```

and:

```text
6 <= 5 → false
```

The loop stops.

---

# 5. Infinite while Loop

If you forget to update the variable:

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
}
```

This becomes an infinite loop because `i` always remains `1`.

```text
1 <= 5 → true
1 <= 5 → true
1 <= 5 → true
...
```

So always check that the loop has a way to stop.

---

# 6. Reverse Counting

You can also decrease the value.

```javascript
let i = 5;

while (i >= 1) {
    console.log(i);
    i--;
}
```

Output:

```text
5
4
3
2
1
```

---

# 7. while Loop with User Input

`while` is useful when you don't know exactly how many times the loop will run.

Example:

```javascript
let number = 0;

while (number !== 5) {
    number = Number(prompt("Enter 5:"));
}

console.log("Correct number!");
```

The loop continues until the user enters `5`.

Concept:

```text
Wrong number → Try again
Wrong number → Try again
Wrong number → Try again
5             → Stop
```

---

# 8. Sum Using while Loop

```javascript
let i = 1;
let sum = 0;

while (i <= 5) {
    sum = sum + i;
    i++;
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

# 9. while Loop with Array

You can use `while` to access array elements.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

let i = 0;

while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}
```

Output:

```text
Apple
Mango
Banana
```

---

# 10. for vs while

### for Loop

Use `for` when the number of iterations is generally known.

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

### while Loop

Use `while` when the loop depends mainly on a condition and the number of iterations may not be known beforehand.

```javascript
let number = 0;

while (number !== 5) {
    number = Number(prompt("Enter 5:"));
}
```

Simple rule:

```text
Known/repetitive counting → for

Condition-based repetition → while
```

---

# 11. break with while

`break` immediately stops the loop.

```javascript
let i = 1;

while (i <= 10) {

    if (i === 5) {
        break;
    }

    console.log(i);
    i++;
}
```

Output:

```text
1
2
3
4
```

When `i` becomes `5`, `break` stops the loop.

---

# 12. continue with while

`continue` skips the current iteration and moves to the next one.

```javascript
let i = 0;

while (i < 5) {

    i++;

    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Output:

```text
1
2
4
5
```

`3` is skipped.

---

# 13. Common Mistake

Don't forget to change the loop variable.

❌ Wrong:

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
}
```

✅ Correct:

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

---

# Important Points

- `while` repeats code while a condition is true.
- The condition is checked **before** each iteration.
- If the condition is false initially, the loop may not run even once.
- Make sure the loop variable or condition changes.
- Otherwise, you may create an infinite loop.
- `break` stops the loop.
- `continue` skips the current iteration.

---

# Quick Revision

Basic structure:

```javascript
while (condition) {
    // code
}
```

Example:

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

Execution:

```text
Check condition
      ↓
    true
      ↓
Run code
      ↓
Update
      ↓
Check condition again
      ↓
    false
      ↓
    Stop
```

### Remember

```text
while → "Keep running while this condition is true."
```