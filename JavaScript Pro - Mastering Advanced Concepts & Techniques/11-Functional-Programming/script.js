'use strict';

//* Introducing Functional Programming

// ChatGPT 👇

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  // NOTE: Functional Programming (FP) is a programming paradigm, a style of writing code.

  // ==============================================
  // IMPORTANT: Core concepts of FP in JS:

  // 1. Pure Functions
  // 2. Immutability
  // 3. Higher-Order Functions
  // 4. First-Class Functions
  // 5. Function Composition
  // 6. Recursion
  // 7. Avoiding Side Effects
  // 8. Declarative Programming
  // ==============================================

  {
    // 1. Pure Functions

    // NOTE: A "pure function" is a function that, given the same inputs, will always return the same output and has no side effects (i.e., it doesn’t mutate any external state or variables).

    // Pure function
    function add(a, b) {
      return a + b;
    }

    console.log(add(2, 3)); // 5

    // No side effects (no changes to external state).
    // The function only depends on its inputs and returns a predictable output.

    // NOTE: Why are pure functions important?

    // ✅ Pure functions are predictable, easy to test, debug, and reason about. They contribute to the overall reliability of the program.
  }

  {
    // 2. Immutability

    // NOTE: Functional programming emphasizes working with immutable data. Instead of modifying objects or arrays, new ones are created with the desired changes.

    const arr = [1, 2, 3];

    // Instead of mutating, create a new array
    const newArr = [...arr, 4]; // [1, 2, 3, 4]

    console.log(arr); // Original array remains [1, 2, 3]

    // NOTE: Why is immutability important?

    // ✅ It prevents unintended side effects.
    // ✅ It makes program easier to debug and reason about.
    // ✅ It allows for easier implementation of features like undo/redo functionality.
  }

  {
    // 3. Higher-Order Functions

    // NOTE: A "higher-order function" is a function that takes another function as an argument or returns a function. Functions are treated as first-class citizens, meaning they can be passed around as values, just like objects or strings.

    function greet(name) {
      return `Hello, ${name}`;
    }

    function printMessage(func, value) {
      console.log(func(value));
    }

    // Higher-order function
    printMessage(greet, 'Mahmud'); // Outputs: Hello, Mahmud

    // Common Higher-Order Functions in JavaScript:👇

    // `map()`: Transforms an array by applying a function to each element.
    // `filter()`: Filters elements in an array based on a condition.
    // `reduce()`: Accumulates values in an array to produce a single result.

    const numbers = [1, 2, 3, 4, 5];

    // map: multiply each number by 2
    const doubled = numbers.map((n) => n * 2); // [2, 4, 6, 8, 10]

    // filter: get even numbers
    const evens = numbers.filter((n) => n % 2 === 0); // [2, 4]

    // reduce: sum all numbers
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  }

  {
    // 4. First-Class Functions

    // NOTE: In JavaScript, functions are "first-class citizens". This means they can be stored in variables, passed as arguments to other functions, and returned from other functions.

    // Assigning a function to a variable
    const greetFunction = function (name) {
      return `Hello, ${name}`;
    };

    // Passing a function as an argument
    function greetUser(greetFunction, userName) {
      console.log(greetFunction(userName));
    }

    greetUser(greetFunction, 'Mahmud'); // Hello, Mahmud
  }

  {
    // 5. Function Composition

    // NOTE: Function composition is the process of combining two or more functions to produce a new function. The result of one function is passed as input to another.

    const multiplyBy2 = (x) => x * 2;
    const subtract5 = (x) => x - 5;

    const compose = (f, g) => (x) => f(g(x));

    const multiplyAndSubtract = compose(subtract5, multiplyBy2);

    console.log(multiplyAndSubtract(10)); // (10 * 2) - 5 = 15

    // Function composition allows for building complex behavior by chaining simple functions together.
  }

  {
    // 6. Recursion

    // NOTE: In functional programming, recursion is often preferred over loops. Recursion is when a function calls itself until a base condition is met.

    function factorial(n) {
      if (n === 0) return 1;
      return n * factorial(n - 1);
    }

    console.log(factorial(5)); // 120

    // WARNING: Recursion breaks down a problem into smaller instances of itself, which can be more expressive in some functional programming scenarios.
  }

  {
    // 7. Avoiding Side Effects

    // NOTE: Side effects occur when a function interacts with the outside world (e.g., modifying global variables, changing DOM elements, or printing to the console). Functional programming tries to avoid side effects, keeping functions isolated and independent.

    // 🔴 Example (with side effect):
    {
      let counter = 0;

      function increment() {
        counter++; // Modifying external state
      }

      increment();
      console.log(counter); // 1
    }

    // ✅ Example (without side effect):
    {
      function increment(count) {
        count++; // Pure, no modification of external state
        return count;
      }

      const newCounter = increment(0);
      console.log(newCounter); // 1
    }
  }

  {
    // 8. Declarative Programming

    // NOTE: Functional programming emphasizes declarative code, which focuses on what to do rather than how to do it (imperative style). Higher-order functions like `map()`, `filter()`, and `reduce()` enable a declarative style of coding.

    // Imperative vs Declarative Example:

    {
      // 🔴 Imperative (how to do it):

      const numbers = [1, 2, 3, 4, 5];
      const doubled = [];

      for (let i = 0; i < numbers.length; i++) {
        doubled.push(numbers[i] * 2);
      }
      console.log(doubled); // [2, 4, 6, 8, 10]
    }

    {
      // ✅ Declarative (what to do):

      const numbers = [1, 2, 3, 4, 5];
      const doubled = numbers.map((n) => n * 2);
      console.log(doubled); // [2, 4, 6, 8, 10]
    }
  }

  // ==============================================
  // IMPORTANT: Benefits of Functional Programming:

  // Modularity: Code is composed of small, reusable, pure functions.

  // Predictability: Pure functions and immutability make the code easier to predict and debug.

  // Concurrency: Since there are no side effects and no shared mutable state, functional programming can make it easier to work with concurrent processes.
  // ==============================================
}
 */

//* First Class Functions

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.

  // NOTE: In JavaScript, "functions are first-class citizens", meaning functions can be treated like any other value in the language. This makes functions extremely versatile, as they can be:
  // 👉 Assigned to variable
  // 👉 Passed as arguments to other functions
  // 👉 Returned from other functions
  // 👉 Stored in data structures such as arrays and objects

  // This capability is crucial for writing higher-order functions and following functional programming principles.

  {
    // 1. Assigning Functions to Variables

    // NOTE: Functions in JavaScript can be assigned to variables just like numbers, strings, or objects.

    // Assigning a function to a variable
    const sayHello = function (name) {
      return `Hello, ${name}`;
    };

    // Using the function stored in the variable
    console.log(sayHello('Mahmud')); // Hello, Mahmud

    // In the above example, the function is assigned to the variable `sayHello`, and can be called later using that variable.
  }

  {
    // 2. Passing Functions as Arguments to Other Functions

    // NOTE: Functions can be passed as arguments to other functions. This is commonly done in higher-order functions like `map()`, `filter()`, and `reduce()`.

    function greet(name) {
      return `Hello, ${name}`;
    }

    function printMessage(fn, value) {
      console.log(fn(value));
    }

    // Passing `greet` function as an argument to `printMessage`
    printMessage(greet, 'Mahmud'); // Output: Hello, Mahmud
  }

  {
    // 3. Returning Functions from Other Functions

    // NOTE: In JavaScript, functions can also be returned from other functions. This allows for the creation of higher-order functions and closures, making JavaScript highly flexible.

    const createMultiplier = (multiplier) => {
      return (num) => {
        return num * multiplier;
      };
    };

    // The function `createMultiplier` returns another function
    const multiplyBy2 = createMultiplier(2);
    console.log(multiplyBy2(5)); // Output: 10

    // In the example above, `createMultiplier` is a function that returns another function. `multiplyBy2` becomes a function that multiplies any number by 2.
  }

  {
    // 4. Storing Functions in Data Structures

    // NOTE: Since functions are treated like objects in JavaScript, they can be stored in arrays or objects.

    const operations = {
      add: (a, b) => a + b,
      subtract: (a, b) => a - b,
      multiply: (a, b) => a * b,
      division: (a, b) => a / b,
    };

    console.log(operations.add(5, 3)); // 8
    console.log(operations.subtract(5, 3)); // 2
    console.log(operations.multiply(5, 3)); // 15
    console.log(operations.division(5, 3)); // 1.67

    // Here, functions are stored as properties of an object, which allows for easy access and calling of specific operations.
  }
}

//* Writing Pure Functions

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Returning Functions

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Immutability

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Recursion

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Partial Application With Bind

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Writing a Partial Function

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Composition Basics

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* A Simple Compose Function

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Writing a Fancier Compose Function

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Currying Basics

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* More Advanced Currying

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Dice Game Intro

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}
