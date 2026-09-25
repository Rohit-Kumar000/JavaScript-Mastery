# JavaScript else if

## 1. What is `else if`?

`else if` is used when we have **multiple conditions** to check.

For example, if we want to check marks:

```text
90+  → A
75+  → B
60+  → C
40+  → D
Below 40 → Fail
```

We can use `else if`.

---

# 2. Basic Syntax

```javascript
if (condition1) {
    // code
} else if (condition2) {
    // code
} else {
    // code
}
```

JavaScript checks the conditions **from top to bottom**.

---

# 3. Simple Example

```javascript
let age = 25;

if (age < 18) {
    console.log("Minor");
} else if (age >= 18 && age < 60) {
    console.log("Adult");
} else {
    console.log("Senior");
}
```

Output:

```text
Adult
```

---

# 4. How `else if` Works

Suppose:

```javascript
let marks = 75;
```

Code:

```javascript
if (marks >= 90) {
    console.log("A");
} else if (marks >= 75) {
    console.log("B");
} else if (marks >= 60) {
    console.log("C");
} else {
    console.log("Fail");
}
```

JavaScript checks:

```text
marks >= 90
     ↓
false

marks >= 75
     ↓
true
```

So it prints:

```text
B
```

Once a condition is true, the remaining `else if` conditions are skipped.

---

# 5. Multiple `else if`

You can have multiple `else if` blocks.

```javascript
let marks = 82;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else if (marks >= 70) {
    console.log("Grade C");
} else if (marks >= 60) {
    console.log("Grade D");
} else {
    console.log("Fail");
}
```

Output:

```text
Grade B
```

---

# 6. `else` is Optional

You can use `if` and `else if` without `else`.

```javascript
let age = 20;

if (age < 18) {
    console.log("Minor");
} else if (age >= 18) {
    console.log("Adult");
}
```

If none of the conditions are true, nothing happens.

---

# 7. Order of Conditions Matters

This is very important.

Example:

```javascript
let marks = 95;

if (marks >= 60) {
    console.log("C");
} else if (marks >= 90) {
    console.log("A");
}
```

Output:

```text
C
```

Why?

Because `95 >= 60` is already true.

JavaScript stops checking after the first matching condition.

### Better Order

Put more specific/higher conditions first:

```javascript
let marks = 95;

if (marks >= 90) {
    console.log("A");
} else if (marks >= 60) {
    console.log("C");
}
```

Output:

```text
A
```

---

# 8. `else if` with Logical Operators

You can combine conditions using `&&` and `||`.

```javascript
let age = 25;
let hasID = true;

if (age < 18) {
    console.log("Not eligible");
} else if (age >= 18 && hasID) {
    console.log("Eligible");
} else {
    console.log("ID required");
}
```

---

# 9. User Input Example

```javascript
let marks = Number(prompt("Enter your marks:"));

if (marks >= 90) {
    console.log("Excellent");
} else if (marks >= 75) {
    console.log("Very Good");
} else if (marks >= 60) {
    console.log("Good");
} else if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}
```

---

# 10. `if` vs `else if` vs `else`

```text
if
↓
First condition is checked

else if
↓
Checked if previous condition was false

else
↓
Runs if all previous conditions are false
```

Example:

```javascript
if (condition1) {

} else if (condition2) {

} else {

}
```

---

# 11. Common Mistake

Don't write unrelated `if` statements when you want only **one result**.

For example:

```javascript
let marks = 95;

if (marks >= 60) {
    console.log("Pass");
}

if (marks >= 90) {
    console.log("A");
}
```

Output:

```text
Pass
A
```

Both `if` statements are checked independently.

If you want only one result, use:

```javascript
if (marks >= 90) {
    console.log("A");
} else if (marks >= 60) {
    console.log("Pass");
}
```

Output:

```text
A
```

---

# Important Points

- `else if` is used for multiple conditions.
- Conditions are checked from top to bottom.
- The first true condition runs.
- Remaining conditions are skipped.
- `else` runs when all previous conditions are false.
- `else` is optional.
- The order of conditions matters.

---

# Quick Revision

```javascript
if (condition1) {

} else if (condition2) {

} else if (condition3) {

} else {

}
```

Remember:

```text
if
↓
Check first condition

else if
↓
Check another condition

else
↓
Everything above is false
```

### Example

```javascript
let marks = 85;

if (marks >= 90) {
    console.log("A");
} else if (marks >= 80) {
    console.log("B");
} else if (marks >= 70) {
    console.log("C");
} else {
    console.log("Fail");
}
```

Output:

```text
B
```