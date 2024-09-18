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

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Hoisting

// ChatGPT 👇

{
  // TODO: ✅ Read ChatGPT's Article.
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
