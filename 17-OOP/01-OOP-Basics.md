# JavaScript OOP Basics

## 1. What is OOP?

**OOP** ka full form hai **Object-Oriented Programming**.

OOP ek programming approach hai jisme code ko **objects** ke around organize kiya jata hai.

Object ke andar:

```text
Properties → Data
Methods    → Behavior
```

Example:

```javascript
const user = {
    name: "Rohit",
    age: 25,

    greet() {
        console.log("Hello!");
    }
};
```

Yahan:

```text
name → Property
age  → Property
greet() → Method
```

---

# 2. Why OOP?

Large applications mein code ko organized aur reusable rakhne ke liye OOP useful hota hai.

OOP ki help se:

```text
✓ Code organize hota hai
✓ Code reuse kar sakte hain
✓ Data aur functions ko ek unit mein rakh sakte hain
✓ Large applications manage karna easier hota hai
✓ Real-world entities ko model kar sakte hain
```

---

# 3. Real-World Example

Suppose ek **Car** hai.

Car ke properties:

```text
Brand
Model
Color
Speed
```

Car ke behaviors:

```text
Start
Stop
Accelerate
Brake
```

JavaScript:

```javascript
const car = {
    brand: "Toyota",
    model: "Fortuner",
    color: "Black",
    speed: 0,

    start() {
        console.log("Car started");
    },

    accelerate() {
        this.speed += 10;
    },

    stop() {
        this.speed = 0;
        console.log("Car stopped");
    }
};
```

---

# 4. Object

Object ek collection hota hai jisme properties aur methods ho sakte hain.

```javascript
const student = {

    name: "Rohit",
    age: 25,
    course: "MCA",

    study() {
        console.log("Student is studying");
    }

};
```

Access:

```javascript
console.log(student.name);
```

Output:

```text
Rohit
```

Method call:

```javascript
student.study();
```

Output:

```text
Student is studying
```

---

# 5. Properties

Object ke andar stored data ko properties kehte hain.

```javascript
const user = {

    name: "Rohit",
    age: 25,
    city: "Mohali"

};
```

Properties:

```text
name
age
city
```

Access:

```javascript
console.log(user.name);
console.log(user.age);
console.log(user.city);
```

---

# 6. Methods

Object ke andar function ko method kaha jata hai.

```javascript
const user = {

    name: "Rohit",

    greet() {
        console.log("Hello Rohit");
    }

};
```

Yahan:

```text
greet()
```

ek method hai.

Call:

```javascript
user.greet();
```

---

# 7. Object with `this`

`this` current object ko refer kar sakta hai.

Example:

```javascript
const user = {

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

Yahan:

```javascript
this.name
```

current `user` object's `name` ko access kar raha hai.

---

# 8. Multiple Objects

Agar multiple students hain:

```javascript
const student1 = {
    name: "Rohit",
    age: 25
};

const student2 = {
    name: "Aman",
    age: 24
};

const student3 = {
    name: "Rahul",
    age: 23
};
```

Problem ye hai ki same structure baar-baar likhna pad raha hai.

OOP isi type ke repeated structures ko efficiently handle karne mein help karta hai.

---

# 9. Reusability

Suppose hume 100 users create karne hain.

Har user ke liye manually object banana inconvenient ho sakta hai.

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

OOP mein hum reusable structure create kar sakte hain.

Aage hum:

```text
Class
Constructor
Objects
```

ke through ye karenge.

---

# 10. Class

Class ko objects create karne ke liye **blueprint/template** ki tarah samajh sakte hain.

Example:

```javascript
class User {

    greet() {
        console.log("Hello User");
    }

}
```

Ab is class se object bana sakte hain:

```javascript
const user1 = new User();
const user2 = new User();
```

Dono objects same class ke structure ko use karte hain.

---

# 11. Object Creation with `new`

Class se object banane ke liye commonly `new` keyword use hota hai.

```javascript
class User {

}

const user1 = new User();
```

Yahan:

```text
User
 ↓
Class

new User()
 ↓
Object
```

---

# 12. OOP Terminology

Important terms:

```text
Class
Object
Property
Method
Constructor
Inheritance
Encapsulation
Polymorphism
```

In concepts ko next files mein detail mein cover karenge.

---

# 13. Four Major OOP Concepts

OOP ke commonly discussed four major concepts:

```text
1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism
```

### Encapsulation

Data aur methods ko ek unit mein organize karna aur access ko control karna.

### Abstraction

Unnecessary implementation details ko hide karke important interface provide karna.

### Inheritance

Ek class se doosri class properties/methods inherit kar sakti hai.

### Polymorphism

Same interface/method different objects/classes mein different behavior provide kar sakta hai.

---

# 14. Encapsulation Example

Simple object example:

```javascript
const bankAccount = {

    balance: 1000,

    deposit(amount) {
        this.balance += amount;
    }

};
```

Data:

```text
balance
```

Behavior:

```text
deposit()
```

Dono ek object ke andar organized hain.

JavaScript classes mein encapsulation ke advanced forms bhi available hain.

---

# 15. Inheritance Example

Ek `Animal` class:

```javascript
class Animal {

    eat() {
        console.log("Animal is eating");
    }

}
```

Child class:

```javascript
class Dog extends Animal {

    bark() {
        console.log("Dog is barking");
    }

}
```

Object:

```javascript
const dog = new Dog();

dog.eat();
dog.bark();
```

Output:

```text
Animal is eating
Dog is barking
```

`Dog` ne `Animal` ka `eat()` method inherit kiya.

---

# 16. Polymorphism Example

```javascript
class Animal {

    sound() {
        console.log("Animal makes a sound");
    }

}

class Dog extends Animal {

    sound() {
        console.log("Dog barks");
    }

}

class Cat extends Animal {

    sound() {
        console.log("Cat meows");
    }

}
```

Objects:

```javascript
const dog = new Dog();
const cat = new Cat();

dog.sound();
cat.sound();
```

Output:

```text
Dog barks
Cat meows
```

Same method:

```text
sound()
```

different objects mein different behavior de raha hai.

---

# 17. Abstraction

Abstraction ka idea hai unnecessary implementation details ko hide karna.

Real-world example:

```text
Car Start Button
      ↓
Press Button
      ↓
Car Starts
```

Driver ko engine ke andar exactly kya process ho raha hai, ye har baar jaanne ki zaroorat nahi.

Programming mein bhi hum simple interface provide kar sakte hain.

---

# 18. OOP vs Procedural Programming

### Procedural Approach

Code functions aur sequence ke around organized hota hai.

```javascript
function calculateArea(width, height) {
    return width * height;
}
```

### OOP Approach

Data aur behavior ko object/class ke around organize kar sakte hain.

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
```

Dono approaches useful hain; choice application aur problem ke according depend karti hai.

---

# 19. Real-World OOP Example

Suppose ek online shopping application hai.

Possible classes:

```text
User
Product
Cart
Order
Payment
Address
```

Example:

```javascript
class Product {

    constructor(name, price) {

        this.name = name;
        this.price = price;

    }

    display() {

        console.log(
            `${this.name}: ₹${this.price}`
        );

    }

}
```

Object:

```javascript
const product = new Product(
    "Laptop",
    50000
);

product.display();
```

Output:

```text
Laptop: ₹50000
```

---

# 20. Why OOP is Useful in Projects

Large applications mein different entities ko represent karna easier ho sakta hai.

Example:

```text
E-Commerce
│
├── User
├── Product
├── Cart
├── Order
└── Payment
```

Game:

```text
Game
│
├── Player
├── Enemy
├── Weapon
└── Vehicle
```

Banking:

```text
Bank
│
├── Customer
├── Account
├── Transaction
└── Loan
```

---

# 21. OOP Flow

```text
Real-World Entity
       ↓
     Class
       ↓
    Object
       ↓
Properties + Methods
       ↓
Application Behavior
```

Example:

```text
Car
 ↓
Class
 ↓
Car Object
 ↓
brand
color
speed
start()
stop()
```

---

# 22. Important Keywords

### `class`

Class create karne ke liye:

```javascript
class User {

}
```

### `new`

Object create karne ke liye:

```javascript
const user = new User();
```

### `this`

Current object/instance ko refer karne ke context mein commonly use hota hai:

```javascript
this.name
```

### `extends`

Inheritance ke liye:

```javascript
class Dog extends Animal {

}
```

### `super`

Parent class ke constructor/method ko access karne ke liye use hota hai; detail inheritance file mein dekhenge.

---

# Quick Revision

### OOP

```text
Object-Oriented Programming
```

### Object

```javascript
const user = {
    name: "Rohit"
};
```

### Property

```javascript
user.name
```

### Method

```javascript
user.greet()
```

### Class

```javascript
class User {

}
```

### Object from Class

```javascript
const user = new User();
```

### Four Major Concepts

```text
Encapsulation
Abstraction
Inheritance
Polymorphism
```

### Important Keywords

```text
class
new
this
extends
super
```

---

# Next File

```text
17-OOP/02-Classes.md
```