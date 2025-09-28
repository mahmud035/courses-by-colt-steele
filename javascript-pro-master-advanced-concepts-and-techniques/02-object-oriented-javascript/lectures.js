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

//* Class Basics

{
}

//* Constructor Function

{
}

//* Instance Methods / Public Methods

{
}

//* Inheritance Basics

{
}

//* The Super Keyword

{
}

//* Static Properties

{
}

//* Static Methods

{
}

//* Use Cases For Static Methods

{
}
