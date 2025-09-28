'use strict';

//* Ebook Exercise

// Instructions

/* 
1. Create a class named `Book` with a constructor that initializes a `title`, `author`, and `year` properties. The `title` and `author` should be strings and the `year` should be a number

2. Create a subclass named `Ebook` that extends Book.

3. The `Ebook` class should have an additional property `fileSize` which is a number and a method `download()` that returns a string with the `title` of the ebook and its `fileSize`. 
*/

/* 
{
  class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  }

  class Ebook extends Book {
    constructor(title, author, year, fileSize) {
      super(title, author, year);
      this.fileSize = fileSize;
    }

    download() {
      return `Downloading ${this.title}, size ${this.fileSize} MB...`;
    }
  }

  const ebook = new Ebook('Eloquent JavaScript', 'Marijn Haverbeke', 2024, 10);

  ebook.download(); // Downloading Eloquent JavaScript, size 10 MB...
  console.log(ebook);

  console.log(ebook instanceof Ebook); // true
  console.log(ebook instanceof Book); // true

  console.log(ebook.__proto__ === Ebook.prototype); // true
  console.log(ebook.__proto__.__proto__ === Book.prototype); // true
  console.log(ebook.__proto__.__proto__.__proto__ === Object.prototype); // true (Top of the prototype chain)
  console.log(ebook.__proto__.__proto__.__proto__.__proto__); // null
}
 */

//* ArrayUtils exercise

// Instructions

/*
Implement a class named `ArrayUtils` that cannot be instantiated and contains static methods `average` and `max`. If the class is instantiated throw an error with the message 'ArrayUtils cannot be instantiated.'

The `average` method should return the average of an array of numbers. If the array is empty, throw an error with the message 'Array cannot be empty.'

The `max` method should return the largest number from an array of numbers. You can assume you will always get passed an array of numbers
*/

/* 
{
  class ArrayUtils {
    constructor() {
      throw new Error('ArrayUtils cannot be instantiated');
    }

    static average(arr) {
      if (arr.length === 0) throw new Error('Array cannot be empty');

      const sum = arr.reduce((sum, curr) => sum + curr, 0);
      return sum / arr.length;
    }

    static max(arr) {
      return Math.max(...arr);
    }
  }

  ArrayUtils.average([1, 2, 3]); // 2
  ArrayUtils.max([1, 2, 3]); // 3
}
 */
