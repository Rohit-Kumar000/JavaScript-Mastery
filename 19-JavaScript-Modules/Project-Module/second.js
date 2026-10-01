/* Project 1 — Calculator Using Modules

import {add, subtract, multiply, divide} from './first.js';

console.log("Addition: " + add(23,34));
console.log("Subtraction: " + subtract(23,34));
console.log("Multiplication: " + multiply(23,34));
console.log("Division: " + divide(23,34));
console.log("Division by zero: " + divide(23,0));
*/

/* Project 2 — User Module

import {user} from './first.js';
import {getUser, findUser} from './first.js';

getUser(user);

const users = findUser(user, 2);
console.log(`Found User: ID: ${users.id}, Name: ${users.name}, Age: ${users.age}, Is Student: ${users.isStudent}`);
*/


/* Project 3 — Authentication Module


import {login,logout,isLoggedIn} from './first.js';

console.log(login("Rohit", "123"));
console.log(isLoggedIn());
logout();
console.log(isLoggedIn());
*/

/* Project 4 — Theme Module


import {setDarkTheme, setLightTheme, toggleThemetoogle} from './first.js';

document.getElementById("dark").addEventListener("click", setDarkTheme);
document.getElementById("light").addEventListener("click", setLightTheme);
document.getElementById("toggle").addEventListener("click", toggleTheme);
*/

/* Project 5 — API Module

import {Users} from './first.js';

async function User() {
    try {
        const users = await Users();
        console.log(users);
    }
    catch (error) {
        console.error("Error fetching users:", error);
    }
}

User();
*/