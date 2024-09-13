'use strict';

//* Callbacks: Our Good Friend

// Chat GPT 👇
// https://chatgpt.com/share/a953c099-1589-4bd3-bccd-82ba8e3f28e3

/* 
{
  // NOTE: Why Callbacks are Important
  // JavaScript is asynchronous by nature, especially when dealing with operations that take time, like making API calls or reading from a database. Without callbacks, these operations would block other code from running until they’re finished, making the app unresponsive. Callbacks ensure the smooth execution of such tasks by allowing the code to continue running and performing the operation only when the task is completed.

  {
    // Anatomy of a Callback

    function fetchData(callback) {
      console.log('Fetching data from server...');

      // Simulate a server call with a delay using setTimeout
      setTimeout(() => {
        console.log('Data fetched successfully.');

        // Once data is fetched, execute the callback
        callback();
      }, 2000); // Simulates 2 seconds delay
    }

    // This is the callback function
    function processData() {
      console.log('Processing the fetched data...');
    }

    // Calling `fetchData` and passing `processData` as a callback
    fetchData(processData);
  }
}
 */

//* Callback Hell & The Pyramid of Doom

// Chat GPT 👇
// https://chatgpt.com/share/38bfd2a9-514c-4ff5-a3b4-92805b13cded

/* 
{
  {
    // 1. Callback Hell:
    //
    // doSomething((result) => {
    //   doSomethingElse(result, (newResult) => {
    //     doMore(newResult, (finalResult) => {
    //       doFinalTask(finalResult, () => {
    //         console.log('All tasks complete!');
    //       });
    //     });
    //   });
    // });
    //
    // The nested structure makes the code:
    // Hard to read
    // Hard to maintain
    // Hard to handle errors
  }

  {
    // 2. The Pyramid of Doom:
    //
    // doSomething((result) => {
    //   doSomethingElse(result, (newResult) => {
    //     doMore(newResult, (finalResult) => {
    //       doFinalTask(finalResult, () => {
    //         console.log('All tasks complete!');
    //       });
    //     });
    //   });
    // });
    //
    // This pyramid shape makes the code:
    // Visually unappealing
    // Challenging to debug
  }

  // Solutions to Callback Hell

  {
    // 3. Async/Await:

    // NOTE: Async/await, introduced in ES6, simplifies the handling of asynchronous code by making it look like synchronous code, without the need for chaining.

    const runTasks = async () => {
      try {
        const result = await doSomething();
        const newResult = await doSomethingElse(result);
        const finalResult = await DOMPointReadOnly(newResult);
        await doFinalTask(finalResult);
      } catch (err) {
        console.error(err);
      }
    };

    // IMPORTANT: This approach makes the code more readable and maintainable while providing cleaner error handling using `try-catch` blocks.
  }
}
 */

//* The Basics of Promises

// Chat GPT 👇
// https://chatgpt.com/share/66e43567-de84-800f-a347-2a1f7a8ebb7b

/* 
{
  // NOTE: A Promise in JavaScript represents an operation that hasn't completed yet but is expected to be completed in the future. It’s essentially a placeholder for the result of an asynchronous operation.

  {
    // Here's how a Basic Promise is constructed:

    const myPromise = new Promise((resolve, reject) => {
      let success = true; // Simulate success or failure

      if (success) {
        resolve('The operation was successful');
      } else {
        reject('There was an error during the operation');
      }
    });

    // How to Consume a Promise
    myPromise
      .then((data) => console.log('Success:', data))
      .catch((error) => console.log('Error:', error))
      .finally(() => console.log('This code runs no matter what'));
  }

  {
    // Real-World Example: Fetching Data from an API

    const fetchData = new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { user: 'Mahmud', age: 25 };
        let success = true; // Simulate success or failure

        if (success) {
          resolve(data);
        } else {
          reject('Failed to fetch data');
        }
      }, 2000);
    });

    // Consume the Promise
    fetchData
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    // In this case, after a delay of 2 seconds, the promise resolves (successfully returns) with the data. If something went wrong (i.e., `success` was `false`), it would reject and throw an error.
  }

  {
    // Chaining Promises

    // NOTE: You can chain multiple `.then()` calls. Each `.then()` can return a new promise, allowing you to create a sequence of asynchronous tasks.

    const firstPromise = new Promise((resolve) => resolve('First step done'));

    firstPromise
      .then((data) => {
        console.log(data); // First step done
        return `Second step done`;
      })
      .then((data) => {
        console.log(data); // Second step done
        return 'Third step done';
      })
      .then((data) => {
        console.log(data); // Third step done
        return 'Fourth step done';
      })
      .then((data) => {
        console.log(data); // Fourth step done
      });

    // IMPORTANT: Each `.then()` waits for the previous promise to resolve before executing.
  }
}
 */

//* Using .then() and .catch()

// Chat GPT 👇
// https://chatgpt.com/share/66e43cab-b6e0-800f-b4fa-a93b420bb30c

{
  // See above code 👆
  //
  // NOTE: Understanding Promises:
  // A Promise in JavaScript can be in one of three states:
  //
  // 1. Pending: The operation hasn't completed yet.
  // 2. Fulfilled (Resolved): The operation completed successfully.
  // 3. Rejected: The operation failed.
  //
  // ==============================================
  // IMPORTANT: Key Points:
  //
  // 1. `.then()` is for handling successful completion (resolved state).
  // 2. `.catch()` is for handling failures (rejected state).
  // 3. Both can be chained together to handle complex asynchronous operations.
  // 4. Errors in `.then()` automatically propagate to `.catch()`.
  //
  // ==============================================
}

//* Promise Chaining To Flatten Code

// Chat GPT 👇
// https://chatgpt.com/share/66e443a8-b224-800f-9416-2eb8fc9512c2

{
  // What is Promise Chaining?
  //
  // NOTE: Promise chaining is the process of using multiple `.then()` methods to handle the result of promises in sequence. Each `.then()` returns a new promise, and the next `.then()` in the chain will only be executed after the promise returned from the previous `.then()` is resolved.
  //
  // NOTE: Key Points of Promise Chaining:
  //
  // 1. Returning Promises: Each `.then()` returns a new promise, so the next `.then()` in the chain waits for the previous one to resolve. If you don’t return anything, the next `.then()` will be called with `undefined`.
  //
  // 2. Error Handling: You can add a single `.catch()` at the end of the chain to handle errors from any of the promises. This prevents the need to handle errors for each individual step.
  //
  // 3. Chaining Simplifies Code: Promise chaining helps simplify code by avoiding deep nesting. The structure becomes flat and easier to follow.
}

//* Error Handling With Promises

// Chat GPT 👇
// https://chatgpt.com/share/66e44a52-b2c0-800f-8857-1380a35923ab

{
}
