// HIGHER ORDER FUNCTIONS: Higher-order functions are functions that either take other functions as arguments or return a function as a result.

// Functions are used as an argument
// Example 1
const numbers = [1, 2, 3, 4, 5];
// Higher-order function: The map function takes a function as an argument and applies it to each element in an array, returning a new array with the results.
const doubled = numbers.map(function (number) {
    return number * 2;
});
console.log('doubled map', doubled);

// Example 2
// const numbers = [1, 2, 3, 4, 5];
// Higher-order function: The filter function takes a function as an argument and applies it to each element in an array, returning a new array with only the elements that return true.
const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});
console.log('evenNumbers filter', evenNumbers);

// Example 3
// const numbers = [1, 2, 3, 4, 5];
// Higher-order function: The reduce function takes a function and an initial value as arguments and applies the function to accumulate a single value from the array.
const sum = numbers.reduce(function (total, number) {
    return total + number;
}, 0);
console.log('sum reduce', sum); // Output: 15

// Example 4
// const numbers = [1, 2, 3, 4, 5];
// Higher-order function: The forEach function takes a function as an argument and applies it to each element in an array, but does not return a new array.
numbers.forEach(function(number) {
  console.log('number foreach',number * 2);
});


// Functions that Return Functions
// Example 1 
// A function can return another function, creating a higher-order function
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log('double',double(5)); // Output: 10
console.log('triple',triple(5)); // Output: 15


// Functions that Take Functions as Arguments
// Example 1
// A function can take another function as an argument, making it a higher-order function.
function applyOperation(operation, x, y) {
    return operation(x, y);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log('applyOperation add',applyOperation(add, 5, 3)); // Output: 8
console.log('applyOperation multiply',applyOperation(multiply, 5, 3)); // Output: 15
