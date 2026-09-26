/* Q1. Create a function that prints "Hello, JavaScript!".


function print(msg) {
    console.log(msg);  
}
print("Hello, JavaScript!");
*/


/*  Q2. Create a function that takes a user's name as a parameter and prints a 
greeting message.

function greeting(username) {
    console.log(username);
    
}
greeting("Rohit");
*/

/* Q3. Create a function that takes two numbers as parameters and prints their sum.

function sum(a,b) {
    console.log(a+b);
    
}
sum(5,2);
*/

/* Q4. Create a function that takes two numbers and returns their multiplication.

function mul(x,y) {
    return x * y;
}
let result = mul(45,67);
console.log(result);
*/

/* Q5. Create a function that takes a number and returns whether it is even or odd.

function num(val) {
    if (val % 2 === 0){
        return "even";

    }
    return "odd";
}
let result = num(5);
console.log(result);
*/


/* Q6. Create a function that takes three numbers and returns the largest number.

function num(val1,val2,val3) {
    if (val1 > val2 && val1 > val3 ){
        return val1;
    } else if (val2 > val3 && val2 > val1) {
        return val2;
    }
    return val3;
}
let result = num(134,565,223);
console.log(result);
*/


/* Q7. Create an arrow function that takes a number and returns its square.

let result = (num) => {
    return num * num;
}
console.log(result(4));
*/


/* Q8. Create an arrow function that takes two numbers and returns the larger number.

let result = (val1,val2) => {
    if (val1 > val2) {
        return val1;
    }
    return val2;
}
console.log(result(34,65));
*/


/* Q9. Create a function that takes an array of numbers and returns the sum of all 
elements.

let arr = [334,20,12,43,54];
let result = arr.reduce((val,index) => {
    return val + index;
})
console.log(result);
*/

/* Q10. Create a function that accepts an array of numbers and returns a new array 
containing only even numbers.

function user(val) {
    return val.filter((num) =>{
        return num % 2 === 0;
    })
}
let result = user([32,12,434,66,887,234]);
console.log(result);
*/


/* Q11. Create a function that accepts a number and uses another function as a callback 
to print the result.

function num() {
    console.log(3);
    
}

function num2(callback) {
    callback();
}
num2(num);
*/


/* Q12. Create a function that accepts a name and a callback function. The callback 
should print a greeting for that name.

function greet(name,callback) {
    callback(name);
}
function user(name) {
    console.log("Hello", name);
    
}
greet("Rohit", user);
*/


/* Q13. Create a function using rest parameters that accepts any number of numbers and 
returns their sum.
    Example:
    sum(10, 20, 30) → 60
    sum(5, 10, 15, 20) → 50

let arr = [12,34,2,12,43,23];
let result = arr.reduce((val,index) => {
    return val + index;
});
console.log(result);

const add = (...number) => {
    let total = 0;
    for (const element of number) {
        total += element;
    }
    return total;
}
console.log(add(23,43,54,23));
*/


/* Q14. Create a function using the spread operator to combine two arrays into one array.
    Example:
    [1, 2, 3] + [4, 5, 6]
    → [1, 2, 3, 4, 5, 6]

let arr = [2,12,4,54,23];
let arr1 = [5,6,76,34];
let result = [...arr,...arr1];
console.log(result);
*/


/* Q15. Create a function that accepts an array of numbers and uses another function as a callback to process each number.
For example, the callback should double each number.
Input:
[1, 2, 3, 4, 5]
Output:
[2, 4, 6, 8, 10]


function processArray(arr,callback) {
    return arr.map((num) => {
        return callback(num);
    })
}
function double(num) {
    return num * 2;
}
let result = processArray([32, 434, 23, 23], double);

console.log(result);
*/