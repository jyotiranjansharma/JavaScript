// PROMISES
// These are used to handle asynchronous operations.
// A promise represents an operation that hasn't yet completed but is expected to in the future.

// It has a structure that states: 
// Pending: inital state
// Fulfilled: completed successfully
// Resolved: the operation was successful
// Rejecetd: the operation failed

// ---------------------------------------------------------------------------------------------------------
const myPromise = new Promise((resolve, reject) => {
    // Some asynchronous operation
    let success = true; // Assume the operation is successful
    if (success) {
        resolve("Operation was successful!"); // The operation succeeded
    } else {
        reject("Operation failed!"); // The operation failed
    }
});
// you can then handle the resolved/rejected promise by using .then() & .catch() methods.
myPromise
    .then((message) => {
        console.log(message); // Output: Operation was successful!
    })
    .catch((error) => {
        console.error(error); // This would log any error if the Promise is rejected
    });


// Promise Chaining
function firstOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("First operation completed");
            resolve("Data from first operation");
        }, 1000);
    });
}

function secondOperation(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Second operation completed");
            resolve(`${data} and data from second operation`);
        }, 1000);
    });
}

function thirdOperation(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Third operation completed");
            resolve(`${data} and data from third operation`);
        }, 1000);
    });
}

firstOperation()
    .then((result1) => {
        console.log(result1);
        return secondOperation(result1);
    })
    .then((result2) => {
        console.log(result2);
        return thirdOperation(result2);
    })
    .then((result3) => {
        console.log(result3);
    })
    .catch((error) => {
        console.error("Error:", error);
    });


// ----------------------------------------------------------------------------------------------------
// PROMISE.ALL()

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log('values in promise.all', values);
});

// All values are non-promises, so the returned promise gets fulfilled
const p = Promise.all([1, 2, 3]);
// The only input promise is already fulfilled,
// so the returned promise gets fulfilled
const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// One (and the only) input promise is rejected,
// so the returned promise gets rejected
// const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);

// Using setTimeout, we can execute code after the queue is empty
setTimeout(() => {
  console.log(p);
  console.log(p2);
//   console.log(p3);
});

// Logs:
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: 555 }


// -------------------------------------------------------------------------------------------------------------------
// PROMISE.RACE()

const promise11 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const promise21 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

Promise.race([promise11, promise21]).then((value) => {
    console.log('value in promise.race', value);
    // Both resolve, but promise2 is faster
});
// Expected output: "two"

// Key Differences:

// Feature	                    Promises	                                       Observables
// Eager vs Lazy	            Eager: Starts immediately	                       Lazy: Starts only when subscribed
// Single vs Multiple Values	Single: Resolves/rejects once	                   Multiple: Can emit multiple values over time
// Chaining vs Operators	    Chaining: Uses .then() and .catch()	               Operators: Uses RxJS operators for transformations
// Cancellation	                No built-in cancellation (use AbortController)	   Supports cancellation via unsubscribe()
// Push vs Pull	                Push: Producer decides when the value is sent	   Pull: Consumer decides when to get the next value

// Use Cases:
// Promises are ideal for handling a single asynchronous event, such as an HTTP request.
// Observables are suitable for scenarios where you need to handle multiple asynchronous events over time, such as streams of data, user inputs, WebSocket connections, etc.
