'use strict';

// Slides 👇
// 📖 MUST READ: https://rithm-students-assets.s3.us-west-1.amazonaws.com/udemy/lectures/js-oo/handout/index.html

//* Getters
//* Setters

/* 
{
  // Getters: Allow you to retrieve the value of an object’s property.
  // Setters: Allow you to set the value of an object’s property.

  class Circle {
    #radius;

    constructor(radius) {
      this.#radius = radius;
    }

    // Getter for the radius
    get radius() {
      return this.#radius;
    }

    // Setter for the radius
    set radius(value) {
      if (value < 0) throw new Error('Radius cannot be negative!');
      this.#radius = value;
    }
  }

  const circle = new Circle(5);
  circle.radius; // 5 getter
  circle.radius = 7; // setter
  circle.radius; // 7 getter

  // ===================  ===================

  class User {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    set fullName(newName) {
      const [first, last] = newName.split(' ');
      this.firstName = first;
      this.lastName = last;
    }
  }

  const user = new User('Jonas', 'Schemedtman');

  console.log(user.fullName); // Jonas Schemedtman
  user.fullName = 'Steve Smith';
  console.log(user.fullName); // Steve Smith
}
 */

//* Public Fields
//* Private Fields

/* 
{
  class MyClass {
    // Public field
    publicField = 'Public Field';

    // Private Field
    #privateField = 'Private Field';

    getPrivateField() {
      return this.#privateField;
    }
  }

  const instance = new MyClass();
  console.log(instance.publicField); // 'Public Field'
  console.log(instance.getPrivateField()); // 'Private Field'
  // console.log(instance.#privateField); // SyntaxError

  // ===================  ===================

  // Getters & Setters with Private Fields
  class Cat {
    #name;

    constructor(name) {
      this.#name = name;
    }

    // Setter to change the cat's name
    set name(newName) {
      if (newName.trim().length === 0) throw new Error('Name cannot be empty!');
      this.#name = newName;
    }

    // Getter to retrieve the cat's name
    get name() {
      return this.#name;
    }
  }

  const whiskers = new Cat('Whiskers');
  whiskers.name = 'Furry'; // (setter)
  console.log(whiskers.name); // Furry (getter)

  // whiskers.name = ''; // Error: Name cannot be empty!
  // whiskers.#privateMethod(); // SyntaxError
}
 */

//* Private Methods

/* 
{
  class MyClass {
    #privateMethod() {
      console.log('PRIVATE METHOD CALLED!!!');
    }

    publicMethod() {
      this.#privateMethod();
    }
  }

  const myClass = new MyClass();
  myClass.publicMethod();
}
 */

//* ES2022 Static Initialization Blocks

/* 
{
  class DatabaseConnection {
    static connection;

    // Static Initialization Blocks
    static {
      if (process.env.NODE_ENV === 'production') {
        this.connection = this.loadProductionConnection;
      } else {
        this.connection = this.loadDevelopmentConnection;
      }
    }

    static loadProductionConnection() {}
    static loadDevelopmentConnection() {}
  }
}
 */
