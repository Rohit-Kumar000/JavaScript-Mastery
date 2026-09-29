# JavaScript Encapsulation

## 1. What is Encapsulation?

**Encapsulation** OOP ka ek important concept hai jisme data aur us data par kaam karne wale methods ko ek single unit, usually **class**, ke andar organize kiya jata hai.

Saath hi, kuch internal data ko direct access se restrict bhi kiya ja sakta hai.

Simple idea:

```text
Data + Methods
      ↓
   Class
      ↓
Controlled Access
```

---

# 2. Real-World Example

Bank account ko imagine karo.

Bank account ke andar:

```text
Balance
Account Number
PIN
```

Jaise sensitive data ko directly change nahi karna chahiye.

Instead:

```text
deposit()
withdraw()
getBalance()
```

jaise methods ke through controlled access diya ja sakta hai.

---

# 3. Basic Encapsulation

```javascript
class BankAccount {

    constructor(balance) {

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

    getBalance() {

        return this.balance;

    }

}
```

Use:

```javascript
const account = new BankAccount(5000);

account.deposit(1000);

console.log(account.getBalance());
```

Output:

```text
6000
```

---

# 4. Problem with Public Properties

Upar wale example mein:

```javascript
account.balance
```

directly accessible hai.

Aur koi bhi directly value change kar sakta hai:

```javascript
account.balance = -50000;
```

Ye undesirable ho sakta hai.

Isliye sensitive/internal data ko private rakhna useful hota hai.

---

# 5. Private Fields

Modern JavaScript classes mein private fields ke liye `#` use hota hai.

Example:

```javascript
class BankAccount {

    #balance = 0;

}
```

Ab `#balance` class ke bahar directly accessible nahi hai.

```javascript
const account = new BankAccount();

console.log(account.#balance);
```

Ye invalid syntax hai.

---

# 6. Private Field with Constructor

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
```

Use:

```javascript
const account = new BankAccount(5000);

console.log(account.getBalance());
```

Output:

```text
5000
```

Yahan balance internally private hai.

---

# 7. Controlled Access

Private data ko methods ke through access/control kar sakte hain.

```javascript
class BankAccount {

    #balance;

    constructor(balance) {

        this.#balance = balance;

    }

    deposit(amount) {

        if (amount <= 0) {

            throw new Error(
                "Amount must be positive"
            );

        }

        this.#balance += amount;

    }

    getBalance() {

        return this.#balance;

    }

}
```

Use:

```javascript
const account = new BankAccount(5000);

account.deposit(1000);

console.log(account.getBalance());
```

Output:

```text
6000
```

---

# 8. Why Encapsulation?

Encapsulation ke benefits:

```text
✓ Data protection
✓ Controlled access
✓ Better code organization
✓ Validation possible
✓ Internal implementation hide kar sakte hain
✓ Accidental modification reduce hoti hai
```

---

# 9. Getter Method

Private data ko read karne ke liye getter method bana sakte hain.

```javascript
class User {

    #name;

    constructor(name) {

        this.#name = name;

    }

    getName() {

        return this.#name;

    }

}
```

Use:

```javascript
const user = new User("Rohit");

console.log(user.getName());
```

Output:

```text
Rohit
```

---

# 10. Setter Method

Private data ko update karne ke liye setter-style method bana sakte hain.

```javascript
class User {

    #name;

    constructor(name) {

        this.#name = name;

    }

    setName(name) {

        if (!name) {

            throw new Error(
                "Name cannot be empty"
            );

        }

        this.#name = name;

    }

    getName() {

        return this.#name;

    }

}
```

Use:

```javascript
const user = new User("Rohit");

user.setName("Aman");

console.log(user.getName());
```

Output:

```text
Aman
```

---

# 11. Getter and Setter Keywords

JavaScript classes mein actual `get` aur `set` syntax bhi use kar sakte hain.

```javascript
class User {

    #name;

    constructor(name) {

        this.#name = name;

    }

    get name() {

        return this.#name;

    }

    set name(value) {

        if (!value) {

            throw new Error(
                "Name cannot be empty"
            );

        }

        this.#name = value;

    }

}
```

Use:

```javascript
const user = new User("Rohit");

console.log(user.name);

user.name = "Aman";

console.log(user.name);
```

Output:

```text
Rohit
Aman
```

Notice:

```javascript
user.name
```

getter call karta hai.

Aur:

```javascript
user.name = "Aman";
```

setter call karta hai.

---

# 12. Encapsulation with Validation

Encapsulation ka ek major advantage validation hai.

```javascript
class Student {

    #age;

    constructor(age) {

        this.age = age;

    }

    get age() {

        return this.#age;

    }

    set age(value) {

        if (value < 0 || value > 120) {

            throw new Error(
                "Invalid age"
            );

        }

        this.#age = value;

    }

}
```

Use:

```javascript
const student = new Student(25);

console.log(student.age);
```

Output:

```text
25
```

Invalid value:

```javascript
student.age = -10;
```

Error:

```text
Error: Invalid age
```

---

# 13. Private Method

JavaScript classes mein methods ko bhi private bana sakte hain using `#`.

```javascript
class User {

    #validateName(name) {

        return name.length >= 3;

    }

    constructor(name) {

        if (!this.#validateName(name)) {

            throw new Error(
                "Name is too short"
            );

        }

        this.name = name;

    }

}
```

Yahan:

```javascript
#validateName()
```

private method hai.

---

# 14. Public vs Private

### Public

```javascript
class User {

    name = "Rohit";

}
```

Access:

```javascript
const user = new User();

console.log(user.name);
```

Allowed.

### Private

```javascript
class User {

    #name = "Rohit";

}
```

Access:

```javascript
user.#name;
```

Allowed nahi hai outside the class.

---

# 15. Public Method + Private Data

Ye encapsulation ka common pattern hai.

```javascript
class BankAccount {

    #balance = 0;

    deposit(amount) {

        this.#balance += amount;

    }

    getBalance() {

        return this.#balance;

    }

}
```

User:

```javascript
const account = new BankAccount();

account.deposit(5000);

console.log(account.getBalance());
```

User ko internally `#balance` ka direct access nahi diya gaya.

---

# 16. Bank Account Example

Complete example:

```javascript
class BankAccount {

    #balance;

    constructor(initialBalance) {

        if (initialBalance < 0) {

            throw new Error(
                "Balance cannot be negative"
            );

        }

        this.#balance = initialBalance;

    }

    deposit(amount) {

        if (amount <= 0) {

            throw new Error(
                "Deposit must be positive"
            );

        }

        this.#balance += amount;

    }

    withdraw(amount) {

        if (amount <= 0) {

            throw new Error(
                "Withdrawal must be positive"
            );

        }

        if (amount > this.#balance) {

            throw new Error(
                "Insufficient balance"
            );

        }

        this.#balance -= amount;

    }

    getBalance() {

        return this.#balance;

    }

}
```

Use:

```javascript
const account = new BankAccount(5000);

account.deposit(2000);
account.withdraw(1000);

console.log(account.getBalance());
```

Output:

```text
6000
```

---

# 17. Encapsulation Flow

```text
User
  │
  ↓
Public Method
  │
  ↓
Validation
  │
  ↓
Private Data
  │
  ↓
Updated Value
```

Example:

```text
deposit(1000)
      ↓
Validate Amount
      ↓
#balance
      ↓
Update Balance
```

---

# 18. Encapsulation vs Abstraction

Dono concepts related hain, lekin exactly same nahi hain.

### Encapsulation

Data aur methods ko class ke andar organize karta hai aur access ko control kar sakta hai.

```text
Data
 +
Methods
 ↓
Class
 ↓
Access Control
```

### Abstraction

Unnecessary implementation details ko hide karke important functionality expose karne ka concept hai.

Example:

```javascript
car.start();
```

User ko engine ke internal steps manually perform nahi karne padte.

---

# 19. Encapsulation with Multiple Private Fields

```javascript
class User {

    #password;
    #email;

    constructor(email, password) {

        this.#email = email;
        this.#password = password;

    }

    getEmail() {

        return this.#email;

    }

    checkPassword(password) {

        return this.#password === password;

    }

}
```

Use:

```javascript
const user = new User(
    "rohit@example.com",
    "123456"
);

console.log(user.getEmail());

console.log(
    user.checkPassword("123456")
);
```

Output:

```text
rohit@example.com
true
```

Private password directly expose nahi hota.

> Real applications mein passwords ko plain text mein store nahi karna chahiye; ye example sirf JavaScript encapsulation samajhne ke liye hai.

---

# 20. Private Data Cannot Be Accessed by Child Class Directly

```javascript
class Parent {

    #secret = "hidden";

    getSecret() {

        return this.#secret;

    }

}

class Child extends Parent {

}
```

Child class directly:

```javascript
this.#secret
```

access nahi kar sakti.

Lekin inherited public method use kar sakti hai:

```javascript
const child = new Child();

console.log(child.getSecret());
```

Output:

```text
hidden
```

---

# 21. Encapsulation with Employee

```javascript
class Employee {

    #salary;

    constructor(name, salary) {

        this.name = name;
        this.#salary = salary;

    }

    getSalary() {

        return this.#salary;

    }

    increaseSalary(amount) {

        if (amount <= 0) {

            throw new Error(
                "Amount must be positive"
            );

        }

        this.#salary += amount;

    }

}
```

Use:

```javascript
const employee = new Employee(
    "Rohit",
    30000
);

employee.increaseSalary(5000);

console.log(employee.getSalary());
```

Output:

```text
35000
```

---

# 22. Why Not Make Everything Private?

Har property ko private banana necessary nahi hota.

Example:

```javascript
class Product {

    constructor(name, price) {

        this.name = name;
        this.price = price;

    }

}
```

Agar `name` aur `price` ko normal public data ki tarah use karna acceptable hai, to private field ki need nahi ho sakti.

Private fields tab particularly useful hote hain jab:

```text
✓ Data sensitive/internal ho
✓ Validation required ho
✓ Direct modification prevent karni ho
✓ Internal implementation hide karni ho
```

---

# 23. Real-World Example: Shopping Cart

```javascript
class ShoppingCart {

    #items = [];

    addItem(item) {

        this.#items.push(item);

    }

    removeItem(index) {

        this.#items.splice(index, 1);

    }

    getItems() {

        return [...this.#items];

    }

    getTotal() {

        return this.#items.reduce(
            (total, item) => total + item.price,
            0
        );

    }

}
```

Use:

```javascript
const cart = new ShoppingCart();

cart.addItem({
    name: "Keyboard",
    price: 1000
});

cart.addItem({
    name: "Mouse",
    price: 500
});

console.log(cart.getTotal());
```

Output:

```text
1500
```

Yahan cart ke internal `#items` ko directly expose nahi kiya gaya.

---

# 24. Important Syntax

### Private field

```javascript
#balance;
```

### Private method

```javascript
#validate() {

}
```

### Private field access

```javascript
this.#balance
```

### Getter

```javascript
get balance() {

    return this.#balance;

}
```

### Setter

```javascript
set balance(value) {

    this.#balance = value;

}
```

---

# Quick Revision

### Encapsulation

```text
Data + Methods
      ↓
   Class
      ↓
Controlled Access
```

### Private Field

```javascript
class User {

    #name;

}
```

### Access Inside Class

```javascript
this.#name
```

### Public Getter

```javascript
getName() {

    return this.#name;

}
```

### Setter

```javascript
setName(name) {

    this.#name = name;

}
```

### Getter Syntax

```javascript
get name() {

    return this.#name;

}
```

### Setter Syntax

```javascript
set name(value) {

    this.#name = value;

}
```

---

# Public vs Private

```text
                Class
                  │
        ┌─────────┴─────────┐
        ↓                   ↓
     Public              Private
        │                   │
        ↓                   ↓
 Accessible             Restricted
 outside                outside class
```

Example:

```javascript
class User {

    name = "Rohit";     // Public

    #password = "123";  // Private

}
```

---

# Final Example

```javascript
class BankAccount {

    #balance;

    constructor(balance) {

        if (balance < 0) {

            throw new Error(
                "Invalid initial balance"
            );

        }

        this.#balance = balance;

    }

    deposit(amount) {

        if (amount <= 0) {

            throw new Error(
                "Invalid deposit amount"
            );

        }

        this.#balance += amount;

    }

    withdraw(amount) {

        if (amount > this.#balance) {

            throw new Error(
                "Insufficient balance"
            );

        }

        this.#balance -= amount;

    }

    get balance() {

        return this.#balance;

    }

}

const account = new BankAccount(5000);

account.deposit(2000);
account.withdraw(1000);

console.log(account.balance);
```

Output:

```text
6000
```

Yahan:

```text
#balance
   ↓
Private Data

deposit()
withdraw()
   ↓
Controlled Modification

balance
   ↓
Controlled Reading
```

---

## Next File

```text
17-OOP/06-Polymorphism.md
```