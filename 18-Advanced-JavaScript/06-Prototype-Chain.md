# JavaScript Prototype Chain

## 1. What is Prototype Chain?

**Prototype Chain** JavaScript ka mechanism hai jisme JavaScript kisi property ya method ko find karne ke liye ek object se uske prototype aur phir uske prototype ke prototype tak search karti hai.

Simple words mein:

> Agar property current object mein nahi milti, JavaScript uske prototype mein search karti hai. Wahan bhi nahi milti to next prototype mein search karti hai.

---

# 2. Basic Example

```javascript
const user = {
    name: "Rohit"
};

console.log(user.toString());
```

Humne `toString()` `user` object mein define nahi kiya.

Phir bhi ye work karta hai.

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

# 3. Prototype Chain Structure

Normal object ke liye simplified chain:

```text
user
 ↓
Object.prototype
 ↓
null
```

Example:

```javascript
const user = {
    name: "Rohit"
};
```

Conceptually:

```text
┌───────────────┐
│     user      │
│ name: Rohit   │
└───────┬───────┘
        ↓
┌─────────────────────┐
│ Object.prototype    │
│ toString()          │
│ hasOwnProperty()    │
└─────────┬───────────┘
          ↓
        null
```

---

# 4. Property Lookup

Example:

```javascript
const user = {
    name: "Rohit"
};

console.log(user.name);
```

JavaScript search karti hai:

```text
user
 ↓
name found
 ↓
"Rohit"
```

Prototype chain ki zaroorat nahi padti.

---

# 5. Property Not Found on Object

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
toString not found
 ↓
Object.prototype
 ↓
toString found
 ↓
execute
```

---

# 6. Property Not Found Anywhere

Example:

```javascript
const user = {
    name: "Rohit"
};

console.log(user.xyz);
```

Search:

```text
user
 ↓
xyz not found
 ↓
Object.prototype
 ↓
xyz not found
 ↓
null
 ↓
undefined
```

Output:

```text
undefined
```

---

# 7. `Object.getPrototypeOf()`

Prototype chain inspect karne ke liye:

```javascript
const user = {
    name: "Rohit"
};

console.log(Object.getPrototypeOf(user));
```

Output conceptually:

```text
Object.prototype
```

---

# 8. Checking the Next Prototype

```javascript
const user = {
    name: "Rohit"
};

const prototype = Object.getPrototypeOf(user);

console.log(prototype);
```

Then:

```javascript
console.log(Object.getPrototypeOf(prototype));
```

Normal object ke case mein:

```text
user
 ↓
Object.prototype
 ↓
null
```

---

# 9. `null` Marks the End

Prototype chain ka end:

```text
null
```

Example:

```javascript
const user = {};

console.log(Object.getPrototypeOf(user));
```

Gives:

```text
Object.prototype
```

Then:

```javascript
console.log(
    Object.getPrototypeOf(
        Object.getPrototypeOf(user)
    )
);
```

Output:

```text
null
```

---

# 10. Constructor Function Example

```javascript
function Person(name) {

    this.name = name;

}

const person = new Person("Rohit");
```

Prototype chain:

```text
person
 ↓
Person.prototype
 ↓
Object.prototype
 ↓
null
```

---

# 11. Adding Method to Prototype

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

Search:

```text
person
 ↓
greet not found
 ↓
Person.prototype
 ↓
greet found
 ↓
execute
```

---

# 12. Prototype Chain with Inheritance

Example:

```javascript
function Animal() {}

Animal.prototype.eat = function() {

    console.log("Eating");

};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

const dog = new Dog();

dog.eat();
```

Output:

```text
Eating
```

Chain:

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

# 13. Adding Dog Method

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

dog.bark();
dog.eat();
```

Output:

```text
Barking
Eating
```

Search for `bark`:

```text
dog
 ↓
Dog.prototype
 ↓
bark found
```

Search for `eat`:

```text
dog
 ↓
Dog.prototype
 ↓
not found
 ↓
Animal.prototype
 ↓
eat found
```

---

# 14. Complete Prototype Chain

```text
┌─────────────┐
│     dog     │
└──────┬──────┘
       ↓
┌─────────────────┐
│ Dog.prototype   │
│ bark()          │
└──────┬──────────┘
       ↓
┌──────────────────┐
│ Animal.prototype │
│ eat()            │
└──────┬───────────┘
       ↓
┌─────────────────────┐
│ Object.prototype    │
│ toString()          │
└─────────┬───────────┘
          ↓
         null
```

---

# 15. Property Lookup Algorithm

Suppose:

```javascript
dog.eat();
```

JavaScript conceptually does:

```text
1. Check dog
2. Check Dog.prototype
3. Check Animal.prototype
4. Check Object.prototype
5. If not found → undefined / error depending on usage
```

For method calls, if the property resolves to `undefined` and you try to call it, you'll get an error.

---

# 16. Property Shadowing

A property on an object can hide an inherited property with the same name.

Example:

```javascript
const animal = {
    name: "Animal"
};

const dog = Object.create(animal);

dog.name = "Dog";

console.log(dog.name);
```

Output:

```text
Dog
```

Search:

```text
dog
 ↓
name found
 ↓
"Dog"
```

Prototype's `name` is not used.

---

# 17. Removing Shadowing

```javascript
delete dog.name;

console.log(dog.name);
```

Now:

```text
dog
 ↓
name not found
 ↓
animal
 ↓
name found
 ↓
"Animal"
```

Output:

```text
Animal
```

---

# 18. Prototype Chain and `hasOwnProperty()`

Example:

```javascript
const parent = {

    name: "Parent"

};

const child = Object.create(parent);

child.age = 25;
```

Check:

```javascript
console.log(child.hasOwnProperty("age"));
```

Output:

```text
true
```

But:

```javascript
console.log(child.hasOwnProperty("name"));
```

Output:

```text
false
```

Because `name` inherited hai.

---

# 19. `in` Operator

`in` operator prototype chain ko bhi search karta hai.

```javascript
console.log("age" in child);
```

Output:

```text
true
```

And:

```javascript
console.log("name" in child);
```

Output:

```text
true
```

Because `name` prototype se inherited hai.

---

# 20. Difference: `hasOwnProperty()` vs `in`

```text
hasOwnProperty()
      ↓
Only own property

in
      ↓
Own + inherited properties
```

Example:

```javascript
console.log(child.hasOwnProperty("name"));
// false

console.log("name" in child);
// true
```

---

# 21. `Object.create()`

Prototype chain manually create karne ke liye:

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

# 22. Multi-Level Prototype Chain

Prototype chain multiple levels ki ho sakti hai.

```javascript
const grandParent = {

    grandMethod() {

        console.log("Grand Parent");

    }

};

const parent = Object.create(grandParent);

parent.parentMethod = function() {

    console.log("Parent");

};

const child = Object.create(parent);

child.childMethod = function() {

    console.log("Child");

};
```

Now:

```javascript
child.childMethod();
child.parentMethod();
child.grandMethod();
```

Output:

```text
Child
Parent
Grand Parent
```

Chain:

```text
child
 ↓
parent
 ↓
grandParent
 ↓
Object.prototype
 ↓
null
```

---

# 23. Prototype Chain Search Example

```javascript
child.grandMethod();
```

Search:

```text
child
 ↓
grandMethod ❌

parent
 ↓
grandMethod ❌

grandParent
 ↓
grandMethod ✅
```

Then method execute hota hai.

---

# 24. Built-in Array Prototype Chain

Example:

```javascript
const numbers = [1, 2, 3];
```

Simplified chain:

```text
numbers
 ↓
Array.prototype
 ↓
Object.prototype
 ↓
null
```

Isliye:

```javascript
numbers.map();
```

ka method `Array.prototype` se milta hai.

Aur:

```javascript
numbers.toString();
```

prototype chain ke through available hota hai.

---

# 25. String Prototype Chain

Example:

```javascript
const text = "Hello";
```

Conceptually:

```text
String wrapper/object behavior
 ↓
String.prototype
 ↓
Object.prototype
 ↓
null
```

Isliye:

```javascript
text.toUpperCase();
text.includes("H");
text.slice(0, 2);
```

jaise methods available hote hain.

---

# 26. Number Prototype Chain

Example:

```javascript
const number = 100.50;
```

Methods:

```javascript
number.toFixed(2);
number.toString();
```

Number prototype-related behavior se available hote hain.

---

# 27. Function Prototype Chain

Functions bhi objects hain.

Example:

```javascript
function test() {}
```

A function ka prototype chain object behavior se related hota hai, aur function objects `Function.prototype` se methods inherit karte hain.

For example:

```javascript
test.call();
test.apply();
```

---

# 28. `Object.prototype`

`Object.prototype` bahut important base prototype hai.

Common methods:

```text
toString()
hasOwnProperty()
isPrototypeOf()
propertyIsEnumerable()
valueOf()
```

Example:

```javascript
const user = {};

console.log(user.toString());
console.log(user.hasOwnProperty("name"));
```

---

# 29. `isPrototypeOf()`

Check karne ke liye ki ek object prototype chain mein hai ya nahi:

```javascript
const animal = {

    eat() {

        console.log("Eating");

    }

};

const dog = Object.create(animal);

console.log(animal.isPrototypeOf(dog));
```

Output:

```text
true
```

Because:

```text
dog
 ↓
animal
```

---

# 30. `Object.prototype.isPrototypeOf()`

Example:

```javascript
const user = {};

console.log(
    Object.prototype.isPrototypeOf(user)
);
```

Output:

```text
true
```

Because:

```text
user
 ↓
Object.prototype
```

---

# 31. `instanceof`

Prototype chain ko understand karne mein `instanceof` bhi important hai.

Example:

```javascript
function Person() {}

const person = new Person();

console.log(person instanceof Person);
```

Output:

```text
true
```

---

# 32. How `instanceof` Works

Conceptually:

```text
person
 ↓
Person.prototype
```

Agar `Person.prototype` object ke prototype chain mein mil jata hai:

```text
instanceof → true
```

Example:

```javascript
function Animal() {}

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

const dog = new Dog();

console.log(dog instanceof Dog);
console.log(dog instanceof Animal);
```

Output:

```text
true
true
```

Because:

```text
dog
 ↓
Dog.prototype
 ↓
Animal.prototype
```

---

# 33. `instanceof` with Object

```javascript
const user = {};

console.log(user instanceof Object);
```

Output:

```text
true
```

Because:

```text
user
 ↓
Object.prototype
```

---

# 34. `instanceof` vs `typeof`

### `typeof`

Type category batata hai:

```javascript
typeof "Hello";
```

Output:

```text
string
```

### `instanceof`

Prototype relationship check karta hai:

```javascript
[] instanceof Array;
```

Output:

```text
true
```

---

# 35. `instanceof` Example

```javascript
const numbers = [1, 2, 3];

console.log(numbers instanceof Array);
console.log(numbers instanceof Object);
```

Output:

```text
true
true
```

Because:

```text
numbers
 ↓
Array.prototype
 ↓
Object.prototype
```

---

# 36. Prototype Chain with Classes

Classes bhi prototype chain use karti hain.

Example:

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

const dog = new Dog();
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

# 37. Class Method Lookup

```javascript
dog.eat();
```

Search:

```text
dog
 ↓
Dog.prototype
 ↓
eat not found
 ↓
Animal.prototype
 ↓
eat found
```

Then method execute hota hai.

---

# 38. Class `instanceof`

```javascript
console.log(dog instanceof Dog);
console.log(dog instanceof Animal);
console.log(dog instanceof Object);
```

Output:

```text
true
true
true
```

Because all these prototypes chain mein milte hain.

---

# 39. Prototype Chain Diagram

```text
                 dog
                  │
                  ↓
           Dog.prototype
                  │
                  ↓
          Animal.prototype
                  │
                  ↓
          Object.prototype
                  │
                  ↓
                 null
```

---

# 40. Prototype Chain and Method Reuse

Main advantage:

```text
Multiple objects
      ↓
Same prototype
      ↓
Same methods
```

Example:

```javascript
function User(name) {

    this.name = name;

}

User.prototype.sayHello = function() {

    console.log("Hello " + this.name);

};

const user1 = new User("Rohit");
const user2 = new User("Aman");
```

Both use:

```text
User.prototype.sayHello
```

---

# 41. Prototype Chain and Memory

Instead of creating separate method copies:

```text
user1 → sayHello()
user2 → sayHello()
user3 → sayHello()
```

Prototype allows:

```text
user1 ─┐
user2 ─┼──→ User.prototype → sayHello()
user3 ─┘
```

This allows method sharing.

---

# 42. Changing Prototype

Example:

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

---

# 43. Why `Object.setPrototypeOf()` Should Be Used Carefully

Prototype ko frequently change karna JavaScript engine optimization ko negatively affect kar sakta hai.

Normally better approach:

```text
Create the object with the intended prototype
```

For example:

```javascript
const dog = Object.create(animal);
```

instead of repeatedly changing prototypes later.

---

# 44. `Object.create(null)`

Interesting case:

```javascript
const dictionary = Object.create(null);
```

Is object ka prototype:

```text
null
```

hai.

Chain:

```text
dictionary
 ↓
null
```

Isliye inherited methods jaise:

```javascript
dictionary.toString
```

available nahi honge.

---

# 45. Example of `Object.create(null)`

```javascript
const data = Object.create(null);

data.name = "Rohit";

console.log(data.name);
console.log(data.toString);
```

Output:

```text
Rohit
undefined
```

Because `Object.prototype` chain mein nahi hai.

---

# 46. Important Difference

Normal object:

```javascript
const obj = {};
```

Chain:

```text
obj
 ↓
Object.prototype
 ↓
null
```

Null-prototype object:

```javascript
const obj = Object.create(null);
```

Chain:

```text
obj
 ↓
null
```

---

# 47. Prototype Chain and `Object.keys()`

`Object.keys()` only enumerable own properties return karta hai.

Example:

```javascript
const parent = {
    country: "India"
};

const child = Object.create(parent);

child.name = "Rohit";

console.log(Object.keys(child));
```

Output:

```text
["name"]
```

Inherited `country` include nahi hota.

---

# 48. `for...in` and Prototype Chain

`for...in` enumerable properties ko inherited properties tak traverse kar sakta hai.

Example:

```javascript
const parent = {
    country: "India"
};

const child = Object.create(parent);

child.name = "Rohit";

for (const key in child) {

    console.log(key);

}
```

Depending on enumerability:

```text
name
country
```

`Object.keys()` aur `for...in` ka behavior same nahi hota.

---

# 49. Own Property Check in `for...in`

Agar sirf own properties chahiye:

```javascript
for (const key in child) {

    if (Object.hasOwn(child, key)) {

        console.log(key);

    }

}
```

This filters out inherited properties.

---

# 50. Common Mistake

Ye assume karna:

```text
Every property is directly stored on the object.
```

Wrong.

Some properties/methods prototype chain se inherited ho sakte hain.

Example:

```javascript
const arr = [];

arr.push(10);
```

`push()` array ke own property ke roop mein generally store nahi hota.

Ye:

```text
Array.prototype
```

se available hota hai.

---

# 51. Another Common Mistake

Ye dono same nahi hain:

```javascript
Person.prototype
```

and:

```javascript
Object.getPrototypeOf(person)
```

For:

```javascript
const person = new Person();
```

In dono ki equality ho sakti hai:

```javascript
Person.prototype === Object.getPrototypeOf(person);
```

But concepts different hain:

```text
Person.prototype
→ constructor function ki property

Object.getPrototypeOf(person)
→ person ka actual prototype
```

---

# 52. Prototype Chain Interview Question

### Q. How does JavaScript find a property?

JavaScript pehle current object par property search karti hai.

Agar property nahi milti, to object's prototype par search karti hai.

Ye process prototype chain ke through continue hota hai.

Agar chain ke end `null` tak property nahi milti, result generally `undefined` hota hai.

---

# 53. Interview Question

### Q. What is the end of Prototype Chain?

```text
null
```

Example:

```text
Object
 ↓
Object.prototype
 ↓
null
```

---

# 54. Interview Question

### Q. What is `instanceof`?

`instanceof` check karta hai ki constructor ka `prototype` object ki prototype chain mein present hai ya nahi.

Example:

```javascript
function Person() {}

const person = new Person();

console.log(person instanceof Person);
```

Output:

```text
true
```

---

# 55. Interview Question

### Q. What is `Object.create()`?

`Object.create()` specified prototype wala new object create karta hai.

Example:

```javascript
const parent = {

    greet() {

        console.log("Hello");

    }

};

const child = Object.create(parent);

child.greet();
```

---

# 56. Quick Revision

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

### Property Search

```text
Current Object
      ↓
Prototype
      ↓
Next Prototype
      ↓
...
      ↓
null
```

### Check Prototype

```javascript
Object.getPrototypeOf(obj);
```

### Set Prototype

```javascript
Object.setPrototypeOf(obj, prototype);
```

### Create with Prototype

```javascript
Object.create(prototype);
```

### Own Property

```javascript
Object.hasOwn(obj, "key");
```

### Own + Inherited

```javascript
"key" in obj;
```

### Prototype Relationship

```javascript
prototype.isPrototypeOf(obj);
```

### Constructor Relationship

```javascript
obj instanceof Constructor;
```

---

# Final Mental Model

```text
                    PROPERTY LOOKUP

                         object
                           │
                    property found?
                      /          \
                    YES           NO
                     │             │
                   return          ↓
                              prototype
                                  │
                           property found?
                             /          \
                           YES           NO
                            │             │
                          return          ↓
                                    next prototype
                                          │
                                          ↓
                                         ...
                                          │
                                          ↓
                                         null
                                          │
                                          ↓
                                      not found
```

## One-Line Definition

> **Prototype Chain is the sequence of objects JavaScript searches when a property or method is not found directly on the current object.**

---

## Next File

```text
18-Advanced-JavaScript/07-this-Deep-Dive.md
```