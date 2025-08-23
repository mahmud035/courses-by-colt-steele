'use strict';

//* Working With Float Imprecision

// Chat GPT 👇
// https://chatgpt.com/share/66e829b3-5bc8-800f-bd4a-fc56264cd935

/* 
{
  // TODO: ✅ Read Chat GPT's Article.

  // Classic example:
  console.log(0.1 + 0.2); // Expected 0.3, but returns 0.30000000000000004

  // ✅ Dealing with Float Imprecision

  // Round numbers using `toFixed()` or `toPrecision()`

  let result = Number((0.1 + 0.2).toFixed(2));

  console.log(result); // 0.30 (number)
}
 */

//* BigInt() and Really Large Numbers

// Chat GPT 👇
// Same as above 👆 https://chatgpt.com/share/66e829b3-5bc8-800f-bd4a-fc56264cd935

/* 
{
  // TODO: ✅ Read Chat GPT's Article.

  console.log(Number.MAX_SAFE_INTEGER);
  console.log(Number.MIN_SAFE_INTEGER);

  // Why Do We Need BigInt?

  // NOTE: JavaScript's `Number` type cannot represent integers beyond a certain range accurately. For example:

  console.log(9007199254740991 + 1); // 9007199254740992 (correct)
  console.log(9007199254740991 + 2); // 9007199254740992 (incorrect)

  // The result is wrong because JavaScript loses precision with numbers larger than `Number.MAX_SAFE_INTEGER`.

  // ✅ To solve this problem, `BigInt` was introduced, allowing JavaScript to represent integers that are arbitrarily large, beyond the limit of `Number`.

  {
    // Creating BigInt Values

    // There are two ways to create `BigInt` values:

    // 1. By appending `n` to the end of an integer:
    const largeNumber = 1234567890123456789012345678901234567890n;

    // 2. Using the `BigInt()` constructor:
    const bigIntFromConstructor = BigInt(
      '1234567890123456789012345678901234567890'
    );
  }

  {
    // BigInt Arithmetic

    // Example of Basic Arithmetic Operations:

    let a = 1234567890123456789012345678901234567890n;
    let b = 9876543210987654321098765432109876543210n;

    let sum = a + b; // Addition
    let difference = b - a; // Subtraction
    let product = a * b; // Multiplication
    let quotient = b / a; // Division (truncates decimal part)
    let power = a ** 2n; // Exponentiation

    console.log(sum); // 11111111101111111110111111110111111110100n
    console.log(difference); // 8641975320864197532086419753208641975320n
    console.log(product); // 12193263135650053159106843182549931986532738343402811110058299052100n
    console.log(quotient); // 8n (note: division truncates the decimal part)
    console.log(power); // 1524157875323883675049535156254618862217894951221775715159190430900n
  }
}
 */

//* isNan() vs. Number.isNaN()

// Chat GPT 👇
// Same as above 👆 https://chatgpt.com/share/66e829b3-5bc8-800f-bd4a-fc56264cd935

/* 
{
  // TODO: ✅ Read Chat GPT's Article.

  // ==============================================
  // IMPORTANT: Key Points:

  // `isNaN()`: A more lenient function that coerces the argument to a number before checking if it's `NaN`. It may give false positives because of this coercion.

  // `Number.isNaN()`: A stricter function that only returns `true` if the value is exactly `NaN`. It avoids false positives by not performing type coercion.

  // TODO: When precision is required, such as when checking for `NaN` in calculations or data validation, it's recommended to use `Number.isNaN()` for accuracy.

  // ==============================================

  {
    // Understanding `NaN` in JavaScript

    // `NaN` is a special value in JavaScript that represents the result of operations that don't produce a valid number.

    console.log(0 / 0); // NaN
    console.log(Math.sqrt(-1)); // NaN
    console.log(Number.parseInt('abc')); // NaN
  }

  {
    // `isNaN()`

    // The global `isNaN()` function tries to determine if a value is NaN. However, it first attempts to convert the value to a number and then checks if the result is NaN.

    console.log(isNaN(NaN)); // true
    console.log(isNaN(123)); // false
    console.log(isNaN('123')); // false (string is converted to number 123)
    console.log(isNaN('abc')); // true ('abc' is converted to NaN)

    // As seen above, `isNaN()` attempts to coerce non-number values into numbers before making the determination. For instance, if you pass a string, it tries to convert it to a number, and only if that conversion results in `NaN`, it will return `true`.

    // WARNING: This behavior can be problematic because it leads to false positives for certain values, like strings or other non-numeric values, that are not actually `NaN`.
  }

  {
    // ✅ `Number.isNaN()`

    // NOTE: `Number.isNaN()` was introduced in (ES6) to fix the issues associated with the global `isNaN()`. Unlike `isNaN()`, `Number.isNaN()` does not perform type coercion. It only returns true if the value is exactly `NaN`. It does not attempt to convert the value to a number first.

    console.log(Number.isNaN(NaN)); // true
    console.log(Number.isNaN(123)); // false
    console.log(Number.isNaN('123')); // false
    console.log(Number.isNaN('abc')); // false
    console.log(Number.isNaN(undefined)); // false
    console.log(Number.isNaN({})); // false
    console.log(Number.isNaN([])); // false

    // As you can see, `Number.isNaN()` strictly checks if the value is `NaN`, without any implicit type conversion. Therefore, it does not have the false positives that `isNaN()` has.
  }
}
 */

//* Post and Pre Increment: ++x vs. x++

// Chat GPT 👇
// Same as above 👆 https://chatgpt.com/share/66e829b3-5bc8-800f-bd4a-fc56264cd935

/* 
{
  // ==============================================
  // IMPORTANT: Key Points:

  // Pre-Increment (`++x`): Increments the variable first, then returns the incremented value. It is useful when you need the updated value immediately.

  // Post-Increment (`x++`): Returns the current value first, and then increments the variable. It is useful when you need to use the current value before incrementing.

  // ==============================================

  {
    // Pre-Increment (++x)

    let x = 5;
    let y = ++x; // Pre-increment

    console.log(x); // 6 (x is incremented first)
    console.log(y); // 6 (the new value of x is assigned to y)

    // Here, the value of `x` becomes `6` after the pre-increment, and the variable `y` receives the incremented value (`6`).
  }

  {
    // Post-Increment (x++)

    let x = 5;
    let y = x++; // Post-increment

    console.log(x); // 6 (x is incremented after use)
    console.log(y); // 5 (y gets the original value of x before the increment)

    // Here, `x` is first used with the value `5`, and that value is assigned to `y`. Only after this, `x` is incremented to `6`.
  }

  {
    // More Detailed Examples

    {
      let x = 5;
      console.log(++x); // 6
    }

    {
      let x = 5;
      console.log(x++); // 5
      console.log(x); // 6
    }

    {
      let x = 3;
      let y = 10 + ++x;

      console.log(y); // 14
      console.log(x); // 4
    }

    {
      let x = 3;
      let y = 10 + x++;

      console.log(y); // 13
      console.log(x); // 4
    }
  }
}
 */

//* Automatic Semicolon Insertion (ASI)

// Chat GPT 👇
// Same as above 👆 https://chatgpt.com/share/66e829b3-5bc8-800f-bd4a-fc56264cd935

{
  // TODO: ✅ Read Chat GPT's Article.
}

//* JavaScript Generator Functions

// Chat GPT 👇
// Same as above 👆 https://chatgpt.com/share/66e829b3-5bc8-800f-bd4a-fc56264cd935

/* 
{
  {
    // Example of a Simple Generator Function

    function* countUp() {
      yield 1;
      yield 2;
      yield 3;
    }

    const counter = countUp();

    console.log(counter.next().value); // 1
    console.log(counter.next().value); // 2
    console.log(counter.next().value); // 3
    console.log(counter.next().value); // undefined (iteration is complete)
  }

  {
    // Detailed Example

    function* generateSequence() {
      try {
        yield 1;
        yield 2;
        yield 3;
      } catch (e) {
        console.log('Error caught:', e);
      }

      return 'Done';
    }

    const gen = generateSequence();

    console.log(gen.next().value); // 1
    console.log(gen.next().value); // 2
    console.log(gen.throw(new Error('An error occurred')).value); // Error caught: Error: An error occurred
    console.log(gen.next().value); // Done (returns the value from the return statement)
  }
}
 */

//* When Are Generators Useful?

// Chat GPT 👇
// Same as above 👆 https://chatgpt.com/share/66e829b3-5bc8-800f-bd4a-fc56264cd935

//* The Incredibly Versatile `Array.from()` Method

// Chat GPT 👇
// Same as above 👆 https://chatgpt.com/share/66e829b3-5bc8-800f-bd4a-fc56264cd935

/* 
{
  // TODO: ✅ Read Chat GPT's Article.

  // NOTE: The `Array.from()` method in JavaScript is a highly versatile function used to create a new array instance from an array-like or iterable object. It’s a part of (ES6) and provides a flexible way to convert different types of data structures into arrays.

  // Examples

  {
    // 1. Converting Array-Like Objects

    // An array-like object is an object with a `length` property and indexed elements, but it’s not a true array. Examples include the `arguments` object inside functions and `NodeList` from DOM queries.

    function example() {
      const args = Array.from(arguments);
      console.log(args); // [1, 2, 3]
    }

    example(1, 2, 3);
  }

  {
    // 2. Converting Strings

    // Strings are iterable objects, so `Array.from()` can be used to convert a string into an array of characters.

    const str = 'hello';
    const arr = Array.from(str);
    console.log(arr); // ['h', 'e', 'l', 'l', 'o']
  }

  {
    // 3. Converting Sets

    // Sets are iterable objects that hold unique values. `Array.from()` can convert a set into an array.

    const set = new Set([1, 2, 3, 4]);
    const arr = Array.from(set);
    console.log(arr); // [1, 2, 3, 4]
  }

  {
    // 4. Using a Mapping Function

    // You can pass a mapping function to `Array.from()` to transform the elements during conversion.

    const str = '12345';
    const arr = Array.from(str, (num) => Number(num) * 2);
    console.log(arr); // [2, 4, 6, 8, 10]
  }

  {
    //* 5. Generating Arrays from a Range

    // `Array.from()` can be used to create an array of a specific length and populate it with values.

    const arr = Array.from({ length: 5 }, (_, index) => index + 1);
    console.log(arr); // [1, 2, 3, 4, 5]
  }

  {
    // 6. Using `Array.from()` with `thisArg`

    // The `thisArg` parameter can be used to provide a context for the `mapFunction`.

    function multiply(x) {
      return x * this.factor;
    }

    const obj = { factor: 2 };
    const arr = Array.from([1, 2, 3], multiply, obj);
    console.log(arr); // [2, 4, 6]
  }
}
 */
