# JavaScript Logical Operators

## 1. What are Logical Operators?

Logical operators are used to **combine or reverse conditions**.

They usually work with Boolean values:

```text
true
false
```

JavaScript has three main logical operators:

```text
&&  → AND
||  → OR
!   → NOT
```

---

# 2. AND Operator `&&`

`&&` returns `true` only when **both conditions are true**.

```javascript
console.log(true && true);
```

Output:

```text
true
```

Example:

```javascript
let age = 20;

console.log(age >= 18 && age <= 60);
```

Both conditions are true, so the result is:

```text
true
```

### AND Truth Table

| A | B | A && B |
|---|---|---|
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |

Simple rule:

```text
AND → Both must be true
```

---

# 3. OR Operator `||`

`||` returns `true` when **at least one condition is true**.

```javascript
console.log(true || false);
```

Output:

```text
true
```

Example:

```javascript
let day = "Sunday";

console.log(day === "Sunday" || day === "Saturday");
```

One condition is true, so the result is:

```text
true
```

### OR Truth Table

| A | B | A || B |
|---|---|---|
| true | true | true |
| true | false | true |
| false | true | true |
| false | false | false |

Simple rule:

```text
OR → At least one must be true
```

---

# 4. NOT Operator `!`

`!` reverses a Boolean value.

```javascript
console.log(!true);
```

Output:

```text
false
```

And:

```javascript
console.log(!false);
```

Output:

```text
true
```

Simple:

```text
!true  → false
!false → true
```

---

# 5. Using Logical Operators with Conditions

Example:

```javascript
let age = 25;

if (age >= 18 && age <= 60) {
    console.log("Eligible");
}
```

Here:

```text
age >= 18 → true
age <= 60 → true
```

So:

```text
true && true → true
```

Output:

```text
Eligible
```

---

# 6. Combining Multiple Conditions

We can use more than one logical operator.

```javascript
let age = 25;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("Allowed");
}
```

Both conditions must be true.

---

# 7. Logical Operator with Non-Boolean Values

Logical operators can also work with other values, not just `true` and `false`.

For example:

```javascript
console.log("Hello" && 10);
```

Output:

```text
10
```

This behavior is related to JavaScript's **truthy and falsy values**.

For now, remember that logical operators do not always return `true` or `false` when used directly with non-Boolean values.

---

# 8. Short-Circuit Evaluation

JavaScript may stop evaluating a logical expression when the result is already known.

### With `&&`

If the first value is falsy:

```javascript
false && console.log("Hello");
```

The second part does not run.

### With `||`

If the first value is truthy:

```javascript
true || console.log("Hello");
```

The second part does not run.

This is called **short-circuit evaluation**.

---

# 9. Common Mistake

Do not confuse:

```text
&&
```

with:

```text
&
```

For normal logical conditions, use:

```javascript
&&
```

Similarly:

```text
||
```

is logical OR.

---

# Important Points

- `&&` means AND.
- `||` means OR.
- `!` means NOT.
- `&&` needs both conditions to be true.
- `||` needs at least one condition to be true.
- `!` reverses a Boolean value.
- Logical operators are commonly used with `if` conditions.
- Logical operators can also return non-Boolean values.
- Short-circuit evaluation can prevent unnecessary code from running.

---

# Quick Revision

```text
&& → AND → Both conditions must be true

|| → OR → At least one condition must be true

!  → NOT → Reverses true/false
```

Example:

```javascript
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("Allowed");
}
```

Remember:

```text
AND → Both
OR  → Any one
NOT → Reverse
```