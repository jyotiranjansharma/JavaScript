// Memoization is an optimization technique used primarily to speed up programs by storing the results of expensive function calls 
// and reusing them when the same inputs occur again. 
// This can be particularly useful in recursive functions, where the same calculations might be performed multiple times.

function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

const fib = memoize(function (n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
});

console.log(fib(10)); // Output: 55
console.log(fib(50)); // Output: 12586269025

// Explanation:
// Memoize Function:

// The memoize function takes another function fn as an argument.
// It creates a cache object to store the results of previous computations.
// It returns a new function that:
// Converts the arguments to a string key using JSON.stringify.
// Checks if the result for this key is already in the cache.
// If it is, it returns the cached result.
// If it isn't, it calls the original function fn, stores the result in the cache, and then returns the result.
// Fibonacci Function:

// The fib function is defined as a memoized function that computes the nth Fibonacci number.
// If n is 0 or 1, it returns n.
// Otherwise, it returns the sum of fib(n - 1) and fib(n - 2).

// Benefits of Memoization
// Performance Improvement: Memoization can drastically reduce the number of computations, especially in functions with overlapping subproblems like the Fibonacci sequence.
// Reusable Solution: The memoize function is a generic utility that can be applied to any function to enhance performance.

// Example: Factorial Function with Memoization

const factorial = memoize(function(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
});

console.log(factorial(5));  // Output: 120
console.log(factorial(10)); // Output: 3628800



// Memoization is a powerful technique for optimizing functions that are called repeatedly with the same arguments. 
// By caching the results of expensive function calls, it can significantly improve performance. 
// The provided examples demonstrate how to create a generic memoize function and apply it to different scenarios, 
// including recursive functions like Fibonacci and factorial calculations, as well as general expensive computations.