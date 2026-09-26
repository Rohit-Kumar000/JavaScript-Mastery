# JavaScript Object Methods

## 1. What is an Object Method?

When a **function is stored inside an object**, it is called an **object method**.

Example:

```javascript
let user = {
    name: "Rohit",

    greet: function() {
        console.log("Hello Rohit");
    }
};
```

Here:

```text
name  → Property
greet → Method
```

Call the method:

```javascript
user.greet();
```

Output:

```text
Hello Rohit
```

Simple:

```text
Property → Stores data
Method   → Performs an action
```

---

# 2. Basic Object Method Syntax

```javascript
let object = {
    methodName: function() {
        // code
    }
};
```

Example:

```javascript
let user = {
    name: "Rohit",

    greet: function() {
        console.log("Hello");
    }
};

user.greet();
```

---

# 3. Method Shorthand

Modern JavaScript provides a shorter way to create methods.

Instead of:

```javascript
let user = {
    greet: function() {
        console.log("Hello");
    }
};
```

You can write:

```javascript
let user = {
    greet() {
        console.log("Hello");
    }
};
```

Both are valid.

The shorthand form is commonly used in modern JavaScript.

---

# 4. Method with Parameters

Object methods can have parameters.

```javascript
let calculator = {

    add(a, b) {
        console.log(a + b);
    }
};

calculator.add(10, 20);
```

Output:

```text
30
```

---

# 5. Method with return

A method can return a value.

```javascript
let calculator = {

    add(a, b) {
        return a + b;
    }
};

let result = calculator.add(10, 20);

console.log(result);
```

Output:

```text
30
```

---

# 6. Using Object Properties Inside a Method

An object method can access other properties of the same object.

```javascript
let user = {

    name: "Rohit",

    greet() {
        console.log(`Hello ${this.name}`);
    }
};

user.greet();
```

Output:

```text
Hello Rohit
```

Here:

```javascript
this.name
```

refers to the `name` property of the object when the method is called as `user.greet()`.

The `this` keyword will be explained in detail in the next file.

---

# 7. Practical Example

```javascript
let student = {

    name: "Rohit",
    course: "MCA",

    introduce() {
        console.log(`My name is ${this.name}`);
        console.log(`I am studying ${this.course}`);
    }
};

student.introduce();
```

Output:

```text
My name is Rohit
I am studying MCA
```

---

# 8. Multiple Methods

An object can contain multiple methods.

```javascript
let calculator = {

    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply(a, b) {
        return a * b;
    },

    divide(a, b) {
        return a / b;
    }
};

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));
```

Output:

```text
15
5
50
2
```

---

# 9. Adding a Method Later

You can also add a method after creating an object.

```javascript
let user = {
    name: "Rohit"
};

user.greet = function() {
    console.log(`Hello ${this.name}`);
};

user.greet();
```

Output:

```text
Hello Rohit
```

---

# 10. Arrow Function as an Object Method

You technically can store an arrow function as an object property:

```javascript
let user = {
    name: "Rohit",

    greet: () => {
        console.log("Hello");
    }
};

user.greet();
```

This works if you don't need the method's own `this`.

But be careful with:

```javascript
let user = {
    name: "Rohit",

    greet: () => {
        console.log(this.name);
    }
};
```

Here `this` does **not** refer to `user`, because arrow functions do not have their own `this`.

For object methods that need `this`, prefer method syntax:

```javascript
let user = {
    name: "Rohit",

    greet() {
        console.log(this.name);
    }
};
```

---

# 11. Method vs Function

A function:

```javascript
function greet() {
    console.log("Hello");
}
```

An object method:

```javascript
let user = {
    greet() {
        console.log("Hello");
    }
};
```

The main difference is how the function is organized and accessed.

```text
Function:
greet();

Object Method:
user.greet();
```

---

# 12. Built-in Object Methods

JavaScript also provides many built-in methods for objects.

### Object.keys()

Returns all keys:

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

### Object.values()

Returns all values:

```javascript
console.log(Object.values(user));
```

Output:

```text
["Rohit", 23]
```

### Object.entries()

Returns key-value pairs:

```javascript
console.log(Object.entries(user));
```

Output:

```text
[
    ["name", "Rohit"],
    ["age", 23]
]
```

---

# 13. Object.hasOwn()

You can check whether an object directly contains a particular property.

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

And:

```javascript
console.log(Object.hasOwn(user, "city"));
```

Output:

```text
false
```

---

# 14. Object.assign()

`Object.assign()` can copy properties from one or more objects into another object.

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

Modern code often uses object spread for this:

```javascript
let result = {
    ...user,
    ...details
};
```

---

# 15. Object.freeze()

`Object.freeze()` prevents changes to an object.

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

It also prevents adding and deleting properties.

---

# 16. Object.seal()

`Object.seal()` prevents adding and deleting properties, but existing properties can generally still be modified.

```javascript
let user = {
    name: "Rohit",
    age: 23
};

Object.seal(user);

user.age = 24;
```

This change is allowed.

But:

```javascript
user.city = "Mohali";
```

Adding a new property is not allowed.

And:

```javascript
delete user.age;
```

Deleting a property is not allowed.

---

# 17. Practical Example: User Object

```javascript
let user = {

    name: "Rohit",
    age: 23,

    greet() {
        console.log(`Hello ${this.name}`);
    },

    isAdult() {
        return this.age >= 18;
    }
};

user.greet();

console.log(user.isAdult());
```

Output:

```text
Hello Rohit
true
```

Here the object contains:

```text
Properties:
name
age

Methods:
greet()
isAdult()
```

---

# Important Points

- A function inside an object is called a method.
- Methods can have parameters.
- Methods can return values.
- Methods can access object properties using `this`.
- Modern JavaScript supports method shorthand.
- Arrow functions do not have their own `this`.
- `Object.keys()` returns keys.
- `Object.values()` returns values.
- `Object.entries()` returns key-value pairs.
- `Object.hasOwn()` checks for an object's own property.
- `Object.freeze()` prevents modifications.
- `Object.seal()` prevents adding and deleting properties.

---

# Quick Revision

### Method

```javascript
let user = {

    name: "Rohit",

    greet() {
        console.log("Hello");
    }
};

user.greet();
```

### Method with `this`

```javascript
let user = {

    name: "Rohit",

    greet() {
        console.log(this.name);
    }
};

user.greet();
```

### Method with return

```javascript
let calculator = {

    add(a, b) {
        return a + b;
    }
};

console.log(calculator.add(10, 20));
```

### Built-in Object Methods

```javascript
Object.keys(user);
Object.values(user);
Object.entries(user);
Object.hasOwn(user, "name");
```

### Remember

```text
Object Property → Data

Object Method   → Action

this             → Current object context
```

**Next file:**

```text
08-Objects/03-this/03-this.md
```