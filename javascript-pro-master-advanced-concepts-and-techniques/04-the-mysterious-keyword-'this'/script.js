'use strict';

//* Introducing "this" (Understanding JavaScript "this")

// Chat GPT 👇
// https://chatgpt.com/share/9728e8ab-4e16-4f4e-b7fd-c1e0419b2f75

/* 
{
  // ==============================================
  // IMPORTANT: Key Points To Remember: 👇

  // 1. In the global context, "this" refers to the global object.

  // 2. Inside a function (in non-strict mode), "this" is the global object, while in strict mode, it is undefined.

  // 3. In methods, "this" refers to the object the method belongs to.

  // 4. Inside constructor functions and classes, "this" refers to the instance of the object.

  // 5. Arrow functions do not have their own "this"; they inherit it from the lexical context.

  // 6. Event listeners set "this" to the element that triggered the event.

  // 7. You can manually set "this" using bind(), call(), or apply().

  // ==============================================

  // Examples:

  // 1. Global Context (Outside of Any Function)
  console.log(this); // window

  // 2. Inside Functions (Non-Strict Mode)
  // 3. Inside Functions (Strict Mode)
  function sayHello() {
    console.log(this);
  }
  sayHello(); // undefined

  // 4. Inside Object Methods
  const person = {
    name: 'Mahmud',
    greet() {
      console.log(this.name);
    },
  };

  person.greet(); // 'Mahmud'

  // In this case, "this" refers to the person object, so this.name is 'Mahmud'.

  // 5. Constructor Functions

  // NOTE: When a function is used as a constructor (i.e., when it's invoked using the new keyword), "this" refers to the newly created object.

  function Person(name) {
    this.name = name;
  }

  const mahmud = new Person('Mahmud');
  console.log(mahmud.name); // 'Mahmud'

  // Here, "this" inside the constructor refers to the new object that is being created (mahmud).

  // 6. Arrow Functions

  // NOTE: Arrow functions behave differently when it comes to "this". Instead of having their own "this", arrow functions inherit "this" from the surrounding (lexical) context in which they were defined. This is particularly useful when working inside methods or callbacks, as it avoids confusion over the value of "this".

  const person2 = {
    name: 'Mahmud',
    greet() {
      const sayHello = () => {
        console.log(this.name);
      };
      sayHello();
    },
  };

  person2.greet(); // 'Mahmud'

  // Here, the arrow function "sayHello" uses the "this" value from the "greet" method’s context, which is person.

  // 7. Event Listeners

  // NOTE: In event handlers, "this" refers to the element that received the event.

  const button = document.querySelector('button');

  button.addEventListener('click', function () {
    console.log(this); // refers to the button element
  });

  // WARNING: However, if you use an arrow function in an event listener, "this" will refer to the lexical scope rather than the element.

  button.addEventListener('click', () => {
    console.log(this); // refers to the surrounding context (likely window in the global scope)
  });

  // 8. Using bind(), call(), and apply()

  // NOTE: You can explicitly set the value of "this" using bind(), call(), and apply():

  // NOTE: call() and apply(): These methods immediately invoke a function with a specified "this" value. The only difference is that call() accepts arguments one by one, while apply() takes them as an array.

  function greet() {
    console.log(this.name);
  }
  const user = { name: 'Mahmud' };

  greet.call(user); // 'Mahmud'
  greet.apply(user); // 'Mahmud'

  // NOTE: bind(): This method creates a new function with a specific "this" value, without immediately invoking it.

  const boundGreet = greet.bind(user);
  boundGreet(); // 'Mahmud'

  // 9. Class Methods

  // NOTE: In ES6 classes, "this" behaves like it does with constructor functions. It refers to the instance of the class.

  class PersonCl {
    constructor(name) {
      this.name = name;
    }

    greet() {
      console.log(this.name);
    }
  }

  const john = new PersonCl('John');
  john.greet(); // 'John'
}
 */

// Lecture Code

{
}

//* The Mystery of The Keyword "this"

// Chat GPT 👇
// https://chatgpt.com/share/9728e8ab-4e16-4f4e-b7fd-c1e0419b2f75

{
  // See Above Code 👆
}

//* Global Objects and "this"

// Chat GPT 👇
// https://chatgpt.com/share/43a12d25-c84e-4398-9d3c-1a5fe3f3880f

{
  // See Above Code 👆
}

//* The "Left Of The Dot" Rule

// Chat GPT 👇
// https://chatgpt.com/share/93856aa8-20f3-417d-81ae-4e4ed6c8e5d5

{
  // See Above Code 👆
}

//* "this" and Classes

// Chat GPT 👇
// https://chatgpt.com/share/9728e8ab-4e16-4f4e-b7fd-c1e0419b2f75

{
  // See Above Code 👆
}

//* The Call Method

// Chat GPT 👇
// https://chatgpt.com/share/895772d6-c42f-4480-962f-280854e1251d

/* 
{
  // NOTE: Syntax:
  //       ==>   functionName.call(thisArg, arg1, arg2, ...)

  // where,
  // functionName: The function you want to call / invoke.
  // thisArg: The value you want to set as "this" inside the function.
  // arg1, arg2, ...: The arguments you want to pass to the function.

  // ==============================================
  // IMPORTANT: When to Use call():

  // 1. Function borrowing: If you want to use a function from one object on another object.

  // 2. Setting explicit context: When you need to ensure a function runs with a particular "this" value.

  // 3. Passing arguments: When you want to pass arguments individually and not as an array (use call() over apply()).
  // ==============================================

  {
    // Example 1: Using call() to Set "this"

    // Here’s an example of using call() to invoke a function with a different "this" context.

    const person1 = {
      name: 'Alice',
      greet() {
        console.log(`Hello, my name is ${this.name}`);
      },
    };

    const person2 = {
      name: 'Bob',
    };

    // Use greet method of person1, but change the context of person2
    person1.greet.call(person2); // Hello, my name is Bob

    // In this example, the "greet" function is defined inside the "person1" object. By default, the "this" value inside the "greet" method refers to "person1". However, by using call(), we explicitly set "this" to refer to "person2", which changes the behavior of the function when invoked.
  }

  {
    // Example 2: Borrowing a Method Using call()

    // You can also use the call() method to borrow functions from one object and use them with another object.

    const person1 = {
      fullName() {
        return this.firstName + ' ' + this.lastName;
      },
    };

    const person2 = {
      firstName: 'John',
      lastName: 'Doe',
    };

    // Borrow the fullName method from person1 for person2
    console.log(person1.fullName.call(person2)); // John Doe

    // Here, the "fullName()" method is defined for "person1", but we use it for "person2" by calling "person1.fullName.call(person2)". The "this" context is set to "person2", so it uses person2's properties.
  }

  {
    // Example 3: Passing Arguments with call()

    function introduce(age, city) {
      console.log(
        `Hello, my name is ${this.name}. I am ${age} years old and I live in ${city}.`
      );
    }

    const person = {
      name: 'Charlie',
    };

    // Call the introduce function with specific arguments and set this to person
    introduce.call(person, 25, 'New York');
    // Output: Hello, my name is Charlie. I am 25 years old and I live in New York.

    // In this example, the "introduce" function is invoked with "person" as its "this" value and also with two arguments ("age" and "city"). The call() method passes these arguments in a comma-separated list after the "thisArg".
  }
}
 */

//* The Apply Method

// Chat GPT 👇
// https://chatgpt.com/share/8e3aab39-fe22-4e94-98d3-c6f92f9a58d5

/* 
{
  // NOTE: Syntax:
  //       ==>   functionName.apply(thisArg, [argsArray])

  // where,
  // functionName: The function you want to call / invoke.

  // thisArg: This refers to the value you want to set as "this" inside the function you're calling. It determines the context in which the function will execute. You can pass any object here, or even null or undefined (in strict mode, null/undefined will be passed as it is; in non-strict mode, they'll default to the global object, such as window in browsers).

  // argsArray: This is an array or array-like object that contains the arguments you want to pass to the function when it's called. If no arguments are required, you can pass an empty array or null.

  // ==============================================
  // IMPORTANT: Why Use apply() Instead of Direct Function Calls?
  // 1. Dynamic Arguments: If you have arguments in an array or array-like structure, "apply()" allows you to pass them all at once, without needing to explicitly unpack them.

  // 2. Changing Context ("this"): It allows you to run a function in the context of any object by setting a different "this" value.

  // 3. Borrowing Methods: You can use it to borrow methods from one object and apply them to another, which can be useful for code reuse.
  // ==============================================

  {
    // Example 1: Basic Usage
    function greet(name, age) {
      console.log(`Hello, my name is ${name} and Iam ${age} years old`);
    }

    greet.apply(null, ['Mahmud', 25]); // Hello, my name is Mahmud and I am 25 years old.

    // Explanation:

    // The greet function takes two arguments: name and age.
    // The apply() method allows you to call greet and pass null for thisArg (since this isn't needed here), and an array ["Mahmud", 25] for the arguments.
  }

  {
    // Example 2: Using apply() to Borrow Methods

    // You can use apply() to "borrow" methods from one object and apply them to another.

    const person1 = {
      fullName() {
        return this.firstName + ' ' + this.lastName;
      },
    };

    const person2 = {
      firstName: 'John',
      lastName: 'Doe',
    };

    console.log(person1.fullName.apply(person2)); // John Doe

    // Explanation:

    // Here, "person1" has a method "fullName".
    // "apply()" is used to call "person1.fullName()" with "person2" as the "this" context.
    // As a result, it outputs the full name based on person2's properties.
  }

  {
    // Difference Between apply() and call()

    function introduce(name, age) {
      console.log(`Hello, I'm ${name} and I'm ${age} years old.`);
    }

    introduce.call(null, 'Ali', 30); // call() takes arguments individually

    introduce.apply(null, ['Ali', 30]); // apply() takes arguments as an array
  }
}
 */

//* The Bind Method

// Chat GPT 👇
// https://chatgpt.com/share/fe61e7a8-a91e-4c32-a7e9-53bbbc0820bf

/* 
{
  // NOTE: Syntax:
  //       ==>   functionName.bind(thisArg, arg1, arg2, ...)

  // where,
  // functionName: The function you want to call / invoke.
  // thisArg: The value you want to set as "this" inside the function. This can be "null" if the function doesn't rely on "this".
  // arg1, arg2, ...: The arguments you want to pass to the function.

  // NOTE: Sometimes, you need to explicitly set the value of "this" inside a function, no matter where or how the function is called. This is where the bind() method becomes useful.

  // ==============================================
  // IMPORTANT: bind(), call(), and apply()

  // bind(): Returns a new function with the specified "this" context.

  // call(): Calls a function with a specific "this" value and arguments, but does not return a new function.

  // apply(): Similar to call(), but accepts an array of arguments.
  // ==============================================

  {
    // Example 1: Simple use of bind()

    const person = {
      firstName: 'John',
      lastName: 'Doe',
      fullName: function () {
        return this.firstName + ' ' + this.lastName;
      },
    };

    const anotherPerson = {
      firstName: 'Jane',
      lastName: 'Smith',
    };

    const boundFullName = person.fullName.bind(anotherPerson);
    console.log(boundFullName()); // "Jane Smith"

    // In this example, we use bind() to make sure that the this inside person.fullName always refers to anotherPerson. Even though person.fullName() belongs to person, the bind() method forces it to use anotherPerson as the context.
  }

  {
    // Example 2: Binding Arguments

    // NOTE: You can also use bind() to bind arguments, making the function behave as if those arguments were passed in every time it is invoked.

    function multiply(a, b) {
      return a * b;
    }

    const double = multiply.bind(null, 2); // Binding the first argument to 2
    console.log(double(5)); // 10
    console.log(double(10)); // 20

    // Here, we create a new function double by binding multiply and setting a = 2. When we call double(5), it behaves as if we're calling multiply(2, 5).
  }

  {
    // Example 3: Using bind() in Event Handlers

    const button = document.querySelector('button');

    const user = {
      name: 'Mahmud',
      showName() {
        console.log(this.name);
      },
    };

    button.addEventListener('click', user.showName.bind(user)); // Ensures 'this' refers to the 'user' object
    button.addEventListener('click', () => user.showName()); // Modern approach

    // In this example, without using bind(), this inside showName would refer to the button element, because it is the element that triggered the event. By using bind(user), we ensure that this always refers to the user object.
  }

  {
    //* bind(), call(), and apply()

    function greet(greeting, punctuation) {
      console.log(greeting + ' ' + this.name + punctuation);
    }

    const person = { name: 'Mahmud' };

    greet.call(person, 'Hello', '!'); // "Hello Mahmud!"
    greet.apply(person, ['Hi', '.']); // "Hi Mahmud."
    const boundGreet = greet.bind(person, 'Salam', '?');
    boundGreet(); // "Salam Mahmud?"
  }
}
 */

//* Binding Arguments

// Chat GPT 👇
// https://chatgpt.com/share/12a8d983-b8b7-42ce-a23d-d435fa2ca5bc

/* 
{
  // Example: Binding Arguments

  // NOTE: You can use bind() to bind arguments, making the function behave as if those arguments were passed in every time it is invoked.

  function multiply(a, b) {
    return a * b;
  }

  const double = multiply.bind(null, 2); // Binding the first argument to 2
  console.log(double(5)); // 10
  console.log(double(10)); // 20

  // In this example:

  // "multiply.bind(null, 2)" creates a new function "double" where "a" is always "2". When you call "double(5)", it is equivalent to calling "multiply(2, 5)", and similarly for other calls.

  // You can bind multiple arguments as well:

  const tripleAndAdd = multiply.bind(null, 3, 5);
  console.log(tripleAndAdd()); // 15 (since both arguments are bound)

  // In this case, both arguments are bound, so calling "tripleAndAdd()" doesn't require any further arguments.

  // Use Cases of Binding Arguments

  // 1. Partial Function Application: Binding allows for creating partially applied functions, where some of the arguments are fixed, but the rest can be provided later. This is a common functional programming pattern.

  // 2. Currying: Binding can be used as a way to implement currying, where a function with multiple arguments is transformed into a series of functions that each take a single argument.

  function add(a) {
    return function (b) {
      return a + b;
    };
  }

  const add5 = add(5); // Partially applies 5
  console.log(add5(10)); // Output: 15
}
 */

//* Bind With Event Listeners

// Chat GPT 👇
// https://chatgpt.com/share/da4b07a9-fc53-470b-acfc-77f9856704d8

/* 
{
  // ==============================================
  // IMPORTANT: Key Points:

  // Event Listeners and "this": Inside event listeners, the "this" keyword typically refers to the element that triggered the event, not necessarily the object containing the function.

  // Using "bind()": The "bind()" method allows you to bind the correct "this" context to the function, ensuring that "this" inside the event listener points to the right object.

  // Important for Callbacks: When passing object methods as callbacks (e.g., to "addEventListener"), always consider using "bind()" to avoid losing the correct "this" reference.
  // ==============================================

  // Example 1: Event Listeners and "this"
  const obj = {
    name: 'Mahmud',
    greet() {
      console.log(`Hello, ${this.name}`);
    },
  };

  const button = document.querySelector('button');
  button.addEventListener('click', obj.greet.bind(obj)); // Corrected!
  button.addEventListener('click', () => obj.greet()); // Modern approach

  // Here, "obj.greet.bind(obj)" returns a new function where "this" is always bound to "obj", no matter where it is called. Now, when the button is clicked, the output will correctly be "Hello, Mahmud".

  // Example 2: Passing Arguments with "bind()"
  const obj2 = {
    name: 'Mahmud',
    greet(greeting) {
      console.log(greeting + ' ' + this.name);
    },
  };

  const button2 = document.querySelector('button');
  button2.addEventListener('click', obj2.greet.bind(obj2, 'Hello')); // Passing argument!
  button2.addEventListener('click', obj2.greet('Hello')); // Modern approach

  // In this case, the event listener will always greet with the word "Hello", even though it’s attached to the button. So when you click the button, it will log: "Hello, Mahmud".
}
 */

//* Bind With Timers

// Chat GPT 👇
// https://chatgpt.com/share/5dc6f9d1-51af-4991-8c2e-9f83f1dddeae

/* 
{
  // ==============================================
  // IMPORTANT: Key Points:

  // 1. "this" Behavior: When using timers, "this" does not automatically refer to the object that owns the method. Instead, it defaults to the global object ("window" in browsers) or "undefined" in strict mode.

  // 2. "bind()" Solution: The "bind()" method is used to explicitly set the value of "this", ensuring that the function runs in the correct context.

  // 3. Common Use: "bind()" is especially helpful when passing methods as callbacks or arguments to functions like "setTimeout()" or "setInterval()".

  // ==============================================

  {
    // Basic Example of bind():
    const person = {
      name: 'Alice',
      greet() {
        console.log(`Hello, my name is ${this.name}`);
      },
    };

    const greetFn = person.greet;
    // greetFn(); // 🔴 Undefined, since `this` is not bound to `person`

    // Here, calling greetFn() does not work as expected because "this" loses its reference to the "person" object when the method is stored in a variable.

    // ✅ However, using "bind()" ensures that "this" always refers to the "person" object:
    const boundGreetFn = person.greet.bind(person);
    boundGreetFn(); // "Hello, my name is Alice"
  }

  {
    // Bind with "setTimeout":
    const person = {
      name: 'Alice',
      greet() {
        console.log(`My name is ${this.name}`);
      },
    };

    // 🔴 Without `bind()`, `this` is undefined in the `greet` method
    setTimeout(person.greet, 1000); // "My name is undefined"

    //✅ With `bind()`, `this` is bound to `person`
    setTimeout(person.greet.bind(person), 1000); // "My name is Alice"
    setTimeout(() => person.greet(), 1000); // Modern approach

    // In the first "setTimeout", the function loses its context when passed to the timer. The second "setTimeout" ensures the "greet" function is called with the correct "this" (which is bound to person).
  }

  {
    // Bind with "setInterval":
    const counter = {
      count: 0,
      increment() {
        this.count++;
        console.log(this.count);
      },
    };

    // 🔴 Without `bind()`, `this` is undefined
    // setInterval(counter.increment, 1000); // NaN (since `this.count` is undefined)

    // ✅ With `bind()`, `this` refers to `counter`
    setInterval(counter.increment.bind(counter), 1000); // Output: 1, 2, 3, 4, ...
    setInterval(() => counter.increment(), 1000); // Modern approach
  }
}
 */

//* Arrow Functions and This

// Chat GPT 👇
// https://chatgpt.com/share/89c8c723-d539-4509-8005-89ca8dd6ba8b

/* 
{
  // ==============================================
  // IMPORTANT: Key Points:

  // Arrow functions do not have their own `this`. They inherit `this` from the surrounding (or parent) scope.

  // Arrow functions do not have `arguments`, `super`, or `new.target` bindings.

  // They are not suitable for methods in objects because methods often rely on the dynamic `this` that refers to the object itself.

  // Arrow functions are often used in callbacks, event handlers, and functional programming, where preserving the outer `this` is needed.

  // ==============================================

  // Use Case: Arrow Functions in Callbacks

  function Timer() {
    this.seconds = 0;

    setInterval(() => {
      // 'this' refers to the Timer instance because arrow functions inherit 'this' from the lexical scope
      this.seconds++;
      console.log(this.seconds);
    }, 1000);
  }
  // new Timer();

  // Here, the arrow function inherits `this` from the `Timer` constructor, so `this.seconds++` works as expected.
}
 */
