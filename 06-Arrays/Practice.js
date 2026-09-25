/* Q1. Create an array of 5 fruits and print the entire array.
let fruit = ["Mango", "Banana", "Papaya", "Apple", "Orange"];
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);
console.log(fruit[4]);
*/

/* Q2. Create an array of 5 numbers and print the first, third, and last elements.

let number = [1,2,3,4,5];
console.log(number[0]);
console.log(number[2]);
console.log(number[number.length-1]);
*/

/* Q3. Create an array of 5 names. Add a new name to the end of the array and another 
name to the beginning.

let names = ["Aman", "Pradeep", "Rohan", "Komal", "Priya"];
let end = names.push("Riya");
let start = names.unshift("Suman");
console.log(names);
*/

/* Q4. Create an array of 6 numbers. Remove the first element and the last element, 
then print the updated array.

let num = [1,2,3,4,5,6];
let first = num.shift();
let last = num.pop();
console.log(num);
*/


/* Q5. Create an array of numbers and find the length of the array.

let arr = [2,3,4,2,1,453,2,1];
console.log(arr.length);
*/

/* Q6. Create an array of numbers and find the sum of all elements.

let num = [1,2,3,4,5,6,7];
let sum = 0;
num.forEach(num => {
    sum = sum + num;
    
});
console.log(sum);
*/


/* Q7. Create an array of numbers and find the largest and smallest number.

let num = [23, 43, 12, 34, 54, 2, 45, 2];

let largest = num[0];
let smallest = num[0];

num.forEach(num => {
    if (num > largest) {
        largest = num;
    }

    if (num < smallest) {
        smallest = num;
    }
});

console.log("Largest:", largest);
console.log("Smallest:", smallest);
*/


/* Q8. Create an array of names and check whether a particular name exists in the array.

let name = ["Shyam", "Ravina", "Shidharth", "Yuvraj", "Abhishek", "Vanshika", "Manshi"];
console.log(name.includes("Abhishek"));
*/


/* Q9. Create an array of numbers and create a new array containing only the even numbers.

let num = [3,43,23,54,23,12,57,87];
let result = num.filter(num => {
    return num % 2 === 0;
})
console.log(result);
*/


/* Q10. Create an array containing the following information:
    Name, Age, City, Course
    Use array destructuring to store each value in a separate variable and print them.
    
    let arr = ["Rohit", 23, "Tundla", "MCA"];
    let [name, age, city, course] = arr;
    console.log(name);
    console.log(age);
    console.log(city);
    console.log(college);
*/
