'use strict';

// Slides 👇
// 📖 MUST READ: https://rithm-students-assets.s3.us-west-1.amazonaws.com/udemy/lectures/js-oo/handout/index.html

//* Working with Plain Old JavaScript Objects (POJOs)

/* 
{
  // “Plain Old JavaScript Object” (“POJO”):
  const obj1 = {};
  const obj2 = new Object(); // same thing

  obj1.name = 'Jonas';
  obj1['name'] = 'Jonas'; // same thing

  // A property where key is "sayHi" and the value is a function:
  obj1.sayHi = function () {
    console.log('Hi!');
  };
  obj1.sayHi(); // Hi!

  // NOTE: Functions are “first-class”
  // You’ll sometimes here the phrase “functions are ‘first class’” when people are describing programming languages. This means that a function itself can be treated like any other thing; you can assign a function to a variable or put a function in an array (the term “first class” is suggesting that they can do all of the things everything else can do).

  // Working with JS objects
  console.log(obj1); // {name: 'Jonas', sayHi: ƒ}

  console.log(Object.keys(obj1)); // ['name', 'sayHi']
  console.log(Object.values(obj1)); // ['Jonas', ƒ]
  console.log(Object.entries(obj1)); // [['name', 'Jonas'], ['sayHi', f]]

  // Properties that don’t exist evaluate to `undefined`:
  console.log(obj1.taco); // undefined

  // (if you tried to call this, like `obj1.taco()` or tried to access a sub object, like `obj1.taco.toppings`, you’d get an error because undefined is not callable and you cannot treat it like an object.)

  // All keys get “stringified”:
  obj1[1] = 'hello';
  obj1['1'] = 'goodbye';

  // What is obj1[1]?
  console.log(obj1[1]); // goodbye
}
 */

//* Mixing Data & Functions With Objects

/* 
{
  // Imagine some useful functions:
  function getTriangleArea(a, b) {
    return (a * b) / 2;
  }

  function getTriangleHypotenuse(a, b) {
    return Math.sqrt(a ** 2 + b ** 2);
  }

  getTriangleArea(3, 4); // 6
  getTriangleHypotenuse(3, 4); // 5

  // This gets a bit messy, though — all those functions to keep track of!

  // Using a POJO
  const myTriangle = {
    a: 3,
    b: 4,
    getTriangleArea() {
      return (this.a * this.b) / 2;
    },
    getHypotenuse() {
      return Math.sqrt(this.a ** 2 + this.b ** 2);
    },
  };

  myTriangle.a; // 3
  myTriangle.b; // 4
  myTriangle.getHypotenuse(); // 5

  // this references “this object”

  // So, we can helpfully mix data & functionality 🎉

  // This is tidy: related functionality lives together
  // Annoying when we have more than one triangle
  // - Difficult to maintain
  // - If we have 1000 triangles, we’d have 1000 copies of these functions — that’s going to waste memory!
}
 */

//* Class Basics
//* Constructor Function
//* Instance Methods / Public Methods

/* 
{
  class Triangle {
    constructor(a, b) {
      // Validate data
      if (!Number.isFinite(a) || a <= 0) throw new Error(`Invalid a: ${a}`);
      if (!Number.isFinite(b) || b <= 0) throw new Error(`Invalid b: ${b}`);

      // Instance properties
      this.a = a;
      this.b = b;
    }

    // Public methods
    getArea() {
      return (this.a * this.b) / 2;
    }

    getHypotenuse() {
      return Math.sqrt(this.a ** 2 + this.b ** 2);
    }

    describe() {
      return `Area is ${this.getArea()}`;
    }
  }

  // Create instance using class
  const triangle = new Triangle(3, 4); // <- calls constructor
  triangle.getArea(); // 6
  triangle.getHypotenuse(); // 5
  triangle;

  typeof triangle; // object
  triangle instanceof Triangle; // true
}
 */

//* Practice Time Bank Account

/* 
{
  // Create a `BankAccount` class
  //  - Properties
  //      - balance (defaults to 0 if not provided)
  //      - accountHolder
  //      - accountNumber
  // - Methods
  //   - deposit(amount) - increases balance by amount
  //   - withdraw(amount) - decreases balance by amount

  class BankAccount {
    constructor(balance = 0, accountHolder, accountNumber) {
      this.balance = balance;
      this.accountHolder = accountHolder;
      this.accountNumber = accountNumber;
    }

    deposit(amount) {
      this.balance += amount;
    }

    withdraw(amount) {
      this.balance -= amount;
    }

    getBalance() {
      console.log(this.balance);
    }
  }

  const jonasAccount = new BankAccount(10000, 'Jonas', '*****789');
  jonasAccount.deposit(5000);
  jonasAccount.getBalance(); // 15000
  jonasAccount.withdraw(3000);
  jonasAccount.getBalance(); // 12000
}
 */

//* Inheritance Basics
//* The `super` Keyword

/* 
{
  //* Parent Class
  class Triangle {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }

    // Public methods
    getArea() {
      return (this.a * this.b) / 2;
    }

    getHypotenuse() {
      return Math.sqrt(this.a ** 2 + this.b ** 2);
    }

    describe() {
      return `Area is ${this.getArea()}`;
    }
  }

  //* Child Class
  class ShyTriangle extends Triangle {
    constructor(a, b) {
      // call parent constructor
      super(a, b);
    }

    // inherits `getArea`, `getHypotenuse`

    // "override" describe() with/new version
    describe() {
      return `runs and hides`;
    }
  }

  // Create instance using ShyTriangle class
  const shy = new ShyTriangle(3, 4);
  console.log(shy.getArea()); // 6

  console.log(shy instanceof ShyTriangle); // true
  console.log(shy instanceof Triangle); // true

  //* Another Child Class: `ColorTriangle`
  class ColorTriangle extends Triangle {
    constructor(a, b, color) {
      // call parent constructor
      super(a, b);
      this.color = color;
    }

    // inherits `getArea`, `getHypotenuse`

    // "override" describe() with/new version
    describe() {
      return `Area is ${this.getArea()}.` + ` Color is ${this.color}!`;
    }
  }

  //* Multi-level inheritance
  // it’s even possible to subclass a subclass, making a kind of hierarchy. Here’s a special kind of ColorTriangle:

  class RainbowTriangle extends ColorTriangle {
    constructor(a, b, color) {
      // call parent constructor
      super(a, b, color);
    }

    // inherits `getArea`, `getHypotenuse`

    describe() {
      return "I'm a beautiful rainbow!";
    }
  }

  // Create instance using RainbowTriangle class
  const rainbowTri = new RainbowTriangle(3, 4, 'rainbow');
  console.log(rainbowTri);

  console.log(rainbowTri instanceof RainbowTriangle); // true
  console.log(rainbowTri instanceof ColorTriangle); // true
  console.log(rainbowTri instanceof Triangle); // true

  console.log(rainbowTri.__proto__ === RainbowTriangle.prototype); // true
  console.log(rainbowTri.__proto__.__proto__ === ColorTriangle.prototype); // true
  console.log(rainbowTri.__proto__.__proto__.__proto__ === Triangle.prototype); // true
  console.log(
    rainbowTri.__proto__.__proto__.__proto__.__proto__ === Object.prototype
  ); // true (Top of the prototype chain)
  console.log(rainbowTri.__proto__.__proto__.__proto__.__proto__.__proto__); // null
}
 */

//* Static Properties
//* Static Methods

/* 
{
  // JS gives us “static methods”, where the method is called on a Class, not an object.

  class CatWithStaticMethod {
    constructor(name) {
      this.name = name;
    }

    static myStaticMethod() {
      console.log('myStaticMethod this = ', this);
    }

    myMethod() {
      console.log('myMethod this = ', this);
    }
  }

  const fluffyWithStatic = new CatWithStaticMethod('Fluffy');
  fluffyWithStatic.myMethod(); // logs the instance

  CatWithStaticMethod.myStaticMethod(); // logs the class

  // Modern JS also offers “static properties”, where individual pieces of data are on the class, not on instances.

  class CatWithStaticProp {
    constructor(name) {
      this.name = name;
    }

    // good example of a static property --
    // all instances of cats are the same species;
    // it doesn't vary from one cat to another
    static genusSpecies = 'feline catus';

    describe() {
      return `${this.name} is a ${CatWithStaticProp.genusSpecies}`;
    }
  }

  console.log(CatWithStaticProp.genusSpecies); // feline catus
}
 */

//* Use Cases For Static Methods

/* 
{
  // IMPORTANT: Use Case For Static Methods:
  // - Group similar functionality together
  // - Use as factory function that generate new instances

  class Cat {
    constructor(name, breed) {
      this.name = name;
      this.breed = breed;
    }

    // Here, `registerStray` is a factory function/method
    static registerStray() {
      const names = [
        'Muffin',
        'Biscuit',
        'Sleepy',
        'Dodo',
        'Princess Butterface',
      ];

      const name = choice(names);
      return new Cat(name, 'unknown'); // crate new cat instance
    }
  }

  function choice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
}
 */
