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
