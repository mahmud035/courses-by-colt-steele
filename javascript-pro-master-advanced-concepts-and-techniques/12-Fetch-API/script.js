'use strict';

//* The Basics of Fetch

// ChatGPT 👇
// https://chatgpt.com/share/66f79ed1-44c4-800f-bcbd-981bd0d61409

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  {
    //* 6. TODO: Using `async`/`await` with `fetch()`

    // IMPORTANT: Using `async`/`await` makes handling promises with `fetch()` simpler and more readable.

    const getPost = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/3');

        if (!res.ok) throw new Error(`Error: ${response.status}`);

        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    getPost();
  }

  {
    // 2. Making a Basic GET Request

    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        if (!res.ok) throw new Error('Network res was not OK');
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  {
    // 4. Making a POST Request

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  {
    // 5. Handling HTTP Status Codes

    fetch('https://jsonplaceholder.typicode.com/posts/2')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        return res.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  {
    // 7. Setting Headers

    fetch('https://jsonplaceholder.typicode.com/posts/4', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer YOUR_TOKEN',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  {
    // 9. Aborting a Fetch Request

    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://jsonplaceholder.typicode.com/posts/5', { signal })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => {
        if (error.name === 'AbortError') console.log('Fetch aborted');
        else console.error('Error:', error);
      });

    // Abort the request after 100ms (👇 change this value)
    setTimeout(() => controller.abort(), 100);
  }
}
 */

//* Error Handling With Fetch

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f79ed1-44c4-800f-bcbd-981bd0d61409

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  {
    //* 5. TODO: Using `async`/`await` for Error Handling

    // IMPORTANT: Using `async`/`await` syntax can make your code cleaner and more readable, especially when handling errors. Here's how to handle errors in an `async` function:

    const fetchPost = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        if (!res.ok) throw new Error(`Status: ${res.status}`);

        const data = await res.json();
        console.log(data);
      } catch (error) {
        if (error instanceof SyntaxError) {
          console.error(`Invalid JSON response: ${error.message}`);
        } else {
          console.error(`Fetch failed: ${error.message}`);
        }
      }
    };

    fetchPost();
  }

  {
    // 1. Basic Error Handling

    fetch('https://jsonplaceholder.typicode.com/posts/2')
      .then((res) => {
        if (!res.ok) throw new Error(`Status: ${res.status}`);
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  {
    // 3. Custom Error Messages Based on Status Codes

    fetch('https://jsonplaceholder.typicode.com/posts/3')
      .then((res) => {
        if (!res.ok) {
          // Create custom error messages for different status codes
          if (res.status === 404) throw new Error('Resource not found (404)');
          if (res.status === 500)
            throw new Error('Internal Server error (500)');
          else throw new Error(`Status: ${res.status}`);
        }

        return res.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  {
    // 4. Handling Parsing Errors

    // NOTE: Sometimes, the server might return an invalid response or something that isn't valid JSON. In such cases, trying to parse the response as JSON using `res.json()` will throw an error, which needs to be handled.

    fetch('https://jsonplaceholder.typicode.com/posts/4')
      .then((res) => {
        if (!res.ok) throw new Error(`Status: ${res.status}`);
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((error) => {
        if (error instanceof SyntaxError) {
          console.error(`Response was not valid JSON: ${error.message}`);
        } else {
          console.error(`Something went wrong: ${error.message}`);
        }
      });
  }

  {
    // 6. Using `AbortController` to Abort Requests

    // IMPORTANT: Another important aspect of error handling is dealing with scenarios where a request needs to be aborted (e.g., 👉 when a user navigates away from a page before the response is received). You can use the AbortController API for this purpose.

    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://jsonplaceholder.typicode.com/posts/6', { signal })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => {
        if (error.name === 'AbortError')
          console.log('Fetch request was aborted');
        else console.error('Fetch failed', error.message);
      });

    // Abort the request after 100ms (👇 change this value)
    setTimeout(() => controller.abort(), 100);
  }

  {
    // 7. Handling CORS Errors

    fetch('https://jsonplaceholder.typicode.com/posts/7')
      .then((res) => {
        if (!res.ok) throw new Error(`Status: ${res.status}`);
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((error) => {
        if (error.message?.includes('CORS'))
          console.error('CORS error occurred:', error.message);
        else console.error('Fetch failed', error.message);
      });
  }
}
 */

//* Sending Request Headers With Fetch

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f79ed1-44c4-800f-bcbd-981bd0d61409

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* POST Requests With Fetch

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f79ed1-44c4-800f-bcbd-981bd0d61409

{
  // TODO: ✅ Read ChatGPT's Article.

  const createPost = async () => {
    const newPost = { title: 'foo', body: 'bar', userId: 1 };

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (!res.ok) throw new Error(`Status: ${res.status}`);

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  // createPost();
}

//* Uploading Files With Fetch (Upload image to "Imgbb")

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f79ed1-44c4-800f-bcbd-981bd0d61409

{
  // TODO: ✅ Read ChatGPT's Article.

  // NOTE: Uploading image to "imgbb" works perfectly 👇

  const form = document.getElementById('uploadForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const image = fileInput.files[0]; // Get the selected image

    if (!image) return alert('🔴 No image selected!');
    if (image.size > 1 * 1024 * 1024) return alert('🔴 Image is too large!'); // 1MB limit

    const formData = new FormData(); // Create a FormData object
    formData.append('image', image);

    uploadImage(formData);
  });

  const uploadImage = async (formData) => {
    const API_KEY = 'eadbdfb69d7a4e7d6bd0860c71ae874b';

    try {
      const res = await fetch(`https://api.imgbb.com/1/upload?key=${API_KEY}`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error(`Status: ${res.status}`);

      const data = await res.json();

      if (data.success) alert('✅ Image Uploaded Successfully!');
    } catch (error) {
      console.error(error.message);
    }
  };
}
