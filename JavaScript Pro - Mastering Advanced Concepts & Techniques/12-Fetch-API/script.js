'use strict';

//* The Basics of Fetch

// ChatGPT 👇

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

//* Error Handling With Fetch

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Sending Request Headers With Fetch

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* POST Requests With Fetch

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Uploading Files With Fetch

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}
