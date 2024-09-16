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
