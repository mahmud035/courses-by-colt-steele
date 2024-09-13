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
