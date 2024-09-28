'use strict';

//* Introducing Functional Programming

// ChatGPT 👇
// https://chatgpt.com/share/66f76ae6-4e80-800f-83cd-360f4260cf1b

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
// Same as above 👆 https://chatgpt.com/share/66f76ae6-4e80-800f-83cd-360f4260cf1b

/* 
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
 */

//* Writing Pure Functions

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f76ae6-4e80-800f-83cd-360f4260cf1b

{
  // TODO: ✅ Read ChatGPT's Article.

  // ==============================================
  // IMPORTANT: Writing Pure Functions: Guidelines

  // 1. Avoid Changing Global State
  // 2. Avoid Mutating Input Arguments
  // 3. No Side Effects
  //    A pure function should not cause side effects such as:
  // 👉 Modifying external data.
  // 👉 Logging to the console.
  // 👉 Making network requests or modifying the DOM.
  // 4. Use Immutable Data Structures (such as array or object)

  // ==============================================

  {
    // console.log('Writing Pure Functions');
  }
}

//* Returning Functions

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f76ae6-4e80-800f-83cd-360f4260cf1b

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  // NOTE: In JavaScript, "functions can return other functions", which is a fundamental feature of functional programming. When a function returns another function, it creates "closures" and enables the creation of "higher-order functions".

  {
    // 1. Basic Example of Returning Functions

    const greet = () => {
      return (name) => {
        return `Hello, ${name}`;
      };
    };

    const greeting = greet(); // Returns a function
    console.log(greeting('Mahmud')); // Output: Hello, Mahmud
  }

  {
    // 2. Closures in Returned Functions

    // NOTE: When a function returns another function, it can "remember" the variables of the outer function, even if the outer function has already completed execution. This is known as a "closure".

    const outerFunction = (outerVar) => {
      const innerFunction = (innerVar) => {
        return `Outer: ${outerVar}, Inner: ${innerVar}`;
      };

      return innerFunction;
    };

    const newFunction = outerFunction('outside');
    console.log(newFunction('inside')); // Outer: outside, Inner: inside
  }

  {
    // 3. Function Factories

    // NOTE: Returning functions allows you to create function factories — "functions that generate other functions dynamically".

    const createMultiplier = (multiplier) => {
      return (number) => {
        return number * multiplier;
      };
    };

    const double = createMultiplier(2);
    const triple = createMultiplier(3);

    console.log(double(5)); // Output: 10
    console.log(triple(5)); // Output: 15
  }

  {
    // 4. Currying

    // NOTE: "Currying" is a functional programming technique where a function with multiple parameters is transformed into a sequence of functions that each take one parameter.

    const add = (a) => {
      return (b) => {
        return a + b;
      };
    };

    const addFive = add(5); // Returns a function
    console.log(addFive(3)); // Output: 8
  }
}
 */

//* Immutability

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f76ae6-4e80-800f-83cd-360f4260cf1b

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  {
    // Immutable Example:
    const person = { name: 'Mahmud', age: 25 };

    // Creating a new object instead of modifying the original one
    const updatedPerson = { ...person, age: 26 };

    console.log(person); // Output: { name: 'Mahmud', age: 25 }
    console.log(updatedPerson); // Output: { name: 'Mahmud', age: 26 }
  }

  //* Techniques for Enforcing Immutability in JavaScript

  {
    // 1. Object Spread Operator (`...`)

    // NOTE: The spread operator (`...`) is a convenient way to create a shallow copy of an object or array. It allows you to create new versions of an object with changes, without modifying the original.

    // Example with Objects:
    const book = { title: 'JavaScript Guide', author: 'John' };

    // Create a new object by spreading the properties of the original one
    const updatedBook = { ...book, year: 2024 };

    console.log(book);
    // Original object is unchanged:
    // { title: 'JavaScript Guide', author: 'John' }

    console.log(updatedBook);
    // New object: { title: 'JavaScript Guide', author: 'John', year: 2024 }

    // ==========================================

    // Example with Arrays:
    const numbers = [1, 2, 3];

    // Create a new array by spreading the original array
    const newNumbers = [...numbers, 4];

    console.log(numbers); // Original array: [1, 2, 3]
    console.log(newNumbers); // New array: [1, 2, 3, 4]
  }
}
*/

//* Recursion

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f76ae6-4e80-800f-83cd-360f4260cf1b

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  {
    // Example of Recursion: Factorial

    const factorial = (n) => {
      // Base case: when n is 1, the recursion stops
      if (n === 1) return 1;

      // Recursive case: multiply n by the factorial of (n - 1)
      return n * factorial(n - 1);
    };

    console.log(factorial(5)); // 120 (5 * 4 * 3 * 2 * 1)
  }

  {
    // Example of Recursion: Fibonacci Sequence

    // NOTE: The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. It starts like this: 0, 1, 1, 2, 3, 5, 8, ...

    // Mathematically, it can be defined as:

    // 👉 fib(n) = fib(n - 1) + fib(n - 2) for n > 1
    // 👉 fib(0) = 0, fib(1) = 1 (Base cases)

    const fibonacci = (n) => {
      // Base cases: return n for 0 or 1
      if (n === 0) return 0;
      if (n === 1) return 1;

      // Recursive case: sum of the two preceding numbers
      return fibonacci(n - 1) + fibonacci(n - 2);
    };

    console.log(fibonacci(6)); // 8 (0, 1, 1, 2, 3, 5, 8)
  }
}
 */

//* Partial Application With Bind

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f76ae6-4e80-800f-83cd-360f4260cf1b

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  // NOTE: "Partial application" is a functional programming concept where you create a new function by "pre-filling" some of the arguments of an existing function. In JavaScript, one way to achieve partial application is through the `bind()` method.

  {
    //* Example: Simple Partial Application

    // Let's take a basic function that adds three numbers:

    const add = (x, y, z) => x + y + z;

    // NOTE: You can use `bind()` to create a new function where some of the arguments are fixed:

    const addFive = add.bind(null, 5); // Partially applying `x = 5`

    console.log(addFive(2, 3)); // Output: 10 (5 + 2 + 3)

    // Explanation:

    // The `bind()` method creates a new function (`addFive`) where the first argument (`x`) is fixed as `5`.

    // The new function still expects the remaining two arguments (`y` and `z`), which can be supplied when `addFive()` is called.

    //* Example: Fixing Multiple Arguments

    // You can also partially apply more than one argument:

    const addFiveAndTwo = add.bind(null, 5, 2); // Partially applying `x = 5` and `y = 2`

    console.log(addFiveAndTwo(3)); // Output: 10 (5 + 2 + 3)

    // Explanation:

    // Here, both the first (`x = 5`) and second (`y = 2`) arguments are fixed.

    // The resulting function `addFiveAndTwo` now only needs the last argument (`z`).
  }

  {
    //* Partial Application with `this` Binding

    // NOTE: The `bind()` method is typically used to control the `this` value inside a function. But we can still use `bind()` to pre-set arguments while binding the correct `this` context.

    const user = {
      name: 'Mahmud',
      greet(greeting, punctuation) {
        console.log(`${greeting}, ${this.name}${punctuation}`);
      },
    };

    const greetHello = user.greet.bind(user, 'Hello'); // Binding `this` to `user` and `greeting` to "Hello"

    greetHello('!'); // Output: "Hello, Mahmud!"

    // Explanation:

    // The method `greet()` uses `this.name` to refer to the user's name.

    // `bind(user, "Hello")` binds the `this` context to the `user` object and partially applies the first argument (`greeting = "Hello"`).

    // Now, `greetHello()` is a function that only requires the second argument (`punctuation`).
  }

  {
    // Advanced Example: Multiplication

    const multiply = (x, y, z) => x * y * z;

    const doubleAndTriple = multiply.bind(null, 2, 3); // Partially applying `x = 2` and `y = 3`

    console.log(doubleAndTriple(4)); // Output: 24 (2 * 3 * 4)

    // Explanation:

    // We created a new function `doubleAndTriple` that multiplies the first two arguments (2 and 3) by a third argument.

    // When we call `doubleAndTriple(4)`, it multiplies 2, 3, and 4 together to return `24`.
  }
}
 */

//* Writing a Partial Function

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f76ae6-4e80-800f-83cd-360f4260cf1b

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Composition Basics

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f76ae6-4e80-800f-83cd-360f4260cf1b

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  // 👉 In JavaScript, "composition" refers to the process of combining functions such that the output of one function becomes the input of the next.

  // 👉 The composition of functions reads from right to left.

  {
    // Example: Basic Function Composition

    // Let's say you have two functions: one that doubles a number and another that adds 10 to it.

    const double = (x) => x * 2;
    const addTen = (x) => x + 10;

    // You can combine these two functions using function composition:

    const composedFunction = (x) => {
      return addTen(double(x));
    };

    console.log(composedFunction(5));
  }
}
 */

//* A Simple Compose Function

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f76ae6-4e80-800f-83cd-360f4260cf1b

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  // NOTE:

  // The `compose()` function combines multiple functions and executes them from "right to left".

  // You can use `reduceRight()` to apply the functions in reverse order.

  // "Compose" helps to create clear, declarative transformations on data by chaining small, single-purpose functions.

  {
    // Simple compose() Function
    const compose = (...fns) => {
      return (x) => {
        return fns.reduceRight((acc, fn) => fn(acc), x);
      };
    };
  }
}
 */

//* Writing a Fancier Compose Function

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f76ae6-4e80-800f-83cd-360f4260cf1b

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  // Step-by-Step: Fancier `compose()` Function

  const compose = (...fns) => {
    if (fns.length === 0) return (x) => x;
    if (fns.length === 1) return fns[0];

    return (...args) => {
      try {
        return fns.reduceRight((acc, fn) => {
          return Promise.resolve(acc).then(fn);
        }, args);
      } catch (error) {
        throw new Error('Error in composed functions: ', error.message);
      }
    };
  };

  // Example Usage of the Fancier `compose()` Function
  {
    // Synchronous Example:
    const double = (x) => x * 2;
    const square = (x) => x * x;
    const subtractFive = (x) => x - 5;

    const composedSync = compose(subtractFive, square, double);
    console.log(composedSync(3)); // Output: 31
  }

  // Asynchronous Example:
  {
    const double = (x) => Promise.resolve(x * 2);
    const square = (x) => x * x;
    const subtractFive = (x) => x - 5;

    const composedAsync = compose(subtractFive, square, double);
    composedAsync(3).then((result) => console.log(result)); // Output: 31
  }
}
 */

//* Currying Basics

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f76ae6-4e80-800f-83cd-360f4260cf1b

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  // NOTE: "Currying" is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking one argument at a time. Instead of passing all arguments at once, the curried function takes one argument, returns a new function that takes the next argument, and so on until all arguments are provided.

  {
    // Basic Example of Currying

    // Normal Function (Non-Curried):
    {
      const add = (x, y) => x + y;

      console.log(add(2, 3)); // 5
    }

    // Curried Version of the Same Function:
    {
      const add = (x) => {
        return (y) => {
          return x + y;
        };
      };

      const add2 = add(2); // Partial application
      console.log(add2(3)); // 5
    }
  }

  {
    // Writing a Curried Function with Multiple Arguments

    const multiply = (x) => {
      return (y) => {
        return (z) => {
          return x * y * z;
        };
      };
    };

    console.log(multiply(2)(3)(4)); // 24
  }
}
 */

//* More Advanced Currying

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f76ae6-4e80-800f-83cd-360f4260cf1b

{
  // TODO: ✅ Read ChatGPT's Article.
}
