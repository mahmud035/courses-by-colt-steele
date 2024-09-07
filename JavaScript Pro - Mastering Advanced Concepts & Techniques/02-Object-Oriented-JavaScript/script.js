'use strict';

// Working with Plain Old JavaScript Objects (POJOs)

// Chat GPT 👇

/* 
{
  // 1. Creating POJOs

  // Object Literal Notation:
  const person = {
    name: 'Mahmud',
    age: 24,
    profession: 'Web Developer',
  };

  // 2. Accessing and Modifying POJOs

  // Dot Notation:
  console.log(person.name); // Output: Mahmud
  person.age = 25;
  console.log(person.age); // Output: 25

  // Bracket Notation:
  console.log(person['name']); // Output: Mahmud
  person['profession'] = 'Software Engineer';
  console.log(person['profession']); // Output: Software Engineer

  // 3. Adding and Deleting Properties

  // Adding a Property:
  person.country = 'Bangladesh';
  console.log(person.country); // Output: Bangladesh

  // Deleting a Property:
  delete person.age;
  console.log(person.age); // Output: undefined

  // 4. Iterating Over POJOs

  // Using for...in Loop:
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }

  // Output:
  // name: Mahmud
  // profession: Software Engineer
  // country: Bangladesh

  // Using Object.keys():
  const keys = Object.keys(person);
  console.log(keys); // Output: ['name', 'profession', 'country']

  // Using Object.values():
  const values = Object.values(person);
  console.log(values); // Output: ['Mahmud', 'Software Engineer', 'Bangladesh']

  // Using Object.entries():
  const entries = Object.entries(person);
  console.log(entries);
  // Output: [['name', 'Mahmud'], ['profession', 'Software Engineer'], ['country', 'Bangladesh']]

  // 5. Checking for Properties

  // Using the in Operator:
  console.log('name' in person); // Output: true
  console.log('age' in person); // Output: false (since age was deleted)

  // Using hasOwnProperty():
  console.log(person.hasOwnProperty('name')); // Output: true
  console.log(person.hasOwnProperty('age')); // Output: false

  // 6. Copying POJOs

  // Using Spread Operator:
  const personCopy = { ...person };
  console.log(personCopy);
  // Output: { name: 'Mahmud', profession: 'Software Engineer', country: 'Bangladesh' }

  // Using Object.assign():
  const personCopy2 = Object.assign({}, person);
  console.log(personCopy2);
  // Output: { name: 'Mahmud', profession: 'Software Engineer', country: 'Bangladesh' }
}
*/

// Lecture Code
{
}

// Mixing Data & Functions With Objects

// Chat GPT 👇

{
  // 1. Objects in JavaScript
  const person = {
    name: 'Mahmud', // Data (property)
    age: 24, // Data (property)

    // Function (method)
    greet() {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
    },
  };

  person.greet();

  // 2. Mixing Data and Functions
  const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    startEngine() {
      console.log(`${this.brand} ${this.model} engine started.`);
    },
    drive(speed) {
      console.log(`${this.brand} ${this.model} is driving at ${speed} km/h.`);
    },
  };

  car.startEngine(); // Output: Toyota Corolla engine started.
  car.drive(80); // Output: Toyota Corolla is driving at 80 km/h.

  // 3. Using "this" to Reference Object Properties
  const user = {
    userName: 'mahmud123',
    email: 'mahmud@example.com',
    displayInfo() {
      console.log(`Username: ${this.userName}, Email: ${this.email}`);
    },
  };

  user.displayInfo(); // Output: Username: mahmud123, Email: mahmud@example.com

  // 4. Functions Inside Objects (Methods) and Arrow Functions
  const obj = {
    value: 42,
    regularFunc() {
      return this.value; // `this` refers to obj
    },
    arrowFunc: () => {
      return this.value; // `this` refers to the outer scope, not obj
    },
  };

  console.log(obj.regularFunc()); // Output: 42
  console.log(obj.arrowFunc()); // Output: undefined

  // 5. Constructor Functions & Classes

  // Constructor Function Example:
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
      console.log(`Hello, my name is ${this.name}`);
    };
  }

  const person1 = new Person('Mahmud', 24);
  person1.greet(); // Output: Hello, my name is Mahmud

  // ES6 Class Example:
  class PersonCl {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }

  const person2 = new PersonCl('Mahmud', 24);
  person2.greet(); // Output: Hello, my name is Mahmud
}
