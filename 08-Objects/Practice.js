/* Q1. Create an object representing a student with the following properties: name, age, course, and city.
 Print the object.

let student = {
    name: "Rohit",
    age: 22,
    course: "MCA",
    city: "Chandigarh",
}
console.log(student);
*/


/*Q2. Create an object representing a car with properties brand, model, and price. Access and print each 
property using dot notation.

let car = {
    brand: "BMW",
    model: "BMW5",
    price: "2Crore",
}
console.log(car.brand);
console.log(car.model);
console.log(car.price);
*/

/*Q3. Create an object representing a person. Add a new property email to the object and then print the updated 
object.

let person = {
    name: "Aman",
    age: 25,
    course: "BCA",
}
person.email = "aman@example.com"
console.log(person);
*/

/*Q4. Create an object containing name, age, and city. Update the person's age and city, then print the updated 
values.

let person = {
    name: "Sumit",
    age: 19,
    city: "Mohali",
}
person.age = 22;
person.city = "Mumbai";
console.log(person);
*/


/*Q5. Create an object representing a student with name, course, and marks. Write a method inside the object that 
prints the student's name.

let student = {
    name: "Manisha",
    course: "Btech",
    marks: 566,
    greet: function() {
        console.log(student.name);
        
    }
}
student.greet();
*/


/*Q6. Create an object representing a calculator with methods for:
- Addition
- Subtraction
- Multiplication
- Division
Call each method and print the results.

let obj = {
    Addition (a,b) {
        return a + b;
    },
    Subtraction (a,b) {
        return a - b;
    },
    Multiplication (a,b) {
        return a * b;
    },
    Division (a,b) {
        return a / b;
    },
}
console.log(obj.Addition(2,4));
console.log(obj.Subtraction(2,4));
console.log(obj.Multiplication(2,4));
console.log(obj.Division(2,4));
*/


/*Q7. Create an object representing a person with name and age. Create a method that uses this to 
print:
My name is Rohit and I am 23 years old.

let person = {
    name: "Rohit",
    age: 23,
    print (){
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
        
    }
}
person.print();
*/


/*Q8. Create an object representing a bank account with accountHolder and balance. Create a method that uses this to 
print the current balance.

let account = {
    accountholder: "Rohit",
    balance: 2300,
    print () {
        console.log(`Current balance is: ${this.balance}.`);
    }
}
account.print();
*/


/*Q9. Create an object with name, age, city, and course. Use object destructuring to store each property in a separate 
variable and print them.

let obj = {
    name: "Rohit",
    age: 22,
    city: "Mohali",
    course: "MCA",
}
let {name,age,city,course} = obj;
console.log(name);
console.log(age);
console.log(city);
console.log(course);
*/


/*Q10. Create an object representing a product with name, price, and category. Use object destructuring to extract name 
and price.

let product = {
    name: "IPhone",
    price: "2lakh",
    category: "IOS",
}
let {name,price} = product;

console.log(name);
console.log(price);
*/


/*Q11. Create an object representing a student. Use Object.keys() to print all the property names.

let student = {
    name: "Manoj",
    age: 25,
    course: "MCA",
    city: "Tundla",
}
console.log(Object.keys(student));
*/


/*Q12. Create an object representing a student. Use Object.values() to print all the property values.

let student = {
    name: "Manoj",
    age: 25,
    course: "MCA",
    city: "Tundla",
}
console.log(Object.values(student));
*/


/*Q13. Create an object representing a student. Use Object.entries() to print each key and value together.

let student = {
    name: "Manoj",
    age: 25,
    course: "MCA",
    city: "Tundla",
}
console.log(Object.entries(student));
*/

/*Q14. Create an object representing a mobile phone with properties brand, model, price, and ram. Check whether the 
object contains a price property.

let mobile = {
    brand: "OnePlus",
    model: "NordCE5",
    price: "29,000",
    ram: "8GB"
}
console.log(Object.hasOwn(mobile, "price"));        // hasOwn checks an object's own property.
console.log("price" in mobile);                     // in same
*/


/*Q15. Create an object representing a student with:
- name
- age
- course
- marks (array of marks)
Also create methods to:
1. Calculate the total marks.
2. Calculate the average marks.
3. Print the student's name using this.
4. Return all object keys.
5. Return all object values.


let student = {
    name: "Riya",
    age: 23,
    course: "MBA",
    marks: [23,45,76,43,23],
    total() {
        return this.marks.reduce((sum,val) => {
            return sum + val;
        })
    },
    average() {
        return this.total() / this.marks.length;
    },
    studentname() {
        return this.name;
    },
    keys() {
    return Object.keys(this);
    },
    values() {
    return Object.values(this);
    },
}
console.log(student.total());
console.log(student.average());
console.log(student.studentname());
console.log(student.keys());
console.log(student.values());
*/