# JavaScript Arithmetic Operators

## 1. What are Arithmetic Operators?

Arithmetic operators are used to perform **mathematical calculations** in JavaScript.

For example:

```javascript
let a = 10;
let b = 5;

console.log(a + b);
```

Output:

```text
15
```

---

# 2. Arithmetic Operators

JavaScript provides these common arithmetic operators:

| Operator | Name | Example | Result |
|---|---|---|---|
| `+` | Addition | `10 + 5` | `15` |
| `-` | Subtraction | `10 - 5` | `5` |
| `*` | Multiplication | `10 * 5` | `50` |
| `/` | Division | `10 / 5` | `2` |
| `%` | Modulus | `10 % 3` | `1` |
| `**` | Exponentiation | `2 ** 3` | `8` |

---

# 3. Addition `+`

Adds two values.

```javascript
let a = 10;
let b = 5;

console.log(a + b);
```

Output:

```text
15
```

### Important

`+` can also join strings.

```javascript
console.log("Hello " + "Rohit");
```

Output:

```text
Hello Rohit
```

---

# 4. Subtraction `-`

Subtracts one value from another.

```javascript
let a = 10;
let b = 5;

console.log(a - b);
```

Output:

```text
5
```

---

# 5. Multiplication `*`

Multiplies two values.

```javascript
let a = 10;
let b = 5;

console.log(a * b);
```

Output:

```text
50
```

---

# 6. Division `/`

Divides one value by another.

```javascript
let a = 10;
let b = 5;

console.log(a / b);
```

Output:

```text
2
```

JavaScript can also return decimal values:

```javascript
console.log(5 / 2);
```

Output:

```text
2.5
```

---

# 7. Modulus `%`

The modulus operator returns the **remainder** after division.

```javascript
console.log(10 % 3);
```

Output:

```text
1
```

Because:

```text
10 ÷ 3 = 3 remainder 1
```

### Common Use

Checking whether a number is even or odd:

```javascript
let number = 10;

console.log(number % 2);
```

Output:

```text
0
```

If the result is `0`, the number is even.

---

# 8. Exponentiation `**`

Used to calculate powers.

```javascript
console.log(2 ** 3);
```

Output:

```text
8
```

Because:

```text
2 × 2 × 2 = 8
```

Another example:

```javascript
console.log(5 ** 2);
```

Output:

```text
25
```

---

# 9. Arithmetic with Variables

We can perform calculations using variables.

```javascript
let a = 20;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
```

---

# 10. Increment `++`

The increment operator increases a value by `1`.

```javascript
let a = 5;

a++;

console.log(a);
```

Output:

```text
6
```

It is equivalent to:

```javascript
a = a + 1;
```

---

# 11. Decrement `--`

The decrement operator decreases a value by `1`.

```javascript
let a = 5;

a--;

console.log(a);
```

Output:

```text
4
```

It is equivalent to:

```javascript
a = a - 1;
```

---

# 12. Operator with Strings

The `+` operator behaves differently with strings.

```javascript
let a = "10";
let b = 5;

console.log(a + b);
```

Output:

```text
105
```

Because:

```text
"10" + 5
↓
"10" + "5"
↓
"105"
```

But:

```javascript
console.log("10" - 5);
```

Output:

```text
5
```

This happens because JavaScript performs type conversion.

---

# 13. Important Points

- `+` → Addition
- `-` → Subtraction
- `*` → Multiplication
- `/` → Division
- `%` → Remainder
- `**` → Power
- `++` → Increase by 1
- `--` → Decrease by 1
- `+` can also concatenate strings.

---

# Quick Revision

```text
10 + 5  → 15
10 - 5  → 5
10 * 5  → 50
10 / 5  → 2
10 % 3  → 1
2 ** 3  → 8
```

Remember:

```text
%  → Gives remainder
** → Calculates power
++ → Adds 1
-- → Subtracts 1
```