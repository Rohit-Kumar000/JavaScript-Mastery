# JavaScript Assignment Operators

## 1. What are Assignment Operators?

Assignment operators are used to **assign a value to a variable**.

The basic assignment operator is:

```javascript
=
```

Example:

```javascript
let age = 23;
```

Here, `23` is assigned to `age`.

---

# 2. Basic Assignment `=`

```javascript
let a = 10;
```

This means:

```text
a → 10
```

We can change the value:

```javascript
a = 20;
```

Now:

```text
a → 20
```

---

# 3. Addition Assignment `+=`

```javascript
let a = 10;

a += 5;

console.log(a);
```

Output:

```text
15
```

It is the same as:

```javascript
a = a + 5;
```

---

# 4. Subtraction Assignment `-=`

```javascript
let a = 10;

a -= 5;

console.log(a);
```

Output:

```text
5
```

Same as:

```javascript
a = a - 5;
```

---

# 5. Multiplication Assignment `*=`

```javascript
let a = 10;

a *= 5;

console.log(a);
```

Output:

```text
50
```

Same as:

```javascript
a = a * 5;
```

---

# 6. Division Assignment `/=`

```javascript
let a = 10;

a /= 2;

console.log(a);
```

Output:

```text
5
```

Same as:

```javascript
a = a / 2;
```

---

# 7. Modulus Assignment `%=`

```javascript
let a = 10;

a %= 3;

console.log(a);
```

Output:

```text
1
```

Same as:

```javascript
a = a % 3;
```

---

# 8. Exponentiation Assignment `**=`

```javascript
let a = 2;

a **= 3;

console.log(a);
```

Output:

```text
8
```

Same as:

```javascript
a = a ** 3;
```

---

# 9. Assignment Operators Table

| Operator | Meaning | Example | Same As |
|---|---|---|---|
| `=` | Assign | `a = 10` | `a = 10` |
| `+=` | Add and assign | `a += 5` | `a = a + 5` |
| `-=` | Subtract and assign | `a -= 5` | `a = a - 5` |
| `*=` | Multiply and assign | `a *= 5` | `a = a * 5` |
| `/=` | Divide and assign | `a /= 5` | `a = a / 5` |
| `%=` | Remainder and assign | `a %= 5` | `a = a % 5` |
| `**=` | Power and assign | `a **= 2` | `a = a ** 2` |

---

# 10. Example Using Multiple Operators

```javascript
let marks = 50;

marks += 10;
console.log(marks); // 60

marks -= 5;
console.log(marks); // 55

marks *= 2;
console.log(marks); // 110

marks /= 10;
console.log(marks); // 11
```

The variable is updated after each operation.

---

# Important Points

- `=` assigns a value.
- `+=` adds and assigns.
- `-=` subtracts and assigns.
- `*=` multiplies and assigns.
- `/=` divides and assigns.
- `%=` gets the remainder and assigns it.
- `**=` calculates the power and assigns it.

### Quick Revision

```text
a = 10

a += 5   → a = a + 5
a -= 5   → a = a - 5
a *= 5   → a = a * 5
a /= 5   → a = a / 5
a %= 5   → a = a % 5
a **= 2  → a = a ** 2
```