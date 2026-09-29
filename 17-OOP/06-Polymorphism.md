# JavaScript Polymorphism

## 1. What is Polymorphism?

**Polymorphism** OOP ka ek important concept hai.

Polymorphism ka meaning hai:

> **"One interface, multiple forms."**

Simple words mein, same method/interface different objects ke according different behavior perform kar sakta hai.

Example:

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

Ab:

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

lekin behavior different hai.

---

# 2. Meaning of Polymorphism

Word ko break karein:

```text
Poly = Many
Morph = Forms
```

So:

```text
Polymorphism = Many Forms
```

Programming mein ek common interface/method different objects ke liye different behavior provide kar sakta hai.

---

# 3. Real-World Example

Suppose ek `Payment` system hai.

Payment methods:

```text
Credit Card
UPI
Cash
Net Banking
```

Sab mein common action:

```text
pay()
```

Lekin payment ka actual behavior different ho sakta hai.

```text
CreditCard → pay()
UPI        → pay()
Cash       → pay()
```

---

# 4. Basic Polymorphism Example

```javascript
class Animal {

    sound() {

        console.log("Animal sound");

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

---

# 5. Method Overriding

JavaScript mein polymorphism commonly **method overriding** ke through dekha jata hai.

Parent class:

```javascript
class Animal {

    sound() {

        console.log("Animal makes a sound");

    }

}
```

Child:

```javascript
class Dog extends Animal {

    sound() {

        console.log("Dog barks");

    }

}
```

Child ne parent ke method ko override kar diya.

```javascript
const dog = new Dog();

dog.sound();
```

Output:

```text
Dog barks
```

---

# 6. Multiple Child Classes

```javascript
class Animal {

    sound() {

        console.log("Animal sound");

    }

}

class Dog extends Animal {

    sound() {

        console.log("Bark");

    }

}

class Cat extends Animal {

    sound() {

        console.log("Meow");

    }

}

class Cow extends Animal {

    sound() {

        console.log("Moo");

    }

}
```

Objects:

```javascript
const animals = [
    new Dog(),
    new Cat(),
    new Cow()
];

animals.forEach((animal) => {

    animal.sound();

});
```

Output:

```text
Bark
Meow
Moo
```

Yahan:

```text
Same method → sound()
Different objects → Different behavior
```

---

# 7. Polymorphism with Function

Polymorphism function ke saath bhi useful hota hai.

```javascript
function makeSound(animal) {

    animal.sound();

}
```

Now:

```javascript
makeSound(new Dog());
makeSound(new Cat());
makeSound(new Cow());
```

Output:

```text
Bark
Meow
Moo
```

Function ko ye jaanna zaroori nahi ki object exactly `Dog`, `Cat`, ya `Cow` hai.

Bas object mein:

```javascript
sound()
```

available hona chahiye.

---

# 8. Polymorphism and Common Interface

Suppose:

```javascript
class Dog {

    sound() {
        console.log("Bark");
    }

}

class Cat {

    sound() {
        console.log("Meow");
    }

}
```

Dono classes ke beech inheritance zaroori nahi hai.

Function:

```javascript
function playSound(animal) {

    animal.sound();

}
```

Use:

```javascript
playSound(new Dog());
playSound(new Cat());
```

Output:

```text
Bark
Meow
```

JavaScript ki dynamic nature ki wajah se ye style common ho sakta hai.

---

# 9. Duck Typing

JavaScript mein ek common idea hai:

> "If it behaves like the required thing, it can be used."

Example:

```javascript
class Dog {

    sound() {
        console.log("Bark");
    }

}

class Robot {

    sound() {
        console.log("Beep");
    }

}

function makeSound(object) {

    object.sound();

}
```

Now:

```javascript
makeSound(new Dog());
makeSound(new Robot());
```

Output:

```text
Bark
Beep
```

Function ko inheritance relationship ki zaroorat nahi hai.

Usse sirf `sound()` method chahiye.

---

# 10. Polymorphism with `super`

Child class parent method ko extend bhi kar sakti hai.

```javascript
class Animal {

    sound() {

        console.log("Animal sound");

    }

}

class Dog extends Animal {

    sound() {

        super.sound();

        console.log("Dog barks");

    }

}
```

Use:

```javascript
const dog = new Dog();

dog.sound();
```

Output:

```text
Animal sound
Dog barks
```

---

# 11. Polymorphism with Shapes

Shapes ka example:

```javascript
class Shape {

    area() {

        console.log("Calculating area");

    }

}

class Circle extends Shape {

    constructor(radius) {

        super();

        this.radius = radius;

    }

    area() {

        return Math.PI * this.radius ** 2;

    }

}

class Rectangle extends Shape {

    constructor(width, height) {

        super();

        this.width = width;
        this.height = height;

    }

    area() {

        return this.width * this.height;

    }

}
```

Use:

```javascript
const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.area());
console.log(rectangle.area());
```

Yahan:

```text
Same method → area()
Different implementation → Circle / Rectangle
```

---

# 12. Processing Different Objects

Ek function:

```javascript
function printArea(shape) {

    console.log(shape.area());

}
```

Use:

```javascript
printArea(circle);
printArea(rectangle);
```

Function same hai, lekin result object ke according change hota hai.

---

# 13. Payment Example

```javascript
class Payment {

    pay(amount) {

        console.log(
            `Processing payment of ₹${amount}`
        );

    }

}

class UPI extends Payment {

    pay(amount) {

        console.log(
            `Paid ₹${amount} using UPI`
        );

    }

}

class Card extends Payment {

    pay(amount) {

        console.log(
            `Paid ₹${amount} using Card`
        );

    }

}

class Cash extends Payment {

    pay(amount) {

        console.log(
            `Paid ₹${amount} using Cash`
        );

    }

}
```

Use:

```javascript
const payments = [
    new UPI(),
    new Card(),
    new Cash()
];

payments.forEach((payment) => {

    payment.pay(1000);

});
```

Output:

```text
Paid ₹1000 using UPI
Paid ₹1000 using Card
Paid ₹1000 using Cash
```

---

# 14. Employee Example

```javascript
class Employee {

    work() {

        console.log("Employee is working");

    }

}

class Developer extends Employee {

    work() {

        console.log("Developer is coding");

    }

}

class Designer extends Employee {

    work() {

        console.log("Designer is designing");

    }

}

class Manager extends Employee {

    work() {

        console.log("Manager is managing");

    }

}
```

Use:

```javascript
const employees = [
    new Developer(),
    new Designer(),
    new Manager()
];

employees.forEach((employee) => {

    employee.work();

});
```

Output:

```text
Developer is coding
Designer is designing
Manager is managing
```

---

# 15. Polymorphism with Arrays

Different objects ko same array mein store kar sakte hain.

```javascript
class Dog {

    sound() {
        console.log("Bark");
    }

}

class Cat {

    sound() {
        console.log("Meow");
    }

}

const animals = [
    new Dog(),
    new Cat()
];

for (const animal of animals) {

    animal.sound();

}
```

Output:

```text
Bark
Meow
```

---

# 16. Polymorphism with `instanceof`

`instanceof` object ka class relationship check kar sakta hai.

```javascript
class Animal {

}

class Dog extends Animal {

}

const dog = new Dog();

console.log(dog instanceof Dog);
console.log(dog instanceof Animal);
```

Output:

```text
true
true
```

Lekin polymorphism ke liye har situation mein `instanceof` check karna zaroori nahi hota.

Better approach ho sakta hai required method ko directly call karna.

---

# 17. Polymorphism Without Inheritance

JavaScript mein polymorphism ke liye inheritance mandatory nahi hai.

```javascript
const dog = {

    sound() {
        console.log("Bark");
    }

};

const cat = {

    sound() {
        console.log("Meow");
    }

};
```

Function:

```javascript
function makeSound(animal) {

    animal.sound();

}
```

Use:

```javascript
makeSound(dog);
makeSound(cat);
```

Output:

```text
Bark
Meow
```

---

# 18. Method Overriding vs Polymorphism

### Method Overriding

Child class parent ke method ka apna implementation provide karti hai.

```javascript
class Dog extends Animal {

    sound() {

        console.log("Bark");

    }

}
```

### Polymorphism

Different objects ko same interface ke through use karna aur unke according behavior obtain karna.

```javascript
animals.forEach((animal) => {

    animal.sound();

});
```

Method overriding polymorphism achieve karne ka ek common mechanism hai.

---

# 19. Compile-Time vs Runtime Polymorphism

Traditional OOP languages mein polymorphism ko commonly categories mein explain kiya jata hai:

```text
Compile-Time Polymorphism
Runtime Polymorphism
```

JavaScript mein traditional method overloading compile-time form mein C++/Java jaisa directly available nahi hai.

JavaScript mein runtime behavior aur method overriding zyada relevant hain.

---

# 20. Method Overloading in JavaScript

JavaScript mein same class mein multiple methods with the same name ko traditional overloads ki tarah define nahi kar sakte.

Example:

```javascript
class Calculator {

    add(a, b) {

        return a + b;

    }

    add(a, b, c) {

        return a + b + c;

    }

}
```

Yahan second `add()` first ko replace kar dega.

Isliye JavaScript mein arguments/default parameters/rest parameters jaise approaches use kiye ja sakte hain.

---

# 21. Simulating Overloading

Default parameters:

```javascript
class Calculator {

    add(a, b, c = 0) {

        return a + b + c;

    }

}
```

Now:

```javascript
const calculator = new Calculator();

console.log(
    calculator.add(10, 20)
);

console.log(
    calculator.add(10, 20, 30)
);
```

Output:

```text
30
60
```

---

# 22. Polymorphism with Default Parameters

Methods different input situations handle kar sakte hain.

```javascript
class Greeting {

    sayHello(name = "Guest") {

        console.log(`Hello ${name}`);

    }

}

const greeting = new Greeting();

greeting.sayHello();
greeting.sayHello("Rohit");
```

Output:

```text
Hello Guest
Hello Rohit
```

---

# 23. Real-World Example: Notifications

```javascript
class Notification {

    send(message) {

        console.log(
            `Sending: ${message}`
        );

    }

}

class EmailNotification extends Notification {

    send(message) {

        console.log(
            `Email: ${message}`
        );

    }

}

class SMSNotification extends Notification {

    send(message) {

        console.log(
            `SMS: ${message}`
        );

    }

}

class PushNotification extends Notification {

    send(message) {

        console.log(
            `Push: ${message}`
        );

    }

}
```

Use:

```javascript
const notifications = [

    new EmailNotification(),
    new SMSNotification(),
    new PushNotification()

];

notifications.forEach((notification) => {

    notification.send("Hello Rohit");

});
```

Output:

```text
Email: Hello Rohit
SMS: Hello Rohit
Push: Hello Rohit
```

---

# 24. Real-World Example: Vehicles

```javascript
class Vehicle {

    move() {

        console.log("Vehicle is moving");

    }

}

class Car extends Vehicle {

    move() {

        console.log("Car is driving");

    }

}

class Boat extends Vehicle {

    move() {

        console.log("Boat is sailing");

    }

}

class Airplane extends Vehicle {

    move() {

        console.log("Airplane is flying");

    }

}
```

Use:

```javascript
const vehicles = [
    new Car(),
    new Boat(),
    new Airplane()
];

vehicles.forEach((vehicle) => {

    vehicle.move();

});
```

Output:

```text
Car is driving
Boat is sailing
Airplane is flying
```

---

# 25. Polymorphism Flow

```text
             Common Interface
                    │
                    ↓
                 method()
                    │
        ┌───────────┼───────────┐
        ↓           ↓           ↓
      Object      Object      Object
        ↓           ↓           ↓
    behavior 1  behavior 2  behavior 3
```

Example:

```text
             sound()
                │
       ┌────────┼────────┐
       ↓        ↓        ↓
      Dog      Cat      Cow
       ↓        ↓        ↓
     Bark     Meow      Moo
```

---

# 26. Benefits of Polymorphism

```text
✓ Flexible code
✓ Common interface
✓ Less duplicate code
✓ Easier to extend
✓ Different implementations possible
✓ Large applications mein useful
```

Example:

Agar new payment method add karna ho:

```text
Existing:
UPI
Card
Cash

New:
Wallet
```

Agar sabke paas:

```javascript
pay()
```

method hai, to common processing code ko extend karna easier ho sakta hai.

---

# 27. Polymorphism Example with Function

```javascript
function processPayment(payment) {

    payment.pay(500);

}
```

Ab:

```javascript
processPayment(new UPI());
processPayment(new Card());
processPayment(new Cash());
```

Function same:

```text
processPayment()
```

Behavior different:

```text
UPI  → UPI payment
Card → Card payment
Cash → Cash payment
```

---

# 28. Complete Example

```javascript
class Employee {

    constructor(name) {

        this.name = name;

    }

    work() {

        console.log(
            `${this.name} is working`
        );

    }

}

class Developer extends Employee {

    work() {

        console.log(
            `${this.name} is writing code`
        );

    }

}

class Designer extends Employee {

    work() {

        console.log(
            `${this.name} is designing UI`
        );

    }

}

class Tester extends Employee {

    work() {

        console.log(
            `${this.name} is testing software`
        );

    }

}

const employees = [

    new Developer("Rohit"),
    new Designer("Aman"),
    new Tester("Rahul")

];

employees.forEach((employee) => {

    employee.work();

});
```

Output:

```text
Rohit is writing code
Aman is designing UI
Rahul is testing software
```

Yahan:

```text
Employee
   ↓
Common method: work()
   ↓
Developer → writing code
Designer  → designing UI
Tester    → testing software
```

Ye polymorphism ka practical example hai.

---

# Quick Revision

### Polymorphism

```text
One Interface
      ↓
Multiple Forms
```

### Method Overriding

```javascript
class Dog extends Animal {

    sound() {

        console.log("Bark");

    }

}
```

### Common Method

```javascript
animal.sound();
```

### Multiple Behaviors

```text
Dog → Bark
Cat → Meow
Cow → Moo
```

### Array Example

```javascript
const animals = [
    new Dog(),
    new Cat(),
    new Cow()
];

animals.forEach((animal) => {

    animal.sound();

});
```

### Without Inheritance

```javascript
const dog = {

    sound() {
        console.log("Bark");
    }

};

const cat = {

    sound() {
        console.log("Meow");
    }

};
```

---

# OOP Complete

Ab **17-OOP** ke saare topics complete ho gaye:

```text
17-OOP
│
├── 01-OOP-Basics.md
├── 02-Classes.md
├── 03-Constructor.md
├── 04-Inheritance.md
├── 05-Encapsulation.md
├── 06-Polymorphism.md
└── Projects
```

## Next Folder

Ab next **18-Advanced-JavaScript** hai:

```text
18-Advanced-JavaScript
│
├── 01-Execution-Context.md  ← NEXT
├── 02-Call-Stack.md
├── 03-Event-Loop.md
├── 04-Closures.md
├── 05-Prototypes.md
├── 06-Prototype-Chain.md
├── 07-this-Deep-Dive.md
└── Projects
```