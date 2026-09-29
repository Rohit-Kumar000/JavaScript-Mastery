# JavaScript Classes

## 1. What is a Class?

JavaScript mein **class** ek blueprint/template hoti hai jiske through hum multiple similar objects create kar sakte hain.

Example:

```javascript
class User {

}
```

Yahan `User` ek class hai.

Class se object:

```javascript
const user1 = new User();
const user2 = new User();
```

Flow:

```text
Class
  ↓
Blueprint
  ↓
Objects
```

---

# 2. Why Use Classes?

Agar hume same structure ke multiple objects create karne hain, to class useful hoti hai.

Without class:

```javascript
const user1 = {
    name: "Rohit",
    age: 25
};

const user2 = {
    name: "Aman",
    age: 24
};
```

Class ke saath:

```javascript
class User {

}

const user1 = new User();
const user2 = new User();
```

Baad mein constructor ke through different values assign kar sakte hain.

---

# 3. Basic Class Syntax

```javascript
class User {

    greet() {
        console.log("Hello User");
    }

}
```

Object:

```javascript
const user = new User();

user.greet();
```

Output:

```text
Hello User
```

---

# 4. Creating Objects

Class se object create karne ke liye `new` keyword use hota hai.

```javascript
class Car {

}

const car1 = new Car();
const car2 = new Car();

console.log(car1);
console.log(car2);
```

Yahan:

```text
Car
 ↓
Class

new Car()
 ↓
Object
```

---

# 5. Methods Inside Class

Class ke andar methods define kar sakte hain.

```javascript
class User {

    greet() {
        console.log("Hello!");
    }

    logout() {
        console.log("User logged out");
    }

}
```

Use:

```javascript
const user = new User();

user.greet();
user.logout();
```

Output:

```text
Hello!
User logged out
```

---

# 6. Class with Properties

Properties directly bhi define ki ja sakti hain:

```javascript
class User {

    name = "Rohit";
    age = 25;

}
```

Object:

```javascript
const user = new User();

console.log(user.name);
console.log(user.age);
```

Output:

```text
Rohit
25
```

Lekin jab har object ke liye different values chahiye hoti hain, constructor ka use commonly kiya jata hai.

---

# 7. Class with `this`

Class ke methods mein `this` current object/instance ko refer karta hai.

```javascript
class User {

    name = "Rohit";

    greet() {
        console.log(`Hello ${this.name}`);
    }

}

const user = new User();

user.greet();
```

Output:

```text
Hello Rohit
```

Yahan:

```javascript
this.name
```

current object ki `name` property ko access karta hai.

---

# 8. Class Method Example

```javascript
class Calculator {

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

}

const calculator = new Calculator();

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
```

Output:

```text
15
5
50
```

---

# 9. Multiple Objects

Ek class se multiple independent objects create kar sakte hain.

```javascript
class User {

    greet() {
        console.log("Hello");
    }

}

const user1 = new User();
const user2 = new User();
const user3 = new User();

user1.greet();
user2.greet();
user3.greet();
```

Sabhi objects same class ka method use kar rahe hain.

---

# 10. Class with Constructor

Class ke andar `constructor()` method object create hote waqt automatically call hota hai.

Example:

```javascript
class User {

    constructor() {
        console.log("User created");
    }

}

const user = new User();
```

Output:

```text
User created
```

Constructor ko detail mein next file mein cover karenge.

---

# 11. Class with Parameters

Constructor ke through object ko values provide kar sakte hain.

```javascript
class User {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }

    greet() {

        console.log(
            `Hello ${this.name}`
        );

    }

}
```

Objects:

```javascript
const user1 = new User("Rohit", 25);
const user2 = new User("Aman", 24);
```

Use:

```javascript
user1.greet();
user2.greet();
```

Output:

```text
Hello Rohit
Hello Aman
```

---

# 12. Class Method with Return

Methods value return bhi kar sakte hain.

```javascript
class Rectangle {

    constructor(width, height) {

        this.width = width;
        this.height = height;

    }

    area() {

        return this.width * this.height;

    }

}

const rectangle = new Rectangle(10, 5);

console.log(rectangle.area());
```

Output:

```text
50
```

---

# 13. Updating Properties

Object ki property update kar sakte hain.

```javascript
class User {

    constructor(name) {

        this.name = name;

    }

}

const user = new User("Rohit");

console.log(user.name);

user.name = "Aman";

console.log(user.name);
```

Output:

```text
Rohit
Aman
```

---

# 14. Adding Methods for Updating Data

Better structure ke liye update method bana sakte hain.

```javascript
class User {

    constructor(name) {

        this.name = name;

    }

    changeName(newName) {

        this.name = newName;

    }

}

const user = new User("Rohit");

user.changeName("Aman");

console.log(user.name);
```

Output:

```text
Aman
```

---

# 15. Class and Object Relationship

```text
Class
 │
 ├── Object 1
 │
 ├── Object 2
 │
 └── Object 3
```

Example:

```text
User Class
 │
 ├── Rohit
 ├── Aman
 └── Rahul
```

Har object ka apna data ho sakta hai.

---

# 16. Instance

Class se create kiya gaya object us class ka **instance** hota hai.

Example:

```javascript
class User {

}

const user = new User();
```

Yahan `user`, `User` class ka instance hai.

Check:

```javascript
console.log(user instanceof User);
```

Output:

```text
true
```

---

# 17. `instanceof`

`instanceof` check karta hai ki object kisi particular class ka instance hai ya nahi.

```javascript
class Car {

}

const car = new Car();

console.log(car instanceof Car);
```

Output:

```text
true
```

Another example:

```javascript
class Bike {

}

console.log(car instanceof Bike);
```

Output:

```text
false
```

---

# 18. Static Methods

Class ke andar `static` method define kar sakte hain.

Static method ko directly class se call kiya jata hai.

```javascript
class MathHelper {

    static add(a, b) {

        return a + b;

    }

}

console.log(MathHelper.add(10, 20));
```

Output:

```text
30
```

Isse:

```javascript
const math = new MathHelper();

math.add(10, 20);
```

directly call nahi kar sakte, kyunki `add()` static method hai.

---

# 19. Static Property

Static property class ke saath associated hoti hai, individual instances ke saath nahi.

```javascript
class User {

    static role = "Student";

}

console.log(User.role);
```

Output:

```text
Student
```

---

# 20. Class Expression

Class ko variable mein assign bhi kar sakte hain.

```javascript
const User = class {

    greet() {
        console.log("Hello");
    }

};

const user = new User();

user.greet();
```

Ye **class expression** hai.

---

# 21. Anonymous Class Expression

Class ka naam omit bhi kar sakte hain:

```javascript
const User = class {

    greet() {
        console.log("Hello");
    }

};
```

Yahan class expression anonymous hai.

---

# 22. Named Class Expression

Class expression ko naam bhi de sakte hain:

```javascript
const User = class UserClass {

    greet() {
        console.log("Hello");
    }

};
```

---

# 23. Getters

Class mein getter use karke property ko method-like logic ke through access kar sakte hain.

```javascript
class User {

    constructor(firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;

    }

    get fullName() {

        return `${this.firstName} ${this.lastName}`;

    }

}

const user = new User(
    "Rohit",
    "Kumar"
);

console.log(user.fullName);
```

Output:

```text
Rohit Kumar
```

Getter ko function ki tarah `()` ke bina access kiya jata hai.

---

# 24. Setters

Setter ka use property assign karte waqt custom logic ke liye kiya ja sakta hai.

```javascript
class User {

    constructor(name) {

        this.name = name;

    }

    set userName(value) {

        this.name = value;

    }

}

const user = new User("Rohit");

user.userName = "Aman";

console.log(user.name);
```

Output:

```text
Aman
```

---

# 25. Private Fields

JavaScript classes mein private fields `#` se define kar sakte hain.

```javascript
class BankAccount {

    #balance = 0;

    deposit(amount) {

        this.#balance += amount;

    }

    getBalance() {

        return this.#balance;

    }

}

const account = new BankAccount();

account.deposit(1000);

console.log(account.getBalance());
```

Output:

```text
1000
```

Direct access:

```javascript
console.log(account.#balance);
```

Invalid hai.

Private field class ke bahar directly access nahi ki ja sakti.

---

# 26. Real-World Example

Online shopping application:

```javascript
class Product {

    constructor(name, price) {

        this.name = name;
        this.price = price;

    }

    display() {

        console.log(
            `${this.name} - ₹${this.price}`
        );

    }

}

const laptop = new Product(
    "Laptop",
    50000
);

const phone = new Product(
    "Phone",
    25000
);

laptop.display();
phone.display();
```

Output:

```text
Laptop - ₹50000
Phone - ₹25000
```

---

# 27. Class Structure

Typical class:

```javascript
class User {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }

    greet() {

        console.log(
            `Hello ${this.name}`
        );

    }

    getAge() {

        return this.age;

    }

}
```

Structure:

```text
Class
│
├── Constructor
│
├── Properties
│
└── Methods
```

---

# 28. Important Keywords

### `class`

```javascript
class User {

}
```

Class create karta hai.

### `new`

```javascript
const user = new User();
```

Instance/object create karta hai.

### `this`

```javascript
this.name
```

Current instance ke context mein property access karne ke liye.

### `static`

```javascript
static add() {

}
```

Class-level method/property ke liye.

### `get`

```javascript
get fullName() {

}
```

Getter create karta hai.

### `set`

```javascript
set name(value) {

}
```

Setter create karta hai.

---

# Quick Revision

### Class

```javascript
class User {

}
```

### Object

```javascript
const user = new User();
```

### Method

```javascript
class User {

    greet() {
        console.log("Hello");
    }

}
```

### Constructor

```javascript
constructor(name) {

    this.name = name;

}
```

### Instance

```javascript
user instanceof User
```

### Static Method

```javascript
static add(a, b) {

    return a + b;

}
```

### Private Field

```javascript
#balance
```

### Getter

```javascript
get fullName() {

}
```

### Setter

```javascript
set name(value) {

}
```

---

# Class Flow

```text
             CLASS
               │
               ↓
           Blueprint
               │
       ┌───────┼───────┐
       ↓       ↓       ↓
    Object  Object  Object
       │       │       │
       ↓       ↓       ↓
    Data +  Data +  Data +
    Methods Methods Methods
```

---

## Next File

```text
17-OOP/03-Constructor.md
```