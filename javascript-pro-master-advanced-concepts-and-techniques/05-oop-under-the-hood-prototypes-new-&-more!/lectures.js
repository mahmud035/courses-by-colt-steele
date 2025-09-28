'use strict';

// Slides 👇
// 📖 MUST READ https://rithm-students-assets.s3.us-west-1.amazonaws.com/udemy/lectures/js-oo/handout/index.html#js-oo-under-the-hood

//* OOP Under The Hood Intro

{
}

//* The `new` Keyword

{
  // IMPORTANT: The `new` keyword does four things:
  // - Creates an empty object
  // - Sets the keyword `this` to be that object `this = {}`
  // - Creates a link to the constructor function `prototype`
  // - Returns the object implicitly
}

//* Prototypes: Part 1

{
  {
    // Constructor Function
    function Vehicle(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    console.log(Vehicle.prototype); // an object
    console.log(Vehicle.prototype.constructor === Vehicle); // true

    const myFirstCar = new Vehicle('Toyota', 'Corolla', 2005);

    console.log(myFirstCar.__proto__ === Vehicle.prototype); // true
    console.log(Object.getPrototypeOf(myFirstCar) === Vehicle.prototype); // true
  }

  {
    // Constructor Function
    function Dog(name, breed) {
      this.name = name;
      this.breed = breed;
    }

    Dog.prototype.bark = function () {
      return `${this.name} says woof!`;
    };

    Dog.prototype.sleep = function () {
      return `${this.name} is sleeping!`;
    };
  }

  {
    class Dog {
      constructor(name, breed) {
        this.name = name;
        this.breed = breed;
      }

      bark() {
        return `${this.name} says woof!`;
      }

      sleep() {
        return `${this.name} is sleeping!`;
      }
    }

    class GuideDog extends Dog {
      constructor(name, breed, owner) {
        super(name, breed);
        this.owner = owner;
      }

      alert() {
        return `${this.name} alerts you to danger.  Good dog!`;
      }
    }
  }
}

//* The Prototype Chain

{
}

//* Classes, Inheritance, & Prototypes

{
}

//* __proto__ vs. prototype

{
}

//* Useful Prototype Methods

{
}
