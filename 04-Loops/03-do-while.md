# JavaScript do...while Loop

## 1. What is a do...while Loop?

A `do...while` loop is similar to a `while` loop, but there is one important difference:

> `do...while` loop **runs the code at least once**, even if the condition is false.

Syntax:

```javascript
do {
    // code
} while (condition);
```

---

# 2. Basic Example

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
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

# 3. How do...while Works

Example:

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 3);
```

Execution:

```text
Run code
   ↓
Print 1
   ↓
i++
   ↓
Check condition
   ↓
1 <= 3 → true
   ↓
Run again
```

The important thing is that the code runs **before** the condition is checked.

---

# 4. do...while Runs At Least Once

This is the main difference between `while` and `do...while`.

### while

```javascript
let i = 10;

while (i < 5) {
    console.log(i);
}
```

Output:

```text
Nothing
```

Because:

```text
10 < 5 → false
```

The condition is checked first.

---

### do...while

```javascript
let i = 10;

do {
    console.log(i);
} while (i < 5);
```

Output:

```text
10
```

Why?

Because the code runs first:

```text
Run code
   ↓
Print 10
   ↓
Check 10 < 5
   ↓
false
   ↓
Stop
```

---

# 5. Important Difference

```text
while
↓
Check condition
↓
If true → run code
```

```text
do...while
↓
Run code
↓
Check condition
↓
If true → run again
```

Remember:

```text
while     → 0 or more times
do...while → 1 or more times
```

---

# 6. Reverse Counting

```javascript
let i = 5;

do {
    console.log(i);
    i--;
} while (i >= 1);
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

# 7. do...while with User Input

One common use is asking the user at least once.

```javascript
let number;

do {
    number = Number(prompt("Enter 5:"));
} while (number !== 5);

console.log("Correct number!");
```

The user will be asked at least once.

The loop continues until the user enters:

```text
5
```

---

# 8. Simple Menu Example

`do...while` can be useful for menu-based programs.

```javascript
let choice;

do {
    choice = prompt("Enter 1 to continue or 0 to exit");

    if (choice === "1") {
        console.log("Program continues");
    }

} while (choice !== "0");

console.log("Program ended");
```

The menu appears at least once.

---

# 9. break with do...while

`break` can stop the loop immediately.

```javascript
let i = 1;

do {

    if (i === 4) {
        break;
    }

    console.log(i);
    i++;

} while (i <= 10);
```

Output:

```text
1
2
3
```

When `i` becomes `4`, the loop stops.

---

# 10. continue with do...while

`continue` skips the current iteration.

Be careful with the update when using `continue`.

Example:

```javascript
let i = 0;

do {

    i++;

    if (i === 3) {
        continue;
    }

    console.log(i);

} while (i < 5);
```

Output:

```text
1
2
4
5
```

---

# 11. for vs while vs do...while

### for

Best when the number of iterations is generally known.

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### while

Best when the condition controls repetition and the code may run zero or more times.

```javascript
while (condition) {
    // code
}
```

### do...while

Best when the code must run **at least once**.

```javascript
do {
    // code
} while (condition);
```

---

# 12. Common Mistake

Don't forget the semicolon after the `while` condition.

Correct:

```javascript
do {
    console.log("Hello");
} while (false);
```

Notice:

```text
                 ↓
} while (condition);
                   ↑
               semicolon
```

---

# Important Points

- `do...while` runs the code before checking the condition.
- It always executes at least once.
- The condition is checked after each iteration.
- `break` can stop the loop.
- `continue` can skip an iteration.
- It is useful for menus and user-input situations where at least one attempt is required.

---

# Quick Revision

Basic syntax:

```javascript
do {
    // code
} while (condition);
```

Remember:

```text
while
→ Check first
→ Then run

do...while
→ Run first
→ Then check
```

### Main Difference

```text
while      → May run 0 times
do...while → Runs at least 1 time
```

Example:

```javascript
let i = 10;

do {
    console.log(i);
} while (i < 5);
```

Output:

```text
10
```

Because `do...while` always performs the first iteration.