// ASYNC AWAIT
// The async and await keywords in JavaScript provide a more readable and concise way to work with promises and asynchronous operations. 
// They allow you to write asynchronous code that looks and behaves like synchronous code, making it easier to follow and maintain.

// Basic Example
// To use async and await, you define an async function and use the await keyword to pause execution until a promise is resolved.

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function example() {
    console.log("Start");
    await delay(2000); // Wait for 2 seconds
    console.log("End");
}

example();
// Output:
// Start
// (waits for 2 seconds)
// End


// Example Fetching Data from an API
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

fetchData();
// Output:
// { userId: 1, id: 1, title: '...', body: '...' }

// Error Handling
// Handling errors in asynchronous functions with async and await is straightforward using try and catch blocks.
async function fetchDataWithError() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/invalid-url");
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

fetchDataWithError();
// Output:
// Fetch error: Error: 404


// Example for Parallel Execution
// You can execute asynchronous operations in parallel using Promise.all() with await.
// function delay(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

async function parallelOperations() {
    const promise1 = delay(1000).then(() => "Result from first promise");
    const promise2 = delay(2000).then(() => "Result from second promise");

    const [result1, result2] = await Promise.all([promise1, promise2]);

    console.log(result1); // Output: Result from first promise
    console.log(result2); // Output: Result from second promise
}

parallelOperations();

// Chaining Asynchronous Operations
// function delay(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

async function firstOperation() {
    await delay(1000);
    console.log("First operation completed");
    return "Data from first operation";
}

async function secondOperation(data) {
    await delay(1000);
    console.log("Second operation completed");
    return `${data} and data from second operation`;
}

async function thirdOperation(data) {
    await delay(1000);
    console.log("Third operation completed");
    return `${data} and data from third operation`;
}

async function performOperations() {
    try {
        const result1 = await firstOperation();
        console.log(result1);

        const result2 = await secondOperation(result1);
        console.log(result2);

        const result3 = await thirdOperation(result2);
        console.log(result3);
    } catch (error) {
        console.error("Error:", error);
    }
}

performOperations();
// Output:
// First operation completed
// Data from first operation
// Second operation completed
// Data from first operation and data from second operation
// Third operation completed
// Data from first operation and data from second operation and data from third operation
