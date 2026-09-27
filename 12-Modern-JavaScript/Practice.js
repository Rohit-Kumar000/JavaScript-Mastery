/* Q1. Declare a variable using let, change its value, and print both the original and updated values. 

let name = "Rohit";
console.log(name);

name = "Mohan";
console.log(name);          // Its changed
*/


/* Q2. Declare a constant using const. Try to reassign its value and observe what happens.

const num = 12;
console.log(num);
num = 14;
console.log(num);           // Its not changed
*/


/* Q3. Create an object containing name, age, and city. Use object destructuring to store each property in a 
separate variable and print them.

const obj = {
    name: "Aman",
    age: 23,
    city: "Agra",
}

const {name,age,city} = obj;
console.log(name);
console.log(age);
console.log(city);
*/


/* Q4. Create an array containing five numbers. Use array destructuring to store the first three values in 
separate variables and print them.


const arr = [1,2,3,4,5];
const [first, second, three] = arr;
console.log(first);
console.log(second);
console.log(three);
*/


/* Q5. Create two arrays of numbers. Use the spread operator to combine them into one new array.

const arr = [1,2,3,4,5];
const newarr = [6,7,8,9];

const final = [...arr,...newarr];
console.log(final);
*/


/* Q6. Create an object containing name and age. Create another object using the spread operator and add a 
city property.

let obj = {
    name: "Priya",
    age: 21,
}

let final = {
    ...obj,
    city: "Tundla",
}
console.log(final);
*/


/* Q7. Create a function that accepts any number of arguments using the rest operator and returns their sum.

function sum(...value) {
    let total = 0;
    for (const numbers of value) {
        total += numbers
    }
    return total;
}
console.log(sum(12,23,22));
*/


/* Q8. Create an object containing a nested address object. Use optional chaining to safely access the city.

const obj = {
    name: "Rishi",
    address: {
        city: "Tundla",
    }
}

console.log(obj.address?.city);
*/


/* Q9. Try to access a property that does not exist in an object using optional chaining. Print the result and 
observe what you get.

const obj = {
    name: "Rohit",
    age: 21,
    personalInfo: {
        username: "Rohit12",
        password: {
            password1: "123",
            password2: "234",
        }
    }
}

console.log(obj.personalInfo.password?.city);
*/


/* Q10. Create an object where username may or may not exist. Use optional chaining to print the username without 
causing an error.

const obj = {
    name: "Rohit",
    age: 22,
    address: {
        city: "Tundla",
        username: "Rohit12",
    }
}
console.log(obj?.address?.username);
*/


/* Q11. Create a variable with the value null. Use the nullish coalescing operator (??) to provide "Guest" as a 
default value.

const num = null;
console.log(num ?? "Guest");
*/


/* Q12. Create two variables:
- One containing 0
- One containing null
Use ?? with both variables and compare the results.

const num1 = 0;
const num2 = null;

console.log(num1 ?? "Rohit");
console.log(num2 ?? "Rohit");
*/


/* Q13. Create a user object with name, age, and address. The address property may be missing. Use optional chaining 
+ nullish coalescing to print the user's city or "City not available".

const obj = {
    name: "Rohit",
    age: 22,
    address: {
        city: null,
    }
}

console.log(obj?.address?.city);
console.log(obj?.address?.city ?? "City not available");
*/


/* Q14. Create two objects representing two students. Use the spread operator to create a third object containing 
all properties of the first student and some updated/additional properties from the second student.

let student1 = {
    name: "Rohit",
    age: 22,
    city: "Tundla",
}

let stundent2 = {
    state: "Punjab",
    isAvailable: true,
}

let finalStudent = {...student1,...stundent2,subject:"English"}
console.log(finalStudent);
*/


/* Q15. Create a User Profile object containing:
- name
- age
- email
- address
- skills (array)
Use:
1. Destructuring to extract name and email.
2. Spread to create a copy of the skills array.
3. Rest in a function to accept multiple skills.
4. Optional chaining to safely access the city.
5. Nullish coalescing to provide default values when information is missing.


const userProfile = {
    name: "Deepak",
    age: 25,
    email: "deepak@example.com",
    address: "Ludhiana",
    skills: ["Typing", "Editing", "Singing", "Coding"],
}

let {name,email} = userProfile;
console.log(name);
console.log(email);

let copy = [...userProfile.skills];
console.log(copy);

function rest(...skill) {
    console.log(userProfile.skills);
    
}
rest();

const userProfile = {
    name: "Deepak",
    age: 25,
    email: "deepak@example.com",
    address: {
        city: "Tundla",
        state: "Firozabad",
    }
}

console.log(userProfile?.address?.city);


const userProfile = {
    name: "Deepak",
    age: 25,
    email: "deepak@example.com",
    address: {
        city: undefined,
        state: "Firozabad",
    }
}

console.log(userProfile?.address?.city ?? "Guest");
*/