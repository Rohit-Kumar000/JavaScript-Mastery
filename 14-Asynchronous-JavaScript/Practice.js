/* Q1. Write three console.log() statements and observe their execution order.

console.log("First");
console.log("Second");
console.log("Third");
*/


/* Q2. Use setTimeout() to print a message after 2 seconds.

console.log("First");

setTimeout(() => {
    console.log("Second");
    
}, 1000)
*/


/* Q3. Write a program that uses both synchronous code and setTimeout(). Observe the order in which the statements 
execute.

console.log("First");
setTimeout(() => {
    console.log("Second");
    
}, 2000)
console.log("Third");
*/


/* Q4. Create two functions where the first function calls the second function. Print messages from both functions.

function first () {
    second();
    console.log("First");
    
}

function second () {
    console.log("Second");
    
}
first();
*/


/* Q5. Create three functions and call them in a nested manner. Use console.log() to understand the call stack order.

function first() {
    second();
    console.log("First");
    
    function second() {
        third();
        console.log("Second");
        
        function third() { 
            console.log("Third");
            
        }
    }
}
first();
*/


/* Q6. Predict the output of a program containing console.log(), setTimeout(), and another console.log().

console.log("First");

setTimeout(() => {
    console.log("Second");
    
}, 2000);

console.log("Third");
*/


/* Q7. Create a function that accepts another function as a callback and executes the callback.

function first(callback) {
    callback("Rohit");
}

function second(name) {
    console.log("Hello", name);
    
}
first(second);
*/

/* Q8. Create a function that accepts a number and a callback. Use the callback to perform an operation on the number.

function num (number,callback) {
    callback (number * number);
}
function result(num1) {
    console.log(num1);
    
}

num(5, result);
*/


/* Q9. Create a function that performs a task using setTimeout() and executes a callback after the task is completed.

function task(callback) {
    setTimeout(() => {
        console.log("End");
        callback();
    }, 1000)
}
function completed() {
    console.log("Completed Task");
    
}
task(completed);
*/


/* Q10. Create two callbacks and pass them to a function. Execute them in a specific order and observe how callback 
execution works.

function execute(callback1,callback2) {
    callback2();
    callback1();
}
    
function first() {
    console.log("My First callback");
        
}
function second() {
        console.log("My Second callback");
        
}


execute(first,second);
*/


/* Q11. Create a Promise that resolves with a success message and handle the result using .then().

let promise = new Promise((resolve,reject) => {
    console.log("Hello World");
    resolve("Success ");
    
})
promise.then((msg) => {
    console.log(msg);
    
});
*/


/* Q12. Create a Promise that rejects with an error message and handle it using .catch().

let promise = new Promise((resolve,reject) => {
    console.log("Hello World");
    reject("Error ");
    
})
promise.catch((msg) => {
    console.log(msg);
    
});
*/

/* Q13. Create a Promise that resolves after 2 seconds using setTimeout().

let promise = new Promise((resolve,reject) =>{
    console.log("Please wait");
    setTimeout(() => {
        console.log("hello");
        
        resolve("Success")
    }, 2000)
});

promise.then((msg) => {
    console.log(msg);
});
*/


/* Q14. Create a Promise that resolves or rejects based on whether a given number is even or odd.

let num = 5;

let promise = new Promise((resolve,reject) => {
    if(num % 2 === 0) {
        resolve("Even");
    } else {
        reject("Odd");
    }

});

promise.then((msg) => {
    console.log(msg);
    
});
promise.catch((msg) => {
    console.log(msg);
    
});
*/

/* Q15. Create two Promises and execute them one after another using Promise chaining with .then().

let promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("First Promise")
    },2000)
});

let promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Second Promise")
    },3000)
})

promise1
    .then((msg) => {
        console.log(msg);
        return promise2;
    })
    .then((msg) => {
        console.log(msg);
    });
*/

/* Q16. Create an async function that returns a simple message and call it using await.

let promise = new Promise((resolve) => {
    resolve("Success")
    
})
async function test() {
    let result = await promise;
    console.log(result);
}

test();
*/
