# JavaScript `this` Keyword

## 1. What is `this`?

`this` is a special keyword in JavaScript.

It generally refers to the **object associated with the current function call**.

Simple way:

```text
this = "Who is calling this function?"
```

Example:

```javascript
let user = {
    name: "Rohit",

    greet() {
        console.log(this.name);
    }
};

user.greet();
```

Output:

```text
Rohit
```

Here:

```javascript
this.name
```

means:

```javascript
user.name
```

Because the method was called using:

```javascript
user.greet();
```

---

# 2. `this` with Object Methods

This is the most important use of `this`.

```javascript
let student = {
    name: "Rohit",
    age: 23,

    introduce() {
        console.log(`My name is ${this.name}`);
        console.log(`My age is ${this.age}`);
    }
};

student.introduce();
```

Output:

```text
My name is Rohit
My age is 23
```

Here:

```text
this.name → student.name
this.age  → student.age
```

---

# 3. Why Use `this`?

Without `this`, you would have to directly use the object name.

```javascript
let user = {
    name: "Rohit",

    greet() {
        console.log(user.name);
    }
};
```

This works, but it is less flexible.

Using `this`:

```javascript
let user = {
    name: "Rohit",

    greet() {
        console.log(this.name);
    }
};
```

Now the method refers to the object through `this`.

---

# 4. `this` Depends on How a Function is Called

This is a very important concept.

Look at:

```javascript
let user = {
    name: "Rohit",

    greet() {
        console.log(this.name);
    }
};

user.greet();
```

The function is called as:

```javascript
user.greet();
```

So `this` refers to:

```text
user
```

Therefore:

```javascript
this.name
```

means:

```javascript
user.name
```

---

# 5. `this` with Multiple Objects

The same method pattern can work with different objects.

```javascript
let user1 = {
    name: "Rohit",

    greet() {
        console.log(`Hello ${this.name}`);
    }
};

let user2 = {
    name: "Aman",

    greet: user1.greet
};

user1.greet();
user2.greet();
```

Output:

```text
Hello Rohit
Hello Aman
```

Why?

Because `this` depends on **how the method is called**.

```javascript
user1.greet();
```

Here:

```text
this → user1
```

And:

```javascript
user2.greet();
```

Here:

```text
this → user2
```

---

# 6. `this` in Regular Functions

In a regular function, the value of `this` depends on how the function is called.

Example:

```javascript
function show() {
    console.log(this);
}

show();
```

In modern JavaScript, when using strict mode, `this` is `undefined` for a plain function call.

```javascript
"use strict";

function show() {
    console.log(this);
}

show();
```

Output:

```text
undefined
```

For beginner-level code, remember:

```text
Regular function:
this depends on how the function is called.
```

---

# 7. `this` in Arrow Functions

Arrow functions behave differently.

Arrow functions **do not have their own `this`**.

They take `this` from the surrounding scope.

Example:

```javascript
let user = {
    name: "Rohit",

    greet: () => {
        console.log(this.name);
    }
};

user.greet();
```

Do not expect this to behave like a normal object method.

For object methods that need `this`, prefer:

```javascript
let user = {
    name: "Rohit",

    greet() {
        console.log(this.name);
    }
};
```

---

# 8. Normal Function vs Arrow Function

### Normal method

```javascript
let user = {
    name: "Rohit",

    greet() {
        console.log(this.name);
    }
};

user.greet();
```

Here `this` refers to `user`.

### Arrow function

```javascript
let user = {
    name: "Rohit",

    greet: () => {
        console.log(this.name);
    }
};
```

Here the arrow function does not create its own `this`.

Important:

```text
Normal function/method → has its own `this` based on call

Arrow function       → inherits `this`
```

---

# 9. `this` with Constructor Functions

`this` is also commonly used with constructor functions.

```javascript
function Student(name, age) {

    this.name = name;
    this.age = age;
}

let student1 = new Student("Rohit", 23);

console.log(student1.name);
console.log(student1.age);
```

Output:

```text
Rohit
23
```

Here:

```javascript
this.name = name;
```

means the newly created object's `name` property.

The `new` keyword creates a new object and makes `this` refer to that new object during the constructor call.

---

# 10. `this` with Classes

Classes also commonly use `this`.

```javascript
class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name}`);
    }
}

let student = new Student("Rohit", 23);

student.introduce();
```

Output:

```text
My name is Rohit
```

Here:

```text
this.name → current Student object
this.age  → current Student object
```

Classes will be covered in more detail later in:

```text
17-OOP
```

---

# 11. `this` in Event Handlers

You will also see `this` when working with DOM events.

Example:

```javascript
button.addEventListener("click", function() {
    console.log(this);
});
```

With a regular event-handler function, `this` refers to the element that received the event.

For example, if the button is clicked:

```text
this → button
```

This becomes more important when you start working with DOM and Events.

---

# 12. `this` with `call()`

JavaScript provides `call()` to explicitly set the value of `this`.

```javascript
function greet() {
    console.log(`Hello ${this.name}`);
}

let user = {
    name: "Rohit"
};

greet.call(user);
```

Output:

```text
Hello Rohit
```

Here:

```javascript
greet.call(user);
```

makes:

```text
this → user
```

---

# 13. `this` with `apply()`

`apply()` is similar to `call()`.

```javascript
function introduce(city, course) {
    console.log(`${this.name} lives in ${city}`);
    console.log(`Course: ${course}`);
}

let user = {
    name: "Rohit"
};

introduce.apply(user, ["Mohali", "MCA"]);
```

Output:

```text
Rohit lives in Mohali
Course: MCA
```

The main difference is how arguments are passed:

```text
call()   → arguments separately

apply()  → arguments in an array
```

---

# 14. `bind()`

`bind()` creates a new function with a fixed `this` value.

```javascript
let user = {
    name: "Rohit"
};

function greet() {
    console.log(`Hello ${this.name}`);
}

let newFunction = greet.bind(user);

newFunction();
```

Output:

```text
Hello Rohit
```

Here `this` is permanently bound to `user` for that new function.

---

# 15. Important Difference: `call`, `apply`, `bind`

```text
call()
→ Calls the function immediately
→ Arguments separately

apply()
→ Calls the function immediately
→ Arguments as an array

bind()
→ Returns a new function
→ Function can be called later
```

Example:

```javascript
function greet(city) {
    console.log(`${this.name} lives in ${city}`);
}

let user = {
    name: "Rohit"
};

greet.call(user, "Mohali");

greet.apply(user, ["Mohali"]);

let newGreet = greet.bind(user);
newGreet("Mohali");
```

---

# 16. Common Mistake

Do not confuse:

```javascript
this.name
```

with:

```javascript
name
```

`this.name` means the `name` property of the object referred to by `this`.

Example:

```javascript
let user = {
    name: "Rohit",

    greet() {
        console.log(this.name);
    }
};
```

Here:

```text
this → user
this.name → user.name
```

---

# 17. Practical Example

```javascript
let bankAccount = {

    owner: "Rohit",
    balance: 5000,

    showBalance() {
        console.log(`${this.owner} has ₹${this.balance}`);
    },

    deposit(amount) {
        this.balance += amount;
    },

    withdraw(amount) {
        this.balance -= amount;
    }
};

bankAccount.showBalance();

bankAccount.deposit(1000);

bankAccount.showBalance();

bankAccount.withdraw(500);

bankAccount.showBalance();
```

Output:

```text
Rohit has ₹5000
Rohit has ₹6000
Rohit has ₹5500
```

Here `this` allows each method to access and modify the same object's properties.

---

# Important Points

- `this` is a special JavaScript keyword.
- In an object method, `this` commonly refers to the object used to call the method.
- `this` depends on how a regular function is called.
- Arrow functions do not have their own `this`.
- Constructor functions use `this` to initialize new objects.
- Classes use `this` to access the current instance.
- `call()`, `apply()`, and `bind()` can control `this`.
- `call()` and `apply()` invoke immediately.
- `bind()` returns a new function.

---

# Quick Revision

### Object Method

```javascript
let user = {
    name: "Rohit",

    greet() {
        console.log(this.name);
    }
};

user.greet();
```

```text
this → user
this.name → user.name
```

### Constructor

```javascript
function User(name) {
    this.name = name;
}

let user = new User("Rohit");
```

### Class

```javascript
class User {

    constructor(name) {
        this.name = name;
    }
}
```

### call()

```javascript
greet.call(user);
```

### apply()

```javascript
greet.apply(user, ["Mohali"]);
```

### bind()

```javascript
let newGreet = greet.bind(user);
newGreet();
```

### Remember

```text
this = depends on the function's calling context

Object method:
user.greet()
      ↓
this = user
```

**Next file:**

```text
08-Objects/04-Destructuring/04-Destructuring.md
```