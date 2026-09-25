# JavaScript if...else

## 1. What is a Condition?

A condition is a statement that JavaScript checks to decide **which code should run**.

For example:

```javascript
let age = 20;

if (age >= 18) {
    console.log("You are an adult");
}
```

Here JavaScript checks:

```text
Is age >= 18?
       ↓
     true
       ↓
Run the code
```

---

# 2. if Statement

The `if` statement runs code **only when the condition is true**.

Syntax:

```javascript
if (condition) {
    // code
}
```

Example:

```javascript
let age = 20;

if (age >= 18) {
    console.log("Adult");
}
```

Output:

```text
Adult
```

---

# 3. When the Condition is False

```javascript
let age = 15;

if (age >= 18) {
    console.log("Adult");
}
```

Nothing is printed because:

```text
15 >= 18
   ↓
 false
```

---

# 4. if...else

`else` runs when the `if` condition is false.

Syntax:

```javascript
if (condition) {
    // if true
} else {
    // if false
}
```

Example:

```javascript
let age = 15;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

Output:

```text
Minor
```

---

# 5. How if...else Works

Example:

```javascript
let age = 20;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

JavaScript checks:

```text
age >= 18
    ↓
Is it true?
```

If `true`:

```text
Adult
```

If `false`:

```text
Minor
```

---

# 6. Using Comparison Operators

Conditions commonly use comparison operators.

```javascript
let number = 10;

if (number > 5) {
    console.log("Number is greater than 5");
}
```

Other examples:

```javascript
if (number < 20) {
    console.log("Less than 20");
}

if (number === 10) {
    console.log("Number is 10");
}

if (number !== 5) {
    console.log("Number is not 5");
}
```

---

# 7. Using Logical Operators

We can combine multiple conditions.

```javascript
let age = 25;

if (age >= 18 && age <= 60) {
    console.log("Eligible");
}
```

Both conditions must be true because `&&` means AND.

---

# 8. if...else with User Input

```javascript
let age = Number(prompt("Enter your age:"));

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}
```

Remember:

```javascript
Number(prompt(...))
```

is useful when numeric input is required because `prompt()` returns a string.

---

# 9. Multiple Statements

An `if` block can contain multiple statements.

```javascript
let age = 20;

if (age >= 18) {
    console.log("Adult");
    console.log("You are eligible.");
}
```

Both statements execute when the condition is true.

---

# 10. Curly Braces `{}`

Curly braces define the block of code controlled by the condition.

```javascript
if (age >= 18) {
    console.log("Adult");
    console.log("Eligible");
}
```

Both lines belong to the `if` block.

For beginners, it is recommended to always use curly braces.

---

# 11. Common Mistake: `=` vs `===`

Do not use assignment when you mean comparison.

❌ Wrong:

```javascript
if (age = 18) {
    console.log("Adult");
}
```

Here `=` assigns a value.

Use:

```javascript
if (age === 18) {
    console.log("Age is exactly 18");
}
```

Here `===` compares the value and type.

---

# 12. Common Mistake: Missing Braces

Avoid writing confusing code like:

```javascript
if (age >= 18)
    console.log("Adult");
```

Although this can work for a single statement, beginners should prefer:

```javascript
if (age >= 18) {
    console.log("Adult");
}
```

It is clearer and safer when adding more code later.

---

# 13. Simple Real-Life Example

Imagine an ATM:

```text
If balance is enough
        ↓
Allow withdrawal

Otherwise
        ↓
Show insufficient balance
```

JavaScript:

```javascript
let balance = 500;
let amount = 300;

if (amount <= balance) {
    console.log("Withdrawal successful");
} else {
    console.log("Insufficient balance");
}
```

Output:

```text
Withdrawal successful
```

---

# Important Points

- `if` runs code when a condition is true.
- `else` runs when the `if` condition is false.
- Conditions usually produce `true` or `false`.
- Comparison operators are commonly used in conditions.
- Logical operators can combine conditions.
- Use `===` for strict comparison.
- Use curly braces `{}` to clearly define the code block.

---

# Quick Revision

### if

```javascript
if (condition) {
    // runs when true
}
```

### if...else

```javascript
if (condition) {
    // runs when true
} else {
    // runs when false
}
```

### Example

```javascript
let age = 20;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

Remember:

```text
if    → condition true
else  → condition false
```