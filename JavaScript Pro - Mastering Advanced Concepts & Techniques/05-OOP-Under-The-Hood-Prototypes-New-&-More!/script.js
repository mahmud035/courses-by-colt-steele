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
