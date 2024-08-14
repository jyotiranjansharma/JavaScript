// Hoisitng
// In JavaScript, hoisting is a behavior where variable and function declarations are moved to the top of their containing scope (either the global scope or the function scope) 
// during the compilation phase. 
// This means that you can use variables and functions before they are actually declared in the code, 
// although the behavior might not always be as expected due to the way hoisting works with different types of declarations.

// Variable Hoisting with var: The variable is hoisted and initialized with undefined.
// Variable Hoisting with let and const: The variable is hoisted but not initialized, leading to a ReferenceError if accessed before declaration.
// Function Declaration Hoisting: The entire function is hoisted, allowing it to be called before its declaration.
// Function Expression Hoisting: Only the variable declaration is hoisted, not the function assignment.

// Variable Hoisting
// 1. var Declaration:
// Variables declared with var are hoisted to the top of their scope and initialized with undefined.
// Example 
var a;
console.log(a) //Output: undefined
a=10;
console.log(a) //output: 10

// 2. let and const Declarations:
// Variables declared with let and const are also hoisted, but they are not initialized. 
// Accessing them before their declaration results in a ReferenceError due to the "temporal dead zone," 
// which is the period between entering the block scope and the actual declaration being encountered

// Example
console.log(b); //Output: ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); //Output: 20

console.log(d); // ReferenceError: Cannot access 'c' before initialization
const d = 30;
console.log(d); // Output: 30


// Function declarations are fully hoisted, meaning the entire function definition is moved to the top of the scope, 
// allowing the function to be called before its definition appears in the code.

// Example
greet(); // Output: "Hello, world!"

function greet() {
    console.log("Hello, world!");
}

// function expressions (where functions are assigned to variables) are treated differently. 
// Only the variable declaration is hoisted, not the function definition.

// Example
sayHello(); // TypeError: sayHello is not a function

var sayHello = function() {
    console.log("Hi!");
};

