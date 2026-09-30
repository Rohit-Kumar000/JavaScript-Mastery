# JavaScript Prototypes

## 1. What is a Prototype?

JavaScript mein almost every object ka ek **prototype** hota hai jisse woh properties aur methods inherit kar sakta hai.

Simple words mein:

> Prototype ek object hota hai jahan se doosre objects properties aur methods inherit kar sakte hain.

Example:

```javascript
const user = {
    name: "Rohit"
};

console.log(user.toString());
```

Humne `toString()` khud `user` object ke andar define nahi kiya.

Phir bhi ye method available hai.

Kyun?

Because object ko `Object.prototype` se methods inherit hote hain.

---

# 2. Prototype ka Basic Idea

Conceptually:

```text
user object
     │
     ↓
Object.prototype
     │
     ↓
null
```

Agar JavaScript ko `user` ke andar koi property nahi milti, to woh prototype chain mein search kar sakti hai.

---

# 3. Every Object Has a Prototype

Example:

```javascript
const person = {
    name: "Rohit"
};
```

Conceptually:

```text
person
  ↓
Object.prototype
  ↓
null
```

Isliye `person` inherited methods use kar sakta hai.

Example:

```javascript
person.toString();
```

---

# 4. Prototype Property

JavaScript functions ke paas commonly ek `prototype` property hoti hai.

Example:

```javascript
function Person(name) {

    this.name = name;

}

console.log(Person.prototype);
```

`Person.prototype` ek object hota hai.

---

# 5. Prototype Object

Example:

```javascript
function Person(name) {

    this.name = name;

}

Person.prototype.greet = function() {

    console.log(`Hello, ${this.name}`);

};
```

Ab:

```javascript
const user1 = new Person("Rohit");
const user2 = new Person("Aman");

user1.greet();
user2.greet();
```

Output:

```text
Hello, Rohit
Hello, Aman
```

`greet()` har object ke andar separately create nahi hua.

Dono objects `Person.prototype` se method access karte hain.

---

# 6. Why Use Prototypes?

Suppose:

```javascript
const user1 = {
    name: "Rohit",
    greet() {
        console.log("Hello");
    }
};

const user2 = {
    name: "Aman",
    greet() {
        console.log("Hello");
    }
};
```

Yahan `greet()` multiple times define ho raha hai.

Prototype ke saath method shared ho sakta hai.

```text
user1 ─────┐
           │
           ↓
      Person.prototype
           ↑
           │
user2 ─────┘
```

---

# 7. Constructor Function

Prototype ko samajhne ke liye constructor functions important hain.

Example:

```javascript
function Person(name, age) {

    this.name = name;
    this.age = age;

}
```

Objects create:

```javascript
const person1 = new Person("Rohit", 25);
const person2 = new Person("Aman", 24);
```

Conceptually:

```text
person1
   ↓
Person.prototype

person2
   ↓
Person.prototype
```

---

# 8. Adding Method to Prototype

```javascript
function Person(name) {

    this.name = name;

}

Person.prototype.sayHello = function() {

    console.log(`Hello ${this.name}`);

};
```

Create objects:

```javascript
const p1 = new Person("Rohit");
const p2 = new Person("Aman");

p1.sayHello();
p2.sayHello();
```

Output:

```text
Hello Rohit
Hello Aman
```

---

# 9. Shared Method

Important:

```javascript
p1.sayHello === p2.sayHello
```

Output:

```text
true
```

Because both objects access the same prototype method.

---

# 10. Prototype vs Object Property

Example:

```javascript
function Person(name) {

    this.name = name;

}

Person.prototype.country = "India";

const person = new Person("Rohit");
```

Here:

```text
name
↓
person object ke own property

country
↓
Person.prototype se inherited
```

Check:

```javascript
console.log(person.name);
console.log(person.country);
```

Output:

```text
Rohit
India
```

---

# 11. Own Property

JavaScript mein check kar sakte hain:

```javascript
console.log(person.hasOwnProperty("name"));
```

Output:

```text
true
```

Because `name` directly `person` object par hai.

```javascript
console.log(person.hasOwnProperty("country"));
```

Output:

```text
false
```

Because `country` prototype se aa raha hai.

---

# 12. `Object.getPrototypeOf()`

Object ka prototype check karne ke liye:

```javascript
const user = {
    name: "Rohit"
};

console.log(Object.getPrototypeOf(user));
```

Ye object ka prototype return karta hai.

For normal object:

```text
user
 ↓
Object.prototype
```

---

# 13. `Object.setPrototypeOf()`

Prototype manually set bhi kiya ja sakta hai:

```javascript
const animal = {
    eat() {
        console.log("Eating");
    }
};

const dog = {};

Object.setPrototypeOf(dog, animal);

dog.eat();
```

Output:

```text
Eating
```

`dog` ko `animal` se prototype inheritance mil gayi.

---

# 14. `__proto__`

Objects ke prototype ko inspect/set karne ke liye historical property:

```javascript
__proto__
```

Example:

```javascript
const user = {};

console.log(user.__proto__);
```

Ye generally `Object.prototype` ko refer karega.

However, modern code mein prototype operations ke liye prefer:

```javascript
Object.getPrototypeOf()
Object.setPrototypeOf()
```

---

# 15. Prototype Chain

Agar property object par nahi milti, JavaScript prototype ko check karti hai.

Example:

```javascript
const user = {
    name: "Rohit"
};

console.log(user.toString());
```

Search:

```text
user
 ↓
Object.prototype
 ↓
toString()
```

`toString()` `Object.prototype` se milta hai.

---

# 16. Example of Inheritance

```javascript
const animal = {

    eat() {

        console.log("Eating");

    }

};

const dog = {

    bark() {

        console.log("Barking");

    }

};

Object.setPrototypeOf(dog, animal);

dog.bark();
dog.eat();
```

Output:

```text
Barking
Eating
```

`dog` ke paas:

```text
Own:
bark()

Prototype:
eat()
```

---

# 17. Prototype Lookup

Example:

```javascript
const user = {
    name: "Rohit"
};

console.log(user.name);
```

JavaScript:

```text
user
 ↓
name found
 ↓
return "Rohit"
```

Now:

```javascript
console.log(user.toString());
```

Search:

```text
user
 ↓
toString not found
 ↓
Object.prototype
 ↓
toString found
 ↓
execute
```

---

# 18. Prototype Property Shadowing

Agar object aur prototype dono mein same property ho, object ki own property generally prototype wali property ko shadow karti hai.

Example:

```javascript
const animal = {

    name: "Animal"

};

const dog = {

    name: "Dog"

};

Object.setPrototypeOf(dog, animal);

console.log(dog.name);
```

Output:

```text
Dog
```

Search:

```text
dog.name
 ↓
Found on dog
 ↓
Stop
```

Prototype ki `name` use nahi hogi.

---

# 19. Constructor Prototype

Example:

```javascript
function Person(name) {

    this.name = name;

}

console.log(Person.prototype);
```

`Person.prototype` ek object hota hai.

By default, usmein constructor property hoti hai:

```javascript
Person.prototype.constructor
```

which refers back to:

```javascript
Person
```

---

# 20. Constructor Property

```javascript
function Person() {}

console.log(Person.prototype.constructor === Person);
```

Output:

```text
true
```

Conceptually:

```text
Person
   ↑
   │ constructor
   │
Person.prototype
```

---

# 21. Prototype and `new`

Example:

```javascript
function Person(name) {

    this.name = name;

}

const person = new Person("Rohit");
```

`new` ke saath object creation process conceptually includes:

```text
1. New object create
2. Object ka prototype Person.prototype se connect
3. Person function this ke saath execute
4. New object return
```

Simplified:

```text
new Person("Rohit")
       ↓
New Object
       ↓
Prototype → Person.prototype
       ↓
this.name = "Rohit"
       ↓
Object returned
```

---

# 22. Prototype Method with Constructor

```javascript
function Person(name) {

    this.name = name;

}

Person.prototype.greet = function() {

    console.log(`Hello ${this.name}`);

};

const person = new Person("Rohit");

person.greet();
```

Output:

```text
Hello Rohit
```

---

# 23. Why Not Put Methods Inside Constructor?

You could do:

```javascript
function Person(name) {

    this.name = name;

    this.greet = function() {

        console.log(`Hello ${this.name}`);

    };

}
```

But every instance gets its own function object.

Prototype approach:

```javascript
function Person(name) {

    this.name = name;

}

Person.prototype.greet = function() {

    console.log(`Hello ${this.name}`);

};
```

Method prototype par shared hota hai.

---

# 24. Prototype Memory Concept

Constructor approach:

```text
person1 → greet()
person2 → greet()
person3 → greet()
```

Prototype approach:

```text
person1 ─┐
person2 ─┼──→ Person.prototype → greet()
person3 ─┘
```

Isse same method ko instances ke beech share kiya ja sakta hai.

---

# 25. Built-in Prototypes

JavaScript ke built-in objects bhi prototypes use karte hain.

Examples:

```text
Object.prototype
Array.prototype
String.prototype
Number.prototype
Function.prototype
```

---

# 26. Array Prototype

Example:

```javascript
const numbers = [1, 2, 3];

console.log(numbers.map);
```

`map()` directly array ke own property ke roop mein generally nahi hota.

Ye:

```text
Array.prototype
```

se available hota hai.

Example:

```javascript
numbers.map(num => num * 2);
```

---

# 27. String Prototype

Example:

```javascript
const name = "Rohit";

console.log(name.toUpperCase());
```

`toUpperCase()` String prototype se available hota hai.

Conceptually:

```text
"Rohit"
   ↓
String.prototype
   ↓
toUpperCase()
```

---

# 28. Number Prototype

Example:

```javascript
const number = 10.567;

console.log(number.toFixed(2));
```

Output:

```text
10.57
```

`toFixed()` Number prototype se available hota hai.

---

# 29. Function Prototype

Functions bhi objects hote hain aur prototype-related behavior rakhte hain.

Example:

```javascript
function test() {}

console.log(test.prototype);
```

Normal function ka `prototype` object hota hai.

---

# 30. Important Difference

Ye do concepts confuse mat karna:

```text
function.prototype
```

and:

```text
Object.getPrototypeOf(object)
```

### `Person.prototype`

Constructor function ki property hai.

### `Object.getPrototypeOf(person)`

Specific object ka actual prototype retrieve karta hai.

Example:

```javascript
function Person() {}

const person = new Person();

console.log(Person.prototype === Object.getPrototypeOf(person));
```

Output:

```text
true
```

---

# 31. Prototype Chain Example

```javascript
function Person(name) {

    this.name = name;

}

const person = new Person("Rohit");
```

Conceptually:

```text
person
  ↓
Person.prototype
  ↓
Object.prototype
  ↓
null
```

Agar `person` mein property nahi milti:

```text
person
 ↓
Person.prototype
 ↓
Object.prototype
 ↓
null
```

JavaScript chain mein search karti hai.

---

# 32. Prototype Chain Search

Example:

```javascript
console.log(person.toString());
```

Search:

```text
person
   ↓
not found
   ↓
Person.prototype
   ↓
not found
   ↓
Object.prototype
   ↓
toString found
```

---

# 33. Prototype Inheritance

Example:

```javascript
function Animal() {}

Animal.prototype.eat = function() {

    console.log("Eating");

};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function() {

    console.log("Barking");

};

const dog = new Dog();

dog.eat();
dog.bark();
```

Output:

```text
Eating
Barking
```

Conceptually:

```text
dog
 ↓
Dog.prototype
 ↓
Animal.prototype
 ↓
Object.prototype
 ↓
null
```

---

# 34. Reset Constructor After Prototype Replacement

When doing:

```javascript
Dog.prototype = Object.create(Animal.prototype);
```

the `constructor` property can point differently than expected.

Often we restore it:

```javascript
Dog.prototype.constructor = Dog;
```

Complete:

```javascript
function Animal() {}

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;
```

---

# 35. `Object.create()`

`Object.create()` se prototype relationship directly create kar sakta hai.

Example:

```javascript
const animal = {

    eat() {

        console.log("Eating");

    }

};

const dog = Object.create(animal);

dog.bark = function() {

    console.log("Barking");

};

dog.eat();
dog.bark();
```

Output:

```text
Eating
Barking
```

---

# 36. Prototype Chain with `Object.create()`

```javascript
const parent = {

    greet() {

        console.log("Hello");

    }

};

const child = Object.create(parent);
```

Chain:

```text
child
  ↓
parent
  ↓
Object.prototype
  ↓
null
```

---

# 37. `hasOwnProperty()`

Example:

```javascript
const parent = {

    name: "Parent"

};

const child = Object.create(parent);

child.age = 25;

console.log(child.hasOwnProperty("age"));
console.log(child.hasOwnProperty("name"));
```

Output:

```text
true
false
```

Because:

```text
age → child own property
name → inherited property
```

---

# 38. `in` Operator

`in` operator own + inherited properties dono check kar sakta hai.

```javascript
const parent = {

    name: "Parent"

};

const child = Object.create(parent);

child.age = 25;

console.log("age" in child);
console.log("name" in child);
```

Output:

```text
true
true
```

---

# 39. Own Property vs Inherited Property

```text
Own Property
     ↓
Directly object par available

Inherited Property
     ↓
Prototype chain se available
```

Example:

```javascript
const parent = {
    country: "India"
};

const child = Object.create(parent);

child.name = "Rohit";
```

```text
child
├── name        ← own
│
└── prototype
      └── country  ← inherited
```

---

# 40. Prototype Pollution Awareness

JavaScript applications mein prototypes powerful hain, but untrusted input ke saath prototype-related operations carefully handle karne chahiye.

Especially user-controlled object keys ko blindly merge karna unexpected behavior create kar sakta hai.

Production code mein:

```text
✓ Validate input
✓ Avoid unsafe prototype manipulation
✓ Use safe object-handling patterns
```

---

# 41. Prototype vs Class

Modern JavaScript mein classes available hain:

```javascript
class Person {

    constructor(name) {

        this.name = name;

    }

    greet() {

        console.log(`Hello ${this.name}`);

    }

}
```

But JavaScript classes internally prototype-based inheritance mechanism ke upar work karti hain.

So:

```text
class syntax
    ↓
Prototype-based behavior
```

---

# 42. Class Method and Prototype

Example:

```javascript
class Person {

    greet() {

        console.log("Hello");

    }

}
```

Method instances ke own object mein separately define hone ke bajay prototype mechanism ke through available hota hai.

Conceptually:

```text
person
  ↓
Person.prototype
  ↓
greet()
```

---

# 43. Prototype Example with Class

```javascript
class Person {

    constructor(name) {

        this.name = name;

    }

    greet() {

        console.log(`Hello ${this.name}`);

    }

}

const person = new Person("Rohit");

console.log(
    Object.getPrototypeOf(person) === Person.prototype
);
```

Output:

```text
true
```

---

# 44. Prototype Chain Mental Model

```text
┌──────────────────┐
│      object      │
│                  │
│ name: "Rohit"    │
└────────┬─────────┘
         │
         ↓
┌──────────────────┐
│ Person.prototype │
│                  │
│ greet()          │
└────────┬─────────┘
         │
         ↓
┌──────────────────┐
│ Object.prototype │
│                  │
│ toString()       │
│ hasOwnProperty() │
└────────┬─────────┘
         │
         ↓
       null
```

---

# 45. Important Interview Question

### Q. What is a Prototype?

**Answer:**

A prototype is an object from which another object can inherit properties and methods through JavaScript's prototype-based inheritance system.

---

# 46. Important Interview Question

### Q. What is Prototype Chain?

**Answer:**

Prototype Chain is the chain of objects JavaScript follows when looking for a property or method that is not found directly on the current object.

Example:

```text
object
 ↓
Parent.prototype
 ↓
Object.prototype
 ↓
null
```

---

# 47. Important Interview Question

### Q. What is `prototype` property?

For constructor functions, `prototype` is a property that points to an object whose properties/methods can become available to instances created with `new`.

Example:

```javascript
function Person() {}

console.log(Person.prototype);
```

---

# 48. Important Interview Question

### Q. What is `__proto__`?

`__proto__` is a legacy accessor for an object's prototype.

Example:

```javascript
const user = {};

console.log(user.__proto__);
```

Modern code should generally prefer:

```javascript
Object.getPrototypeOf(user);
```

and:

```javascript
Object.setPrototypeOf(user, prototype);
```

---

# 49. Important Interview Question

### Q. What is the difference between `prototype` and `__proto__`?

```text
prototype
    ↓
Property commonly found on constructor functions

__proto__
    ↓
Legacy accessor related to an object's actual prototype
```

Example:

```javascript
function Person() {}

const person = new Person();

Person.prototype === Object.getPrototypeOf(person);
```

Output:

```text
true
```

---

# 50. Quick Revision

### Prototype

```text
Object used for inheritance
```

### Prototype Chain

```text
Object
 ↓
Prototype
 ↓
Parent Prototype
 ↓
Object.prototype
 ↓
null
```

### Constructor

```javascript
function Person() {}
```

### Constructor Prototype

```javascript
Person.prototype
```

### Object Prototype

```javascript
Object.getPrototypeOf(person)
```

### Create Prototype Relationship

```javascript
Object.create(parent);
```

### Check Own Property

```javascript
object.hasOwnProperty("property");
```

### Check Own + Inherited

```javascript
"property" in object;
```

---

# Final Mental Model

```text
                    JavaScript Object
                           │
                           ↓
                    Own Properties
                           │
                     not found?
                           │
                           ↓
                      Prototype
                           │
                     not found?
                           │
                           ↓
                  Prototype's Prototype
                           │
                           ↓
                   Object.prototype
                           │
                           ↓
                          null
```

## One-Line Definition

> **Prototype is JavaScript's mechanism for sharing and inheriting properties and methods between objects.**

---

## Next File

```text
18-Advanced-JavaScript/06-Prototype-Chain.md
```