'use strict';

//* Optional Chaining (?.)

// Chat GPT 👇
// https://chatgpt.com/share/66e7f6f7-3c94-800f-9976-329dbfa2dc31

/* 
{
// NOTE: The Optional Chaining Operator returns `undefined` if an object is `undefined` or `null` (instead of throwing an error).

  const user = {
    name: 'Mahmud',
    address: {
      street: '123 Main St',
      city: 'Dhaka',
    },
    greet() {
      console.log(`Hi, ${this.name}`);
    },
  };

  // Use Cases of Optional Chaining:

  // 1. Accessing Properties
  console.log(user?.address?.city);

  // 2. Calling Methods
  user.greet?.();

  const users = [
    { name: 'Mahmud', age: 29 },
    null,
    { name: 'Ahmed', age: 24 },
    { name: 'Alice', age: 20 },
  ];

  // 3. Working with Arrays
  console.log(users[1]?.name); // undefined, no error
}
 */

//* Nullish Coalescing Operator (`??`)

// Chat GPT 👇
// Same link above 👆 https://chatgpt.com/share/66e7f6f7-3c94-800f-9976-329dbfa2dc31

{
  // NOTE: The `??` operator returns the first argument if it is NOT nullish (`null` or `undefined`). Otherwise it returns the second.
  //
  //
  // ✅ Read Chat GPT's Article.
}

//* Numeric Separators (_)

// Chat GPT 👇
// Same link above 👆 https://chatgpt.com/share/66e7f6f7-3c94-800f-9976-329dbfa2dc31

/* 
{
  const bigNumber = 1_00_00_00_000; // One billion
  console.log(bigNumber); // 1000000000

  const price = 99_999.99; // Readable floating-point number
  console.log(price); // 99999.99

  // Without Numeric Separators
  const distanceToMoon = 384400000; // Hard to read

  // With Numeric Separators
  const distanceToMoonReadable = 38_44_00_000; // Much clearer to read
}
 */

//* Array.prototype.at()

// Chat GPT 👇
// Same link above 👆 https://chatgpt.com/share/66e7f6f7-3c94-800f-9976-329dbfa2dc31

{
  // ✅ Read Chat GPT's Article.
}

//* String replaceAll()

// Chat GPT 👇
// Same link above 👆 https://chatgpt.com/share/66e7f6f7-3c94-800f-9976-329dbfa2dc31

{
  // ✅ Read Chat GPT's Article.
}

//* Logical OR Assignment `||=`

// Chat GPT 👇
// https://chatgpt.com/share/66e7f6f7-3c94-800f-9976-329dbfa2dc31

{
  // NOTE: The Logical OR Assignment Operator is used between two values. If the first value is `false`, the second value is assigned.
  //
  //
  // ✅ Read Chat GPT's Article.
}

//* Logical AND Assignment `&&=`

// Chat GPT 👇
// Same link above 👆 https://chatgpt.com/share/66e7f6f7-3c94-800f-9976-329dbfa2dc31

{
  // NOTE: The Logical AND Assignment Operator is used between two values. If the first value is `true`, the second value is assigned.

  // ✅ Read Chat GPT's Article.

  let value = 0;

  value ||= 100; // Logical OR Assignment: if `value` is falsy, assign 100
  console.log(value); // 100, because 0 is falsy

  value &&= 200; // Logical AND Assignment: if `value` is truthy, assign 200
  console.log(value); // No change, because `value` is now 100 (truthy)

  value ??= 300; // Nullish Coalescing Assignment: only assign if `value` is nullish
  console.log(value); // 100, no change because `value` is neither null nor undefined
}

//* Nullish Coalescing Assignment `??=`

// Chat GPT 👇
// Same link above 👆 https://chatgpt.com/share/66e7f6f7-3c94-800f-9976-329dbfa2dc31

{
  // NOTE: The Nullish Coalescing Assignment Operator is used between two values. If the first value is `undefined` or `null`, the second value is assigned.
  //
  //
  // ✅ Read Chat GPT's Article.
}

//* Promise.any()

// Chat GPT 👇
// Same link above 👆 https://chatgpt.com/share/66e7f6f7-3c94-800f-9976-329dbfa2dc31

{
  // ✅ Read Chat GPT's Article.
}

//* New OOP Features: Private Fields & Static Initialization Blocks

// Chat GPT 👇
// Same link above 👆 https://chatgpt.com/share/66e7f6f7-3c94-800f-9976-329dbfa2dc31

/* 
{
  // ✅ Read Chat GPT's Article.

  class Counter {
    static count = 0;
    static limit;

    static {
      // Static initialization block
      Counter.limit = 10;
      console.log(`Counter limit is set to ${Counter.limit}`);
    }

    static increment() {
      if (Counter.count < Counter.limit) {
        Counter.count++;
        console.log(`Count: ${Counter.count}`);
      } else {
        console.log('Limit reached');
      }
    }
  }

  // Static initialization block runs as soon as the class is defined
  Counter.increment(); // "Count: 1"
  Counter.increment(); // "Count: 2"
  // ... up to 10 times
}
 */
