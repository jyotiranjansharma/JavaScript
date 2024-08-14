// The event loop is a fundamental concept in JavaScript that enables non-blocking, asynchronous programming, 
// allowing JavaScript to execute code, handle events, and perform I/O operations without blocking the main thread. 
// The event loop continuously checks the call stack and the callback queue to decide what code to execute next.

// Here's a simplified explanation of how the event loop works:

// CALL STACK: The call stack is a data structure that tracks function execution. When a function is called, 
// it gets pushed onto the call stack, and when the function completes, it gets popped off the stack.

// WEB APIs: These are browser-provided APIs, such as setTimeout, fetch, DOM events, etc., that can handle asynchronous operations.

// CALLBACK QUEUE: This queue holds callback functions that are ready to be executed after their asynchronous operations are complete.

// EVENT LOOP: The event loop continuously checks the call stack to see if it's empty. If the call stack is empty, 
// it takes the first callback from the callback queue and pushes it onto the call stack for execution.

// Example: Understanding the Event Loop
console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 0);

console.log('End');

// Output:
// Start
// End
// Timeout callback


// Explanation:

// Start: The console.log('Start') statement is executed first and added to the call stack. 
// It logs "Start" to the console and then gets popped off the stack.

// setTimeout: The setTimeout function is called next. 
// Although it has a delay of 0, it is still an asynchronous operation. 
// The callback function provided to setTimeout is handed off to the Web API environment. 
// Once the timer completes, the callback is moved to the callback queue.

// End: Before the callback in the queue is executed, the console.log('End') statement is executed. 
// It logs "End" to the console and then gets popped off the stack.

// Event Loop & Callback Execution: After the call stack is empty (i.e., all synchronous code has finished executing), 
// the event loop checks the callback queue. It finds the setTimeout callback and pushes it onto the call stack for execution. 
// The callback logs "Timeout callback" to the console.

// Advanced Example: Promises and the Event Loop

console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('Promise resolved');
  });

console.log('End');

// Output:
// Start
// End
// Promise resolved
// Timeout callback

// Explanation:

// Synchronous Code: The console.log('Start') and console.log('End') statements are executed first, logging "Start" and "End" respectively.

// Promise Microtask: The Promise.resolve().then(...) creates a microtask, which is placed in the microtask queue.

// setTimeout: The setTimeout callback is placed in the callback queue (macrotask queue).

// Microtasks vs. Macrotasks: The event loop will process microtasks before macrotasks, even if the delay for setTimeout is 0. 
// Thus, "Promise resolved" is logged before "Timeout callback".