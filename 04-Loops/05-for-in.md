# JavaScript for...in Loop

## 1. What is for...in?

`for...in` loop ka use kisi **object ki keys/properties** ko one by one access karne ke liye hota hai.

Simple rule:

```text
for...in → keys / property names
```

Example:

```javascript
let user = {
    name: "Rohit",
    age: 23,
    city: "Mohali"
};

for (let key in user) {
    console.log(key);
}
```

Output:

```text
name
age
city
```

---

# 2. Basic Syntax

```javascript
for (let key in object) {
    // code
}
```

Example:

```javascript
let person = {
    name: "Rohit",
    age: 23
};

for (let key in person) {
    console.log(key);
}
```

---

# 3. Accessing Values

`for...in` mein hume key milti hai.

Object:

```javascript
let person = {
    name: "Rohit",
    age: 23,
    city: "Mohali"
};
```

Agar values chahiye, to:

```javascript
for (let key in person) {
    console.log(person[key]);
}
```

Output:

```text
Rohit
23
Mohali
```

Yahan:

```javascript
person[key]
```

current key ki value access karta hai.

---

# 4. Key + Value Together

```javascript
let person = {
    name: "Rohit",
    age: 23,
    city: "Mohali"
};

for (let key in person) {
    console.log(key, person[key]);
}
```

Output:

```text
name Rohit
age 23
city Mohali
```

---

# 5. How It Works

Object:

```javascript
let user = {
    name: "Rohit",
    age: 23
};
```

Loop:

```javascript
for (let key in user) {
    console.log(key);
}
```

Execution:

```text
key = "name"
↓
key = "age"
```

Then values:

```javascript
user["name"] → "Rohit"
user["age"]  → 23
```

---

# 6. for...in with Array

`for...in` arrays par bhi work karta hai.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

for (let index in fruits) {
    console.log(index);
}
```

Output:

```text
0
1
2
```

Yahan indexes mil rahe hain.

Values chahiye:

```javascript
for (let index in fruits) {
    console.log(fruits[index]);
}
```

Output:

```text
Apple
Mango
Banana
```

However, arrays ke liye generally `for...of` better choice hota hai jab directly values chahiye.

---

# 7. for...in vs for...of

This is very important.

### for...in

Keys/indexes deta hai:

```javascript
let fruits = ["Apple", "Mango"];

for (let index in fruits) {
    console.log(index);
}
```

Output:

```text
0
1
```

### for...of

Values deta hai:

```javascript
for (let fruit of fruits) {
    console.log(fruit);
}
```

Output:

```text
Apple
Mango
```

Remember:

```text
for...in → keys / indexes
for...of → values
```

---

# 8. Object.keys()

Object ki keys ko array ke form mein bhi get kar sakte hain.

```javascript
let user = {
    name: "Rohit",
    age: 23
};

console.log(Object.keys(user));
```

Output:

```text
["name", "age"]
```

Then:

```javascript
for (let key of Object.keys(user)) {
    console.log(key);
}
```

---

# 9. Object.values()

Object ki values:

```javascript
let user = {
    name: "Rohit",
    age: 23
};

console.log(Object.values(user));
```

Output:

```text
["Rohit", 23]
```

---

# 10. Object.entries()

`Object.entries()` key aur value dono ko pairs ke form mein deta hai.

```javascript
let user = {
    name: "Rohit",
    age: 23
};

console.log(Object.entries(user));
```

Output:

```text
[
    ["name", "Rohit"],
    ["age", 23]
]
```

Using `for...of`:

```javascript
for (let [key, value] of Object.entries(user)) {
    console.log(key, value);
}
```

Output:

```text
name Rohit
age 23
```

---

# 11. Practical Example

Suppose we have:

```javascript
let student = {
    name: "Rohit",
    age: 23,
    course: "MCA",
    city: "Mohali"
};
```

Print all information:

```javascript
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}
```

Output:

```text
name: Rohit
age: 23
course: MCA
city: Mohali
```

---

# 12. Common Mistake

Don't write:

```javascript
console.log(user.key);
```

when `key` is a variable.

Example:

```javascript
let user = {
    name: "Rohit",
    age: 23
};

for (let key in user) {
    console.log(user.key);
}
```

This looks for a property literally named `"key"`.

Instead use:

```javascript
console.log(user[key]);
```

Because `key` contains the actual property name.

---

# 13. When to Use for...in?

Use `for...in` mainly when:

- Working with object properties
- You need object keys
- You want to access key/value pairs

Example:

```javascript
for (let key in user) {
    console.log(key, user[key]);
}
```

---

# Important Points

- `for...in` iterates over property keys.
- It is mainly used with objects.
- With arrays, it gives indexes.
- Use `object[key]` to access the value.
- `for...of` gives values.
- `for...in` gives keys/indexes.
- For arrays, prefer `for...of` when you need values.

---

# Quick Revision

### Object

```javascript
let user = {
    name: "Rohit",
    age: 23
};

for (let key in user) {
    console.log(key);
}
```

Output:

```text
name
age
```

Values:

```javascript
for (let key in user) {
    console.log(user[key]);
}
```

Output:

```text
Rohit
23
```

### Remember

```text
for...in  → keys
for...of  → values
```

Example:

```text
Object:
name → Rohit
age  → 23

for...in
↓
name
age

for...of
↓
Rohit
23
```