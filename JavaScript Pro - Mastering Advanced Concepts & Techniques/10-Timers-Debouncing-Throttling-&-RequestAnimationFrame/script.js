'use strict';

//* setTimeout

// ChatGPT 👇

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  //* Key Points

  {
    // 1. Non-blocking Nature: `setTimeout` is asynchronous and non-blocking. This means the code execution continues without waiting for the timeout to complete. Other code will keep running in the meantime, and the delayed function will be called when the time has passed.

    console.log('Start');

    setTimeout(() => {
      console.log('This is delayed');
    }, 2000);

    console.log('End');
  }

  {
    // 2. Delay is Not Guaranteed: JavaScript is single-threaded, so if other tasks are running (like a long loop or intensive computation), the function might be delayed further than the specified time because JavaScript uses an event loop and will execute the code when it becomes free.
  }

  {
    // 3. Canceling a Timeout: If you want to cancel the timeout before it occurs, you can use `clearTimeout()` with the ID returned from `setTimeout`.

    const timeoutID = setTimeout(() => {
      console.log("This won't run because the timeout is cleared");
    }, 5000);

    clearTimeout(timeoutID); // This cancels the setTimeout
  }

  {
    // 4. Passing Parameters to the Callback: You can pass arguments to the callback function through `setTimeout`:

    const greet = (name, age) => {
      console.log(`Hello ${name}, you are ${age} years old.`);
    };

    setTimeout(greet, 2000, 'Mahmud', 30);
  }

  {
    // 5. Arrow Functions and `this`

    function Person(name) {
      this.name = name;

      setTimeout(() => {
        console.log(this.name); // 'this' refers to the instance of the Person object
      }, 3000);
    }

    const person = new Person('Mahmud');
  }

  {
    // 6. Chaining with Promises: While `setTimeout` itself doesn't return a promise, you can wrap it in a `Promise` to make it easier to work with when handling asynchronous code:

    const wait = (time) => {
      return new Promise((resolve) => setTimeout(resolve, time));
    };

    wait(3000).then(() => {
      console.log('This will run after 3 seconds');
    });
  }
}
 */

//* setInterval

// ChatGPT 👇
// Same as above 👆

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  //* Key Points

  {
    // 1. Repeated Execution: Unlike `setTimeout`, which triggers a function after a single delay, `setInterval` continuously runs the specified function at regular intervals until stopped.
  }

  {
    // 2. Asynchronous Nature: Like `setTimeout`, `setInterval` is asynchronous. This means that JavaScript doesn't wait for the function to finish before continuing with other code.
  }

  {
    // 3. Clearing an Interval: To stop a `setInterval`, you need to use `clearInterval()`, passing the ID returned by `setInterval`.

    const intervalID = setInterval(() => {
      console.log('This will stop after 5 seconds.');
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalID);
    }, 5000);

    // NOTE: In this example, the `setInterval` will run every second, but after 5 seconds, `clearInterval()` is called, which stops further executions.
  }

  //* Practical Use Cases

  {
    // Regular Updates: `setInterval` is perfect for scenarios where you want to continuously update something, such as refreshing data, updating a UI element, or running real-time clocks.

    setInterval(() => {
      const now = new Date();
      console.log(now.toLocaleTimeString());
    }, 1000); // Updates the time every second
  }

  {
    // Polling: In web applications, `setInterval` is commonly used for polling, where the client repeatedly checks for new data from the server at a fixed interval.

    const fetchData = () => {
      console.log('Fetching data...');
      // Simulate AJAX call or fetch
    };

    setInterval(fetchData, 5000); // Fetch data every 5 seconds
  }
}
 */

//* clearInterval

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* clearTimeout

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.

  //* Key Points to Understand

  {
    // 1. Prevent Execution of the Function: The primary use of `clearTimeout` is to stop the function passed to `setTimeout` from executing. Once `clearTimeout` is called, the timer associated with the function is cleared, and the function will not run.

    const timeoutID = setTimeout(() => {
      console.log('This message will never appear.');
    }, 5000);

    clearTimeout(timeoutID); // Cancels the timeout
  }

  {
    // 2. It Only Works for `setTimeout`: `clearTimeout` only cancels timeouts created by `setTimeout`.
  }

  {
    // 3. Calling `clearTimeout` after the Function Has Executed: Once the timeout function has already been executed, calling `clearTimeout` has no effect because the function is already finished.

    const timeoutID = setTimeout(() => {
      console.log('This message appears after 1 second.');
    }, 1000);

    setTimeout(() => {
      clearTimeout(timeoutID); // This does nothing because the timeout has already executed
    }, 2000);
  }

  {
    // 4. Conditional Execution: You can use `clearTimeout` to create conditional logic for executing or preventing the timeout, depending on specific conditions or user actions.

    const timeoutID = setTimeout(() => {
      console.log('This message will only show if not cancelled.');
    }, 3000);

    const shouldCancel = true; // Change this to false to allow the timeout to run

    if (shouldCancel) {
      clearTimeout(timeoutID);
    }

    // NOTE: In this example, the message will only show if `shouldCancel` is `false`. If `shouldCancel` is `true`, the timeout will be canceled, and the message will never appear.
  }

  {
    // 6. Cancel Multiple Timeouts: If you have multiple timeouts, you can cancel them individually by storing each `timeoutID`. You can also create a system to cancel all timeouts if necessary.

    const timeoutID1 = setTimeout(() => {
      console.log('Timeout 1');
    }, 1000);

    const timeoutID2 = setTimeout(() => {
      console.log('Timeout 2');
    }, 2000);

    // Cancel both timeouts
    clearTimeout(timeoutID1);
    clearTimeout(timeoutID2);
  }

  //* Practical Use Cases

  {
    // IMPORTANT: 1. Debouncing User Input: A common use case is in debouncing user input in search fields, where the search function is triggered only if the user has stopped typing for a certain amount of time.

    const searchInput = document.getElementById('search-input');
    let searchTimeout;

    const performSearch = (keyword) => {
      console.log(`Searching results for "${keyword}"`);
      // Fetching search results...
    };

    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout); // Cancel the previous search timeout

      searchTimeout = setTimeout(() => {
        performSearch(e.target.value);
      }, 500); // Wait for 500ms before executing the search
    });

    // IMPORTANT: In this case, the search function is only executed when the user has stopped typing for 500 milliseconds. If the user keeps typing, the previous timeout is cleared.
  }
}

//* Debouncing

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
  // ==============================================
  // IMPORTANT: Key Points of Debouncing:
  // ==============================================
}

//* Writing a Fancy Debounce Function

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Throttling

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Building a Fancy Throttle Function

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* requestAnimationFrame Basics

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* requestAnimationFrame With Timestamps

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Scroll To Top Animation With RequestAnimationFrame

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}
