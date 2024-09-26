'use strict';

//* Recapping Var & Scope

// ChatGPT 👇
// https://chatgpt.com/share/66f593d1-132c-800f-a783-b134a36fa4dd

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Recapping Let, Const, & Scope

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f593d1-132c-800f-a783-b134a36fa4dd

{
  // TODO: ✅ Read ChatGPT's Article.

  // IMPORTANT: In modern JavaScript, it’s considered best practice to use `const` by default, and only use `let` when you need to reassign values.

  {
    // Temporal Dead Zone (TDZ)

    // The Temporal Dead Zone occurs from the start of the block until the variable is declared and initialized. During this period, any attempt to reference the variable results in a `ReferenceError`. This helps prevent confusing bugs that can arise from accessing variables before they are declared.

    {
      // console.log(x); // Error: Cannot access 'x' before initialization

      let x = 5; // x is declared and initialized here
    }
  }
}

//* The Scope Chain

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f593d1-132c-800f-a783-b134a36fa4dd

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  // NOTE: `Scope Chain`: When you reference a variable in JavaScript, the interpreter first looks for the variable in the current scope. If the variable isn’t found, it goes up one level in the scope chain and looks for it in the parent scope. This process continues until the variable is found or the global scope is reached. If the variable is not found in any scope, a `ReferenceError` is thrown.

  {
    // 2. Lexical Scoping => How scopes are determined in JavaScript

    // NOTE: JavaScript uses lexical scoping (also known as static scoping). Lexical scoping means that the scope of a variable is determined by its location in the source code (i.e., where it is written in the program). Once a scope is set, it remains fixed regardless of where the function is called from.

    // Example of Lexical Scoping:
    let a = 10;

    const outer = () => {
      let b = 20;

      const inner = () => {
        let c = 30;

        console.log(a); // 10 (from global scope)
        console.log(b); // 20 (from outer scope)
        console.log(c); // 30 (from inner scope)
      };

      inner();
    };

    outer();

    // NOTE: In the example above, the `inner` function can access variables from its own scope (`c`), its parent (`outer`) function’s scope (`b`), and the global scope (`a`). This is an illustration of how the scope chain works, where inner functions can access variables defined in outer functions (lexical scoping).
  }

  {
    // 3. The Scope Chain

    // Scope Chain in Action:
    let a = 'global';

    const outer = () => {
      let b = 'outer';

      const inner = () => {
        let c = 'inner';

        console.log(a); // "global" (found in global scope)
        console.log(b); // "outer" (found in outer scope)
        console.log(c); // "inner" (found in inner scope)
      };

      inner();
    };

    outer();

    // In this example:

    // When `console.log(a)` is called inside `inner()`, the interpreter checks the local scope of `inner()`. Since `a` is not found, it moves up the scope chain to the `outer()` function. Still, `a` isn’t found, so it finally looks in the global scope where it finds `a = "global"`.

    // Similarly, `b` is found in the parent scope (`outer` function), and `c` is found in the local scope of `inner()`.
  }
}
 */

//* Static Scope

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f593d1-132c-800f-a783-b134a36fa4dd

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  // ==============================================
  // IMPORTANT: Summary of Static Scope

  // Static Scope (Lexical Scope): Variables and functions are scoped based on where they are defined in the source code, not where they are invoked.

  // Lexical Environment: The JavaScript engine creates a mapping of variables at the time the code is parsed, determining what variables a function will have access to.

  // Scope Chain: A function has access to its own local variables and to variables in its outer (parent) functions or the global scope, based on how the code is structured.

  // Closures: Functions can "remember" the variables from their lexical scope even after the parent function has finished executing, thanks to static scoping.

  // ==============================================

  {
    // Example of Static Scope (Lexical Scope):

    const a = 10; // Global scope

    const outer = () => {
      const b = 20; // outer's local scope

      const inner = () => {
        const c = 30; // inner's local scope

        console.log(a); // 10 (from global scope)
        console.log(b); // 20 (from outer scope)
        console.log(c); // 30 (from inner scope)
      };

      inner();
    };

    outer();
  }

  {
    // NOTE: Closures rely on the static scope to "remember" the variables from the outer function’s environment.

    // Example of a Closure Using Static Scope:

    const outer = () => {
      let count = 0;

      const inner = () => {
        count++;
        console.log(count);
      };

      return inner;
    };

    const increment = outer();
    increment(); // Output: 1
    increment(); // Output: 2
  }
}
 */

//* Hoisting

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f593d1-132c-800f-a783-b134a36fa4dd

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  // NOTE: Hoisting is a fundamental behavior in JavaScript where variable and function declarations are "moved" to the top of their respective scopes (global or function scope) during the compilation phase, before the code is executed. This means that you can use variables and functions before they are declared in the code without causing an error (with certain limitations).

  // While it may seem like the declarations are "moved" to the top of the code, this is not what actually happens. Rather, JavaScript allocates memory for variables and function declarations during the compilation phase. This behavior is known as `hoisting`.

  // ==============================================
  // IMPORTANT: Key Points of Hoisting:

  // 1. Declarations are hoisted, but not the initializations.

  // 2. Function declarations are hoisted completely, including the entire function definition.

  // 3. Variables declared with `var` are partially hoisted (declaration is hoisted, but initialization happens at runtime).

  // 4. Variables declared with `let` and `const` are hoisted, but they are not initialized until the code execution reaches the line of declaration, leading to the temporal dead zone (TDZ).

  // ==============================================

  {
    // 1. Hoisting with `var`

    console.log(a); // Output: undefined
    var a = 10;
    console.log(a); // Output: 10

    // IMPORTANT: Only the declaration `var a` is hoisted, not the initialization `a = 10`.
  }

  {
    // 2. Hoisting with `let` and `const`

    // console.log(b); // 🔴 ReferenceError: Cannot access 'b' before initialization
    let b = 20;
    console.log(b); // Output: 20

    // In this example:

    // The variable `b` is hoisted, but it's in the `TDZ` until the line where it is initialized.

    // `Temporal Dead Zone (TDZ)` is the period between entering the block and the variable's declaration. During this time, the variable exists but is not accessible.
  }

  {
    // 3. Hoisting with Functions

    // NOTE: Function Declarations: Function declarations are "fully hoisted". This means both the function’s "name" and its "body" are hoisted to the top of the scope. This allows you to call a function before its declaration in the code.

    greet(); // Output: "Hello!"

    function greet() {
      console.log('Hello');
    }

    // NOTE: Function Expressions: Function expressions (where a function is assigned to a variable) are treated differently. Only the variable is hoisted, not the function definition. As a result, trying to call a function expression before the declaration will result in an error.

    // console.log(sum); // 🔴 ReferenceError: Cannot access 'sum' before initialization
    // sum(); // 🔴 ReferenceError: Cannot access 'sum' before initialization

    const sum = function () {
      console.log('Adding numbers');
    };
  }

  {
    // 4. Class Hoisting

    // const obj = new Person(); // 🔴 ReferenceError: Cannot access 'Person' before initialization

    class Person {
      constructor() {
        this.name = 'John';
      }
    }

    // Here, the `Person` class is hoisted, but it is in the `TDZ` until the class definition is encountered. Trying to instantiate an object of the class before the declaration results in a `ReferenceError`.
  }

  {
    // Visual Representation of Hoisting

    // NOTE: To better understand hoisting, let's take a sample code block and visualize what happens during the hoisting process.

    // Original Code:
    {
      console.log(x); // Output: undefined
      var x = 5;
      console.log(x); // Output: 5

      greet(); // Output: "Hello!"

      function greet() {
        console.log('Hello!');
      }
    }

    // After Hoisting:
    {
      var x; // Declaration is hoisted, but not initialization
      function greet() {
        // Function declaration is hoisted with its body
        console.log('Hello!');
      }

      console.log(x); // Output: undefined
      x = 5; // Initialization happens here
      console.log(x); // Output: 5

      greet(); // Output: "Hello!"

      // Here:

      // The `var x` declaration is hoisted, so `console.log(x)` initially outputs `undefined` since `x` is declared but not yet initialized.

      // The `greet` function is hoisted completely, so you can call it before its declaration.
    }
  }
}
 */

//* IIFEs

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f593d1-132c-800f-a783-b134a36fa4dd

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  // NOTE: An IIFE (Immediately Invoked Function Expression) is a JavaScript function that is defined and executed immediately after it is created. This pattern allows you to create a function and invoke it right away, without the need to call it separately later in the code.

  // IIFEs are often used to avoid polluting the global scope, creating a scope that protects variables and functions from being accessed from the outside. This was especially useful before the introduction of ES6 modules, and it remains a good technique for encapsulation.

  {
    // Syntax of an IIFE

    (function () {
      // Function body (statements)
    })();

    // Or with arrow functions:

    (() => {
      // Function body (statements)
    })();

    // Here:
    // The function is wrapped in parentheses `()` to turn it into an "expression".
    // The parentheses at the end `()` immediately "invoke" the function.
  }

  {
    // Example of an IIFE

    (() => {
      console.log('This is an IIFE!');
    })();
  }

  {
    // Parameters and IIFEs

    ((num1, num2) => {
      console.log(num1 + num2);
    })(5, 10);
  }

  {
    // Named IIFE

    (function factorial(n) {
      if (n <= 1) {
        return 1;
      }
      return n * factorial(n - 1); // Recursive call
    })(5); // Output: 120
  }
}
 */

//* Closures: The Basics

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f593d1-132c-800f-a783-b134a36fa4dd

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  {
    // Example of Closure

    const outerFunction = () => {
      let outerVariable = `I'm outside!`;

      const innerFunction = () => {
        console.log(outerVariable); // Can access outerVariable
      };

      return innerFunction;
    };

    const closure = outerFunction();
    closure(); // Output: "I'm outside!"
  }

  //* Practical Examples of Closures
  {
    // 1. Data Privacy and Encapsulation

    // NOTE: Closures can be used to create private variables and functions, simulating encapsulation.

    function createCounter() {
      let count = 0; // Private variable

      return function () {
        count++;
        console.log(count);
      };
    }

    const counter = createCounter();
    counter(); // Output: 1
    counter(); // Output: 2
    counter(); // Output: 3

    // In this example:

    // The `count` variable is private to the `createCounter` function.

    // The inner anonymous function forms a closure over `count`, allowing it to access and modify it every time `counter()` is called.

    // No code outside the `createCounter` function can directly access or modify `count`, achieving data encapsulation.
  }

  {
    // 2. Function Factories

    // NOTE: Closures are useful when you want to create multiple functions that share some of the same behavior but differ in specific values.

    function createMultiplier(multiplier) {
      return function (value) {
        return value * multiplier;
      };
    }

    const double = createMultiplier(2);
    const triple = createMultiplier(3);

    console.log(double(5)); // Output: 10
    console.log(triple(5)); // Output: 15

    // In this example:

    // `createMultiplier` returns a function that multiplies a value by the given multiplier.

    // `double` and `triple` are closures that "remember" their own multiplier values (`2` and 3` respectively) and use them when called.
  }

  //* Use Cases of Closures
  {
    // 1. Event Handlers: Closures are commonly used in event handlers to "remember" state data or a reference to a particular element.

    const button = document.getElementById('button');

    const setupClickHandler = (element, message) => {
      element.addEventListener('click', () => {
        console.log(message); // 👈 Closures happens here
      });
    };

    setupClickHandler(button, 'Button Clicked!');

    // NOTE: Here, the inner anonymous function (the event handler) retains access to the `message` variable, even after `setupClickHandler` has finished executing.
  }

  {
    // 2. Callbacks and Timers: Closures are frequently used in asynchronous programming, especially with callbacks and timers.

    const delayMessage = (message, delay) => {
      setTimeout(() => {
        console.log(message); // 👈 Closures happens here
      }, delay);
    };

    delayMessage('Hello after 1 second!', 1000);

    // NOTE: In this example, the anonymous function passed to `setTimeout` forms a closure over the `message` variable, which allows it to access `message` when the timer expires, even though the outer function has already returned.
  }

  //* Closures and the Scope Chain
  {
    const globalVar = 'Global';

    const outerFunction = () => {
      let outerVar = 'Outer';

      const innerFunction = () => {
        const innerVar = 'inner';

        console.log(globalVar); // Output: "Global"
        console.log(outerVar); // Output: "Outer"
        console.log(innerVar); // Output: "Inner"
      };

      return innerFunction;
    };

    const closure = outerFunction();
    closure();

    // Here, the `innerFunction` forms a closure that has access to:
    // 1. The `innerVar` in its own scope.
    // 2. The `outerVar` in the scope of `outerFunction`.
    // 3. The `globalVar` from the global scope.

    // This demonstrates the "scope chain" in action. When the `innerFunction` is executed, it looks for variables starting from its own scope and moving outward, step by step, until it reaches the global scope.
  }
}
 */

//* Closures: Another Example

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f593d1-132c-800f-a783-b134a36fa4dd

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  // Problem Setup: A Closure Example

  // Imagine that we want to create a function that stores a "private" value and allows us to increment or access it. This would be a classic use case for closures since we can encapsulate data and control access to it through specific functions.

  const createCounter = () => {
    let count = 0; // `count` is a private variable

    return {
      increment: () => {
        count++; // The closure captures and updates `count`
        return count;
      },
      getCount: () => {
        return count; // The closure can access the current `count`
      },
    };
  };

  const counter1 = createCounter();
  console.log(counter1.increment()); // Output: 1
  console.log(counter1.increment()); // Output: 2
  console.log(counter1.getCount()); // Output: 2

  // ==================== ====================

  // Creating Multiple Counters with Closures
  const counter2 = createCounter();
  console.log(counter2.increment()); // Output: 1
  console.log(counter2.getCount()); // Output: 1
}
 */

//* Closures: Factory Functions

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f593d1-132c-800f-a783-b134a36fa4dd

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  // NOTE: Definition of a Factory Function

  // A factory function is a function designed to produce objects (or functions) on demand, with custom properties or behaviors, often based on parameters provided to the factory.

  {
    // Example 1: A Basic Factory Function Using Closures

    const createCounter = () => {
      let count = 0; // `count` is a private variable

      return {
        increment: () => {
          count++; // Modify the private variable
          return count;
        },
        getCount: () => {
          return count; // Access the private variable
        },
      };
    };

    const counter1 = createCounter();
    console.log(counter1.increment()); // Output: 1
    console.log(counter1.increment()); // Output: 2
    console.log(counter1.getCount()); // Output: 2

    const counter2 = createCounter();
    console.log(counter2.increment()); // Output: 1
    console.log(counter2.getCount()); // Output: 1

    // NOTE: Explanation:

    // The `createCounter` function is a "factory function". Each time it is called, it returns an object with two methods: `increment` and `getCount`.

    // The variable `count` is private to each instance of `createCounter`. This means each counter has its own separate `count`.

    // `counter1` and `counter2` are two independent counters. They do not interfere with each other because each one has its own closure over the `count` variable.
  }

  {
    // Example 2: Customizing Factory Functions with Parameters

    // Factory functions often take parameters to customize the object or function being created. Let’s modify the counter example to allow the factory function to accept an initial value for the `count`:

    const createCounter = (startValue) => {
      let count = startValue; // Initialize `count` with a custom start value

      return {
        increment: () => {
          count++;
          return count;
        },
        getCount: () => {
          return count;
        },
      };
    };

    const counter1 = createCounter(5);
    console.log(counter1.increment()); // Output: 6
    console.log(counter1.getCount()); // Output: 6

    const counter2 = createCounter(10);
    console.log(counter2.increment()); // Output: 11
    console.log(counter2.getCount()); // Output: 11
  }

  {
    // Example 3: Factory Functions for Creating Functions

    // Let’s create a factory function that generates "multiplier functions". Each multiplier function will multiply an input number by a specific factor.

    const createMultiplier = (multiplier) => {
      return (number) => {
        return number * multiplier;
      };
    };

    const double = createMultiplier(2); // Create a function that multiplies by 2
    const triple = createMultiplier(3); // Create a function that multiplies by 3

    console.log(double(5)); // Output: 10
    console.log(triple(5)); // Output: 15
  }

  {
    // Example 4: Complex Factory Functions

    // Let’s create a more complex factory function, where we generate objects representing employees with methods to manage their salary.

    const createEmployee = (name, salary) => {
      return {
        getName: () => {
          return name; // Access the private `name`
        },
        getSalary: () => {
          return salary; // Access the private `salary`
        },
        increaseSalary: (amount) => {
          salary += amount; // Modify the private `salary`
          return salary;
        },
      };
    };

    const emp1 = createEmployee('John Doe', 50000);
    console.log(emp1.getName()); // Output: "John Doe"
    console.log(emp1.getSalary()); // Output: 50000
    console.log(emp1.increaseSalary(5000)); // Output: 55000

    const emp2 = createEmployee('Jane Smith', 60000);
    console.log(emp2.getName()); // Output: "Jane Smith"
    console.log(emp2.getSalary()); // Output: 60000
    console.log(emp2.increaseSalary(10000)); // Output: 70000
  }
}
 */

//* Closures: Event Listeners

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f593d1-132c-800f-a783-b134a36fa4dd

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  {
    // Example 1: Basic Closure with Event Listener

    // In this example, we’ll add an event listener to a button, and use closures to capture and retain access to some data from the outer function.

    const button = document.getElementById('button');

    const setupClickHandler = () => {
      let clickCount = 0; // Private variable to track the number of clicks

      button.addEventListener('click', () => {
        // ✅ Closure happens here
        clickCount++; // Modify the private variable
        console.log(`Button clicked ${clickCount} times`);
      });
    };

    setupClickHandler(); // Initialize the event listener
  }

  {
    // Example 2: Closures for Passing Data to Event Listeners

    // NOTE: Sometimes, you need to capture and pass dynamic data into event listeners. Closures make it easy to pass data to event listeners, even if the data is not available when the event listener is defined.

    // Let’s look at an example where we create multiple buttons, and each button remembers its own unique number using closures.

    const setupButtons = () => {
      const buttons = document.querySelectorAll('.myButton');

      buttons.forEach((button) => {
        // ✅ Closure happens here
        let buttonNumber = button.getAttribute('data-number'); // Capture button number

        button.addEventListener('click', () => {
          // ✅ Closure happens here
          console.log(`Button ${buttonNumber} clicked`);
        });
      });
    };

    setupButtons(); // Initialize event listeners
  }
}
 */

//* Closures: Loops

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f593d1-132c-800f-a783-b134a36fa4dd

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  {
    //  Using let to Fix Scope Issues in Loops

    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        console.log(i);
      }, 1000);
    }
  }
}
 */
