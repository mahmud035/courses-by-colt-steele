'use strict';

//* Working With Float Imprecision

// Chat GPT 👇

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
