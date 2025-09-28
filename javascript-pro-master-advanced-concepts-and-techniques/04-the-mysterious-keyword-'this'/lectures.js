'use strict';

// Slides 👇
// 📖 MUST READ: https://rithm-students-assets.s3.us-west-1.amazonaws.com/udemy/lectures/js-this/handout/index.html

// ==============================================
// IMPORTANT: Key Points To Remember: 👇

// 1. In the global context, "this" refers to the global object (browser -> window, node -> global).

// 2. Inside a function (in non-strict mode), "this" is the global object, while in strict mode, it is undefined.

// 3. In methods, "this" refers to the object the method belongs to.

// 4. Inside constructor functions and classes, "this" refers to the instance of the object.

// 5. Arrow functions do not have their own "this"; they inherit it from the lexical context.

// 6. Event listeners set "this" to the element that triggered the event.

// 7. You can manually set "this" using bind(), call(), or apply().

// ==============================================

//* Introducing "this" (Understanding JavaScript "this")
//* The Mystery of The Keyword "this"
//* Global Objects and "this"
//* "this" and Classes
//* The Call Method
//* The Apply Method
//* The Bind Method

class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }

  dance(style = 'tango') {
    console.log(`Meow, I am ${this.firstName}` + ` and I like to ${style}`);
  }
}

const fluffy = new Cat('Fluffy');
fluffy.firstName; // "Fluffy"
fluffy.dance('tango'); // works

// ⚠️ Problem
const fDance = fluffy.dance;
// fDance('salsa'); // TypeError

// ✅ Solutions
fluffy.dance.call(fluffy, 'salsa');
fluffy.dance.apply(fluffy, ['salsa']);

const betterDance = fluffy.dance.bind(fluffy);
betterDance('salsa');

//* Binding Arguments

// You can also bind arguments to functions. That will bake them into the function.

function applySalesTax(taxRate, price) {
  return price + price * taxRate;
}

// "null" here means it doesn't matter what "this" is
const applyCASalesTax = applySalesTax.bind(null, 0.0725);
applyCASalesTax(50); // 53.63

//* Bind With Event Listeners

const myBtn = document.getElementById('clickMe');
const buttons = document.querySelectorAll('.btn');

// ✅ Modern approach
myBtn.addEventListener('click', () => fluffy.dance('salsa'));

// Another Example: Pre-Binding Calls
// Imagine we want three buttons which call `popUp`, but with different arguments:

function popUp(msg) {
  alert(`Secret message is ${msg}`);
}

function handleClick(e) {
  const id = e.target.id;

  if (id === 'a') popUp('Apple');
  if (id === 'b') popUp('Berry');
  if (id === 'c') popUp('Cherry');
}

buttons.forEach((button) => {
  // ✅ Modern approach
  button.addEventListener('click', (e) => handleClick(e));
});

//* Bind With Timers

class Counter {
  constructor(startingNum = 0, incrementAmount = 1) {
    this.count = startingNum;
    this.incrementAmount = incrementAmount;
    this.intervalId = null; // Track timer ID
  }

  incrementAndPrint() {
    console.log(this.count);
    this.count += this.incrementAmount;
  }

  start() {
    // Store the ID to clear timer later
    // ✅ Modern approach
    this.intervalId = setInterval(() => this.incrementAndPrint(), 1000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

//* Arrow Functions and This

{
  class Cat {
    constructor(firstName) {
      this.firstName = firstName;
    }

    superGreet() {
      console.log(`#1: I am ${this.firstName}`); // works, obviously

      setTimeout(function () {
        console.log(`#2: I am ${this.firstName}`); // NOT working
      }, 500);

      setTimeout(() => {
        console.log(`#3: I am ${this.firstName}`); // yay!
      }, 1000);
    }
  }

  const kitty = new Cat('kitty');
  kitty.superGreet();
}
