/* Q1. Take a number from the user and check whether the number is even or odd.

let user = Number(prompt("Enter the Number"));
if(user % 2 === 0){
    console.log("Even");
} else {
    console.log("Odd");
}
*/

/* Q2. Take the user's age and check whether they are eligible to vote or not. 

let age = Number(prompt("Enter your age"));
if (age < 0) {
    console.log("Invalid age");
    
} else if (age < 18) {
    console.log("You are not eligible to vote");
    
} else {
    console.log("You are eligible to vote");

}
*/

/* Q3. Take a number from the user and check whether it is positive, negative, 
or zero.

let user = Number(prompt("Enter the number"));
if (user < 0) {
    console.log(user, "is negative");
    
} else if (user === 0) {
    console.log(user, "is zero");
    
} else {
    console.log(user, "positive");

}
*/

/* Q4. Take marks from the user and print the grade according to the following:
- 90–100 → A
- 80–89 → B
- 70–79 → C
- 60–69 → D
- 50–59 → E
- Below 50 → F

let marks = Number(prompt("Enter your marks"));
if (marks >= 90) {
    console.log("Grade: A");
    
} else if(marks >= 80) {
    console.log("Grade: B");
    
} else if (marks >= 70) {
    console.log("Grade: C");
    
} else if (marks >= 60) {
    console.log("Grade: D");
    
} else if (marks >= 50) {
    console.log("Grade: E");
    
} else {
    console.log("Grade: F -> Fail");

}
*/

/* Q5. Take three numbers from the user and find the largest number.

let user1 = Number(prompt("Enter your first numer"));
let user2 = Number(prompt("Enter your second numer"));
let user3 = Number(prompt("Enter your third numer"));
if (user1 > user2 && user1 >user3) {
    console.log(user1, "is the largest number");
    
} else if (user2 > user1 && user2 > user3) {
    console.log(user2, "is the largest number");
    
} else {
    console.log(user3, "is the largest number");

}
*/

/* Q6. Create a simple login system using a username and password with 
nested if statements.

let username = prompt("Enter Your Username");
let password = prompt("Enter Your Password")

if (username == "Rohit") {
    if (password === 1234) {
        console.log("You Entered Successfully");
        
    } else {
        console.log("Password Incorrect Please Try Again!");
        
    }
} else {
        console.log("Username Incorrect Please Try Again!");
        
}
*/

/* Q7. Take a number from the user. First check whether it is positive. If it 
is positive, check whether it is greater than 10 or not.

let user = Number(prompt("Enter the number"));
if (user > 0) {
    if (user > 10) {
        console.log(user, "is greater");
        
    } else {
        console.log(user, "is smaller");
        
}
} else {
    console.log("Invalid Number");

}
*/

/* Q8. Use a switch statement to print the day of the week based on a number 
from 1 to 7.

let day = Number(prompt("Enter 1 to 7"));
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
        case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Firday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        default:
        break;
}
*/

/* Q9. Check the following values using if conditions and determine whether each 
value is truthy or falsy:
0, 1, "", "Hello", null, undefined, true, false 

if(0){
    console.log("Truthy");
    
}else {
    console.log("falsy");

}

if(1){
    console.log("Truthy");
    
}else {
    console.log("falsy");

}

if(""){
    console.log("Truthy");
    
}else {
    console.log("falsy");

}

if("Hello"){
    console.log("Truthy");
    
}else {
    console.log("falsy");

}

if(null){
    console.log("Truthy");
    
}else {
    console.log("falsy");
    
}

if(undefined){
    console.log("Truthy");
    
}else {
    console.log("falsy");

}

if(true){
    console.log("Truthy");
    
}else {
    console.log("falsy");
    
}

if(false){
    console.log("Truthy");
    
}else {
    console.log("falsy");

}
*/

/* Q10. Create a simple ATM withdrawal system. Take the account balance and 
withdrawal amount from the user and handle:
- Invalid amount
- Insufficient balance
- Successful withdrawal
- Remaining balance 

let balance = Number(prompt("Enter Your Balance"));
let withdrawal = Number(prompt("Enter Your Withdrawl Amount"));

if (balance <= 0) {
    console.log("Insufficient balance");
    
} else if (withdrawal <= 0) {
    console.log("Invalid amount");
    
} else if (withdrawal > balance) {
    console.log("Insufficient balance");
    
}else {
    console.log("Withdrawn balance", withdrawal);
console.log("Remaining balance: ", (balance - withdrawal));
    
}
*/