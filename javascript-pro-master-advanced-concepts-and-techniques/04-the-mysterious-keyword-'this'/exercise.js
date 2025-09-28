'use strict';

//* Buggy Code `this` Exercise

// Instructions

/*
Write a function called `greetFluffy`, which should return the string "Hello Fluffy Meowson". Add the necessary code to invoke the greet function, but instead of returning "Hello Butters Cluckly", return "Hello Fluffy Meowson". Do not modify the fluffy object above.
*/

const butters = {
  firstName: 'Butters',
  lastName: 'Cluckly',
  greet() {
    return `Hello ${this.firstName} ${this.lastName}`;
  },
};

const fluffy = {
  firstName: 'Fluffy',
  lastName: 'Meowson',
};

function greetFluffy() {
  return butters.greet.call(fluffy);
}

//* Buggy Code `this` Timers Exercise

/*
In the Timer class, modify the start method to log the tick property at one - second intervals correctly and add a stop method to clear the interval.

The timer should stop after 5 ticks.
*/

class Timer {
  constructor() {
    this.tick = 0;
    this.timerId = null;
  }

  start() {
    this.timerId = setInterval(() => {
      console.log(this.tick++);
      if (this.tick > 4) this.stop();
    }, 1000);
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
}
