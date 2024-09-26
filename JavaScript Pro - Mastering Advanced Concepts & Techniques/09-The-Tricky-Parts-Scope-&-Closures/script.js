'use strict';

//* Recapping Var & Scope

// ChatGPT 👇

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Recapping Let, Const, & Scope

// ChatGPT 👇

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

//* IIFEs

// ChatGPT 👇

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Closures: The Basics

// ChatGPT 👇

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Closures: Another Example

// ChatGPT 👇

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Closures: Factory Functions

// ChatGPT 👇

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Closures: Event Listeners

// ChatGPT 👇

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Closures: Loops

// ChatGPT 👇

{
  // TODO: ✅ Read ChatGPT's Article.
}
