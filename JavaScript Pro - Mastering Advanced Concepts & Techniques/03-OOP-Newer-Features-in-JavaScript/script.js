'use strict';

//* Getters

// Chat GPT 👇
// https://chatgpt.com/share/4467b597-8c70-428d-9aed-7a7abf66ddfa

/* 
{
  // 1. Defining a Getter

  // NOTE: Getters are defined using the "get" keyword inside an object or a class. You can think of a getter as a method that’s called when you attempt to read a property.

  const person = {
    firstName: 'Mahmud',
    lastName: 'Hasan',

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };

  console.log(person.fullName); // Mahmud Hasan

  //? How Getters Work:
  // No Arguments: A getter does not take any arguments. Its job is simply to return a value based on other properties of the object.

  // Called Automatically: The getter method is automatically called when you access the property. In the above example, person.fullName looks like a regular property but is actually a method call that returns a string.

  // Cannot Set: A getter can only read the value. If you try to assign a value to a getter property, it will not work unless you define a corresponding setter.

  // 2. Using Getters in Classes

  // NOTE: You can also use getters inside classes. Here's an example where we define a Rectangle class with a getter for the area:

  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }

    // Getter for calculating the area
    get area() {
      return this.width * this.height;
    }
  }

  const rect = new Rectangle(5, 10);
  console.log(rect.area); // 50

  // 3. Combining Getters with Setters

  // NOTE: Getters are often paired with setters, which allow you to define how properties should be set. While getters are used to access properties, setters are used to modify them.

  const user = {
    firstName: 'Mahmud',
    lastName: 'Hasan',

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
      const [first, last] = name.split(' ');
      this.firstName = first;
      this.lastName = last;
    },
  };

  console.log(user.fullName); // Mahmud Hasan

  user.fullName = 'Ahmed Khan';
  console.log(user.fullName); // Ahmed Khan
}
 */

// Lecture Code

{
}

//* Setters

// Chat GPT 👇
// https://chatgpt.com/share/75634718-4bba-47a2-9380-45d8d41d1072

/* 
{
  const person = {
    firstName: 'Mahmud',
    lastName: 'Hasan',

    set fullName(name) {
      const [first, last] = name.split(' ');
      this.firstName = first;
      this.lastName = last;
    },
  };

  person.fullName = 'Ahmed Hossain'; // This will trigger the setter

  console.log(person.firstName); // "Ahmed"
  console.log(person.lastName); // "Hossain"

  // Use Cases of Setters

  // 1. Validation: Setters are useful when you want to validate the value being assigned to a property. For example, you can ensure that only numbers are assigned to an age property.

  const person2 = {
    _age: 25,

    get age() {
      return this._age;
    },

    set age(value) {
      if (typeof value === 'number' && value > 0) this._age = value;
      else console.log('Please enter a valid age');
    },
  };

  person2.age = 30; // valid
  person2.age = -5; // invalid
}
 */

// Lecture Code

{
}

//* Public Fields

// Chat GPT 👇
// https://chatgpt.com/share/b245b1a4-51ae-4ee0-9cee-971baf9f893c

/* 
{
  // Syntax for Public Fields

  // NOTE: Public fields are declared directly inside the class body. These fields are publicly accessible and can be initialized with or without default values.

  // Example 1: Class with Public Fields
  class User {
    // Public field (accessible from outside the class)
    name = 'John Doe';

    constructor(age) {
      this.age = age;
    }

    // Public method
    greet() {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old`
      );
    }
  }

  const user = new User(25);

  console.log(user.name); // John Doe
  console.log(user.age); // 25
  user.greet(); // Hello, my name is John Doe and I am 25 years old.

  // Example 2: Class with Public Fields
  class Animal {
    // Public field
    type = 'Mammal';

    constructor(name) {
      this.name = name;
    }

    // Public method
    describe() {
      console.log(`${this.name} is a ${this.type}`);
    }
  }

  const lion = new Animal('Lion');

  console.log(lion.type); // Mammal
  lion.describe(); // Lion is a Mammal
}
 */

// Lecture Code

{
}

//* Private Fields

// Chat GPT 👇
// https://chatgpt.com/share/9402c94b-44ed-4e34-8691-8f78013e4fe7

/* 
{
  // Key Points about Private Fields:

  // NOTE: Declaration Syntax:
  // i. A private field is declared with a # before the field name inside the class.
  // ii. You cannot access or modify the private fields outside of a class.

  class Example {
    #privateField; // Private field declaration

    constructor(value) {
      this.#privateField = value; // ✅ Accessing the private field inside the class
    }

    getPrivateField() {
      return this.#privateField;
    }
  }

  const obj = new Example(42);

  console.log(obj.getPrivateField()); // 42
  // console.log(obj.#privateField);

  // 🔴 SyntaxError: Private field '#privateField' must be declared in an enclosing class

  // NOTE: Private Fields vs Public Fields:
  // i. Public fields can be accessed and modified anywhere.
  // ii. Private fields can only be accessed and modified within the class where they are declared.

  class Animal {
    #privateAge = 5; // Private field
    publicName = 'Lion'; // Public field

    getAge() {
      return this.#privateAge;
    }
  }

  const lion = new Animal();
  console.log(lion.publicName); // "Lion"
  console.log(lion.getAge()); // 5
  // console.log(lion.#privateAge); // 🔴 SyntaxError

  // NOTE: Static Private Fields: You can also define static private fields, which are associated with the class itself rather than instances of the class. "They can only be accessed within static methods of the class."

  class Counter {
    static #count = 0; // Static private field

    static increment() {
      this.#count++;
    }

    static getCount() {
      return this.#count;
    }
  }

  Counter.increment();
  console.log(Counter.getCount()); // 1
  // console.log(Counter.#count); // 🔴 SyntaxError: Private field '#count' must be declared in an enclosing class
}
 */

// Lecture Code

{
}

//* Private Methods

// Chat GPT 👇
// https://chatgpt.com/share/e5f077b4-6886-494b-ac2a-2711c36c1429

/* 
{
  // ==============================================
  // IMPORTANT: Key Points:
  // 1. Declaration: A private method is declared by prefixing the method name with a #.

  // 2. Scope: Private methods are only accessible within the class itself. If you try to access them from outside the class (or even from child classes), JavaScript will throw an error.

  // 3. Encapsulation: The use of private methods allows you to hide internal details of how a class works, exposing only what is necessary to the outside world.
  // ==============================================

  // 1. Syntax of Private Methods
  class Example {
    // Public method
    publicMethod() {
      console.log('I am a public method');
      this.#privateMethod(); // ✅ Can call private method within the class
    }

    // Private method
    #privateMethod() {
      console.log('I am a private method');
    }
  }

  const example = new Example();
  example.publicMethod(); // I am a public method. I am a private method.
  // example.#privateMethod(); // 🔴 SyntaxError: Private field '#privateMethod' must be declared in an enclosing class

  // 2. Example: Practical Usage

  // NOTE: Let's consider an example where private methods can be useful. Imagine a class "BankAccount" that represents a user's bank account. It might have internal logic that validates transactions or calculates fees, which should not be exposed to the user directly.

  class BankAccount {
    constructor(balance) {
      this.balance = balance;
    }

    // Public method for deposing money
    deposit(amount) {
      if (this.#isValidTransaction(amount)) {
        this.balance += amount;
        console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
      } else {
        console.log('Invalid deposit amount');
      }
    }

    // Private method to validate transaction
    #isValidTransaction(amount) {
      return amount > 0;
    }
  }

  const account = new BankAccount(1000);
  account.deposit(500); // Deposited: 500. New balance: 1500
  account.deposit(-200); // Invalid deposit amount
  // account.#isValidTransaction(200); // 🔴 SyntaxError: Private field '#isValidTransaction' must be declared in an enclosing class

  // 3. Private Methods vs Private Properties

  // NOTE: Private methods work similarly to private properties. Both are declared using the # syntax and are only accessible within the class.

  class Car {
    // Private field
    #engineStatus;

    // Public method to start the car
    start() {
      this.#engineStatus = true; // ✅ Private field can be called within the class
      console.log('Car started');
      this.#checkEngine(); // ✅ Private method can be called within the class
    }

    // Private method
    #checkEngine() {
      if (this.#engineStatus) {
        console.log('Engine is started');
      } else {
        console.log('Engine is off');
      }
    }
  }

  const myCar = new Car();
  myCar.start(); // Car started. Engine is running.

  // myCar.#engineStatus; // 🔴 SyntaxError
  // myCar.#checkEngine(); // 🔴 SyntaxError

  // Here, both #engineStatus (a private property) and #checkEngine (a private method) are encapsulated within the class and cannot be accessed directly from outside.
}
 */

// Lecture Code

{
}

//* ES2022 Static Initialization Blocks

// Chat GPT 👇
// https://chatgpt.com/share/210dc819-f9d4-4aed-a1f9-3a0a0b6bb4bb

{
  // NOTE: The Static Initialization Blocks is defined using the "static" keyword, followed by curly braces {}. Any code inside this block will run once, when the class is first loaded.

  // ==============================================
  // IMPORTANT: Key Points to Remember:
  // 1. Static initialization blocks are executed only once when the class is initialized.

  // 2. You can reference "this" inside the block, which points to the class constructor.

  // 3. Static blocks can be used to initialize static fields, perform setup logic, or validate configurations.

  // 4. Multiple static blocks are allowed, and they execute in the order they appear.
  // ==============================================

  class MyClass {
    static field1 = 42;
    static field2;

    // Static initialization block
    static {
      this.field2 = this.field1 * 2; // Field2 initialized using logic
      console.log('Static block executed');
    }
  }

  // Example 1: Basic Initialization
  class Config {
    static baseUrl;
    static env;

    // static {
    //   if (process.env.NODE_ENV === 'production') {
    //     this.baseUrl = 'https://api.example.com';
    //     this.env = 'production';
    //   } else {
    //     this.baseUrl = 'http://localhost:3000';
    //     this.env = 'development';
    //   }
    // }
  }

  console.log(Config.baseUrl); // Output depends on NODE_ENV

  // Example 2: Multiple Static Blocks
  class Counter {
    static count = 0;

    static {
      console.log('First block');
      this.count += 1;
    }

    static {
      console.log('Second block');
      this.count += 2;
    }
  }

  console.log(Counter.count); // 3
}
