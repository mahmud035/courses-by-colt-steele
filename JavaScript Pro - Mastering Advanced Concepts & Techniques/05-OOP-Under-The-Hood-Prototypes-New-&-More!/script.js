'use strict';

//* OOP Under The Hood Intro

// Chat GPT 👇
// https://chatgpt.com/share/cec6e587-3e49-462c-bf7b-f7c0d17d604f

/* 
{
  {
    // 1. Objects and Properties
    const car = {
      make: 'Toyota',
      model: 'Corolla',
      year: 2020,
      start() {
        console.log(`Car is starting...`);
      },
    };
  }

  {
    // 2. Prototype-Based Inheritance

    // NOTE: Prototype Chain: When you try to access a property or method on an object, JavaScript first checks the object itself. If it doesn’t find the property, it looks at the object’s prototype, and so on, up the prototype chain.

    function Animal(name) {
      this.name = name;
    }

    Animal.prototype.speak = function () {
      console.log(`${this.name} make a sound`);
    };

    const dog = new Animal('Dog');
    dog.speak(); // Dog makes a sound

    // Here:
    // `dog` is an instance of the `Animal` constructor function.
    // `dog` inherits the `speak` method from `Animal.prototype`.
    // Under the hood, JavaScript looks up the prototype chain to find the `speak` method when it’s called on `dog`.
  }

  {
    // 3. The this Keyword
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }

    Person.prototype.greet = function () {
      console.log(`My name is ${this.name}`);
    };

    const john = new Person('John', 25);
    john.greet(); // My name is John

    // The `this` keyword inside the `greet` method refers to the `john` object. It allows access to the `name` property of `john`.
  }

  {
    // 4. Constructor Functions
    function Car(make, model) {
      this.make = make;
      this.model = model;
    }

    const myCar = new Car('Toyota', 'Corolla');
    console.log(myCar.make); // Toyota

    // IMPORTANT: When a constructor function is called with the `new` keyword, JavaScript creates a new object, binds `this` to that new object, and implicitly returns the new object.
  }

  {
    // 5. ES6 Classes
    class Animal {
      constructor(name) {
        this.name = name;
      }

      speak() {
        console.log(`${this.name} makes a sound`);
      }
    }

    const dog = new Animal('Dog');
    dog.speak(); // Dog makes a sound

    // Here,
    // The `class` syntax abstracts away the need to manually set properties on the prototype.
    // Under the hood, JavaScript still creates a prototype chain, but it’s hidden by this cleaner syntax.
  }

  {
    // 6. Inheritance with Classes
    class Animal {
      constructor(name) {
        this.name = name;
      }

      speak() {
        console.log(`${this.name} makes a sound`);
      }
    }

    class Dog extends Animal {
      constructor(name) {
        super(name);
      }

      // Overriding method
      speak() {
        console.log(`${this.name} barks`);
      }
    }

    const myDog = new Dog('Rover');
    myDog.speak(); // Rover barks

    // Here,
    // The `Dog` class inherits from `Animal` but overrides the `speak` method with its own behavior.
  }

  {
    // 7. Encapsulation

    // NOTE: Encapsulation is a concept where the internal details of an object are hidden, and only certain methods are exposed.

    class Person {
      #age; // Private field

      constructor(name, age) {
        this.name = name;
        this.#age = age;
      }

      getAge() {
        return this.#age;
      }

      setAge(newAge) {
        if (newAge > 0) this.#age = newAge;
      }
    }

    const john = new Person('John', 25);

    console.log(john.getAge()); // 25
    john.setAge(30);
    console.log(john.getAge()); // 30

    // Here,
    // The `#` symbol in front of `#age` makes it a truly private field in the `Person` class, which cannot be accessed or modified from outside the class.
  }

  {
    // 8. Polymorphism

    // NOTE: Polymorphism allows methods to do different things based on the object that calls them. In JavaScript, this is achieved by method overriding in subclasses.

    class Animal {
      speak() {
        console.log('Animal makes a sound');
      }
    }

    class Dog extends Animal {
      // Overriding method
      speak() {
        console.log('Dog barks.');
      }
    }

    class Cat extends Animal {
      speak() {
        console.log('Cat meows.');
      }
    }

    const animals = [new Dog(), new Cat()];
    animals.forEach((animal) => animal.speak());

    // Output: Dog barks, Cat meows

    // Here,
    // The same `speak` method behaves differently based on whether the object is a `Dog` or a `Cat`.
  }
}
 */

// Lecture Code

{
}

//* The `new` Keyword

// Chat GPT 👇
// https://chatgpt.com/share/a0bbf582-0299-4411-a5af-8c4daefb5ea6

/* 
{
  // NOTE: In JavaScript, the `new` keyword is used to create instances of objects. When used with a constructor function or a class, it enables the creation of an object with predefined properties and methods.

  // ==============================================
  // IMPORTANT: How `new` keyword works:

  // 1. Creates a new empty object {}
  // 2. Sets the prototype of the object
  // 3. Binds `this` to the new object
  // 4. Returns the new object

  // ==============================================

  {
    // Using `new` with Constructor Functions

    function Car(brand, model) {
      // `this` refers to the new object
      this.brand = brand;
      this.model = model;

      // Adding a method to the new object
      // WARNING: Don't add method in this way
      this.displayInfo = function () {
        return `Car: ${this.brand} ${this.model}`;
      };
    }

    // TODO: Instead add method directly to constructor
    Car.prototype.startEngine = function () {
      return `Car starting...`;
    };

    // Creating a new instance using `new`
    const car1 = new Car('Toyota', 'Corolla');

    console.log(car1.displayInfo()); // Car: Toyota Corolla
  }

  {
    // Using new with ES6 Classes
    class Car {
      constructor(brand, model) {
        this.brand = brand;
        this.model = model;
      }

      // Method added to the prototype of the object
      displayInfo() {
        return `Car: ${this.brand} ${this.model}`;
      }

      startEngine() {
        return `Car starting...`;
      }
    }

    // Creating an instance using `new`
    const car1 = new Car('Honda', 'Civic');

    console.log(car1.displayInfo()); // Car: Honda Civic
  }
}
 */

//* Prototypes: Part 1

// Chat GPT 👇
// https://chatgpt.com/share/b94882d5-dfce-4394-8fc0-c929bcf572b6

/* 
{
  // ==============================================
  // IMPORTANT: Key Takeaways:

  // 1. Every JavaScript object has a `prototype`, which is an object it inherits from.

  // 2. Prototypes allow objects to share methods and properties efficiently.

  // 3. JavaScript looks up properties along the prototype chain when they are not found directly on the object.

  // 4. `prototype` is a property of constructor functions, while `__proto__` is the internal link between an object and its prototype.

  // ==============================================

  {
    // NOTE: Prototype Property
    // Every JavaScript object has an internal property called `[[Prototype]]` (sometimes referred to as` __proto__`, though this is not standardized but supported in most browsers). This `[[Prototype]]` property points to another object, which is called its prototype.
    // The prototype itself is also an object and may have its own `[[Prototype]]`, creating a chain known as the prototype chain.
  }

  {
    // NOTE: Prototype Chain
    // The prototype chain is a series of linked objects. When you attempt to access a property or method on an object, JavaScript first looks for the property on the object itself. If it doesn't find the property there, it looks at the object's prototype. If it doesn't find it there, it keeps going up the chain until it either finds the property or reaches the end of the chain (i.e., the top-level `Object.prototype`).

    // Example of Prototype Chain:

    const animal = { eats: true };
    const rabbit = { jumps: true };

    // Set prototype of rabbit to animal
    rabbit.__proto__ = animal;

    console.log(rabbit.jumps); // true (from rabbit)
    console.log(rabbit.eats); // true (inherited from animal)

    // In this example:

    // `rabbit` inherits properties from `animal` via the prototype chain.
    // If we try to access `eats` on `rabbit`, JavaScript doesn’t find it on `rabbit` itself but finds it on `animal`.
  }

  {
    // NOTE: Constructor Functions and Prototypes
    // In JavaScript, constructor functions are used to create objects. By default, every function in JavaScript has a `prototype` property, which is an object containing a `constructor` property that points back to the function itself. You can add properties and methods to the function's `prototype` property, which will be shared across all instances created by that constructor.

    // Example:
    function Person(name) {
      this.name = name;
    }

    Person.prototype.greet = function () {
      console.log('My name is ' + this.name);
    };

    const john = new Person('John');
    const jane = new Person('Jane');

    john.greet(); // My name is John
    jane.greet(); // My name is Jane

    // Here:

    // `Person` is a constructor function.
    // Both `john` and `jane` objects have access to the `greet` method because it is defined on `Person.prototype`.
    // Each instance created by `new Person()` shares the same `greet` function, so it doesn’t get recreated for each object.
  }

  {
    // NOTE: Modifying Prototypes
    // You can dynamically modify prototypes, meaning you can add methods to a constructor’s prototype even after objects have been created.

    // Example:
    function Car(model) {
      this.model = model;
    }

    const myCar = new Car('Toyota');

    // Adding a method to the prototype
    Car.prototype.drive = function () {
      console.log(this.model + ' is driving!');
    };

    myCar.drive(); // Toyota is driving!
  }

  {
    // NOTE: Prototype vs __proto__ vs prototype
    //
    // `__proto__`: This is the actual property that exists on each object, pointing to its prototype. It’s often used to manually set or access the prototype of an object, though it’s better to use `Object.getPrototypeOf()` and `Object.setPrototypeOf()`.
    //
    // `prototype`: This is a property that only exists on constructor functions (e.g., `Person.prototype`). It’s the object that will be used as the prototype for all instances created by the constructor.
    //
    // Prototype Chain: This is the chain of objects connected via the `[[Prototype]]` property. When a property or method is accessed, JavaScript will traverse the prototype chain to find it.
  }

  {
    // NOTE: ES6 Classes and Prototypes
    // In ES6 (ECMAScript 2015), the concept of classes was introduced. Although classes provide a cleaner and more familiar syntax for developers coming from other object-oriented languages, they still use prototypes under the hood.

    // Example with Class:
    class Animal {
      constructor(name) {
        this.name = name;
      }

      speak() {
        console.log(this.name + ' makes a noise.');
      }
    }

    class Dog extends Animal {
      constructor(name) {
        super(name);
      }

      // Overriding method
      speak() {
        console.log(this.name + ' barks.');
      }
    }

    const dog = new Dog('Rex');
    dog.speak(); // Rex barks

    // Despite the class syntax, the inheritance mechanism still works through prototypes. The `Dog` class extends `Animal`, and both classes' methods are stored on their respective prototypes.
  }
}
 */

//* The Prototype Chain

// Chat GPT 👇
// https://chatgpt.com/share/1f632d88-e7a9-4c7b-bcc3-452aa7fc1963

/* 
{
  // NOTE: The Prototype Chain is a core concept in JavaScript, used in its object-oriented programming model. JavaScript is a prototype-based language, meaning objects can directly inherit properties and methods from other objects, which creates a chain of inheritance. This mechanism is referred to as the Prototype Chain.

  {
    // 1. Objects in JavaScript

    // NOTE: When you create an object, it can have its own properties and methods, but it also has access to properties and methods inherited from its [[prototype]].

    const person = {
      name: 'Mahmud',
      greet() {
        console.log(`Hello ${this.name}`);
      },
    };

    console.log(person);

    // In the example above, the `person` object has its own properties (`name`) and methods (`greet`). But, behind the scenes, it also inherits properties and methods from its [[prototype]].
  }

  {
    // 2. Prototypes in JavaScript

    // NOTE: Each object in JavaScript has an internal reference to another object called the prototype. In modern JavaScript, you can access an object's prototype using the `__proto__` property or via the `Object.getPrototypeOf()` method.

    const person = {
      name: 'Mahmud',
      greet() {
        console.log(`Hello ${this.name}`);
      },
    };

    console.log(person.__proto__); // This will log the prototype of the 'person' object
    console.log(person.__proto__ === Object.prototype); // true

    // By default, all objects in JavaScript inherit from `Object.prototype` unless explicitly defined otherwise. The `Object.prototype` is at the top of the prototype chain and contains methods like `hasOwnProperty()`, `toString()`, and others, which are available to all objects.
  }

  {
    // 3. Prototype Chain in Action

    // NOTE: When you try to access a property or method on an object, JavaScript first checks if the property exists on that object itself. If it doesn’t, it looks up the chain of prototypes until it either finds the property or reaches the end of the chain (i.e., `Object.prototype`), at which point it returns `undefined` if the property is not found.

    const student = { age: 23 };

    console.log(student);
    console.log(student.toString());

    // In this case, the `student` object does not have a `toString()` method of its own, so JavaScript looks in its prototype (`Object.prototype`) and finds the method there.
  }

  {
    // 4. Constructor Functions and Prototypes

    // NOTE: When you create objects using `constructor functions`, the prototype chain plays a significant role. Each function in JavaScript has a `prototype` property. When you create an object from a constructor, that object inherits the properties from the constructor's prototype.

    function Person(name) {
      this.name = name;
    }

    Person.prototype.greet = function () {
      console.log(`Hello ${this.name}`);
    };

    const person1 = new Person('Mahmud');
    person1.greet(); // Hello, Mahmud

    // Here’s what’s happening:

    // `person1` is an instance of the `Person` constructor.

    // `person1` doesn’t have the `greet()` method directly. However, JavaScript looks up the prototype chain and finds the `greet` method on `Person.prototype`.
  }

  {
    // 5. The `new` Keyword and Prototype Inheritance

    // ==============================================
    // IMPORTANT: When you use the `new` keyword to create an object from a constructor function, it performs the following:

    // 1. A new empty object is created.

    // 2. The object’s internal `[[Prototype]]` is set to the constructor's `prototype`.

    // 3. The constructor function is executed, and `this` points to the new object.

    // 4. The new object is returned unless the constructor returns its own object.

    // ==============================================

    function Car(make) {
      this.make = make;
    }

    Car.prototype.drive = function () {
      console.log(`Driving a ${this.make}`);
    };

    const car1 = new Car('Toyota');
    car1.drive(); // Driving a Toyota
  }

  {
    // 6. Prototype Chain Lookup

    // Let’s illustrate how the lookup works with a more complex example:
    function Animal(name) {
      this.name = name;
    }

    Animal.prototype.speak = function () {
      console.log(`${this.name} makes a noise`);
    };

    function Dog(name) {
      Animal.call(this, name); // Inherit properties from Animal
    }

    Dog.prototype = Object.create(Animal.prototype); // Inherit methods from Animal
    Dog.prototype.constructor = Dog;

    // Overriding speak method
    Dog.prototype.speak = function () {
      console.log(`${this.name} barks`);
    };

    const dog = new Dog('Rex');

    dog.speak(); // Rex barks.

    // Here’s what’s happening:

    // `Dog.prototype = Object.create(Animal.prototype)` ensures that `Dog` instances inherit from `Animal`.

    // When `dog.speak()` is called, JavaScript first looks at the `Dog.prototype` to find the `speak()` method. It finds the overridden `speak` method and uses it.

    // If `speak` were not defined in `Dog.prototype`, JavaScript would have looked up the chain and found `Animal.prototype.speak()`.
  }
}
 */

//* Classes, Inheritance, & Prototypes

// Chat GPT 👇
// https://chatgpt.com/share/28dfc399-ea33-462a-a57d-84ae30d3f0d1

{
  {
    // 1. Classes in JavaScript

    // NOTE: A class in JavaScript is a blueprint for creating objects.

    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }

      greet() {
        console.log(`My name is ${this.name}`);
      }
    }

    const person1 = new Person('Mahmud', 25);
    person1.greet(); // My name is Mahmud

    // `constructor` method: Special method that is automatically invoked when a new object is created using the `new` keyword.

    // `this` keyword: Refers to the instance of the class (the object being created).

    // Methods: Functions defined in the class (like `greet()`) become part of the class prototype, meaning all instances of the class share the same method.
  }

  {
    // 2. Inheritance in JavaScript
    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }

      greet() {
        console.log(`Hello, my name is ${this.name}`);
      }
    }

    class Employee extends Person {
      constructor(name, age, jobTitle) {
        super(name, age); // Calls the parent class's constructor
        this.jobTitle = jobTitle;
      }

      work() {
        console.log(`${this.name} is working as a ${this.jobTitle}`);
      }
    }

    const employee1 = new Employee('Mahmud', 25, 'Software Developer');
    employee1.greet(); // Hello, my name is Mahmud
    employee1.work(); // Mahmud is working as a Software Developer
  }

  {
    // 3. Prototypes in JavaScript

    // NOTE: Prototype-based inheritance: Every JavaScript object has a hidden property called `[[Prototype]]` (often accessible via `__proto__` or through the `Object.getPrototypeOf()` method), which points to another object (its prototype). If a property or method is not found on the object itself, the JavaScript engine looks up the prototype chain.

    function Animal(name) {
      this.name = name;
    }

    Animal.prototype.speak = function () {
      console.log(`${this.name} makes a sound`);
    };

    const dog = new Animal('Dog');
    dog.speak(); // Dog makes a sound

    // Here:

    // `Animal` is a constructor function.

    // `Animal.prototype` is the object from which instances of `Animal` inherit.

    // The `speak` method is shared by all instances of `Animal` via the prototype.

    // Extending Prototypes:
    function Dog(name, breed) {
      Animal.call(this, name); // Inherit from Animal
      this.breed = breed;
    }

    Dog.prototype = Object.create(Animal.prototype); // Set prototype inheritance
    Dog.prototype.constructor = Dog; // Fix constructor reference

    Dog.prototype.bark = function () {
      console.log(`${this.name} barks loudly`);
    };

    const myDog = new Dog('Buddy', 'Labrador');
    myDog.speak(); // Buddy makes a sound.
    myDog.bark(); // Buddy barks loudly.

    // `Object.create(Animal.prototype)`: This sets up the inheritance chain where `Dog` inherits from `Animal`.

    // `Dog.prototype.constructor = Dog;`: This ensures that the `constructor` property points back to `Dog` (not `Animal`), useful for reflection and debugging.
  }

  {
    // 5. Prototype Chain

    // NOTE: The prototype chain is what makes inheritance work in JavaScript. If you try to access a property or method on an object, JavaScript will:

    // 1. Check if the property exists on the object itself.

    // 2. If not found, it will look at the object's prototype.

    // 3. This process continues up the prototype chain until it finds the property/method or reaches the end (null).

    // Example:
    function Animal(name) {
      this.name = name;
    }

    Animal.prototype.speak = function () {
      console.log(`${this.name} makes a sound`);
    };

    const dog = new Animal('Dog');
    dog.speak(); // Dog makes a sound

    console.log(dog.hasOwnProperty('speak')); // false
    console.log(dog.__proto__.hasOwnProperty('speak')); // true
    console.log(dog.__proto__ === Animal.prototype); // true

    // Here, `dog` does not have `speak` directly on it, but it is found on the prototype (`Animal.prototype`).
  }

  {
    // IMPORTANT: Summary
    //
    // Classes provide a cleaner and more readable syntax for defining objects and their inheritance in JavaScript.
    //
    // Inheritance allows you to create subclasses that extend functionality from a base class.
    //
    // Prototypes are the underlying mechanism that powers inheritance and method delegation in JavaScript. Even with `class`, JavaScript still uses prototypes under the hood.
    //
    // Prototype chain is the way JavaScript resolves property lookups, climbing the chain until it finds the property or reaches `null`.
  }
}
