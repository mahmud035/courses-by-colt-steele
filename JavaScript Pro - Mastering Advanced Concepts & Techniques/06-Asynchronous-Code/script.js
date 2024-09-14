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

/* 
{
  // ==============================================
  // IMPORTANT: Best Practices:

  // 1. Always handle rejections: Make sure every promise chain has a `.catch()` at the end to handle any errors.

  // 2. Avoid unhandled rejections: If you don't catch errors, they may lead to hard-to-debug issues in the code.

  // ✅ 3. Use `async/await` with `try/catch` for readability: When possible, `async/await` is preferred for cleaner, more readable code, especially for complex promise chains.

  // 4. Graceful recovery: Implement fallback mechanisms, such as default values or retrying the operation when errors occur.

  // ==============================================

  {
    // Creating a Promise

    const myPromise = new Promise((resolve, reject) => {
      // asynchronous task
      let success = true;

      if (success) {
        resolve('Operation Successful');
      } else {
        reject('Error Occurred');
      }
    });

    // Error Handling in Promises 👇

    // There are two primary ways to handle errors in promises:

    // 1. ✅ Using `.then()` and `.catch()`:

    // NOTE: When handling promises, the `.then()` method is used to handle successful operations, and the `.catch()` method is used to catch any errors (rejected promises).

    myPromise
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    // 2. ✅ Using `async/await` with `try/catch`:

    // NOTE: Another modern way of working with promises involves the `async/await` syntax. With `async/await`, you can write asynchronous code that looks synchronous, making it easier to understand and maintain. Error handling is done using `try/catch` blocks.

    const fetchPost = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        // const data = await res.json();
        // return data;
        return res.json();
      } catch (error) {
        console.error(error);
      }
    };

    const post = await fetchPost();
    console.log(post);
  }

  {
    // Handling Errors Gracefully

    // NOTE: When working with promises, you should aim to handle errors as close as possible to where they occur. For instance, in a chain of promises, you can place `catch` blocks after individual promises to handle specific errors before they propagate up the chain:

    const myPromise = new Promise((resolve, reject) => {
      // asynchronous task
      let success = true;

      if (success) {
        resolve('Operation Successful');
      } else {
        reject('Error Occurred');
      }
    });

    myPromise
      .then((data) => {
        console.log(data);
        return anotherAsyncTask();
      })
      .catch((error) => {
        console.log('Error in first task:', error);
        return defaultValue; // Recover and continue the chain
      })
      .then((nextResult) => {
        console.log(nextResult);
      })
      .catch((error) => {
        console.log('Error in second task:', error);
      });

    // In this example, there are multiple `catch` blocks handling errors at different points. If an error occurs in the first promise, it’s caught early and the chain can continue using some recovery value (`defaultValue`).
  }

  {
    // Re-throwing Errors

    // NOTE: In some cases, you may want to catch an error, perform some logging or other side-effects, and then let the error propagate further. You can achieve this by re-throwing the error in the `catch` block.

    const myPromise = new Promise((resolve, reject) => {
      // asynchronous task
      let success = true;

      if (success) {
        resolve('Operation Successful');
      } else {
        reject('Error Occurred');
      }
    });

    myPromise
      .then((data) => {
        console.log(data);
        return anotherAsyncTask();
      })
      .catch((error) => {
        console.log('Logging the error:', error);
        throw error; // TODO: Re-throw the error to propagate it further
      })
      .catch((error) => {
        console.log('Error handled at the top level:', error);
      });
  }
}
 */

//* Async/Await Basics

// Chat GPT 👇
// https://chatgpt.com/share/66e51c44-4ef4-800f-b5c1-5c6714f73647

/* 
{
  // NOTE: JavaScript is a single-threaded, asynchronous language. To handle tasks like making API calls or reading files from a disk without blocking the execution of other code, JavaScript uses asynchronous programming techniques like callbacks, promises, and async/await.

  {
    // 1. Promises Refresher

    // Before jumping into async/await, it's essential to understand promises. A promise is an object representing the eventual completion (or failure) of an asynchronous operation.

    const myPromise = new Promise((resolve, reject) => {
      // Simulate an async task (e.g., fetching data)
      setTimeout(() => {
        const success = true;

        if (success) resolve('Data fetched successfully');
        else reject('Error fetching data');
      }, 1000);
    });

    myPromise
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  {
    // 3. Writing Async/Await Code

    // Here's how you'd rewrite the above promise example using async/await: 👇

    // Step 1: Declare an async function
    const fetchData = async () => {
      try {
        // Step 2: Use 'await' to wait for the promise to resolve
        const res = await new Promise((resolve, reject) => {
          setTimeout(() => {
            const success = true;

            if (success) resolve('Data fetched successfully');
            else reject('Error fetching data');
          }, 1000);
        });

        console.log(res);
      } catch (error) {
        // Step 3: Handle any error that might be thrown
        console.error(error);
      }
    };

    // Step 4: Call the async function
    fetchData();
  }

  {
    // IMPORTANT: Key Features of Async/Await

    //* Async Functions Always Return a Promise: When you declare a function with the `async` keyword, it `always returns a promise`, even if it seems like the function is returning something else. For example:

    const sayHello = async () => {
      return 'Hello';
    };

    const result = await sayHello();
    console.log(result); // 'Hello'

    // Here, `sayHello()` returns a promise that resolves to `Hello`.
  }

  {
    // 5. Error Handling in Async/Await

    // NOTE: Error handling with async/await is much simpler than working with promises. Instead of chaining `.catch()`, you can use a `try/catch` block.

    const fetchWithError = async () => {
      try {
        const res = await new Promise((_, reject) => {
          setTimeout(() => {
            reject('There was an error!');
          }, 1000);
        });

        console.log(res); // This won't run if there's an error
      } catch (error) {
        console.error(error); // Logs: There was an error!
      }
    };
    fetchWithError();
  }

  {
    // 6. Multiple `await` Calls

    // NOTE: If your function has multiple asynchronous operations, you can call `await` multiple times to wait for each one to complete.

    const fetchData = async () => {
      try {
        const res1 = await new Promise((resolve) =>
          setTimeout(() => resolve('Data 1'), 1000)
        );
        console.log(res1); // Logs: Data 1

        const res2 = await new Promise((resolve) =>
          setTimeout(() => resolve('Data 2'), 1000)
        );
        console.log(res2); // Logs: Data 2
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }

  {
    // 7. Parallel Execution

    // NOTE: In the previous example, the asynchronous calls happen sequentially, one after the other. However, if the tasks are independent of each other and can be executed simultaneously, you can run them in parallel using `Promise.all()`:

    const fetchParallel = async () => {
      try {
        const promise1 = new Promise((resolve) =>
          setTimeout(() => resolve('Data 1'), 1000)
        );
        const promise2 = new Promise((resolve) =>
          setTimeout(() => resolve('Data 2'), 1000)
        );

        const [res1, res2] = await Promise.all([promise1, promise2]);

        console.log(res1); // Logs: Data 1
        console.log(res2); // Logs: Data 2
      } catch (error) {
        console.error(error);
      }
    };
    fetchParallel();
  }

  {
    // 9. WARNING: Common Mistakes to Avoid

    // Not Using `await` Properly: If you forget to use `await`, the function will move on without waiting for the promise to resolve

    const fetchData = async () => {
      const res = new Promise((resolve) =>
        setTimeout(() => resolve('Data'), 1000)
      );

      console.log(res); // Logs: Promise { <pending> }
    };
    fetchData();

    // Here, `console.log(response)` prints the promise instead of the resolved value. Adding `await` will fix this issue.

    // Blocking Code: While `await` simplifies asynchronous code, overuse of it can introduce delays if you're waiting for operations that could happen simultaneously.
  }

  {
    // 10. TODO: When to Use Async/Await
    //
    // API Requests: Fetching data from APIs.
    // Database Queries: Fetching data from a database.
    // Reading/Writing Files: Performing file I/O operations.
    // Waiting for Timers: Waiting for timeouts or intervals.
  }
}
 */

//* More on Async/Await

// Chat GPT 👇
// Same link above 👆 => https://chatgpt.com/share/66e51c44-4ef4-800f-b5c1-5c6714f73647

/* 
{
  {
    // 1. The `async` Keyword: What it Does Under the Hood

    // NOTE: When you mark a function as `async`, three things happen:

    // i. The function is allowed to contain the `await` keyword.
    // ii. The function "always returns a promise", even if you don’t explicitly return one.
    // iii. If the function returns a value, JavaScript automatically wraps it in a resolved promise.

    const example = async () => {
      return 42; // This is implicitly wrapped as Promise.resolve(42)
    };

    const result = await example();
    console.log(result); // 42

    // So, an `async` function is essentially a function that returns a promise.
  }

  {
    // 2. The `await` Keyword: More Details

    // IMPORTANT: `await` keyword pauses the execution of an async function until the promise settles (either resolves or rejects). While waiting for a promise to resolve, the function's execution is paused, but the rest of the code (outside the async function) continues to run.

    const waitForData = async () => {
      console.log('Before waiting');

      const data = await new Promise((resolve) =>
        setTimeout(() => resolve('Data is ready'), 4000)
      );

      console.log(data); // This runs after 4 seconds
      console.log('After waiting');
    };

    waitForData();

    console.log('This logs immediately, before the promise resolves');

    // Here:

    // The `console.log("This logs immediately...")` statement executes immediately, before the promise is resolved, since `await` only pauses the execution inside the async function.

    // The async function pauses until the promise settles, but other parts of the program are not blocked.
  }

  {
    // 3. Handling Multiple Promises

    // NOTE: You can await multiple promises sequentially by using multiple `await` keywords in a function. However, if the promises are independent of each other and don't need to be executed one after the other, it’s better to run them concurrently using `Promise.all()`.

    const concurrentFetch = async () => {
      const promise1 = new Promise((resolve) =>
        setTimeout(() => resolve('First result'), 1000)
      );
      const promise2 = new Promise((resolve) =>
        setTimeout(() => resolve('Second result'), 1000)
      );

      const [res1, res2] = await Promise.all([promise1, promise2]);

      console.log(res1);
      console.log(res2);
    };

    concurrentFetch();
    // Takes 1 second: Both promises are running at the same time
  }

  {
    // 4. Error Handling in Depth

    // NOTE: Error handling in async/await is done using `try/catch`. If a promise is rejected, the function throws the error, and it can be caught in the `catch` block.

    const fetchDataWithErrorHandling = async () => {
      try {
        const data = await new Promise((_, reject) =>
          setTimeout(() => reject('Data fetch failed!'), 1000)
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataWithErrorHandling();

    // If an error occurs inside a promise, it will be thrown, and the `catch` block will handle it.

    // NOTE: You can also handle errors using `.catch()` instead of `try/catch`:

    const fetchWithCatch = async () => {
      const data = await new Promise((_, reject) =>
        setTimeout(() => reject('Data fetch failed!'), 1000)
      );
    };

    fetchWithCatch()
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    // This method might be preferable when you’re combining async/await with existing promise-based code.
  }

  {
    // 8. Practical Use Cases

    // API Calls with Async/Await

    // IMPORTANT: Here’s a real-world example of using `async/await` for making API requests:

    const getUserData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!res.ok) throw new Error('Network request was not OK');

        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error('Fetching user data failed:', error);
      }
    };

    getUserData();

    // This example makes an API call to get user data, and error handling is done using `try/catch`. `await` waits for the API response before moving to the next step, ensuring the `data` is fully available.
  }

  {
    // Chaining Async Functions

    // NOTE: You can chain multiple async functions where one depends on the result of the other:

    const fetchPost = async (postId) => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const post = await res.json();
      return post;
    };

    const getUserPosts = async (userId) => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      const posts = await res.json();
      return posts;
    };

    const getUserAndPosts = async (userId) => {
      const posts = await getUserPosts(userId);

      for (const post of posts) {
        const postDetails = await fetchPost(post.id);
        console.log(postDetails);
      }
    };

    // getUserAndPosts(1);
  }
} 
*/

//* Error Handling With Async Functions

// Chat GPT 👇
// Same link above 👆 => https://chatgpt.com/share/66e51c44-4ef4-800f-b5c1-5c6714f73647

{
  {
    // 1. Basic Error Handling with `try/catch`

    const fetchData = async () => {
      try {
        const res = await fetch('https://invalid-api-url.com/data');
        if (!res.ok) throw new Error('Network response was not OK');

        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error('An error occurred:', error.message);
      }
    };

    fetchData();
  }

  {
    // 2. Handling Rejected Promises

    // NOTE: Async functions always return a promise. If an error is thrown inside an async function (either explicitly or implicitly via a rejected promise), the function will return a rejected promise.

    const getData = async () => {
      try {
        throw new Error('Something went wrong');
      } catch (error) {
        console.error('Caught inside function:', error);
      }
    };

    getData();
  }

  {
    // 6. Using `finally` for Cleanup

    // NOTE: This is useful for cleanup tasks like `closing connections`, `resetting states` or `hiding a loading spinner`.

    const fetchData = async () => {
      try {
        const res = await fetch('https://invalid-api-url.com/data');
        if (!res.ok) throw new Error('Network request was not OK');

        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error('Error occurred:', error);
      } finally {
        console.log('Cleanup code run here, success or fail');
      }
    };

    fetchData();

    // Explanation:

    // The `finally` block will execute regardless of whether the promise resolves or rejects.

    // This is particularly useful for tasks that need to happen after a network request or long-running process, such as hiding a loading spinner or closing a file.
  }
}
