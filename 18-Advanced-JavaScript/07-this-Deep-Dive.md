# JavaScript `this` — Deep Dive

## 1. What is `this`?

JavaScript mein `this` ek special keyword hai jo generally us context/object ko refer karta hai jiske context mein function execute ho raha hai.

Lekin important point:

> `this` ki value function ko **kaise call kiya gaya hai** us par depend kar sakti hai.

Example:

```javascript
const user = {

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

Yahan:

```text
this → user
```

---

# 2. `this` in Global Context

Browser ke normal script context mein:

```javascript
console.log(this);
```

Historically ye global object ko refer kar sakta hai.

Browser mein global object:

```text
window
```

hota hai.

However, modules aur strict-mode contexts mein behavior different ho sakta hai.

---

# 3. Global `this` in Browser

Classic browser script:

```javascript
console.log(this === window);
```

Output:

```text
true
```

Because classic browser script ke global context mein:

```text
this → window
```

---

# 4. `this` Inside a Regular Function

Example:

```javascript
function greet() {

    console.log(this);

}

greet();
```

Iski exact value execution mode par depend kar sakti hai.

### Non-strict browser script

```text
this → global object
```

### Strict mode

```javascript
"use strict";

function greet() {

    console.log(this);

}

greet();
```

Output:

```text
undefined
```

---

# 5. Strict Mode

Strict mode:

```javascript
"use strict";
```

Regular function ko standalone call karne par `this` ko automatically global object se bind nahi karta.

Example:

```javascript
"use strict";

function test() {

    console.log(this);

}

test();
```

Output:

```text
undefined
```

---

# 6. `this` Inside an Object Method

Example:

```javascript
const user = {

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

```text
this → user
```

---

# 7. Method Call Determines `this`

Example:

```javascript
const user1 = {

    name: "Rohit",

    greet() {

        console.log(this.name);

    }

};

const user2 = {

    name: "Aman",

    greet: user1.greet

};

user1.greet();
user2.greet();
```

Output:

```text
Rohit
Aman
```

Same function hai:

```text
greet()
```

But call site different hai.

```text
user1.greet()
→ this = user1

user2.greet()
→ this = user2
```

---

# 8. `this` Is Not Determined by Where Function Was Written

Example:

```javascript
const user = {

    name: "Rohit",

    greet() {

        console.log(this.name);

    }

};

const anotherUser = {

    name: "Aman"

};

anotherUser.greet = user.greet;

anotherUser.greet();
```

Output:

```text
Aman
```

Function `user` object ke andar originally defined tha.

Lekin call hua:

```javascript
anotherUser.greet();
```

So:

```text
this → anotherUser
```

---

# 9. `this` in Constructor Function

Constructor functions ke saath `new` use karne par:

```javascript
function Person(name) {

    this.name = name;

}

const person = new Person("Rohit");
```

Yahan:

```text
this → newly created object
```

So:

```javascript
console.log(person.name);
```

Output:

```text
Rohit
```

---

# 10. How `new` Works with `this`

Simplified process:

```text
new Person("Rohit")
        ↓
New object created
        ↓
Prototype connected
        ↓
this → new object
        ↓
Person function executes
        ↓
Object returned
```

---

# 11. `this` in Classes

Example:

```javascript
class Person {

    constructor(name) {

        this.name = name;

    }

    greet() {

        console.log(this.name);

    }

}

const person = new Person("Rohit");

person.greet();
```

Output:

```text
Rohit
```

Here:

```text
this → person
```

---

# 12. `this` in Class Methods

```javascript
class User {

    constructor(name) {

        this.name = name;

    }

    showName() {

        console.log(this.name);

    }

}

const user = new User("Rohit");

user.showName();
```

Output:

```text
Rohit
```

Because method call:

```text
user.showName()
```

sets the receiver as `this`.

---

# 13. Arrow Functions and `this`

Arrow functions are special.

Example:

```javascript
const user = {

    name: "Rohit",

    greet: () => {

        console.log(this.name);

    }

};

user.greet();
```

This does **not** behave like a normal method.

Arrow functions do not have their own `this`.

Instead:

> Arrow function apne surrounding lexical context ka `this` use karta hai.

---

# 14. Regular Function vs Arrow Function

### Regular Function

```javascript
const user = {

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

### Arrow Function

```javascript
const user = {

    name: "Rohit",

    greet: () => {

        console.log(this.name);

    }

};

user.greet();
```

Yahan `this` object ke according dynamically bind nahi hota.

---

# 15. Why Arrow Functions Don't Have Their Own `this`

Arrow function:

```javascript
const greet = () => {

    console.log(this);

};
```

Arrow function apna `this` create nahi karta.

Instead:

```text
Arrow Function
      ↓
Lexical `this`
      ↓
Surrounding context
```

---

# 16. Arrow Function Inside Object Method

Ye practical aur important pattern hai:

```javascript
const user = {

    name: "Rohit",

    greet() {

        const inner = () => {

            console.log(this.name);

        };

        inner();

    }

};

user.greet();
```

Output:

```text
Rohit
```

Why?

```text
user.greet()
      ↓
this = user
      ↓
inner arrow function
      ↓
inherits this
      ↓
this = user
```

---

# 17. Regular Nested Function Problem

Example:

```javascript
const user = {

    name: "Rohit",

    greet() {

        function inner() {

            console.log(this.name);

        }

        inner();

    }

};

user.greet();
```

`inner()` ek regular function call hai.

Isliye uska `this`, outer method ke `this` ko automatically inherit nahi karta.

Strict mode mein:

```text
this → undefined
```

ho sakta hai.

---

# 18. Arrow Function Solves This

```javascript
const user = {

    name: "Rohit",

    greet() {

        const inner = () => {

            console.log(this.name);

        };

        inner();

    }

};

user.greet();
```

Output:

```text
Rohit
```

Arrow function surrounding `this` ko use karta hai.

---

# 19. `call()`

`call()` se function ko explicitly `this` value ke saath invoke kar sakte hain.

Example:

```javascript
function greet() {

    console.log(this.name);

}

const user = {

    name: "Rohit"

};

greet.call(user);
```

Output:

```text
Rohit
```

Here:

```text
this → user
```

---

# 20. `call()` with Arguments

```javascript
function greet(city) {

    console.log(this.name);
    console.log(city);

}

const user = {

    name: "Rohit"

};

greet.call(user, "Mohali");
```

Output:

```text
Rohit
Mohali
```

Syntax:

```text
function.call(thisArg, arg1, arg2, ...)
```

---

# 21. `apply()`

`apply()` bhi explicitly `this` set karta hai.

Difference mainly arguments pass karne ka hai.

Example:

```javascript
function greet(city, age) {

    console.log(this.name);
    console.log(city);
    console.log(age);

}

const user = {

    name: "Rohit"

};

greet.apply(user, ["Mohali", 25]);
```

Output:

```text
Rohit
Mohali
25
```

---

# 22. `call()` vs `apply()`

### `call()`

```javascript
greet.call(user, "Mohali", 25);
```

### `apply()`

```javascript
greet.apply(user, ["Mohali", 25]);
```

Difference:

```text
call()
→ arguments individually

apply()
→ arguments as array/array-like
```

---

# 23. `bind()`

`bind()` function ko immediately execute nahi karta.

Instead, ek new function return karta hai jisme `this` bind hota hai.

Example:

```javascript
function greet() {

    console.log(this.name);

}

const user = {

    name: "Rohit"

};

const boundGreet = greet.bind(user);

boundGreet();
```

Output:

```text
Rohit
```

---

# 24. `bind()` Example

```javascript
const user = {

    name: "Rohit"

};

function greet() {

    console.log(`Hello ${this.name}`);

}

const newFunction = greet.bind(user);

console.log(newFunction);
```

`newFunction` ko baad mein execute kar sakte hain:

```javascript
newFunction();
```

---

# 25. `call()` vs `apply()` vs `bind()`

```text
call()
→ immediately execute

apply()
→ immediately execute

bind()
→ new function return
```

Example:

```javascript
greet.call(user);

greet.apply(user);

const fn = greet.bind(user);
fn();
```

---

# 26. `this` with Event Handlers

Browser example:

```javascript
button.addEventListener("click", function() {

    console.log(this);

});
```

Traditional DOM event listener callback mein `this` generally event target ko refer karta hai.

If:

```text
button clicked
```

then:

```text
this → button
```

---

# 27. Arrow Function Event Handler

```javascript
button.addEventListener("click", () => {

    console.log(this);

});
```

Arrow function ka `this` event target se automatically bind nahi hota.

Instead, lexical `this` use hota hai.

---

# 28. Regular vs Arrow Event Handler

### Regular Function

```javascript
button.addEventListener("click", function() {

    console.log(this);

});
```

Typically:

```text
this → button
```

### Arrow Function

```javascript
button.addEventListener("click", () => {

    console.log(this);

});
```

Here:

```text
this → surrounding lexical context
```

---

# 29. `this` with `setTimeout`

Example:

```javascript
const user = {

    name: "Rohit",

    greet() {

        setTimeout(function() {

            console.log(this.name);

        }, 1000);

    }

};

user.greet();
```

Regular callback ka `this` automatically `user` nahi hota.

---

# 30. Arrow Function with `setTimeout`

```javascript
const user = {

    name: "Rohit",

    greet() {

        setTimeout(() => {

            console.log(this.name);

        }, 1000);

    }

};

user.greet();
```

Output after approximately 1 second:

```text
Rohit
```

Why?

```text
user.greet()
      ↓
this = user
      ↓
arrow callback
      ↓
inherits this
      ↓
this = user
```

---

# 31. Common `this` Pattern

This is very common:

```javascript
class Timer {

    start() {

        setTimeout(() => {

            console.log(this);

        }, 1000);

    }

}
```

Arrow callback class method ke `this` ko preserve karta hai.

---

# 32. `this` in Nested Object

Example:

```javascript
const user = {

    name: "Rohit",

    address: {

        city: "Mohali",

        showCity() {

            console.log(this.city);

        }

    }

};

user.address.showCity();
```

Output:

```text
Mohali
```

Here:

```text
this → user.address
```

Not:

```text
this → user
```

---

# 33. Important Rule

`this` outermost object ko automatically refer nahi karta.

Instead, regular method call mein immediate receiver important hota hai.

Example:

```javascript
user.address.showCity();
```

Here:

```text
this → user.address
```

---

# 34. Function Detached from Object

Example:

```javascript
const user = {

    name: "Rohit",

    greet() {

        console.log(this.name);

    }

};

const fn = user.greet;

fn();
```

Ab:

```text
fn()
```

standalone function call hai.

So `this` object se automatically connected nahi rahega.

Strict mode mein:

```text
this → undefined
```

ho sakta hai.

---

# 35. Fix Using `bind()`

```javascript
const user = {

    name: "Rohit",

    greet() {

        console.log(this.name);

    }

};

const fn = user.greet.bind(user);

fn();
```

Output:

```text
Rohit
```

---

# 36. `this` with `call()`

```javascript
const user = {

    name: "Rohit"

};

function greet() {

    console.log(`Hello ${this.name}`);

}

greet.call(user);
```

Output:

```text
Hello Rohit
```

---

# 37. Same Function, Different `this`

```javascript
function greet() {

    console.log(this.name);

}

const user1 = {

    name: "Rohit"

};

const user2 = {

    name: "Aman"

};

greet.call(user1);
greet.call(user2);
```

Output:

```text
Rohit
Aman
```

Same function:

```text
greet()
```

Different `this`.

---

# 38. `this` in Constructor

```javascript
function Car(brand) {

    this.brand = brand;

}

const car1 = new Car("Toyota");
const car2 = new Car("Honda");
```

Conceptually:

```text
car1 → this = car1

car2 → this = car2
```

Therefore:

```javascript
console.log(car1.brand);
console.log(car2.brand);
```

Output:

```text
Toyota
Honda
```

---

# 39. `this` in Class Constructor

```javascript
class Car {

    constructor(brand) {

        this.brand = brand;

    }

}

const car = new Car("Toyota");

console.log(car.brand);
```

Output:

```text
Toyota
```

Here:

```text
this → car
```

---

# 40. `this` and Prototype Methods

Example:

```javascript
function Person(name) {

    this.name = name;

}

Person.prototype.greet = function() {

    console.log(this.name);

};

const person = new Person("Rohit");

person.greet();
```

Output:

```text
Rohit
```

Even though `greet()` prototype par stored hai:

```text
Person.prototype.greet
```

call:

```text
person.greet()
```

mein:

```text
this → person
```

---

# 41. Prototype Method with Different Object

```javascript
function Person(name) {

    this.name = name;

}

Person.prototype.greet = function() {

    console.log(this.name);

};

const person1 = new Person("Rohit");
const person2 = new Person("Aman");

person1.greet();
person2.greet();
```

Output:

```text
Rohit
Aman
```

Same prototype method:

```text
greet()
```

Different `this`.

---

# 42. `this` in Arrow Function Stored on Prototype

Example:

```javascript
function Person(name) {

    this.name = name;

}

Person.prototype.greet = () => {

    console.log(this.name);

};
```

Ye expected object-specific `this` provide nahi karega.

Why?

Because arrow function ka `this` lexical hota hai.

Prototype methods ko object-specific `this` chahiye ho to normal function/method syntax generally use karna better hai.

---

# 43. `this` in Regular Function

```javascript
function test() {

    console.log(this);

}
```

Regular function mein `this` call style se determine hota hai.

Possible cases:

```text
test()
obj.test()
test.call(obj)
new test()
```

Har case mein behavior different ho sakta hai.

---

# 44. Four Important Ways to Call a Function

### 1. Regular Call

```javascript
fn();
```

### 2. Method Call

```javascript
obj.fn();
```

### 3. Explicit Call

```javascript
fn.call(obj);
```

### 4. Constructor Call

```javascript
new Fn();
```

`this` ka behavior in invocation patterns se change ho sakta hai.

---

# 45. `this` Decision Table

| Call Style | Typical `this` |
|---|---|
| `fn()` | `undefined` in strict mode |
| `obj.fn()` | `obj` |
| `fn.call(obj)` | `obj` |
| `fn.apply(obj)` | `obj` |
| `fn.bind(obj)()` | `obj` |
| `new Fn()` | newly created object |
| Arrow function | lexical `this` |

---

# 46. Important Arrow Function Rule

Arrow functions:

```text
❌ own this
❌ own arguments
❌ own prototype
```

Arrow function ka `this`:

```text
lexically inherited
```

hota hai.

---

# 47. Arrow Function and `call()`

Interesting:

```javascript
const greet = () => {

    console.log(this);

};

greet.call({
    name: "Rohit"
});
```

Arrow function ka `this` `call()` se change nahi hota.

Because arrow function ka `this` lexical hota hai.

---

# 48. Arrow Function and `bind()`

Similarly:

```javascript
const greet = () => {

    console.log(this);

};

const fn = greet.bind({
    name: "Rohit"
});

fn();
```

`bind()` arrow function ka lexical `this` replace nahi karta.

---

# 49. Regular Function and `bind()`

Regular function:

```javascript
function greet() {

    console.log(this.name);

}

const user = {

    name: "Rohit"

};

const fn = greet.bind(user);

fn();
```

Output:

```text
Rohit
```

---

# 50. `this` and Destructuring

Method ko destructure karne se call context lost ho sakta hai.

Example:

```javascript
const user = {

    name: "Rohit",

    greet() {

        console.log(this.name);

    }

};

const { greet } = user;

greet();
```

Now function standalone call ho raha hai.

So:

```text
this ≠ user
```

---

# 51. Fix Destructured Method

Use `bind()`:

```javascript
const user = {

    name: "Rohit",

    greet() {

        console.log(this.name);

    }

};

const greet = user.greet.bind(user);

greet();
```

Output:

```text
Rohit
```

---

# 52. `this` and Method Assignment

Example:

```javascript
const user1 = {

    name: "Rohit",

    greet() {

        console.log(this.name);

    }

};

const user2 = {

    name: "Aman"

};

user2.greet = user1.greet;

user2.greet();
```

Output:

```text
Aman
```

Reason:

```text
Call site:
user2.greet()

this:
user2
```

---

# 53. `this` with `super`

Classes mein `super` parent class methods/constructor ko access karne ke liye use hota hai.

Example:

```javascript
class Animal {

    speak() {

        console.log("Animal speaks");

    }

}

class Dog extends Animal {

    speak() {

        super.speak();

        console.log("Dog barks");

    }

}

const dog = new Dog();

dog.speak();
```

Output:

```text
Animal speaks
Dog barks
```

---

# 54. `this` in Derived Class Constructor

```javascript
class Animal {

    constructor(name) {

        this.name = name;

    }

}

class Dog extends Animal {

    constructor(name) {

        super(name);

    }

}

const dog = new Dog("Bruno");

console.log(dog.name);
```

Output:

```text
Bruno
```

Derived class constructor mein `this` use karne se pehle `super()` call karna required hota hai.

---

# 55. Common Mistake

Wrong assumption:

```text
this = function itself
```

Normally ye correct nahi hai.

`this` function ko refer nahi karta.

It depends on invocation context, except arrow functions where it is lexically inherited.

---

# 56. Common Mistake

Wrong:

```text
this always refers to parent object
```

Example:

```javascript
const user = {

    name: "Rohit",

    address: {

        city: "Mohali",

        show() {

            console.log(this.city);

        }

    }

};

user.address.show();
```

Here:

```text
this → user.address
```

---

# 57. Common Mistake

Wrong:

```text
Arrow function gets this from object method call.
```

Actually:

```text
Arrow function
↓
does not create its own this
↓
uses lexical this
```

---

# 58. Practical Example: Counter Object

```javascript
const counter = {

    count: 0,

    increment() {

        this.count++;

    },

    show() {

        console.log(this.count);

    }

};

counter.increment();
counter.increment();
counter.show();
```

Output:

```text
2
```

Here:

```text
this → counter
```

---

# 59. Practical Example: User Object

```javascript
const user = {

    name: "Rohit",
    age: 25,

    introduce() {

        console.log(
            `My name is ${this.name} and I am ${this.age} years old.`
        );

    }

};

user.introduce();
```

Output:

```text
My name is Rohit and I am 25 years old.
```

---

# 60. Practical Example: Constructor

```javascript
function Student(name, course) {

    this.name = name;
    this.course = course;

}

Student.prototype.introduce = function() {

    console.log(
        `${this.name} is studying ${this.course}`
    );

};

const student = new Student("Rohit", "MCA");

student.introduce();
```

Output:

```text
Rohit is studying MCA
```

---

# 61. Practical Example: `bind()`

```javascript
const user = {

    name: "Rohit"

};

function welcome(message) {

    console.log(`${message}, ${this.name}`);

}

const welcomeUser = welcome.bind(user);

welcomeUser("Welcome");
```

Output:

```text
Welcome, Rohit
```

---

# 62. Quick Revision

### Regular function

```text
this → depends on how function is called
```

### Object method

```javascript
obj.method();
```

```text
this → obj
```

### `call()`

```javascript
fn.call(obj);
```

```text
this → obj
```

### `apply()`

```javascript
fn.apply(obj, []);
```

```text
this → obj
```

### `bind()`

```javascript
const fn = original.bind(obj);
```

```text
this → obj
```

### `new`

```javascript
new Constructor();
```

```text
this → new object
```

### Arrow function

```text
this → lexical / surrounding this
```

---

# 63. `this` Cheat Sheet

```text
┌─────────────────────────────┐
│ JavaScript `this` Cheat     │
│ Sheet                       │
├─────────────────────────────┤
│ obj.method()                │
│ → obj                       │
│                             │
│ fn.call(obj)                │
│ → obj                       │
│                             │
│ fn.apply(obj)               │
│ → obj                       │
│                             │
│ fn.bind(obj)()              │
│ → obj                       │
│                             │
│ new Fn()                    │
│ → new object                │
│                             │
│ Arrow Function              │
│ → lexical this              │
└─────────────────────────────┘
```

---

# 64. Interview Question

### Q. What is `this` in JavaScript?

**Answer:**

`this` is a special keyword whose value for a regular function is determined by how the function is invoked. In a method call, it usually refers to the object before the dot; with `call`, `apply`, and `bind`, it can be explicitly controlled; with `new`, it refers to the newly created instance. Arrow functions use lexical `this`.

---

# 65. Interview Question

### Q. Difference between regular function and arrow function `this`?

### Regular Function

```text
this → determined by invocation
```

### Arrow Function

```text
this → inherited lexically
```

Arrow function ka apna `this` nahi hota.

---

# 66. Interview Question

### Q. Difference between `call`, `apply`, and `bind`?

```text
call
→ immediately invokes function
→ arguments individually

apply
→ immediately invokes function
→ arguments as array/array-like

bind
→ returns a new function
→ invocation later
```

---

# 67. Interview Question

### Q. Why use arrow functions inside callbacks?

Common reason:

```javascript
class Counter {

    count = 0;

    start() {

        setTimeout(() => {

            this.count++;

        }, 1000);

    }

}
```

Arrow function surrounding method ka `this` preserve karta hai.

---

# 68. Interview Question

### Q. What happens to `this` when a method is detached?

Example:

```javascript
const user = {

    name: "Rohit",

    greet() {

        console.log(this.name);

    }

};

const fn = user.greet;

fn();
```

Function standalone call ho raha hai.

Therefore `this` automatically `user` nahi rahega.

Strict mode mein:

```text
this → undefined
```

---

# 69. Final Mental Model

```text
                    `this`
                       │
          ┌────────────┼────────────┐
          ↓            ↓            ↓
      obj.method()   call/apply    new
          │            │            │
          ↓            ↓            ↓
         obj      specified obj   new object

                       │
                       ↓
                 Arrow Function
                       │
                       ↓
                 lexical this
```

## One-Line Definition

> **For regular functions, `this` is determined mainly by how the function is called; arrow functions instead use the `this` value from their surrounding lexical context.**

---

## 🎯 18-Advanced-JavaScript Complete

```text
18-Advanced-JavaScript
│
├── 01-Execution-Context.md
├── 02-Call-Stack.md
├── 03-Event-Loop.md
├── 04-Closures.md
├── 05-Prototypes.md
├── 06-Prototype-Chain.md
├── 07-this-Deep-Dive.md
└── Projects
```

### Next folder:

```text
19-JavaScript-Modules
│
├── 01-import-export.md  ← NEXT
├── 02-ES-Modules.md
├── 03-Module-Projects.md
└── Projects
```