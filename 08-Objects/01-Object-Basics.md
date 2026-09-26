# JavaScript Object Basics

## 1. What is an Object?

An **object** is used to store related data and functionality together in **key-value pairs**.

Example:

```javascript
let student = {
    name: "Rohit",
    age: 23,
    course: "MCA"
};
```

Here:

```text
name   → key
"Rohit" → value

age    → key
23     → value
```

Simple:

```text
Object = Collection of related key-value pairs
```

---

# 2. Creating an Object

The most common way is using `{}`.

```javascript
let user = {
    name: "Rohit",
    age: 23,
    city: "Mohali"
};
```

Here:

```text
user → Object
name, age, city → Properties
```

---

# 3. Object Properties

The data stored inside an object is called a **property**.

```javascript
let student = {
    name: "Rohit",
    age: 23,
    course: "MCA"
};
```

Properties:

```text
name
age
course
```

---

# 4. Accessing Object Properties

There are two common ways.

## Dot Notation

```javascript
let student = {
    name: "Rohit",
    age: 23
};

console.log(student.name);
```

Output:

```text
Rohit
```

Another:

```javascript
console.log(student.age);
```

Output:

```text
23
```

---

# 5. Bracket Notation

You can also access properties using `[]`.

```javascript
let student = {
    name: "Rohit",
    age: 23
};

console.log(student["name"]);
console.log(student["age"]);
```

Output:

```text
Rohit
23
```

Both are valid:

```javascript
student.name;
student["name"];
```

---

# 6. Dot vs Bracket Notation

### Dot notation

```javascript
student.name;
```

### Bracket notation

```javascript
student["name"];
```

Bracket notation is especially useful when the property name is stored in a variable.

```javascript
let property = "name";

console.log(student[property]);
```

Output:

```text
Rohit
```

Don't write:

```javascript
student.property;
```

That looks for a property literally named `"property"`.

---

# 7. Adding a New Property

You can add properties after creating an object.

```javascript
let student = {
    name: "Rohit",
    age: 23
};

student.city = "Mohali";

console.log(student);
```

Now the object contains:

```text
name
age
city
```

---

# 8. Updating a Property

You can change an existing property.

```javascript
let student = {
    name: "Rohit",
    age: 23
};

student.age = 24;

console.log(student.age);
```

Output:

```text
24
```

---

# 9. Deleting a Property

Use the `delete` operator.

```javascript
let student = {
    name: "Rohit",
    age: 23,
    city: "Mohali"
};

delete student.city;

console.log(student);
```

Now `city` has been removed.

---

# 10. Object with Different Data Types

Object properties can contain different data types.

```javascript
let user = {
    name: "Rohit",
    age: 23,
    isStudent: true,
    skills: ["HTML", "CSS", "JavaScript"],
    address: null
};
```

Here:

```text
name      → String
age       → Number
isStudent → Boolean
skills    → Array
address   → null
```

---

# 11. Object with an Array

An object can contain an array.

```javascript
let student = {
    name: "Rohit",
    skills: ["HTML", "CSS", "JavaScript"]
};

console.log(student.skills);
```

Output:

```text
["HTML", "CSS", "JavaScript"]
```

Access an array element:

```javascript
console.log(student.skills[0]);
```

Output:

```text
HTML
```

---

# 12. Nested Objects

An object can contain another object.

```javascript
let student = {
    name: "Rohit",

    address: {
        city: "Mohali",
        state: "Punjab"
    }
};
```

Access nested properties:

```javascript
console.log(student.address.city);
```

Output:

```text
Mohali
```

Another:

```javascript
console.log(student.address.state);
```

Output:

```text
Punjab
```

---

# 13. Object Methods

A function stored inside an object is called a **method**.

```javascript
let user = {
    name: "Rohit",

    greet: function() {
        console.log("Hello");
    }
};

user.greet();
```

Output:

```text
Hello
```

We will study object methods in detail in:

```text
08-Objects/02-Object-Methods.md
```

---

# 14. Shorthand Property Names

If the variable name and property name are the same, you can use shorthand syntax.

Instead of:

```javascript
let name = "Rohit";
let age = 23;

let student = {
    name: name,
    age: age
};
```

You can write:

```javascript
let name = "Rohit";
let age = 23;

let student = {
    name,
    age
};
```

This is called **property shorthand**.

---

# 15. Checking if a Property Exists

You can use the `in` operator.

```javascript
let student = {
    name: "Rohit",
    age: 23
};

console.log("name" in student);
```

Output:

```text
true
```

And:

```javascript
console.log("city" in student);
```

Output:

```text
false
```

---

# 16. Object Keys

You can get all property names using `Object.keys()`.

```javascript
let student = {
    name: "Rohit",
    age: 23,
    city: "Mohali"
};

console.log(Object.keys(student));
```

Output:

```text
["name", "age", "city"]
```

---

# 17. Object Values

You can get all property values using `Object.values()`.

```javascript
console.log(Object.values(student));
```

Output:

```text
["Rohit", 23, "Mohali"]
```

---

# 18. Object Entries

`Object.entries()` returns key-value pairs as arrays.

```javascript
console.log(Object.entries(student));
```

Output:

```text
[
    ["name", "Rohit"],
    ["age", 23],
    ["city", "Mohali"]
]
```

---

# 19. Object with const

You will often see objects declared using `const`.

```javascript
const user = {
    name: "Rohit",
    age: 23
};
```

You can still change properties:

```javascript
user.age = 24;
```

This works.

But you cannot reassign the whole object:

```javascript
user = {
    name: "Aman"
};
```

❌ Error

Important:

```text
const object → Properties can usually be changed

const variable → Cannot be reassigned
```

---

# 20. Objects are Reference Types

Objects are stored and handled by reference.

Example:

```javascript
let user1 = {
    name: "Rohit"
};

let user2 = user1;

user2.name = "Aman";

console.log(user1.name);
```

Output:

```text
Aman
```

Why?

Both variables refer to the same object.

```text
user1 ──┐
        ↓
      Object
        ↑
user2 ──┘
```

This concept becomes important when working with objects and arrays.

---

# 21. Comparing Objects

Two separate objects with the same values are not considered equal using `===`.

```javascript
let user1 = {
    name: "Rohit"
};

let user2 = {
    name: "Rohit"
};

console.log(user1 === user2);
```

Output:

```text
false
```

Because they are two different object references.

But:

```javascript
let user1 = {
    name: "Rohit"
};

let user2 = user1;

console.log(user1 === user2);
```

Output:

```text
true
```

Because both refer to the same object.

---

# 22. Practical Example

Let's create a student object:

```javascript
let student = {
    name: "Rohit",
    age: 23,
    course: "MCA",
    skills: ["HTML", "CSS", "JavaScript"],

    address: {
        city: "Mohali",
        state: "Punjab"
    }
};
```

Access values:

```javascript
console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student.skills[0]);
console.log(student.address.city);
```

Output:

```text
Rohit
23
MCA
HTML
Mohali
```

---

# Important Points

- Objects store data in key-value pairs.
- Object properties are accessed using dot or bracket notation.
- New properties can be added.
- Existing properties can be updated.
- Properties can be deleted using `delete`.
- Objects can contain arrays and other objects.
- A function inside an object is called a method.
- `Object.keys()` returns keys.
- `Object.values()` returns values.
- `Object.entries()` returns key-value pairs.
- Objects are reference types.
- Two separate objects with identical contents are still different references.

---

# Quick Revision

### Create Object

```javascript
let user = {
    name: "Rohit",
    age: 23
};
```

### Access

```javascript
user.name;
user["name"];
```

### Add

```javascript
user.city = "Mohali";
```

### Update

```javascript
user.age = 24;
```

### Delete

```javascript
delete user.city;
```

### Keys

```javascript
Object.keys(user);
```

### Values

```javascript
Object.values(user);
```

### Entries

```javascript
Object.entries(user);
```

### Remember

```text
Object
  ↓
Key → Value

name → "Rohit"
age  → 23
```

**Next file:**

```text
08-Objects/02-Object-Methods/02-Object-Methods.md
```