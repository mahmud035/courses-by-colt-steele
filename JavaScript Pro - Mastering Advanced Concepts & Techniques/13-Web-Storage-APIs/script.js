'use strict';

//* LocalStorage Basics

// ChatGPT 👇

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
// Same as above 👆

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

    let users = [
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
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Creating a DarkMode Toggle With LocalStorage

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* LocalStorage Notes App Demo

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Syncing Tabs With The Storage Event

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* SessionStorage Basics

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}

//* Session Storage Form Demo

// ChatGPT 👇
// Same as above 👆

{
  // TODO: ✅ Read ChatGPT's Article.
}
