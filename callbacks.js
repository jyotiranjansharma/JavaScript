// CALLBACK : In JavaScript, a callback is a function that is passed as an argument to another function and 
// is executed after some operation has been completed. 
// Callbacks are commonly used for asynchronous operations, such as network requests, timers, or event handling.

// Example 1 Basic callback
// Function that takes a callback as an argument
function greet(name, callback) {
    console.log('Hello, ' + name);
    callback();
}

// Callback function
function sayGoodbye() {
    console.log('Goodbye!');
}

// Call the function with the callback
greet('Alice', sayGoodbye);

// Output:
// Hello, Alice
// Goodbye!

// Example 2 Asynchronous Callbacks
// Simulate an asynchronous operation using setTimeout
function fetchDataF(callback) {
    console.log('Fetching data...');
    setTimeout(() => {
        const data = { id: 1, name: 'Alice' };
        callback(data);
    }, 2000); // Simulate a 2-second delay
}

// Callback function to handle the fetched data
function processData(data) {
    console.log('Data received:', data);
}

// Call the function with the callback
fetchDataF(processData);
  
  // Output:
  // Fetching data...
  // (after 2 seconds)
  // Data received: { id: 1, name: 'Alice' }

// Example 3: Callback Hell
// When multiple asynchronous operations are nested, it can lead to callback hell (also known as the "pyramid of doom"). 
// This can be mitigated by using promises or async/await, but here's how it looks with callbacks:
// Simulate asynchronous operations
function firstOperation(callback) {
    setTimeout(() => {
        console.log('First operation completed');
        callback();
    }, 1000);
}

function secondOperation(callback) {
    setTimeout(() => {
        console.log('Second operation completed');
        callback();
    }, 1000);
}

function thirdOperation(callback) {
    setTimeout(() => {
        console.log('Third operation completed');
        callback();
    }, 1000);
}

// Nesting callbacks (callback hell)
firstOperation(() => {
    secondOperation(() => {
        thirdOperation(() => {
            console.log('All operations completed');
        });
    });
});
  
  // Output:
  // (after 1 second) First operation completed
  // (after 2 seconds) Second operation completed
  // (after 3 seconds) Third operation completed
  // All operations completed

// Example 4: Handling Errors with Callbacks
// Simulate an asynchronous operation with error handling
function fetchData(callback) {
    setTimeout(() => {
        const error = false; // Change to `true` to simulate an error
        if (error) {
            callback('An error occurred', null);
        } else {
            const data = { id: 1, name: 'Alice' };
            callback(null, data);
        }
    }, 2000);
}

// Callback function to handle the result
function handleResult(error, data) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Data received:', data);
    }
}

// Call the function with the callback
fetchData(handleResult);
  
  // Output when error is `false`:
  // (after 2 seconds) Data received: { id: 1, name: 'Alice' }
  
  // Output when error is `true`:
  // (after 2 seconds) Error: An error occurred
  