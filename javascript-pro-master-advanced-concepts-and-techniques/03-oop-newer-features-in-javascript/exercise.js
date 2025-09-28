'use strict';

//* Getters and Setters exercise

// Instructions

/*
Create a class `UserProfile` that encapsulates a user's profile information.

This class should have fields for `username`, `email`, and `birthdate`. Use getters and setters when creating these fields. Use setters to validate that the `username` is a non-empty string, the `email` includes an '@' symbol, and the `birthdate` is a valid date string.

If the `username` is an empty string or not a string - throw an error with the message of 'Invalid username.'

If the `email` does not include a @ character - throw an error with the message of 'Invalid email.'

If the `birthdate` is not a valid date string, throw an error with the message of 'Invalid birthdate.' - Note that the valid expected date string format is YYYY-MM-DD . For example, '1990-12-31' is a valid date string.

Make sure to also use the setters that you write (with the implemented validations) in the constructor function of the class, so it also validates the fields when the object is initially created from the class (i.e., when the constructor function is initially executed).
*/

/**
 * UserProfile class that encapsulates user profile information
 * with validation for username, email, and birthdate fields.
 */

class UserProfile {
  #username;
  #email;
  #birthdate;

  /**
   * Creates a UserProfile instance
   * @param {string} username - Non-empty string username
   * @param {string} email - Valid email address with @ symbol
   * @param {string} birthdate - Valid date string in YYYY-MM-DD format
   */

  constructor(username, email, birthdate) {
    // Use setters for validation as required by exercise
    this.username = username;
    this.email = email;
    this.birthdate = birthdate;
  }

  // Getters
  get username() {
    return this.#username;
  }

  get email() {
    return this.#email;
  }

  get birthdate() {
    return this.#birthdate;
  }

  // Setters with validation
  set username(value) {
    if (!this.#isValidUsername(value)) throw new Error('Invalid username');
    this.#username = value;
  }

  set email(value) {
    if (!this.#isValidEmail(value)) throw new Error('Invalid email');
    this.#email = value;
  }

  set birthdate(value) {
    if (!this.#isValidBirthdate(value)) throw new Error('Invalid birthdate');
    this.#birthdate = value;
  }

  // Private validation methods
  #isValidUsername(username) {
    return typeof username === 'string' && username.trim().length > 0;
  }

  #isValidEmail(email) {
    return typeof email === 'string' && email.includes('@');
  }

  #isValidBirthdate(dateString) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(dateString);
  }
}

const jonas = new UserProfile('jonas', 'jonas@gmail.com', '1990-12-31');
console.log(jonas);

// Test validation
// jonas.username = ''; // Would throw: Invalid username.
// jonas.email = 'invalid-email'; // Would throw: Invalid email.
// jonas.birthdate = '20-02-30'; // Would throw: Invalid birthdate.
