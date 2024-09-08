'use strict';

//* Working with Plain Old JavaScript Objects (POJOs)

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

//* Mixing Data & Functions With Objects

// Chat GPT 👇

/* 
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
 */

// Lecture Code
{
}

//* Class Basics

// Chat GPT 👇

/* 
{
  // Defining a Class
  class PersonCl {
    // Constructor function to initialize properties
    constructor(name, age) {
      this.name = name; // Instance property
      this.age = age; // Instance property
    }

    // Instance method
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }

    // Static method
    static info() {
      console.log(`This is a static method`);
    }
  }

  // Creating an Instance of a Class
  const person1 = new PersonCl('Mahmud', 22);
  person1.greet();

  PersonCl.info();

  // Inheritance: Extending Classes
  class StudentCl extends PersonCl {
    constructor(name, age, grade) {
      // Call the parent class constructor with super()
      super(name, age);
      this.grade = grade;
    }

    // Overriding greet method
    greet() {
      console.log(`Hi, I'm ${this.name}, a grade ${this.grade} student.`);
    }
  }

  const student1 = new StudentCl('Mahmud', 22, 'A');
  student1.greet();

  // Getters and Setters
  class PersonCl2 {
    constructor(name, age) {
      this._name = name;
      this._age = age;
    }

    // Getter method
    get age() {
      return this._age;
    }

    // Setter method
    set age(value) {
      if (value > 0) this._age = value;
      else console.log(`Age must be a positive number`);
    }
  }

  const person2 = new PersonCl2('Mahmud', 22);
  console.log(person2.age); // Getter called, Outputs: 22

  person2.age = 25; // Setter called
  console.log(person2.age); // Outputs: 25
}
 */

// Lecture Code
{
}

//* Constructors

// Chat GPT 👇

/* 
{
  // 1. What is a Constructor?

  // NOTE: A constructor is a regular function, but when called with the new keyword, it creates an instance of an object. Constructors define the properties and behavior of that object.

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  // 2. How to Use Constructors
  const person1 = new Person('John', 25);
  const person2 = new Person('Jane', 30);

  console.log(person1.name); // John
  console.log(person2.age); // 30

  // 3. The "this" Keyword in Constructors
  function Car(model, year) {
    this.model = model;
    this.year = year;

    // WARNING: Don't Do This
    this.start = function () {
      console.log(this.model + ' is starting...');
    };
  }

  const car1 = new Car('Toyota', 2021);
  car1.start(); // Toyota is starting...

  // 4. Using Prototypes with Constructors

  // NOTE: In JavaScript, every function has a prototype object. By adding methods to the prototype, you ensure all instances created by the constructor share the same method without duplicating it for each object instance.

  function Animal(type) {
    this.type = type;
  }

  // TODO: Instead DO This
  Animal.prototype.sound = function () {
    console.log(this.type + ' makes a sound');
  };

  const animal1 = new Animal('Dog');
  const animal2 = new Animal('Cat');

  animal1.sound(); // Dog makes a sound
  animal2.sound(); // Cat makes a sound

  // The "sound" method is added to the Animal.prototype. It’s shared by all instances (animal1, animal2).

  // 5. ES6 Classes (Modern Constructor Syntax)

  // NOTE: With ES6 (ES2015), JavaScript introduced class syntax, which is a more intuitive way to define constructor functions and object behavior. However, classes are essentially syntactic sugar over the existing constructor functions.

  class PersonCl {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }

  const person3 = new PersonCl('John', 25);
  person3.greet(); // Hello, my name is John

  // 6. Inheritance with Constructors

  // NOTE: Inheritance allows one constructor to acquire properties and methods from another constructor. In ES5, inheritance is achieved using prototype and call().

  function Parent(name) {
    this.name = name;
  }

  function Child(name, age) {
    Parent.call(this, name); // Call Parent constructor
    this.age = age;
  }

  Child.prototype = Object.create(Parent.prototype);

  const child1 = new Child('Alice', 10);
  console.log(child1.name); // Alice
  console.log(child1.age); // 10

  // NOTE: In ES6, inheritance is simpler with the "extends" keyword:
  class ParentCl {
    constructor(name) {
      this.name = name;
    }
  }
  class ChildCl extends ParentCl {
    constructor(name, age) {
      super(name); // Call Parent constructor
      this.age = age;
    }
  }

  const child2 = new ChildCl('Alice', 10);
  console.log(child2.name); // Alice
  console.log(child2.age); // 10
}
 */

// Lecture Code
{
}

//* Instance Methods

// Chat GPT 👇

{
  // 1. Instance Methods in JavaScript Classes
  class CarCl {
    constructor(make, model, year) {
      // Constructor sets properties for each instance
      this.make = make;
      this.model = model;
      this.year = year;
    }

    // Instance method that can access the properties of an instance
    getCarInfo() {
      return `${this.year} ${this.make} ${this.model}`;
    }

    // Another instance method
    startEngine() {
      return `${this.make} ${this.model} engine started`;
    }
  }

  // Creating an instance of the CarCl class
  const myCar = new CarCl('Toyota', 'Corolla', 2020);

  // Calling instance methods on the object (myCar)
  console.log(myCar.getCarInfo()); // 2020 Toyota Corolla
  console.log(myCar.startEngine()); // Toyota Corolla engine started.

  // 2. Characteristics of Instance Methods
  const anotherCar = new CarCl('Honda', 'Civic', 2022);
  console.log(anotherCar.getCarInfo()); // 2022 Honda Civic

  // 3. Instance Methods vs Static Methods
  class MathHelper {
    // Static method belongs to the class, not instances
    static square(number) {
      return number * number;
    }
  }

  console.log(MathHelper.square(5)); // 25

  // 4. Instance Methods in Object Literals

  // NOTE: Even without using classes, you can create instance methods within object literals.

  const person = {
    firstName: 'Mahmud',
    lastName: 'Hasan',

    // Instance method in an object literal
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };

  // Call the instance method
  console.log(person.getFullName()); // Mahmud Hasan

  // 5. Inheritance and Instance Methods
  class AnimalCl {
    constructor(name) {
      this.name = name;
    }

    // Instance method
    speak() {
      return `${this.name} make a sound`;
    }
  }
  class DogCl extends AnimalCl {
    constructor(name) {
      super(name);
    }

    // Overriding the speak method
    speak() {
      return `${this.name} barks`;
    }
  }

  const dog = new DogCl('Buddy');
  console.log(dog.speak()); // Buddy barks
}
