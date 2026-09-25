# JavaScript String Methods

String methods are built-in functions that help us **work with and modify strings**.

Example:

```javascript
let name = "Rohit";

console.log(name.toUpperCase());
```

Output:

```text
ROHIT
```

---

# 1. toUpperCase()

Converts a string into uppercase letters.

```javascript
let name = "Rohit";

console.log(name.toUpperCase());
```

Output:

```text
ROHIT
```

---

# 2. toLowerCase()

Converts a string into lowercase letters.

```javascript
let name = "ROHIT";

console.log(name.toLowerCase());
```

Output:

```text
rohit
```

---

# 3. trim()

Removes spaces from the **beginning and end** of a string.

```javascript
let name = "   Rohit   ";

console.log(name.trim());
```

Output:

```text
Rohit
```

Important:

```javascript
let name = "   Rohit Kumar   ";

console.log(name.trim());
```

It removes outside spaces, but not the space between:

```text
Rohit Kumar
```

---

# 4. includes()

Checks whether a string contains a particular value.

Returns `true` or `false`.

```javascript
let message = "I am learning JavaScript";

console.log(message.includes("JavaScript"));
```

Output:

```text
true
```

Example:

```javascript
console.log(message.includes("Python"));
```

Output:

```text
false
```

---

# 5. startsWith()

Checks whether a string starts with a particular value.

```javascript
let name = "Rohit";

console.log(name.startsWith("Ro"));
```

Output:

```text
true
```

```javascript
console.log(name.startsWith("hi"));
```

Output:

```text
false
```

---

# 6. endsWith()

Checks whether a string ends with a particular value.

```javascript
let name = "Rohit";

console.log(name.endsWith("it"));
```

Output:

```text
true
```

---

# 7. charAt()

Returns the character at a specific index.

```javascript
let name = "Rohit";

console.log(name.charAt(0));
```

Output:

```text
R
```

Another example:

```javascript
console.log(name.charAt(3));
```

Output:

```text
i
```

---

# 8. indexOf()

Returns the index of the first occurrence of a value.

```javascript
let name = "Rohit";

console.log(name.indexOf("o"));
```

Output:

```text
1
```

Example:

```javascript
let text = "Hello World";

console.log(text.indexOf("World"));
```

Output:

```text
6
```

If the value is not found:

```javascript
console.log(text.indexOf("JavaScript"));
```

Output:

```text
-1
```

Remember:

```text
Found     → index
Not found → -1
```

---

# 9. lastIndexOf()

Returns the index of the **last occurrence** of a value.

```javascript
let text = "hello hello";

console.log(text.lastIndexOf("hello"));
```

Output:

```text
6
```

Difference:

```text
indexOf()       → first occurrence
lastIndexOf()   → last occurrence
```

---

# 10. slice()

`slice()` extracts a part of a string.

Syntax:

```javascript
string.slice(start, end)
```

Example:

```javascript
let name = "JavaScript";

console.log(name.slice(0, 4));
```

Output:

```text
Java
```

Important:

The `end` index is **not included**.

```text
J a v a S c r i p t
0 1 2 3 4 5 6 7 8 9
```

```javascript
name.slice(0, 4);
```

means:

```text
index 0 → included
index 1 → included
index 2 → included
index 3 → included
index 4 → not included
```

---

# 11. slice() with One Argument

```javascript
let name = "JavaScript";

console.log(name.slice(4));
```

Output:

```text
Script
```

It starts from index `4` and goes to the end.

---

# 12. Negative Index with slice()

Negative indexes count from the end.

```javascript
let name = "JavaScript";

console.log(name.slice(-6));
```

Output:

```text
Script
```

Useful when you want to work from the end of a string.

---

# 13. substring()

`substring()` also extracts part of a string.

```javascript
let name = "JavaScript";

console.log(name.substring(0, 4));
```

Output:

```text
Java
```

Basic use is similar to `slice()`.

For beginner code, `slice()` is often easier to remember because it also supports negative indexes.

---

# 14. replace()

Replaces the **first matching occurrence**.

```javascript
let message = "I like JavaScript";

let result = message.replace("JavaScript", "Python");

console.log(result);
```

Output:

```text
I like Python
```

The original string is not changed.

---

# 15. replaceAll()

Replaces **all matching occurrences**.

```javascript
let message = "JavaScript is great. I like JavaScript.";

let result = message.replaceAll("JavaScript", "JS");

console.log(result);
```

Output:

```text
JS is great. I like JS.
```

---

# 16. split()

`split()` converts a string into an array.

Example:

```javascript
let fruits = "Apple,Mango,Banana";

console.log(fruits.split(","));
```

Output:

```text
["Apple", "Mango", "Banana"]
```

The value inside `split()` tells JavaScript where to separate the string.

---

# 17. split() with Space

```javascript
let name = "Rohit Kumar";

console.log(name.split(" "));
```

Output:

```text
["Rohit", "Kumar"]
```

---

# 18. repeat()

Repeats a string a specified number of times.

```javascript
let word = "Hi ";

console.log(word.repeat(3));
```

Output:

```text
Hi Hi Hi
```

---

# 19. concat()

Combines strings.

```javascript
let firstName = "Rohit";
let lastName = "Kumar";

let fullName = firstName.concat(" ", lastName);

console.log(fullName);
```

Output:

```text
Rohit Kumar
```

Although `concat()` exists, using `+` or template literals is often simpler:

```javascript
let fullName = `${firstName} ${lastName}`;
```

---

# 20. padStart()

Adds characters to the beginning until the string reaches a specified length.

```javascript
let number = "5";

console.log(number.padStart(3, "0"));
```

Output:

```text
005
```

---

# 21. padEnd()

Adds characters to the end until the string reaches a specified length.

```javascript
let number = "5";

console.log(number.padEnd(3, "0"));
```

Output:

```text
500
```

---

# 22. String Method Chaining

Multiple methods can be used together.

Example:

```javascript
let name = "   rohit   ";

let result = name.trim().toUpperCase();

console.log(result);
```

Output:

```text
ROHIT
```

Execution:

```text
"   rohit   "
       ↓
    trim()
       ↓
   "rohit"
       ↓
 toUpperCase()
       ↓
   "ROHIT"
```

---

# 23. Methods Do Not Usually Change the Original String

Remember that strings are immutable.

Example:

```javascript
let name = "rohit";

name.toUpperCase();

console.log(name);
```

Output:

```text
rohit
```

Why?

Because `toUpperCase()` returns a new string.

Correct:

```javascript
let name = "rohit";

name = name.toUpperCase();

console.log(name);
```

Output:

```text
ROHIT
```

---

# Important String Methods

| Method | Use |
|---|---|
| `toUpperCase()` | Uppercase |
| `toLowerCase()` | Lowercase |
| `trim()` | Remove outside spaces |
| `includes()` | Check if value exists |
| `startsWith()` | Check beginning |
| `endsWith()` | Check ending |
| `charAt()` | Get character |
| `indexOf()` | Find first index |
| `lastIndexOf()` | Find last index |
| `slice()` | Extract part |
| `substring()` | Extract part |
| `replace()` | Replace first match |
| `replaceAll()` | Replace all matches |
| `split()` | String → Array |
| `repeat()` | Repeat string |
| `concat()` | Join strings |
| `padStart()` | Add characters at start |
| `padEnd()` | Add characters at end |

---

# Quick Revision

```javascript
let text = "  JavaScript  ";

text.toUpperCase();
text.toLowerCase();
text.trim();

text.includes("Java");
text.startsWith("Java");
text.endsWith("Script");

text.indexOf("Java");
text.slice(0, 4);

text.replace("JavaScript", "JS");

text.split(" ");
```

Remember:

```text
toUpperCase() → CAPITAL
toLowerCase() → lowercase
trim()        → Remove outside spaces
includes()    → Check value
indexOf()     → Find index
slice()       → Extract
replace()     → Replace
split()       → String → Array
```