/* Q.1 Write a program with multiple function calls and explain the order in which execution contexts are created 
and removed from the call stack.

function first() {
    console.log("First");
    
    second();
}
function second() {
    console.log("Second");
    third();
}
function third() {
    console.log("Third");
    
}
first();
*/


/* Q.2 Create a program using nested function calls and predict the exact output by tracing the Call Stack step 
by step.

function one() {
    console.log("One");
    two();
}

function two() {
    console.log("Two");
    three();
}
function three() {
    console.log("Three");
    
}
one();
*/

/* Q.3 Create a program using setTimeout() and synchronous console.log() statements. Predict the output order 
using the Event Loop concept.

console.log("First");

setTimeout(() => {
    console.log("Second");
    
}, 1000);

console.log("Third");
*/


/* Q.4 Create a function that returns another function. Use a Closure to remember and display a variable from the 
outer function.

function outer() {
    let name = "Rohit";

    function inner() {
        console.log(name);
        
    }
    return inner();
}
outer();
*/


/* Q.5 Create a counter() function using a Closure so that the counter value cannot be accessed or modified directly 
from outside.

function outer() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
        
    }
}
let result = outer();
result();
result();
result();
*/


/* Q.6 Create an object with a custom prototype using Object.create(). Add a method to the prototype and access it 
from the object.


const prototype = {
    greet() {
        console.log("Hello Rohit");
        
    }
}

const result = Object.create(prototype);
result.greet();
*/


/* Q.7 Create a constructor function Person and add a method to Person.prototype. Create multiple objects and verify 
that they can use the same prototype method.


function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello ${this.name}`);
    
}

const result1 = new Person("Rohit");
const result2 = new Person("Mohi");

result1.greet();
result2.greet();
*/


/* Q.8 Create a three-level Prototype Chain such as Animal → Dog → Puppy. Add different properties or methods at 
each level and access them from the final object.

const animal = {
    eat() {
        console.log("Animal is eating");
        
    }
}
const dog = Object.create(animal);

dog.bark = function() {
    console.log("Dog is barked");
    
}
const puppy =  Object.create(dog);

puppy.play = function() {
    console.log("Puppy is playing");
    
}

puppy.eat();
puppy.bark();
puppy.play();
*/


/* Q.9 Create an object with multiple methods and use this to access its properties. Then call one of its methods 
separately and observe how the value of this changes.

const user = {
    name: "Rohit",
    age: 23,

    showDetaild() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        
    }
}
user.showDetaild();
*/


/* Q.10 Create a small Advanced JavaScript Project that combines at least three concepts from this section, such as 
Closures, Prototypes, this, Call Stack, or Event Loop.


function BankAccount(owner, balance) {

    let accountBalance = balance;

    this.owner = owner;

    this.deposit = function (amount) {
        accountBalance += amount;
    };

    this.getBalance = function () {
        return accountBalance;
    };
}

BankAccount.prototype.showOwner = function () {
    console.log(`Account Holder: ${this.owner}`);
};

const account = new BankAccount("Rohit", 10000);

account.showOwner();

account.deposit(5000);

console.log(`Balance: ${account.getBalance()}`);
*/