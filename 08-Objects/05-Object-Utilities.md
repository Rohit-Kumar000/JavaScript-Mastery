# JavaScript Object Utilities

## 1. Object.keys()

`Object.keys()` object ki **all property names (keys)** ko ek array mein return karta hai.

```javascript
let user = {
    name: "Rohit",
    age: 23,
    city: "Mohali"
};

console.log(Object.keys(user));
```

Output:

```text
["name", "age", "city"]
```

---

# 2. Object.values()

`Object.values()` object ki **all values** ko ek array mein return karta hai.

```javascript
console.log(Object.values(user));
```

Output:

```text
["Rohit", 23, "Mohali"]
```

---

# 3. Object.entries()

`Object.entries()` object ke **key-value pairs** ko arrays ke form mein return karta hai.

```javascript
console.log(Object.entries(user));
```

Output:

```text
[
    ["name", "Rohit"],
    ["age", 23],
    ["city", "Mohali"]
]
```

Simple:

```text
Object.keys()    → Keys
Object.values()  → Values
Object.entries() → Key + Value
```

---

# 4. Object.hasOwn()

Check karta hai ki given property object ke andar directly exist karti hai ya nahi.

```javascript
let user = {
    name: "Rohit",
    age: 23
};

console.log(Object.hasOwn(user, "name"));
```

Output:

```text
true
```

```javascript
console.log(Object.hasOwn(user, "city"));
```

Output:

```text
false
```

---

# 5. `in` Operator

Property existence check karne ke liye `in` bhi use kar sakte ho.

```javascript
console.log("name" in user);
```

Output:

```text
true
```

```javascript
console.log("city" in user);
```

Output:

```text
false
```

Basic difference:

```text
Object.hasOwn()
→ Property object ki own property hai ya nahi

in
→ Property object ya uski prototype chain mein available hai ya nahi
```

Beginner level par `Object.hasOwn()` ko own-property check ke liye prefer kar sakte ho.

---

# 6. Object.assign()

`Object.assign()` properties ko ek object se doosre object mein copy karta hai.

```javascript
let user = {
    name: "Rohit"
};

let details = {
    age: 23
};

let result = Object.assign({}, user, details);

console.log(result);
```

Output:

```text
{
    name: "Rohit",
    age: 23
}
```

---

# 7. Object.assign() for Updating

```javascript
let user = {
    name: "Rohit",
    age: 23
};

Object.assign(user, {
    age: 24,
    city: "Mohali"
});

console.log(user);
```

Output:

```text
{
    name: "Rohit",
    age: 24,
    city: "Mohali"
}
```

The existing object is modified here.

---

# 8. Spread vs Object.assign()

Both can be used to combine objects.

### Spread

```javascript
let result = {
    ...user,
    ...details
};
```

### Object.assign()

```javascript
let result = Object.assign({}, user, details);
```

For modern JavaScript, object spread is often easier to read.

---

# 9. Object.freeze()

`Object.freeze()` makes an object non-modifiable.

```javascript
let user = {
    name: "Rohit",
    age: 23
};

Object.freeze(user);

user.age = 24;

console.log(user.age);
```

The object remains unchanged.

```text
23
```

It also prevents:

```text
Adding properties
Deleting properties
Changing existing properties
```

---

# 10. Object.seal()

`Object.seal()` prevents adding and deleting properties.

But existing properties can still be changed.

```javascript
let user = {
    name: "Rohit",
    age: 23
};

Object.seal(user);

user.age = 24;
```

This is allowed.

But:

```javascript
user.city = "Mohali";
```

is not allowed.

And:

```javascript
delete user.age;
```

is not allowed.

---

# 11. Object.freeze() vs Object.seal()

```text
freeze()
→ Add     ❌
→ Delete  ❌
→ Update  ❌

seal()
→ Add     ❌
→ Delete  ❌
→ Update  ✅
```

---

# 12. Object.fromEntries()

`Object.fromEntries()` converts key-value pairs into an object.

Example:

```javascript
let entries = [
    ["name", "Rohit"],
    ["age", 23]
];

let user = Object.fromEntries(entries);

console.log(user);
```

Output:

```text
{
    name: "Rohit",
    age: 23
}
```

---

# 13. Object.entries() + Object.fromEntries()

These two methods can work together.

```javascript
let user = {
    name: "Rohit",
    age: 23
};

let entries = Object.entries(user);

let newUser = Object.fromEntries(entries);

console.log(newUser);
```

This converts:

```text
Object
  ↓
Object.entries()
  ↓
Array of key-value pairs
  ↓
Object.fromEntries()
  ↓
Object
```

---

# 14. Looping Through an Object

You can use `for...of` with `Object.entries()`.

```javascript
let user = {
    name: "Rohit",
    age: 23,
    city: "Mohali"
};

for (let [key, value] of Object.entries(user)) {
    console.log(key, value);
}
```

Output:

```text
name Rohit
age 23
city Mohali
```

This is a very useful pattern.

---

# 15. Looping Through Object Keys

```javascript
let user = {
    name: "Rohit",
    age: 23,
    city: "Mohali"
};

for (let key of Object.keys(user)) {
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

# 16. Looping Through Object Values

```javascript
for (let value of Object.values(user)) {
    console.log(value);
}
```

Output:

```text
Rohit
23
Mohali
```

---

# 17. Copying an Object

You can make a shallow copy using spread.

```javascript
let user = {
    name: "Rohit",
    age: 23
};

let copy = {
    ...user
};

console.log(copy);
```

Now `copy` is a separate object.

```text
user !== copy
```

---

# 18. Important: Shallow Copy

Spread creates a **shallow copy**.

Example:

```javascript
let user = {
    name: "Rohit",

    address: {
        city: "Mohali"
    }
};

let copy = {
    ...user
};

copy.address.city = "Chandigarh";

console.log(user.address.city);
```

Output:

```text
Chandigarh
```

Why?

The outer object was copied, but the nested `address` object is still shared.

This concept becomes important later when working with references and deep cloning.

---

# 19. Deep Copy with structuredClone()

Modern JavaScript provides `structuredClone()` for many common data structures.

```javascript
let user = {
    name: "Rohit",

    address: {
        city: "Mohali"
    }
};

let copy = structuredClone(user);

copy.address.city = "Chandigarh";

console.log(user.address.city);
```

Output:

```text
Mohali
```

Now the nested object is also copied.

Note:

> `structuredClone()` supports many common JavaScript values, but not every possible JavaScript object or special value. It is not a universal solution for every cloning situation.

---

# 20. Practical Example

Let's combine what we learned:

```javascript
let student = {
    name: "Rohit",
    age: 23,
    course: "MCA",
    city: "Mohali"
};

console.log(Object.keys(student));

console.log(Object.values(student));

console.log(Object.entries(student));

console.log(Object.hasOwn(student, "name"));

for (let [key, value] of Object.entries(student)) {
    console.log(`${key}: ${value}`);
}
```

Output:

```text
name
age
course
city

Rohit
23
MCA
Mohali

name, Rohit
age, 23
course, MCA
city, Mohali

true
```

---

# Important Points

- `Object.keys()` → returns keys.
- `Object.values()` → returns values.
- `Object.entries()` → returns key-value pairs.
- `Object.hasOwn()` → checks an object's own property.
- `Object.assign()` → copies/merges properties.
- `Object.freeze()` → prevents changes.
- `Object.seal()` → prevents adding/deleting but allows updating existing properties.
- `Object.fromEntries()` → converts key-value pairs into an object.
- `for...of + Object.entries()` → useful for looping through objects.
- Spread creates a shallow copy.
- `structuredClone()` can create a deep copy for many supported values.

---

# Quick Revision

```javascript
Object.keys(user);
```

```text
Keys
```

```javascript
Object.values(user);
```

```text
Values
```

```javascript
Object.entries(user);
```

```text
Key + Value
```

```javascript
Object.hasOwn(user, "name");
```

```text
true / false
```

```javascript
let copy = { ...user };
```

```text
Shallow Copy
```

```javascript
let copy = structuredClone(user);
```

```text
Deep Copy for supported values
```

### Remember

```text
Object.keys()       → What are the keys?
Object.values()     → What are the values?
Object.entries()    → What are the pairs?
Object.hasOwn()     → Does it own this property?
Object.assign()     → Copy / merge
Object.freeze()     → Nothing can change
Object.seal()       → No add/delete
```

**`08-Objects` complete ✅**

Next folder:

```text
09-Scope-and-Hoisting
```

First file:

```text
01-Scope.md
```