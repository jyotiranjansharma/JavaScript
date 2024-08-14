// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

var createCounter = function(init) {
    let counter = init
    let counterObj = {
        increment() {
            counter = counter + 1
            return counter
        },
        reset() {
            counter = init
            return counter
        },
        decrement() {
            counter = counter -1
            return counter
        }
    }
    return counterObj
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */


// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

function transformArray(arr, fn) {
    const transformedArray = [];
    for (let i = 0; i < arr.length; i++) {
        transformedArray.push(fn(arr[i], i));
    }
    return transformedArray;
}

// Example transformation function
function multiplyByIndex(value, index) {
    return value * index;
}

const arrt = [1, 2, 3, 4];
const resultt = transformArray(arrt, multiplyByIndex);

console.log(resultt); // Output: [0, 2, 6, 12]

// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
// The fn function takes one or two arguments:
// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.
// Please solve it without the built-in Array.filter method.

function filterArray(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

// Example filtering function
function isEven(value) {
    return value % 2 === 0;
}

const arrx = [1, 2, 3, 4, 5, 6];
const resultx = filterArray(arrx, isEven);

console.log(resultx); // Output: [2, 4, 6]

// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
// If the length of the array is 0, the function should return init.
// Please solve it without using the built-in Array.reduce method.

function reduceArray(nums, fn, init) {
    let val = init;

    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }

    return val;
}

// Example reducer function
function sum(accumulator, currentValue) {
    return accumulator + currentValue;
}

const nums = [1, 2, 3, 4];
const initialValue = 0;
const resultq = reduceArray(nums, sum, initialValue);

console.log(resultq); // Output: 10

// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// The function composition of an empty list of functions is the identity function f(x) = x.
// You may assume each function in the array accepts one integer as input and returns one integer as output.

function compose(functions) {
    return function (x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
}

// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

var once = function(fn) {
    let called = false
    let res
    return function(...args){
        if(!called) {
            called = true
            res = fn(...args)
            return res
        }
        return undefined
    }
};


// let fn = (a, b, c) => (a + b + c)
// let onceFn = once(fn)

// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // returns undefined without calling fn


// Given a function fn, return a memoized version of that function.
// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
// You can assume there are 3 possible input functions: sum, fib, and factorial.
// sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

function memoize(fn) {
    const c = {}
    return function(...args) {
        const k = JSON.stringify(args)
        if(c[k] !== undefined) {
            return c[k]
        }
        const res = fn(...args)
        c[k] = res
        return res
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */


//  Given two promises promise1 and promise2, return a new promise. 
//  promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1, promise2]).then(val => {
        return val[0] + val[1]
    })
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

async function sleep(millis) {
    return new Promise(resolve => {
        setTimeout(resolve, millis)
    })
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.
// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
// setTimeout(cancelFn, cancelTimeMs)
// Initially, the execution of the function fn should be delayed by t milliseconds.
// If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. 
// Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.

var cancellable = function(fn, args, t) {
    let timeout;
    timeout = setTimeout(() => {
        fn(...args)
    }, t)

    return function cancel() {
        clearTimeout(timeout)
    }
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */

// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

// The time limited function should follow these rules:

// If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
// If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

var timeLimit = function(fn, t) {
    
    return async function(...args) {
        return new Promise((resolve, reject) => {
            const timeID = setTimeout(() => {
                reject("Time Limit Exceeded")
            }, t)

            fn(...args)
            .then((res) => {
                clearTimeout(timeID)
                resolve(res)
            })
            .catch((error) => {
                clearTimeout(timeID)
                reject(error)
            })
        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

