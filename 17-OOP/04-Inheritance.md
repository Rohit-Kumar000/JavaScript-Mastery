# JavaScript Inheritance

## 1. What is Inheritance?

**Inheritance** OOP ka ek important concept hai jisme ek class doosri class ke properties aur methods ko reuse kar sakti hai.

JavaScript mein inheritance ke liye commonly:

```javascript
extends
```

keyword use hota hai.

Example:

```javascript
class Animal {

    eat() {
        console.log("Animal is eating");
    }

}

class Dog extends Animal {

    bark() {
        console.log("Dog is barking");
    }

}
```

Ab `Dog` ke object ke paas `Animal` ka `eat()` method bhi available hoga.

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

---

# 2. Why Use Inheritance?

Inheritance ka main purpose **code reuse** hai.

Suppose:

```text
Animal
│
├── Dog
├── Cat
└── Cow
```

Sabhi animals ke kuch common behaviors ho sakte hain:

```text
eat()
sleep()
```

Inhe baar-baar har class mein likhne ki jagah parent class mein define kar sakte hain.

```javascript
class Animal {

    eat() {
        console.log("Eating");
    }

    sleep() {
        console.log("Sleeping");
    }

}

class Dog extends Animal {

    bark() {
        console.log("Barking");
    }

}
```

---

# 3. Parent and Child Class

Inheritance mein commonly do terms use hote hain:

```text
Parent Class
     ↓
Child Class
```

Example:

```javascript
class Animal {

}

class Dog extends Animal {

}
```

Yahan:

```text
Animal → Parent Class
Dog    → Child Class
```

Another terminology:

```text
Super Class → Parent
Sub Class   → Child
```

---

# 4. `extends` Keyword

`extends` ka use child class ko parent class se inherit karne ke liye hota hai.

```javascript
class Animal {

    eat() {
        console.log("Eating");
    }

}

class Dog extends Animal {

    bark() {
        console.log("Barking");
    }

}
```

`Dog` automatically `Animal` ke accessible methods ko use kar sakta hai.

---

# 5. Basic Inheritance Example

```javascript
class Animal {

    eat() {
        console.log("Animal is eating");
    }

}

class Dog extends Animal {

    bark() {
        console.log("Dog is barking");
    }

}

const dog = new Dog();

dog.eat();
dog.bark();
```

Output:

```text
Animal is eating
Dog is barking
```

---

# 6. Inheriting Properties

Parent class ke constructor mein properties define kar sakte hain.

```javascript
class Animal {

    constructor(name) {

        this.name = name;

    }

    eat() {

        console.log(`${this.name} is eating`);

    }

}

class Dog extends Animal {

    bark() {

        console.log(`${this.name} is barking`);

    }

}

const dog = new Dog("Tommy");

dog.eat();
dog.bark();
```

Output:

```text
Tommy is eating
Tommy is barking
```

---

# 7. `super()`

Child class ke constructor se parent class ke constructor ko call karne ke liye `super()` use hota hai.

Example:

```javascript
class Animal {

    constructor(name) {

        this.name = name;

    }

}

class Dog extends Animal {

    constructor(name, breed) {

        super(name);

        this.breed = breed;

    }

}

const dog = new Dog(
    "Tommy",
    "Labrador"
);

console.log(dog.name);
console.log(dog.breed);
```

Output:

```text
Tommy
Labrador
```

Yahan:

```javascript
super(name);
```

parent class:

```javascript
Animal
```

ke constructor ko call karta hai.

---

# 8. Why `super()` is Required?

Agar child class mein constructor define kiya hai, to parent class ko initialize karne ke liye `super()` call karna hota hai before using `this`.

Invalid:

```javascript
class Animal {

    constructor(name) {

        this.name = name;

    }

}

class Dog extends Animal {

    constructor(name, breed) {

        this.breed = breed;

        super(name);

    }

}
```

Yahan `super()` se pehle `this` use ho raha hai.

Correct:

```javascript
class Dog extends Animal {

    constructor(name, breed) {

        super(name);

        this.breed = breed;

    }

}
```

---

# 9. Child Class Without Constructor

Agar child class mein constructor define nahi kiya, to parent constructor automatically use ho sakta hai.

```javascript
class Animal {

    constructor(name) {

        this.name = name;

    }

}

class Dog extends Animal {

    bark() {

        console.log("Barking");

    }

}

const dog = new Dog("Tommy");

console.log(dog.name);
```

Output:

```text
Tommy
```

---

# 10. `super.method()`

`super` ka use parent class ke method ko call karne ke liye bhi hota hai.

```javascript
class Animal {

    speak() {

        console.log("Animal makes a sound");

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
Animal makes a sound
Dog barks
```

---

# 11. Method Overriding

Child class parent ke method ko apne version se replace kar sakti hai.

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

const dog = new Dog();

dog.sound();
```

Output:

```text
Dog barks
```

Yahan `Dog` ne parent ke `sound()` method ko override kar diya.

---

# 12. Method Overriding with `super`

Parent method ko bhi execute karna ho to `super.method()` use kar sakte hain.

```javascript
class Animal {

    sound() {

        console.log("Animal makes a sound");

    }

}

class Dog extends Animal {

    sound() {

        super.sound();

        console.log("Dog barks");

    }

}

const dog = new Dog();

dog.sound();
```

Output:

```text
Animal makes a sound
Dog barks
```

---

# 13. Multi-Level Inheritance

Inheritance multiple levels tak ho sakti hai.

Example:

```text
Animal
   ↓
Mammal
   ↓
Dog
```

Code:

```javascript
class Animal {

    eat() {

        console.log("Eating");

    }

}

class Mammal extends Animal {

    walk() {

        console.log("Walking");

    }

}

class Dog extends Mammal {

    bark() {

        console.log("Barking");

    }

}
```

Object:

```javascript
const dog = new Dog();

dog.eat();
dog.walk();
dog.bark();
```

Output:

```text
Eating
Walking
Barking
```

`Dog` ko `Mammal` se aur `Mammal` ko `Animal` se inherited behavior milta hai.

---

# 14. Inheritance Chain

```text
Animal
  │
  └── Mammal
        │
        └── Dog
```

Method lookup roughly:

```text
Dog
 ↓
Mammal
 ↓
Animal
 ↓
Object.prototype
 ↓
null
```

Is concept ko **prototype chain** se connect karke advanced JavaScript mein detail mein dekhenge.

---

# 15. Real-World Example: Vehicles

Parent class:

```javascript
class Vehicle {

    constructor(brand) {

        this.brand = brand;

    }

    start() {

        console.log(
            `${this.brand} started`
        );

    }

}
```

Child class:

```javascript
class Car extends Vehicle {

    drive() {

        console.log("Car is driving");

    }

}
```

Object:

```javascript
const car = new Car("Toyota");

car.start();
car.drive();
```

Output:

```text
Toyota started
Car is driving
```

---

# 16. Real-World Example: Employees

Parent:

```javascript
class Employee {

    constructor(name, salary) {

        this.name = name;
        this.salary = salary;

    }

    work() {

        console.log(
            `${this.name} is working`
        );

    }

}
```

Child:

```javascript
class Developer extends Employee {

    code() {

        console.log(
            `${this.name} is coding`
        );

    }

}
```

Object:

```javascript
const developer = new Developer(
    "Rohit",
    30000
);

developer.work();
developer.code();
```

Output:

```text
Rohit is working
Rohit is coding
```

---

# 17. Multiple Child Classes

Ek parent class ke multiple child classes ho sakte hain.

```text
        Animal
       /      \
     Dog      Cat
```

Code:

```javascript
class Animal {

    eat() {

        console.log("Eating");

    }

}

class Dog extends Animal {

    bark() {

        console.log("Barking");

    }

}

class Cat extends Animal {

    meow() {

        console.log("Meowing");

    }

}
```

Objects:

```javascript
const dog = new Dog();
const cat = new Cat();

dog.eat();
dog.bark();

cat.eat();
cat.meow();
```

---

# 18. Inheritance and `instanceof`

`instanceof` inheritance relationship check kar sakta hai.

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

Kyunki `Dog` `Animal` se inherit karta hai.

---

# 19. Inheritance with Private Fields

Private fields directly child class mein accessible nahi hote.

```javascript
class Animal {

    #secret = "hidden";

    getSecret() {

        return this.#secret;

    }

}

class Dog extends Animal {

}
```

`Dog` inherited public method use kar sakta hai:

```javascript
const dog = new Dog();

console.log(dog.getSecret());
```

Lekin:

```javascript
dog.#secret
```

invalid hai.

Private field ka access us class ke andar restricted hota hai jahan define hua hai.

---

# 20. Static Inheritance

Static members bhi inheritance chain ka part ho sakte hain.

```javascript
class Animal {

    static category() {

        return "Animal";

    }

}

class Dog extends Animal {

}

console.log(Dog.category());
```

Output:

```text
Animal
```

Yahan `Dog` ko parent class ka static method available hai.

---

# 21. Inheritance vs Composition

Har situation mein inheritance use karna zaroori nahi.

### Inheritance

```text
Dog IS-A Animal
```

Dog ek Animal hai.

### Composition

```text
Car HAS-A Engine
```

Car ke andar Engine hai.

Example:

```javascript
class Engine {

    start() {

        console.log("Engine started");

    }

}

class Car {

    constructor() {

        this.engine = new Engine();

    }

    start() {

        this.engine.start();

    }

}
```

Yahan `Car` `Engine` se inherit nahi kar rahi.

Instead:

```text
Car
 ↓
HAS-A
 ↓
Engine
```

---

# 22. When to Use Inheritance?

Inheritance tab useful ho sakti hai jab:

```text
✓ Classes ke beech clear parent-child relationship ho
✓ Common functionality reuse karni ho
✓ Child class parent ka specialized version ho
```

Example:

```text
Animal → Dog
Vehicle → Car
Employee → Developer
Shape → Circle
```

---

# 23. Complete Example

```javascript
class Person {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }

    introduce() {

        console.log(
            `My name is ${this.name}`
        );

    }

}

class Student extends Person {

    constructor(name, age, course) {

        super(name, age);

        this.course = course;

    }

    study() {

        console.log(
            `${this.name} is studying ${this.course}`
        );

    }

}

const student = new Student(
    "Rohit",
    25,
    "MCA"
);

student.introduce();
student.study();
```

Output:

```text
My name is Rohit
Rohit is studying MCA
```

Structure:

```text
Person
│
├── name
├── age
└── introduce()
       │
       ↓
    Student
       │
       ├── course
       └── study()
```

---

# 24. Important Keywords

### `extends`

Parent class se inheritance:

```javascript
class Dog extends Animal {

}
```

### `super()`

Parent constructor call:

```javascript
super(name);
```

### `super.method()`

Parent method call:

```javascript
super.sound();
```

### `instanceof`

Inheritance/instance relationship check:

```javascript
dog instanceof Animal;
```

---

# Quick Revision

### Parent Class

```javascript
class Animal {

    eat() {
        console.log("Eating");
    }

}
```

### Child Class

```javascript
class Dog extends Animal {

    bark() {
        console.log("Barking");
    }

}
```

### Object

```javascript
const dog = new Dog();

dog.eat();
dog.bark();
```

### Parent Constructor

```javascript
class Dog extends Animal {

    constructor(name) {

        super(name);

    }

}
```

### Parent Method

```javascript
super.eat();
```

### Method Overriding

```javascript
class Dog extends Animal {

    eat() {

        console.log("Dog is eating");

    }

}
```

### Multi-Level

```text
Animal
  ↓
Mammal
  ↓
Dog
```

---

# Inheritance Flow

```text
             Parent Class
                  │
                  │ extends
                  ↓
             Child Class
                  │
          ┌───────┴───────┐
          ↓               ↓
    Parent Methods    Child Methods
          │               │
          └───────┬───────┘
                  ↓
              Child Object
```

---

## Next File

```text
17-OOP/05-Encapsulation.md
```