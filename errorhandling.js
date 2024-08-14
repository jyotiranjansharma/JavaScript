// ERROR HANDLING

// Using try catch statement
// The try...catch statement allows you to catch and handle errors that occur during the execution of a block of code.

// Example
console.log("========================================================")
console.log("Example with try catch statement")
try {
    let result = riskyOperation()
    console.log(result);
} catch (error) {
    console.error("An error occured", error.message)
}

function riskyOperation() {
    throw new Error("Simething went wrong");
}
console.log("========================================================")

// Using try...catch...finally Statement
// The finally block allows you to execute code after the try and catch blocks, regardless of whether an error was thrown.

// Example
console.log("========================================================")
console.log("Example with try...catch...finally Statement");
try {
    let result = riskyOperation1();
    console.log(result);
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("This will always be executed");
}

function riskyOperation1() {
    throw new Error("Something went wrong!");
}
console.log("========================================================")

// Using custom error
// You can create custom error classes to provide more specific error information.

// Example
console.log("========================================================")
console.log("Example with custom error class");
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

try {
    throw new CustomError("This is a custom error");
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}
console.log("========================================================")

// Error Handling with Asynchronous Code
// Using Promises
// For asynchronous operations that return promises, you can handle errors using .catch().

function asyncOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Async operation failed in promise"));
        }, 1000);
    });
}

asyncOperation()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error("An error occurred:", error.message);
    });


// Using async/await
// When using async/await, you can handle errors with try...catch.

async function performAsyncOperation() {
    try {
        let result = await asyncOperation1();
        console.log(result);
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

performAsyncOperation();

function asyncOperation1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Async operation failed in async await"));
        }, 1000);
    });
}

