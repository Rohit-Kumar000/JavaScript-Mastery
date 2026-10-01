/* Project 1 — Calculator Using Modules


export function add(a,b) {
    return a+b;
}
export function subtract(a,b) {
    return a-b;
}
export function multiply(a,b) {
    return a*b;
}
export function divide(a,b) {
    if(b == 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a/b;
}
*/

/* Project 2 — User Module

export const user = [
    
    {
        id: 1,
        name: "Abhshek",
        age: 23,
        isStudent: true,
    },
    {
        id: 2,
        name: "Tushar",
        age : 22,
        isStudent: false,
    },
    {
        id: 3,
        name: "Rohit",
        age: 24,
        isStudent: false,
    }
]

export function getUser(user) {
    user.forEach((user) => {
        console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}, Is Student: ${user.isStudent}`);
    });

}

export function findUser(user, id) {
    return user.find(user => user.id === id);
}
*/

/* Project 3 — Authentication Module

let loggedIn = false;

export function login(username, password) {
    if(username === "Rohit" && password === "123") {
        loggedIn = true;
        return "Login successful!";
    }
    return "Login failed. Invalid username or password.";
}
export function logout() {
    loggedIn = false;
}
export function isLoggedIn() {
    return loggedIn;
}
*/

/* Project 4 — Theme Module

export function setDarkTheme() {
    document.body.classList.add("dark");
}
export function setLightTheme() {
    document.body.classList.remove("dark");
}
export function toggleTheme() {
    document.body.classList.toggle("dark");
}
*/

/* Project 5 — API Module

export async function Users() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return await response.json();
};
*/