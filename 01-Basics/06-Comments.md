# JavaScript Comments

## 1. What are Comments?

Comments are **notes written inside code** to explain what the code does.

JavaScript **does not execute comments**.

Example:

```javascript
// This prints Hello World
console.log("Hello World");
```

The comment is ignored by JavaScript.

---

## 2. Why Use Comments?

Comments are useful for:

- Explaining code
- Making code easier to understand
- Remembering what a section does
- Temporarily disabling code
- Helping other developers understand your code

---

# 3. Single-Line Comment

A single-line comment starts with:

```text
//
```

Example:

```javascript
// This is a comment

console.log("Hello");
```

Everything after `//` on that line is treated as a comment.

---

## 4. Comment After Code

You can also write a comment after a line of code.

```javascript
let age = 23; // User's age
```

Here:

```text
let age = 23;
```

is the actual code.

```text
// User's age
```

is the comment.

---

# 5. Multi-Line Comment

For comments that cover multiple lines, use:

```text
/*
   comment
*/
```

Example:

```javascript
/*
This is a
multi-line comment.
*/

console.log("Hello");
```

Everything between `/*` and `*/` is ignored.

---

# 6. Single-Line vs Multi-Line

| Type | Syntax | Use |
|---|---|---|
| Single-line | `//` | One line |
| Multi-line | `/* */` | Multiple lines |

Example:

```javascript
// Single-line comment

/*
Multi-line
comment
*/
```

---

# 7. Using Comments to Disable Code

Comments can temporarily disable a line of code.

Example:

```javascript
console.log("Hello");

// console.log("This will not run");

console.log("JavaScript");
```

Output:

```text
Hello
JavaScript
```

The commented line is not executed.

---

# 8. Comments in Practice

Good comments explain **why** something is being done when the reason is not obvious.

Example:

```javascript
// Convert user input from string to number
let age = Number(prompt("Enter your age:"));
```

Avoid unnecessary comments like:

```javascript
// Create a variable called age
let age = 23;
```

The code is already clear.

---

# 9. Important Points

- Comments are ignored by JavaScript.
- `//` is used for single-line comments.
- `/* */` is used for multi-line comments.
- Comments help make code easier to understand.
- Comments can temporarily disable code.
- Avoid writing unnecessary comments.

---

# Quick Revision

```text
Single-line:
//

Multi-line:
/*
*/

Comments:
→ Explain code
→ Improve readability
→ Are not executed
```

### Example

```javascript
// Print a message
console.log("Hello");

/*
This is a
multi-line comment
*/
```