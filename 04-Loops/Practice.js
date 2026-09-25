/* Q1. Print numbers from 1 to 20.

for (let i = 1; i <= 20; i++) {
    console.log(i);
    
}
*/

/* Q2. Take a number from the user and print its multiplication table from 1 to 10.

let user = Number(prompt("Enter the number"));
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = user * i;
    console.log(`${user} * ${i} = ${sum}`);
    
}
*/

/* Q3. Print numbers from 10 to 1 in reverse order.

for (let i = 10; i >= 1; i--) {
    console.log(i);
    
}
*/

/* Q4. Keep asking the user to enter a number until they enter 0.

let user;
do {
    user = Number(prompt("Enter the number"));
    
} while (user !== 0);
*/

/* Q5. Print all even numbers from 1 to 50.

for (let i = 2; i <=50; i += 2) {
    console.log("Even number is: ", i);
    
}
*/

/* Q6. Create an array of 5 names and print each name one by one.

const arr = ["Rohit", "Ashish", "Shubham", "Shyam", "Deepak"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
}

for (const index of arr) {
    console.log(index);
    
}
*/

/* Q7. Create an object containing a student's name, age, course, and 
college. Print every key and value.

const student = {
    name: "Pankaj",
    age: 25,
    course: "MCA",
    college: "Chandigarh College",
}
for(const key in student) {
    console.log(key, ":", student[key]);
    
}
*/

/* Q8. Print numbers from 1 to 100, but stop when the number reaches 50.

for (let i = 1; i <= 100; i++) {
    if (i === 50) {
        console.log(i);
        break;
    }
    
}
*/

/* Q9. Print numbers from 1 to 20, but skip numbers that are divisible by 3.

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0){
        continue;
        
    }
    console.log(i);
    
}
*/

/* Q10. Take a number from the user and print the sum of all numbers from 
1 to that number.

let user = Number(prompt("Enter the number"));
let counter = 1;
sum = 0;
while (counter <= user) {
    sum = sum + counter;
    counter++;
}
console.log(sum);
*/

/* Q11. Print all numbers from 1 to 100 that are divisible by 5.

for (let i = 5; i <= 100; i += 5) {
    console.log(i);
    
}
*/

/* Q12. Print all odd numbers between 1 and 50.

let i = 1;
while (i <= 50) {
    console.log(i);
    i += 2;
}
*/

/* Q13. Take a number from the user and print its factors.

let user = Number(prompt("Enter the number"));
for (let i = 0; i <= user; i++) {
    if (user % i === 0) {
        console.log(i);
        
    }
}
*/

/* Q14. Take a number from the user and calculate its factorial.

let user = Number(prompt("Enter the number"));
let i = 1;
let sum = 1;
while (i <= user) {
    sum = sum * i;
    i++;
}
console.log(sum);
*/

/* Q15. Print the following pattern:
    *
    **
    ***
    ****
    *****
    
    for (let i = 1; i <= 5; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += "*";
        }
        console.log(pattern);
        
    }
*/

