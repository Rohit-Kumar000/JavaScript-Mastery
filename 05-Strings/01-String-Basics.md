# JavaScript String Basics

## 1. What is a String?

A **String** is a sequence of characters used to store text.

Examples:

```javascript
let name = "Rohit";
let city = "Mohali";
let message = "Hello World";
```

String ke andar:

- Letters
- Numbers
- Spaces
- Special characters

store kar sakte hain.

---

# 2. Creating a String

JavaScript mein strings ko mainly three ways se likh sakte hain.

### Double Quotes

```javascript
let name = "Rohit";
```

### Single Quotes

```javascript
let name = 'Rohit';
```

### Backticks

```javascript
let name = `Rohit`;
```

Teeno valid hain.

---

# 3. String with Numbers

Agar number quotes ke andar hai, to wo **string** hai.

```javascript
let age = "23";
```

Yahan `23` ek string hai.

```javascript
let age = 23;
```

Yahan `23` ek number hai.

Difference:

```javascript
typeof "23"; // string
typeof 23;   // number
```

---

# 4. String Length

String ki length jaanne ke liye `.length` use karte hain.

```javascript
let name = "Rohit";

console.log(name.length);
```

Output:

```text
5
```

Because:

```text
R → 1
o → 2
h → 3
i → 4
t → 5
```

---

# 5. String Index

String ke har character ka ek index hota hai.

Example:

```javascript
let name = "Rohit";
```

Index:

```text
R → 0
o → 1
h → 2
i → 3
t → 4
```

Important:

> JavaScript indexing `0` se start hoti hai.

---

# 6. Accessing Characters

Index use karke character access kar sakte hain.

```javascript
let name = "Rohit";

console.log(name[0]);
```

Output:

```text
R
```

Other examples:

```javascript
console.log(name[1]); // o
console.log(name[2]); // h
console.log(name[4]); // t
```

---

# 7. Last Character

Last character access karne ke liye:

```javascript
let name = "Rohit";

console.log(name[name.length - 1]);
```

Output:

```text
t
```

Because:

```text
length = 5
last index = 5 - 1 = 4
```

---

# 8. String Concatenation

Do ya more strings ko combine karna **concatenation** kehlata hai.

Using `+`:

```javascript
let firstName = "Rohit";
let lastName = "Kumar";

let fullName = firstName + " " + lastName;

console.log(fullName);
```

Output:

```text
Rohit Kumar
```

---

# 9. Concatenation with Numbers

```javascript
let name = "Rohit";
let age = 23;

console.log(name + age);
```

Output:

```text
Rohit23
```

Because `+` with a string performs string concatenation.

Example:

```javascript
console.log("Age: " + age);
```

Output:

```text
Age: 23
```

---

# 10. Strings with Special Characters

Some characters have special meaning inside strings.

Example:

```javascript
let message = "He said \"Hello\"";
```

Output:

```text
He said "Hello"
```

Here:

```text
\"
```

allows us to use double quotes inside a double-quoted string.

---

# 11. Common Escape Characters

### New Line

```javascript
console.log("Hello\nWorld");
```

Output:

```text
Hello
World
```

### Tab

```javascript
console.log("Hello\tWorld");
```

### Backslash

```javascript
console.log("C:\\Users\\Rohit");
```

---

# 12. Single Quotes Inside String

You can use double quotes outside:

```javascript
let message = "I'm learning JavaScript";
```

Or escape the single quote:

```javascript
let message = 'I\'m learning JavaScript';
```

Both work.

---

# 13. String Immutability

JavaScript strings are **immutable**.

This means you cannot directly change an individual character.

Example:

```javascript
let name = "Rohit";

name[0] = "M";

console.log(name);
```

Output remains:

```text
Rohit
```

Instead, create a new string:

```javascript
let name = "Rohit";

name = "Mohit";

console.log(name);
```

Output:

```text
Mohit
```

---

# 14. Comparing Strings

Strings can be compared using comparison operators.

```javascript
console.log("Rohit" === "Rohit");
```

Output:

```text
true
```

Different strings:

```javascript
console.log("Rohit" === "Aman");
```

Output:

```text
false
```

---

# 15. String Comparison is Case-Sensitive

```javascript
console.log("Hello" === "hello");
```

Output:

```text
false
```

Because:

```text
H ≠ h
```

JavaScript mein uppercase aur lowercase characters different hote hain.

---

# 16. Empty String

An empty string contains no characters.

```javascript
let name = "";

console.log(name.length);
```

Output:

```text
0
```

An empty string is also **falsy**:

```javascript
if ("") {
    console.log("True");
} else {
    console.log("False");
}
```

Output:

```text
False
```

---

# 17. Strings and typeof

```javascript
let name = "Rohit";

console.log(typeof name);
```

Output:

```text
string
```

Remember:

```javascript
typeof "Hello"; // string
```

---

# 18. Multiline Strings

Backticks allow multiline strings.

```javascript
let message = `Hello
My name is Rohit
I am learning JavaScript`;

console.log(message);
```

Output:

```text
Hello
My name is Rohit
I am learning JavaScript
```

---

# 19. Template Literals

Backticks are also called **template literals**.

They allow us to easily insert variables into strings.

```javascript
let name = "Rohit";
let age = 23;

console.log(`My name is ${name} and I am ${age} years old.`);
```

Output:

```text
My name is Rohit and I am 23 years old.
```

We'll study template literals in more detail in:

```text
03-Template-Literals.md
```

---

# 20. Loop Through a String

Strings are iterable.

```javascript
let name = "Rohit";

for (let character of name) {
    console.log(character);
}
```

Output:

```text
R
o
h
i
t
```

---

# Important Points

- String is used to store text.
- Strings can use `" "`, `' '`, or `` ` ` ``.
- String indexing starts from `0`.
- `.length` gives the number of characters.
- Strings are immutable.
- String comparison is case-sensitive.
- Empty string `""` has length `0`.
- Strings can be combined using `+`.
- Strings can be iterated using `for...of`.
- Backticks create template literals.

---

# Quick Revision

```javascript
let name = "Rohit";
```

```text
Rohit
 ↓
R = index 0
o = index 1
h = index 2
i = index 3
t = index 4
```

```javascript
console.log(name.length); // 5
console.log(name[0]);     // R
console.log(name[4]);     // t
console.log(typeof name); // string
```

### Remember

```text
String = Text

.length = Number of characters

[index] = Access a character

+ = Join strings

" " / ' ' / ` ` = Create strings
```