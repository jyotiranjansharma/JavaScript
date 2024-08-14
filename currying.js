// Currying is a technique in functional programming where a function is transformed into a sequence of functions, each taking a single argument. 
// Instead of taking all arguments at once, a curried function takes one argument and returns a new function that accepts the next argument, and so on, until all arguments have been provided.

// Example 1: Manual Currying
// Function to add three numbers
function sum(a, b, c) {
    return a + b + c;
}

// Curried version of the add function
function curriedAdd(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

// Usage
const addWith5 = curriedAdd(5); // Returns a function that adds 5 to its argument
const addWith5And3 = addWith5(3); // Returns a function that adds 5 and 3 to its argument
const result = addWith5And3(2); // Adds 5, 3, and 2

console.log('curried function result', result); // Output: 10

// In this example:

// add is a regular function that adds three numbers.
// curriedAdd is a curried version of add. It takes one argument at a time and returns a new function until all arguments are provided.
// curriedAdd(5) returns a function that takes the next argument.
// curriedAdd(5)(3) returns another function that takes the final argument.
// curriedAdd(5)(3)(2) computes the sum of 5, 3, and 2.

// Example 2: Currying with ES6 Arrow Functions
const curriedAddES = a => b => c => a + b + c;

// Usage
const addWith6 = curriedAddES(6);
const addWith6And3 = addWith5(3);
const result6 = addWith6And3(2);

console.log('curried function result in es6 format', result6); // Output: 10

// Example 3: Automatic Currying with a Helper Function
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function (...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}

// Function to add three numbers
function add(a, b, c) {
    return a + b + c;
}

// Create a curried version of the add function
const curriedAddF = curry(add);

// Usage
const resultF = curriedAddF(1)(2)(3);
console.log('Automatic Currying curriedAdd', resultF); // Output: 6

const partial = curriedAddF(1, 2);
console.log('Automatic Currying partial', partial(3)); // Output: 6
  
