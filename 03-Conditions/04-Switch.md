# JavaScript switch Statement

## 1. What is switch?

The `switch` statement is used when we want to compare **one value against multiple possible values**.

For example:

```text
1 → Monday
2 → Tuesday
3 → Wednesday
...
```

Instead of writing many `if...else if` statements, we can use `switch`.

---

# 2. Basic Syntax

```javascript
switch (expression) {

    case value1:
        // code
        break;

    case value2:
        // code
        break;

    default:
        // code
}
```

---

# 3. Simple Example

```javascript
let day = 2;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}
```

Output:

```text
Tuesday
```

---

# 4. How switch Works

Suppose:

```javascript
let day = 2;
```

JavaScript checks:

```text
day === 1 → false
day === 2 → true
```

So it runs:

```javascript
console.log("Tuesday");
```

Then `break` stops the `switch`.

---

# 5. Why Use break?

`break` stops the execution of the `switch`.

Example:

```javascript
let number = 2;

switch (number) {

    case 1:
        console.log("One");

    case 2:
        console.log("Two");

    case 3:
        console.log("Three");

}
```

Output:

```text
Two
Three
```

Why?

Because there is no `break`, so JavaScript continues into the next cases.

Correct:

```javascript
let number = 2;

switch (number) {

    case 1:
        console.log("One");
        break;

    case 2:
        console.log("Two");
        break;

    case 3:
        console.log("Three");
        break;
}
```

Output:

```text
Two
```

---

# 6. default

`default` runs when none of the cases match.

```javascript
let day = 10;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid day");
}
```

Output:

```text
Invalid day
```

Think of `default` like the `else` part of an `if...else` structure.

---

# 7. Multiple Cases with Same Code

Sometimes multiple values should perform the same action.

Example:

```javascript
let day = "Saturday";

switch (day) {

    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;

    default:
        console.log("Weekday");
}
```

Output:

```text
Weekend
```

Here both `Saturday` and `Sunday` use the same code.

---

# 8. switch with Strings

`switch` can also compare strings.

```javascript
let fruit = "Apple";

switch (fruit) {

    case "Apple":
        console.log("Red or green fruit");
        break;

    case "Mango":
        console.log("Yellow fruit");
        break;

    default:
        console.log("Unknown fruit");
}
```

Output:

```text
Red or green fruit
```

---

# 9. switch Uses Strict Comparison

`switch` compares the expression with cases using **strict equality** (`===`).

Example:

```javascript
let number = 5;

switch (number) {

    case "5":
        console.log("String 5");
        break;

    case 5:
        console.log("Number 5");
        break;

    default:
        console.log("No match");
}
```

Output:

```text
Number 5
```

Because:

```text
5 === "5" → false
5 === 5   → true
```

---

# 10. switch vs if...else

### Use `switch` when:

You are checking **one value against several exact values**.

Example:

```javascript
switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;
}
```

### Use `if...else` when:

You need ranges or complex conditions.

Example:

```javascript
if (marks >= 90) {
    console.log("A");
} else if (marks >= 75) {
    console.log("B");
}
```

So:

```text
Exact values → switch

Ranges / complex conditions → if...else
```

---

# 11. Real Example

Simple calculator:

```javascript
let a = 10;
let b = 5;
let operator = "+";

switch (operator) {

    case "+":
        console.log(a + b);
        break;

    case "-":
        console.log(a - b);
        break;

    case "*":
        console.log(a * b);
        break;

    case "/":
        console.log(a / b);
        break;

    default:
        console.log("Invalid operator");
}
```

Output:

```text
15
```

---

# 12. Common Mistakes

### Forgetting `break`

```javascript
case 1:
    console.log("Monday");
```

Always use `break` when you don't want execution to continue to the next case.

---

### Wrong case type

```javascript
let number = 5;

switch (number) {

    case "5":
        console.log("Five");
        break;
}
```

This does not match because:

```text
5 !== "5"
```

---

### Confusing `case` with a condition

Don't write:

```javascript
case day > 5:
```

For a normal `switch`, cases are compared against the switch expression.

Use:

```javascript
case 5:
```

For range-based conditions, `if...else` is generally more appropriate.

---

# Important Points

- `switch` checks one expression against multiple cases.
- `case` defines a possible matching value.
- `break` stops the switch.
- `default` runs when no case matches.
- `switch` uses strict comparison.
- Multiple cases can share the same code.
- `switch` is useful for exact-value matching.

---

# Quick Revision

```javascript
switch (value) {

    case 1:
        // code
        break;

    case 2:
        // code
        break;

    default:
        // code
}
```

Remember:

```text
switch  → Value to check
case    → Possible value
break   → Stop switch
default → No case matched
```

### Simple Rule

```text
Exact values
     ↓
  switch

Ranges / complex conditions
     ↓
 if...else
```