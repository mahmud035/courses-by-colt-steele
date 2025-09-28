'use strict';

//* LocalStorage Basics

// ChatGPT 👇
// https://chatgpt.com/share/66f82d1f-b95c-800f-91ef-a29465e4891c

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  const user = {
    name: 'Mahmud',
    age: 25,
    country: 'Bangladesh',
  };

  {
    // 5. Storing and Retrieving Complex Data (Objects/Arrays)

    // Storing an object
    localStorage.setItem('user', JSON.stringify(user));

    // Retrieving the object
    const retrievedUser = JSON.parse(localStorage.getItem('user'));

    console.log(retrievedUser);

    // Clear all items
    localStorage.clear();
  }

  {
    // 6. Checking if a Key Exists in localStorage

    if (localStorage.getItem('user') !== null) {
      console.log('User exist');
    } else {
      console.log('User does not exist!');
    }
  }
}
 */

//* LocalStorage With Complex Objects

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f82d1f-b95c-800f-91ef-a29465e4891c

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  {
    // Detailed Example: Storing and Retrieving a Complex Object

    let user = {
      name: 'Mahmud',
      age: 25,
      country: 'Bangladesh',
      skills: ['JavaScript', 'React', 'NEXT.js'],
    };

    // Storing an object
    localStorage.setItem('user', JSON.stringify(user));

    // Retrieving the object
    const retrievedUser = JSON.parse(localStorage.getItem('user'));

    console.log(retrievedUser);

    // Clear all items
    localStorage.clear();
  }

  {
    // Storing and Retrieving an Array of Objects

    const users = [
      { name: 'Mahmud', age: 25, country: 'Bangladesh' },
      { name: 'Ahmed', age: 30, country: 'Pakistan' },
      { name: 'Aisha', age: 22, country: 'Egypt' },
    ];

    // Storing an array
    localStorage.setItem('users', JSON.stringify(users));

    // Retrieving the array
    const retrievedUsers = JSON.parse(localStorage.getItem('users'));

    console.log(retrievedUsers);

    // Clear all items
    localStorage.clear();
  }
}
 */

//* What Should & Should Not Go In LocalStorage

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f82d1f-b95c-800f-91ef-a29465e4891c

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Creating a DarkMode Toggle With LocalStorage

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f82d1f-b95c-800f-91ef-a29465e4891c

{
  // TODO: ✅ Read ChatGPT's Article.
  //
  // 👉 See Dark Mode Toggle Folder
}

//* LocalStorage Notes App Demo

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f82d1f-b95c-800f-91ef-a29465e4891c

{
  // TODO: ✅ Read ChatGPT's Article.
  //
  // 👉 See Notes App LocalStorage Folder
}

//* Syncing Tabs With The Storage Event

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f82d1f-b95c-800f-91ef-a29465e4891c

{
  // TODO: ✅ Read ChatGPT's Article.
  //
  // 👉 See Notes App LocalStorage Folder
}

//* SessionStorage Basics

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f82d1f-b95c-800f-91ef-a29465e4891c

/* 
{
  // TODO: ✅ Read ChatGPT's Article.

  {
    // 1. Storing Data in sessionStorage

    // Storing a simple key-value pair
    sessionStorage.setItem('userName', 'Mahmud');

    // Retrieving the stored value using the key
    const userName = sessionStorage.getItem('userName');

    // Storing an object in sessionStorage
    const user = {
      name: 'Mahmud',
      age: 25,
      country: 'Bangladesh',
    };

    sessionStorage.setItem('user', JSON.stringify(user));

    // Retrieving the object
    const storedUser = JSON.parse(sessionStorage.getItem('user'));

    // Clear all sessionStorage data
    sessionStorage.clear();
  }
}
 */

//* Session Storage Form Demo

// ChatGPT 👇
// Same as above 👆 https://chatgpt.com/share/66f82d1f-b95c-800f-91ef-a29465e4891c

{
  // TODO: ✅ Read ChatGPT's Article.
  //
  // 👉 See Form SessionStorage Folder
}
