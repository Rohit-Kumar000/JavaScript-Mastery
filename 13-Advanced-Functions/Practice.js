// Higher-Order Functions

const { use } = require("react");

/* Q1. Create a function calculate that accepts two numbers and another function as arguments. Use the callback 
function to perform addition.

function calculate(a, b, operation) {

    return operation(a, b);

}

function add(x, y) {
    return x + y;
}

console.log(calculate(10, 20, add));
*/


/* Q2. Create a higher-order function operate that accepts two numbers and a callback. Use it to perform:
- Addition
- Subtraction
- Multiplication

function calculate(a,b,callback) {
    return callback (a,b);
}
function add(a,b) {
    return a + b;
}
function sub(a,b) {
    return a - b;
}
function mul(a,b) {
    return a * b;
}
console.log(calculate(23,43,add));
console.log(calculate(23,43,sub));
console.log(calculate(23,43,mul));
*/


/* Q3. Create an array of numbers and use a higher-order function to return a new array containing the 
square of every number.


let number = [34,23,55,12];
let result = number.map((numbers) => {
    return numbers * numbers
});
console.log(result);
*/


// Callbacks

/* Q4. Create a function greetUser that accepts a username and a callback function. The callback should print 
"Welcome, username!".

function greetUser(name) {
    console.log(`"Welcome, ${name}!"`);
    
}
function execute(callback) {
    callback("Rohit");
}
execute(greetUser);
*/


/* Q5. Create a function processNumber that accepts a number and a callback. Create two callback functions:
- One checks whether the number is even.
- One checks whether the number is odd.
Call processNumber() with both callbacks.

function processNumber(number,callback) {
    console.log(callback(number));
}

function checkEven(number) {
    return number % 2 === 0;
}

function checkOdd(number) {
    return number % 2 !== 0;
}

processNumber(12, checkEven);
processNumber(12, checkOdd);
*/

/* Q6. Create a function that simulates a simple task:
1. Print "Task started".
2. Execute a callback.
3. The callback should print "Task completed".
function task() {
    console.log("Task started");
    console.log("Task completed");
    
}
function execute(callback) {
    callback();
}
execute(task);
*/


// Closures

/* Q7. Create a function counter() that returns another function. Each time the returned function is called, 
increase the counter by 1 and print the current count.
Example:
1
2
3
4

function counter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
        
    }
}
let result = counter();
result();
result();
*/


/* Q8. Create a function createMultiplier(x) that returns another function. The returned function should multiply 
any number by x.
Example:
const double = createMultiplier(2);

console.log(double(5));  // 10
console.log(double(8));  // 16

function createMultiplier(x) {
    return function(value) {
        return value * x;
    }
}
let result = createMultiplier(2);
console.log(result(5));
console.log(result(10));
*/


/* Q9. Create a createBankAccount() function using a closure.
It should have a private balance and return three functions:
- deposit(amount)
- withdraw(amount)
- getBalance()
The balance should not be directly accessible from outside.

function bankAccount() {

    let balance = 1000;

    return {
        getBalance() {
            return balance;
        },

        deposit(amount) {
            balance += amount;
        }
    };
}

const account = bankAccount();

console.log(account.getBalance());

account.deposit(500);

console.log(account.getBalance());
*/


// IIFE
/* Q10. Create an IIFE that prints.

(function print() {
    console.log("JavaScript");
    
})();
*/

/* Q11. Create an IIFE that accepts a number as an argument and prints its square.

(function print(a,b) {
    console.log(a * b);
    
})(2,4);
*/


/* Q12. Create an IIFE that creates a private variable username and prints it. Try accessing username outside 
the IIFE and observe what happens.


(function student() {
    let username = "Rohit";
    
    console.log(username);
    
})();


(function student() {
    let username = "Rohit";
    
    
})();
console.log(username);      // This will not work
*/


// Recursion

/* Q13. Create a recursive function that prints numbers from 1 to 10.


function printNumer(number) {
    if(number > 10) {
        return;
        
    }
    console.log(number);
    
    printNumer (number + 1)
}
printNumer(1);
*/


/* Q14. Create a recursive function that calculates the factorial of a number.

function factorial(n) {

    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5));
*/


/* Q15. Create a function that takes an array and a callback function.
Use recursion to process every element of the array and pass each element to the callback.


function processArray(arr, callback, index = 0) {

    if (index >= arr.length) {
    return;
}

    callback(arr[index]);
    processArray(arr, callback, index + 1);

    
}
function print(value) {
    console.log(value);
}

processArray([1, 2, 3, 4], print);
*/