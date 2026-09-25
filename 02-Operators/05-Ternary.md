# JavaScript Ternary Operator

## 1. What is the Ternary Operator?

The ternary operator is a **short way to write a simple `if...else` condition**.

Syntax:

```javascript
condition ? valueIfTrue : valueIfFalse;
```

It has three parts:

```text
condition ? true result : false result
```

That's why it is called **ternary**.

---

# 2. Basic Example

```javascript
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

Output:

```text
Adult
```

Here:

```text
age >= 18
    ↓
condition

"Adult"
    ↓
if condition is true

"Minor"
    ↓
if condition is false
```

---

# 3. Ternary vs if...else

Normal `if...else`:

```javascript
let age = 20;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

Same logic using ternary:

```javascript
let age = 20;

age >= 18
    ? console.log("Adult")
    : console.log("Minor");
```

Ternary is useful when the condition is simple.

---

# 4. Storing the Result

One of the most common uses is assigning the result to a variable.

```javascript
let age = 20;

let status = age >= 18 ? "Adult" : "Minor";

console.log(status);
```

Output:

```text
Adult
```

---

# 5. Another Example

```javascript
let number = 10;

let result = number % 2 === 0 ? "Even" : "Odd";

console.log(result);
```

Output:

```text
Even
```

Here:

```text
number % 2 === 0
        ↓
    condition
```

If true:

```text
"Even"
```

Otherwise:

```text
"Odd"
```

---

# 6. Ternary with Strings

```javascript
let name = "Rohit";

let message = name ? "Name is available" : "Name is missing";

console.log(message);
```

Since `"Rohit"` is truthy:

```text
Name is available
```

---

# 7. Nested Ternary

A ternary can technically be placed inside another ternary.

Example:

```javascript
let marks = 75;

let result =
    marks >= 90 ? "A" :
    marks >= 60 ? "B" :
    marks >= 40 ? "C" :
    "Fail";

console.log(result);
```

Output:

```text
B
```

However, too many nested ternaries can make code difficult to read.

For complex conditions, `if...else` is usually clearer.

---

# 8. Ternary with Multiple Conditions

You can use logical operators inside the condition.

```javascript
let age = 20;
let hasID = true;

let result =
    age >= 18 && hasID
        ? "Allowed"
        : "Not Allowed";

console.log(result);
```

Output:

```text
Allowed
```

---

# 9. Important Rule

Use the ternary operator mainly for **simple decisions**.

Good:

```javascript
let status = age >= 18 ? "Adult" : "Minor";
```

Less readable:

```javascript
let result =
    condition1 ? value1 :
    condition2 ? value2 :
    condition3 ? value3 :
    condition4 ? value4 :
    value5;
```

For complex logic, prefer `if...else` or `switch`.

---

# 10. Common Mistake

Do not confuse the ternary operator with `if`.

❌ Wrong:

```javascript
age >= 18 ? "Adult"
```

A ternary needs both results:

```javascript
age >= 18 ? "Adult" : "Minor";
```

The `:` separates the true and false results.

---

# Important Points

- Ternary is a short form of simple `if...else`.
- It uses `?` and `:`.
- It returns a value.
- It is useful for simple conditions.
- Avoid deeply nested ternaries because they reduce readability.

---

# Quick Revision

```text
condition ? trueValue : falseValue
```

Example:

```javascript
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";
```

Remember:

```text
? → What happens if condition is true
: → What happens if condition is false
```

### Simple Formula

```text
condition
    ?
true result
    :
false result
```