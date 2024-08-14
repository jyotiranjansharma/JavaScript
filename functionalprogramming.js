// Functional programming (FP) is a programming paradigm that treats computation as the evaluation of mathematical functions and 
// avoids changing state and mutable data. 
// JavaScript, while not a purely functional language, supports functional programming concepts. 
// Here are the core principles and examples of functional programming in JavaScript:

// Core Principles of Functional Programming
// 1. Pure Functions: A function that, given the same inputs, will always return the same output and does not have any side effects.
// 2. Immutability: Data cannot be modified after it is created. Instead, new data structures are created.
// 3. First-Class Functions: Functions are treated as first-class citizens, 
//    meaning they can be assigned to variables, passed as arguments, and returned from other functions.
// 4. Higher-Order Functions: Functions that can take other functions as arguments or return them as results.
// 5. Function Composition: Combining simple functions to build more complex functions.

// 1. Pure Functions
// A pure function does not depend on or modify the state of the program outside its scope.
// Example
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Output: 5
console.log(add(2, 3)); // Output: 5 (same input, same output)

// 2. Immutability
// Instead of modifying existing objects or arrays, create new ones.
// Example
const arr = [1, 2, 3];

// Using spread operator to create a new array
const newArr = [...arr, 4];

console.log(arr); // Output: [1, 2, 3]
console.log(newArr); // Output: [1, 2, 3, 4]

// 3. First-Class Functions
// Functions can be assigned to variables, passed as arguments, and returned from other functions.
// Example
const greet = function (name) {
    return `Hello, ${name}!`;
};

console.log(greet("Alice")); // Output: Hello, Alice!

const sayHello = greet;
console.log(sayHello("Bob")); // Output: Hello, Bob!

// 4. Higher-Order Functions
// Functions that take other functions as arguments or return them as results.
// Example
function filter(arr, fn) {
    const result = [];
    for (const value of arr) {
        if (fn(value)) {
            result.push(value);
        }
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];
const isEven = (num) => num % 2 === 0;

console.log(filter(numbers, isEven)); // Output: [2, 4]

// 5. Function Composition
// Combining simple functions to build more complex functions.
// Example
const sum = (a) => (b) => a + b;
const multiply = (a) => (b) => a * b;

const add5 = sum(5);
const multiplyBy3 = multiply(3);

console.log(add5(2)); // Output: 7
console.log(multiplyBy3(4)); // Output: 12

const composedFunction = (a) => multiplyBy3(add5(a));
console.log(composedFunction(2)); // Output: 21

