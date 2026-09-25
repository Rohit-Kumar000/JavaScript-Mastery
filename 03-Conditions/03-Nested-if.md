# JavaScript Nested if

## 1. What is Nested if?

A **nested `if`** means writing one `if` statement **inside another `if` statement**.

Simple example:

```javascript
if (condition1) {

    if (condition2) {
        // code
    }

}
```

The inner `if` is checked only when the outer `if` condition is true.

---

# 2. Simple Example

```javascript
let age = 20;

if (age >= 18) {

    if (age >= 21) {
        console.log("You are 21 or older");
    }

}
```

Here:

```text
First:
age >= 18
   ↓
 true
   ↓
Check inner if

age >= 21
   ↓
 false
```

So nothing is printed.

---

# 3. Nested if with Two Conditions

```javascript
let age = 25;
let hasID = true;

if (age >= 18) {

    if (hasID === true) {
        console.log("Entry allowed");
    }

}
```

Output:

```text
Entry allowed
```

Why?

```text
age >= 18
   ↓
true

hasID === true
   ↓
true

Both conditions are satisfied.
```

---

# 4. Nested if with else

We can also use `else` inside a nested `if`.

```javascript
let age = 20;
let hasID = false;

if (age >= 18) {

    if (hasID === true) {
        console.log("Entry allowed");
    } else {
        console.log("ID required");
    }

} else {
    console.log("You are under 18");
}
```

Output:

```text
ID required
```

---

# 5. How Nested if Works

Consider:

```javascript
let age = 25;
let hasID = true;

if (age >= 18) {

    if (hasID) {
        console.log("Allowed");
    } else {
        console.log("ID required");
    }

} else {
    console.log("Under 18");
}
```

Execution:

```text
Check age >= 18
       ↓
     true
       ↓
Check hasID
       ↓
     true
       ↓
   "Allowed"
```

---

# 6. Nested if with User Input

```javascript
let age = Number(prompt("Enter your age:"));

if (age >= 18) {

    let hasID = prompt("Do you have ID?");

    if (hasID === "yes") {
        console.log("Entry allowed");
    } else {
        console.log("ID required");
    }

} else {
    console.log("You are under 18");
}
```

Here, the second question is asked only when:

```text
age >= 18
```

is true.

---

# 7. Nested if vs Logical AND

Sometimes nested `if` can be replaced with `&&`.

Nested version:

```javascript
if (age >= 18) {

    if (hasID) {
        console.log("Allowed");
    }

}
```

Using `&&`:

```javascript
if (age >= 18 && hasID) {
    console.log("Allowed");
}
```

Both can represent the same basic condition.

---

# 8. When to Use Nested if?

Nested `if` can be useful when the second condition should only be checked after the first condition is satisfied.

Example:

```text
Is user logged in?
       ↓
      Yes
       ↓
Is user admin?
       ↓
      Yes
       ↓
Show admin panel
```

JavaScript:

```javascript
if (isLoggedIn) {

    if (isAdmin) {
        console.log("Show Admin Panel");
    }

}
```

---

# 9. Avoid Too Much Nesting

Too many nested conditions can make code difficult to read.

Example:

```javascript
if (condition1) {

    if (condition2) {

        if (condition3) {

            if (condition4) {
                console.log("Done");
            }

        }

    }

}
```

This becomes difficult to understand.

In such cases, simpler conditions or other approaches may be better.

For example:

```javascript
if (condition1 && condition2 && condition3 && condition4) {
    console.log("Done");
}
```

---

# 10. Important Points

- Nested `if` means an `if` inside another `if`.
- The inner `if` is checked only when the outer condition is true.
- Nested `if` can contain `else`.
- Nested conditions are useful when conditions depend on each other.
- Too much nesting can make code difficult to read.
- Sometimes `&&` can make nested conditions simpler.

---

# Quick Revision

### Basic Structure

```javascript
if (condition1) {

    if (condition2) {
        // code
    }

}
```

### Example

```javascript
let age = 25;
let hasID = true;

if (age >= 18) {

    if (hasID) {
        console.log("Allowed");
    }

}
```

### Remember

```text
Outer if
   ↓
Condition true?
   ↓
Inner if
   ↓
Condition true?
   ↓
Execute code
```