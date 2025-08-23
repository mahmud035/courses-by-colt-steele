'use strict';

//* Working with Plain Old JavaScript Objects (POJOs)

// Chat GPT 👇
// https://chatgpt.com/share/2ad5336c-4b20-42bc-ab09-96035f903119

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
// https://chatgpt.com/share/449db814-6273-4418-a67c-0dda3cdd9fea

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
// https://chatgpt.com/share/c9a61420-91a1-438d-a56c-c143866854e4

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
// https://chatgpt.com/share/7a7e48b9-8367-4bb4-813c-0ffdd73c5b0f

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
// https://chatgpt.com/share/ab337c66-2d24-44bb-9ae3-8ec70da502c9

/* 
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
 */

// Lecture Code
{
}

//* Inheritance Basics

// Chat GPT 👇
// https://chatgpt.com/share/9709e48c-7b8a-4f4c-bdd4-29f4c0a2e2e2

/* 
{
  // NOTE: 2. Constructor Functions: Before ES6 introduced the class syntax, constructor functions were used to create objects and implement inheritance.

  function Animal(name) {
    this.name = name;
  }

  Animal.prototype.speak = function () {
    console.log(this.name + ' makes a sound');
  };

  function Dog(name) {
    Animal.call(this, name); // Call the parent constructor
  }

  // Inherit the prototype from Animal
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;

  Dog.prototype.speak = function () {
    console.log(this.name + ' barks');
  };

  const dog = new Dog('Buddy');
  dog.speak(); // Buddy barks

  // NOTE: 3. Object.create(): This method is a simple way to create a new object that inherits from an existing object. It's often used in prototypal inheritance.

  const animal = {
    speak() {
      console.log(`Animal makes a sound`);
    },
  };

  const cat = Object.create(animal);
  cat.speak(); // Animal makes a sound

  // NOTE: 4. ES6 class Syntax: In ES6, JavaScript introduced a cleaner and more familiar syntax for implementing inheritance through class. This syntax is just syntactic sugar over the existing prototype-based inheritance system.

  class AnimalCl {
    constructor(name) {
      this.name = name;
    }

    speak() {
      console.log(`${this.name} makes a sound`);
    }
  }

  class DogCl extends AnimalCl {
    constructor(name) {
      super(name);
    }

    // Overriding the speak method
    speak() {
      console.log(`${this.name} barks`);
    }
  }

  const dog2 = new DogCl('Buddy');
  dog2.speak(); // Buddy barks

  // IMPORTANT: 6. Prototype Chain: The prototype chain in JavaScript is how the inheritance mechanism works. Each object has a prototype, which is another object that serves as a template object. If a property or method is not found on the object itself, JavaScript looks up the chain of prototypes until it finds the desired property or reaches the end of the chain (null).

  console.log(dog2.__proto__ === DogCl.prototype);
  console.log(dog2.__proto__.__proto__ === AnimalCl.prototype);
  console.log(dog2.__proto__.__proto__.__proto__ === Object.prototype);
  console.log(dog2.__proto__.__proto__.__proto__.__proto__);

  // Summary:
  //   JavaScript inheritance is based on prototypes, where objects can inherit properties and methods from other objects.

  //   Prototypal inheritance is achieved using Object.create() or by setting up constructor functions and linking prototypes.

  //   ES6 class syntax provides a cleaner way to work with inheritance but still uses prototypes under the hood.

  //   Inheritance allows you to create reusable code and share behaviors between objects.
}
 */

// Lecture Code
{
}

//* The Super Keyword

// Chat GPT 👇
// https://chatgpt.com/share/4919c193-ca3a-4710-9369-7e9cb59f69d4

/* 
{
  // ================================
  // NOTE: The "super" keyword in JavaScript is used in classes to refer to the parent class. It’s primarily used in two ways:

  //* 1. Calling the constructor of the parent class.
  //* 2. Accessing methods or properties of the parent class.

  // The super keyword is essential when working with inheritance in ES6 classes, where one class extends another.
  // ================================

  // 1. Using "super" to Call the Parent Class Constructor
  class ParentCl {
    constructor(name) {
      this.name = name;
    }
  }

  class ChildCl extends ParentCl {
    constructor(name, age) {
      // Call the constructor of ParentCl class with super
      super(name);
      this.age = age;
    }
  }

  const child = new ChildCl('Mahmud', 23);
  console.log(child.name); // Mahmud
  console.log(child.age); // 23

  // NOTE: Example of a Complete Scenario
  class AnimalCl {
    constructor(name) {
      this.name = name;
    }

    makeSound() {
      return `${this.name} makes a sound.`;
    }
  }

  class DogCl extends AnimalCl {
    constructor(name, breed) {
      super(name); // Calls the AnimalCl constructor
      this.breed = breed;
    }

    makeSound() {
      // Overrides the makeSound method of AnimalCl
      return `${super.makeSound()} Woof! Woof!`; // Calls parent method
    }
  }

  const myDog = new DogCl('Buddy', 'Golden Retriever');
  console.log(myDog.makeSound()); // Buddy makes a sound. Woof! Woof!
  console.log(myDog.breed); // Golden Retriever
}
 */

// Lecture Code
{
}

//* Static Properties

// Chat GPT 👇
// https://chatgpt.com/share/832db185-0ca2-4e30-ab42-789807d8c4b1

/* 
{
  // 1. Defining Static Properties & Static Methods

  // NOTE: JavaScript classes support static properties and methods by prefixing them with the keyword "static". These properties and methods are called on the class itself, rather than on an instance of the class.

  // IMPORTANT: Always remember that static properties &  methods are accessed via the class, not via individual objects.

  class CarCl {
    static manufacturer = 'Toyota'; // static property

    constructor(model) {
      this.model = model;
    }

    // static method
    static getManufacturer() {
      return CarCl.manufacturer;
    }
  }

  const myCar = new CarCl('Corolla');

  console.log(CarCl.manufacturer); // Accessing the static property, Output: "Toyota"
  console.log(CarCl.getManufacturer()); // Output: "Toyota"

  console.log(myCar.manufacturer); // Error, because static properties aren't available on instances

  // 2. Practical Example: Using Static Properties in a Class

  // NOTE: Let’s say you are working on an application where multiple instances of a class share the same configuration (e.g., app version):

  class AppCl {
    static version = '1.0.0'; // Shared version for all instances

    constructor(name) {
      this.name = name;
    }

    static getVersion() {
      return `App version: ${AppCl.version}`;
    }
  }

  const app1 = new AppCl('Calculator');
  const app2 = new AppCl('Weather');

  console.log(AppCl.version); // 1.0.0
  console.log(AppCl.getVersion()); // "App Version: 1.0.0"

  console.log(app1.version); // Error: cannot access static property via instance

  // 3. Use Cases for Static Properties:

  // i. Counters: You can use a static property to keep track of the number of instances of a class that have been created:
  class CounterCl {
    static count = 0;

    constructor() {
      CounterCl.count++;
    }

    static getCount() {
      return CounterCl.count;
    }
  }

  const instance1 = new CounterCl();
  const instance2 = new CounterCl();
  console.log(CounterCl.getCount()); // Output: 2

  // In this case, every time a new Counter object is created, the static property count increases, and it can be accessed without needing an instance.

  // ii. Constants: Static properties are perfect for defining constants or configuration data for your class.
  class ConfigCl {
    static API_URL = 'https://api.example.com';
  }

  console.log(ConfigCl.API_URL); // https://api.example.com
}
 */

// Lecture Code
{
}

//* Static Methods

// Chat GPT 👇
// https://chatgpt.com/share/1a32e315-bb94-4fc6-b5df-dd9a04d4da60

/* 
{
  // NOTE: Static methods in JavaScript are methods that belong to the class itself rather than to any instance (object) of the class. They are called directly on the class, without the need to create an instance of the class. These methods are defined using the "static" keyword inside a class.

  // Syntax:
  class MyClass {
    // Static method
    static myStaticMethod() {
      console.log(`This is a static method`);
    }

    // Instance method
    myInstanceMethod() {
      console.log(`This is an instance method`);
    }
  }

  // Calling the static method
  MyClass.myStaticMethod(); // "This is a static method"

  // Trying to call the static method on an instance (This will cause an error)
  const myInstance = new MyClass();
  // myInstance.myStaticMethod(); // TypeError: myInstance.myStaticMethod is not a function

  // Real-World Use Cases:

  // 1. Utility Functions: Static methods are often used for utility functions, such as math calculations, array manipulations, or string transformations.

  class MathUtils {
    static add(a, b) {
      return a + b;
    }
  }

  console.log(MathUtils.add(5, 10)); // 15

  // 2. Factory Methods: You can use static methods as factory methods, which create instances of the class in a particular way.

  class UserCl {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    // Static Factory Method
    static createFromJSON(jsonString) {
      const data = JSON.parse(jsonString);
      return new UserCl(data.name, data.age);
    }
  }

  const json = '{"name": "Mahmud", "age": 23}';
  const user = UserCl.createFromJSON(json);
  console.log(user); // UserCl { name: 'Mahmud', age: 23 }
}
 */

// Lecture Code
{
}

//* Use Cases For Static Methods

// Chat GPT 👇
// https://chatgpt.com/share/0f31a8e5-88a1-4508-a9ee-7ce716308326

/* 
{
  // 1. Utility Functions and Helper Methods

  // NOTE: Static methods are often used to define utility or helper functions that don't depend on the state of an instance. These are typically functions that perform general operations relevant to the class but don't require any instance-specific data.
  class MathUtils {
    static add(a, b) {
      return a + b;
    }

    static subtract(a, b) {
      return a - b;
    }
  }

  // Usage
  console.log(MathUtils.add(5, 3)); // 8
  console.log(MathUtils.subtract(10, 7)); // 3

  // 2. Factory Methods

  // NOTE: A common design pattern in object-oriented programming is the Factory Method pattern, "where static methods are used to create and return instances of a class". This allows the creation logic to be encapsulated in one place.
  class Car {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }

    static createTesla(model) {
      return new Car('Tesla', model);
    }

    static createBMW(model) {
      return new Car('BMW', model);
    }
  }

  const myTesla = Car.createTesla('Model X');
  const myBMW = Car.createBMW('XS');

  console.log(myTesla); // Car { brand: 'Tesla', model: 'Model X' }
  console.log(myBMW); // Car { brand: 'BMW', model: 'X5' }
}
 */

// Lecture Code
{
}
