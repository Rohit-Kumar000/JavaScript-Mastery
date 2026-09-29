/* Q.1 Create an object representing a Student with properties name, age, and course. Display all its properties.

const student = {
    name: "Rohit",
    age: 23,
    course: "MCA",
}
console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(Object.keys(student));
*/


/* Q.2 Create a Car class with properties brand, model, and year. Create an object from the class and display its 
details.

class Car {
    brand = "BMW";
    model = "BMW5";
    year =  2020;
}
const obj = new Car();
console.log(obj.brand);
console.log(obj.model);
console.log(obj.year);
*/


/* Q.3 Create a Person class with a constructor that accepts name and age. Create two different objects using the 
class.

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    user() {
        console.log(`Hello my name is ${this.name} and I am ${this.age}`);
        
    }
}
const result = new Person();
result.user();
*/


/* Q.4 Create a Rectangle class with length and width properties. Add a method that calculates and returns the area.

class Rectangle {
    constructor(length,width) {
        this.length = length;
        this.width = width;
    }
    area() {
        return this.length * this.width;
    }
}
const result = new Rectangle(22,31);
console.log(result.area());
*/


/* Q.5 Create a BankAccount class with accountHolder and balance properties. Add a method to display the account 
details.

class BankAccount {
    constructor(owner,balance) {
        this.owner = owner;
        this.balance = balance;
    }
    details() {
        console.log(`Account Holder Name: ${this.owner} and balance is: ${this.balance}`);
        
    }
}
const account = new BankAccount("Rohit", 20000);
account.details();
*/


/* Q.6 Create a Student class with a constructor accepting name, rollNumber, and marks. Add a method to display 
the student's details.

class Stundent {
    constructor(name,rollNumber,marks) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
    }
    method(){
        console.log(`Name: ${this.name}, Roll Number: ${this.rollNumber}, Marks:${this.marks}`);
        
    }
}
const details = new Stundent("Rohit", 6229669, 566);
details.method();
*/


/* Q.7 Create an Employee class with name, position, and salary. Create three employee objects and display their 
details.

class Employee {
    constructor(name,position,salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    final() {
        console.log(`Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary}`);
        
    }
}
const result1 = new Employee("Rohit", "Software Engineer", "60Lakh");
const result2 = new Employee("Aman", "Web Engineer", "20Lakh");
const result3 = new Employee("Rishi", "Mern Engineer", "12Lakh");
result1.final();
result2.final();
result3.final();
*/


/* Q.8 Create a MobilePhone class with brand, model, and price. Add a method that displays a message containing 
all three details.

class Mobile {
    constructor(brand,model,price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    print() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Price: ${this.price}`);
        
    }
}
const phone = new Mobile("iPhone", "18Pro", "4lakh");
phone.print();
*/


/* Q.9 Create a Calculator class with two numbers as constructor parameters. Add methods for addition, subtraction, 
multiplication, and division.

class Calculator {
    constructor(a,b) {
        this.a = a;
        this.b = b;
    }
    add() {
        return this.a + this.b;
    }
    sub() {
        return this.a - this.b;
    }
    mul() {
        return this.a * this.b;
    }
    div() {
        return this.a / this.b;
    }
}
const result = new Calculator(54,23);
console.log(result.add());
console.log(result.sub());
console.log(result.mul());
console.log(result.div());
*/


/* Q.10 Create a Product class with name, price, and quantity. Add a method that calculates and returns the total 
price using price × quantity.


class Product {
    constructor(name,price,quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    sum() {
        console.log(`Product: ${this.name}`);
        
        return this.price * this.quantity
    }
}
const total = new Product("Laptop", 2, 23);
console.log(total.sum());
*/


/* Q.11 Create a Person class with name and age properties. Create a Student class that extends Person and 
adds a course property. Display all student details.


class Person {
    name = "Rohit";
    age = 23;
}
class Student extends Person {
    course = "MCA";
}

const user = new Student();
console.log(user.name);
console.log(user.age);
console.log(user.course);           // Simple Inheritance End

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    constructor(name,age,course){
        super(name,age)
        this.course = course;
    }
    newPrint() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`);
        
    }
}
const result = new Student("Rohit",23,"MCA");
result.newPrint();
*/


/* Q.12 Create a Vehicle class with a start() method. Create Car and Bike classes that extend Vehicle and 
add their own methods.

class Vehicle {
    start() {
        console.log("Starting the car");
        
    }
}
class Car extends Vehicle {
    brake() {
        console.log("Braking");
        
    }
}
class Bike extends Vehicle {
    stop() {
        console.log("Stop the car");
        
    }
}

const car = new Car();
const bike = new Bike();

car.start();
car.brake();

bike.start();
bike.stop();
*/


/* Q.13 Create an Animal class with a speak() method. Create Dog and Cat classes that extend Animal and 
override the speak() method.

class Animal {
    speak() {
        console.log("Animal");
        
    }
}
class Dog extends Animal {
    speak() {
        console.log("Dog");
        
    }
}
class Cat extends Animal {
    speak() {
        console.log("Cat");
        
    }
}

const dog = new Dog();
const cat = new Cat();

dog.speak();
cat.speak();
*/


/* Q.14 Create an Employee class with name and salary. Create a Manager class that extends Employee and adds 
a department property.


class Employee {
    constructor(name,salary) {
        this.name = name;
        this.salary = salary;
    }
}
class Manager extends Employee {
    constructor(name,salary,department) {
        super(name,salary)
        this.department = department;
    }
    print() {
        return `Name: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`
    }
}
const company = new Manager("Aman","24lakh","HR");
console.log(company.print());
*/


/* Q.15 Create a BankAccount class with a private #balance property. Add methods to deposit money, withdraw 
money, and check the balance.

class BankAccount {
    #balance;
    constructor(balance) {
        this.#balance = balance;
    }
    deposite(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        if(amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log("Insufficient balance");
            
        }
    }
    getBalance() {
        return this.#balance;
    }

}
const account = new BankAccount(10000);
account.deposite(5000);
account.withdraw(10000);
console.log(account.getBalance());
*/


/* Q.16 Create a User class with a private #password property. Add methods to change the password and verify 
whether a given password is correct.

class User {
    #password;
    constructor(password) {
        this.#password = password;
    }
    changePassword(newPassword) {
        this.#password = newPassword;
        console.log("Password changed Successfully");
        
    }
    verifyPassword(password) {
        return this.#password === password;
    }
}
const result = new User("Rohit@12");
console.log(result.verifyPassword("Rohit@12"));

result.changePassword("Rohit21")
console.log(result.verifyPassword("Rohit@12"));
console.log(result.verifyPassword("Rohit21"));
*/


/* Q.17 Create a Shape class with an area() method. Create Circle, Rectangle, and Square classes that extend 
Shape and implement their own area() methods.

class Shape {
    area() {
        console.log("Calculating area");
    }
}
class Circle extends Shape {
        constructor(radius) {
            super();
            this.radius = radius;
        }
        area() {
            return Math.PI * this.radius * this.radius;
        }
}
class Rectangle extends Shape {
        constructor(length,width) {
            super();
            this.length = length;
            this.width = width;
        }
        area() {
            return this.length * this.width;
        }

}
class Square extends Shape {
        constructor(a) {
            super();
            this.a = a;
        }
        area() {
            return this.a * this.a;
        }
}
const circle = new Circle(5);
const rectangle = new Rectangle(4,6);
const square = new Square(4);

console.log("Area of Circle: ", circle.area());
console.log("Area of Rectangle: ", rectangle.area());
console.log("Area of Square:" ,square.area());
*/


/* Q.18 Create a Payment class with a pay() method. Create CreditCard, UPI, and Cash classes that override 
the pay() method with different payment messages.

class Payment {
    pay() {
        console.log("pay for PAY");
        
    }
}
class CreditCard extends Payment {
    pay() {
        console.log("pay for Credit Card");
        
    }
}
class UPI extends Payment{
    pay() {
        console.log("pay for UPI");
        
    }
}
class Cash extends Payment {
    pay() {
        console.log("pay for Cash");
        
    }
}

const creditcard = new CreditCard();
const upi = new UPI();
const cash = new Cash();

creditcard.pay();
upi.pay();
cash.pay();
*/


/* Q.19 Create a Person class with a protected-style property convention such as _age. Add getter and setter 
methods to control how the age is accessed and updated.

class Person {
    constructor(name,age) {
        this.name = name;
        this._age = age;
    }
    getAge() {
        return this._age;
    }
    setAge(newAge) {
        if(newAge >= 0) {
            this._age = newAge;
        } else {
            console.log("Age cannot be negative");
            
        }
    }
}

const person = new Person("Rohit", 23);
console.log(person.getAge());
person.setAge(24);
console.log(person.getAge());
person.setAge(-5);
*/


/* Q.20 Create a small Employee Management Project using inheritance, encapsulation, and polymorphism. Create 
different employee types and display their details and role-specific behavior.

class Employee {
    constructor(name,salary) {
        this.name = name;
        this.salary = salary;
    }
    details() {
        console.log(`Name: ${this.name}, Salary: ${this.salary}`);
        
    }
    work() {
        console.log("Employee is working");
        
    }
}
class Developer extends Employee {
    constructor(name,salary,language) {
        super(name,salary);
        this.language = language;
    }
    work() {
        console.log(`${this.name} is developing using ${this.language}`);
        
    }
}
class Manager extends Employee {
    constructor(name,salary,department) {
        super(name,salary);
        this.department = department;
    }
    work() {
        console.log(`${this.name} is managing the ${this.department} department`);
        
    }
}
const developer = new Developer("Rohit", "55,000", "JavaScript");
const manager = new Manager("Aman", "43,000", "Software Engineer");

developer.details();
developer.work();

manager.details();
manager.work();
*/