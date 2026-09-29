# JavaScript Constructor

## 1. What is a Constructor?

Class ke andar `constructor()` ek special method hota hai jo **object create hote waqt automatically execute** hota hai.

Example:

```javascript
class User {

    constructor() {
        console.log("User created");
    }

}

const user = new User();
```

Output:

```text
User created
```

Jab:

```javascript
new User();
```

execute hua, `constructor()` automatically call ho gaya.

---

# 2. Why Use Constructor?

Constructor ka main use object ke initial data ko set karna hota hai.

Example:

```javascript
class User {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }

}
```

Objects:

```javascript
const user1 = new User("Rohit", 25);
const user2 = new User("Aman", 24);
```

Ab:

```javascript
console.log(user1.name);
console.log(user2.name);
```

Output:

```text
Rohit
Aman
```

---

# 3. Constructor Syntax

Basic syntax:

```javascript
class ClassName {

    constructor(parameters) {

        // Initialization

    }

}
```

Example:

```javascript
class Student {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }

}
```

---

# 4. `this` in Constructor

Constructor mein `this` current object ko refer karta hai.

```javascript
class User {

    constructor(name) {

        this.name = name;

    }

}
```

Agar:

```javascript
const user = new User("Rohit");
```

to:

```javascript
this.name
```

current `user` object ki `name` property ko represent karega.

---

# 5. Constructor Parameters

Constructor parameters ke through values pass kar sakte hain.

```javascript
class Student {

    constructor(name, course, age) {

        this.name = name;
        this.course = course;
        this.age = age;

    }

}

const student = new Student(
    "Rohit",
    "MCA",
    25
);

console.log(student.name);
console.log(student.course);
console.log(student.age);
```

Output:

```text
Rohit
MCA
25
```

---

# 6. Multiple Objects

Same constructor se multiple objects create kar sakte hain.

```javascript
class Student {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }

}

const student1 = new Student("Rohit", 25);
const student2 = new Student("Aman", 24);
const student3 = new Student("Rahul", 23);
```

Each object ka data independent hota hai.

```text
Student
│
├── student1
│   ├── name: Rohit
│   └── age: 25
│
├── student2
│   ├── name: Aman
│   └── age: 24
│
└── student3
    ├── name: Rahul
    └── age: 23
```

---

# 7. Constructor + Methods

Constructor data initialize karta hai aur methods behavior provide karte hain.

```javascript
class User {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }

    greet() {

        console.log(
            `Hello ${this.name}`
        );

    }

}
```

Use:

```javascript
const user = new User("Rohit", 25);

user.greet();
```

Output:

```text
Hello Rohit
```

---

# 8. Constructor with Default Values

Parameters ko default values de sakte hain.

```javascript
class User {

    constructor(name = "Guest", age = 0) {

        this.name = name;
        this.age = age;

    }

}

const user1 = new User();

console.log(user1.name);
console.log(user1.age);
```

Output:

```text
Guest
0
```

Agar values provide karein:

```javascript
const user2 = new User("Rohit", 25);
```

to default values use nahi hongi.

---

# 9. Constructor with Calculations

Constructor ke andar calculations bhi kar sakte hain.

```javascript
class Rectangle {

    constructor(width, height) {

        this.width = width;
        this.height = height;
        this.area = width * height;

    }

}

const rectangle = new Rectangle(10, 5);

console.log(rectangle.area);
```

Output:

```text
50
```

---

# 10. Constructor with Object Data

Constructor ko object bhi pass kar sakte hain.

```javascript
class User {

    constructor(userData) {

        this.name = userData.name;
        this.age = userData.age;
        this.city = userData.city;

    }

}

const user = new User({
    name: "Rohit",
    age: 25,
    city: "Mohali"
});

console.log(user.name);
```

Output:

```text
Rohit
```

---

# 11. Constructor and Validation

Constructor ke andar input validate kar sakte hain.

```javascript
class User {

    constructor(name, age) {

        if (!name) {
            throw new Error("Name is required");
        }

        if (age < 18) {
            throw new Error(
                "Age must be 18 or above"
            );
        }

        this.name = name;
        this.age = age;

    }

}
```

Use:

```javascript
try {

    const user = new User("Rohit", 16);

} catch (error) {

    console.log(error.message);

}
```

Output:

```text
Age must be 18 or above
```

---

# 12. Constructor and `new`

Normally class ka constructor directly call nahi kiya jata.

Correct:

```javascript
const user = new User("Rohit");
```

`new` object create karta hai aur constructor ko automatically execute karta hai.

Flow:

```text
new User()
    ↓
New Object
    ↓
constructor()
    ↓
Initialize Properties
    ↓
Object Ready
```

---

# 13. What Happens When `new` is Used?

Conceptually `new` ke saath roughly ye process hota hai:

```text
1. New object create hota hai
2. Object ka prototype set hota hai
3. Constructor `this` ko new object ke context mein run karta hai
4. Constructor properties initialize karta hai
5. Object return hota hai
```

Example:

```javascript
class User {

    constructor(name) {

        this.name = name;

    }

}

const user = new User("Rohit");
```

Result:

```text
user
│
└── name: "Rohit"
```

---

# 14. Constructor Automatically Called

Ye:

```javascript
const user = new User("Rohit");
```

internally constructor ko call karta hai.

Hum manually:

```javascript
user.constructor();
```

normally use nahi karte.

---

# 15. Constructor is Optional

Class mein constructor likhna mandatory nahi hai.

Example:

```javascript
class User {

    greet() {
        console.log("Hello");
    }

}

const user = new User();

user.greet();
```

Ye valid hai.

Agar constructor nahi likha, JavaScript default constructor provide karti hai.

---

# 16. Default Constructor

Example:

```javascript
class User {

}
```

Conceptually default constructor behave kar sakta hai like:

```javascript
class User {

    constructor() {

    }

}
```

Simple class ke liye manually constructor define karna zaroori nahi.

---

# 17. Constructor Cannot Be Multiple

Ek class mein multiple constructor definitions nahi kar sakte.

Invalid:

```javascript
class User {

    constructor(name) {

        this.name = name;

    }

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }

}
```

Class mein ek hi constructor definition ho sakti hai.

Multiple types of input chahiye ho to parameters/default values ya other logic use kar sakte hain.

---

# 18. Constructor with Methods

Complete example:

```javascript
class BankAccount {

    constructor(owner, balance) {

        this.owner = owner;
        this.balance = balance;

    }

    deposit(amount) {

        this.balance += amount;

    }

    withdraw(amount) {

        if (amount > this.balance) {

            console.log("Insufficient balance");
            return;

        }

        this.balance -= amount;

    }

    showBalance() {

        console.log(
            `${this.owner}: ₹${this.balance}`
        );

    }

}

const account = new BankAccount(
    "Rohit",
    5000
);

account.deposit(1000);
account.withdraw(2000);
account.showBalance();
```

Output:

```text
Rohit: ₹4000
```

---

# 19. Constructor with Arrays

```javascript
class Student {

    constructor(name, subjects) {

        this.name = name;
        this.subjects = subjects;

    }

    showSubjects() {

        console.log(this.subjects);

    }

}

const student = new Student(
    "Rohit",
    ["JavaScript", "DBMS", "Networking"]
);

student.showSubjects();
```

Output:

```text
["JavaScript", "DBMS", "Networking"]
```

---

# 20. Constructor with Nested Objects

```javascript
class User {

    constructor(name, address) {

        this.name = name;
        this.address = address;

    }

}

const user = new User(
    "Rohit",
    {
        city: "Mohali",
        state: "Punjab"
    }
);

console.log(user.address.city);
```

Output:

```text
Mohali
```

---

# 21. Constructor and Private Fields

Private fields ko constructor mein initialize kar sakte hain.

```javascript
class BankAccount {

    #balance;

    constructor(balance) {

        this.#balance = balance;

    }

    getBalance() {

        return this.#balance;

    }

}

const account = new BankAccount(5000);

console.log(account.getBalance());
```

Output:

```text
5000
```

---

# 22. Constructor in Inheritance

Agar child class parent class ko extend karti hai aur child class ka apna constructor define karti hai, to parent constructor ko call karne ke liye `super()` use karna hota hai.

Example:

```javascript
class Animal {

    constructor(name) {

        this.name = name;

    }

}

class Dog extends Animal {

    constructor(name, breed) {

        super(name);

        this.breed = breed;

    }

}
```

Object:

```javascript
const dog = new Dog(
    "Tommy",
    "Labrador"
);

console.log(dog.name);
console.log(dog.breed);
```

Output:

```text
Tommy
Labrador
```

`super(name)` parent class ke constructor ko call karta hai.

Inheritance ko next file mein detail mein cover karenge.

---

# 23. Constructor + Getter

```javascript
class User {

    constructor(firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;

    }

    get fullName() {

        return `${this.firstName} ${this.lastName}`;

    }

}

const user = new User(
    "Rohit",
    "Kumar"
);

console.log(user.fullName);
```

Output:

```text
Rohit Kumar
```

---

# 24. Real-World Example: Product

```javascript
class Product {

    constructor(name, price, category) {

        this.name = name;
        this.price = price;
        this.category = category;

    }

    display() {

        console.log(
            `${this.name} - ₹${this.price}`
        );

    }

}

const laptop = new Product(
    "Dell Laptop",
    50000,
    "Electronics"
);

const phone = new Product(
    "Smartphone",
    25000,
    "Electronics"
);

laptop.display();
phone.display();
```

Output:

```text
Dell Laptop - ₹50000
Smartphone - ₹25000
```

---

# 25. Constructor Flow

```text
              new User()
                   │
                   ↓
             Create Object
                   │
                   ↓
             constructor()
                   │
                   ↓
          Initialize Properties
                   │
                   ↓
              Object Ready
```

---

# 26. Important Points

```text
✓ Constructor ka naam exactly `constructor` hota hai
✓ Constructor automatically call hota hai
✓ `new` constructor ko trigger karta hai
✓ Constructor object ki initial properties set karta hai
✓ Ek class mein ek constructor definition hoti hai
✓ Constructor optional hai
✓ Default values use kar sakte hain
✓ Constructor mein validation kar sakte hain
✓ Constructor errors throw kar sakta hai
✓ Inheritance mein `super()` parent constructor ko call karta hai
```

---

# Quick Revision

### Basic Constructor

```javascript
class User {

    constructor(name) {

        this.name = name;

    }

}
```

### Create Object

```javascript
const user = new User("Rohit");
```

### Access Property

```javascript
console.log(user.name);
```

### Default Value

```javascript
constructor(name = "Guest") {

    this.name = name;

}
```

### Validation

```javascript
if (!name) {

    throw new Error("Name is required");

}
```

### Inheritance

```javascript
constructor(name) {

    super(name);

}
```

---

# Constructor vs Method

| Constructor | Method |
|---|---|
| Object create hone par automatically call hota hai | Manually call karte hain |
| `constructor()` naam fixed hai | Method ka naam kuch bhi ho sakta hai |
| Initial data set karne ke liye common | Object behavior ke liye |
| Class mein ek constructor definition | Multiple methods ho sakte hain |

Example:

```javascript
class User {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }

}
```

Yahan:

```text
constructor() → Initialization
greet()       → Behavior
```

---

## Next File

```text
17-OOP/04-Inheritance.md
```