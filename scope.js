// In JavaScript, scope refers to the context in which variables, functions, and objects are accessible and can be referred to in your code. 
// It defines the visibility and lifetime of these entities. 
// JavaScript has several types of scopes:

// Global Scope
// Local Scope (Function Scope)
// Block Scope
// Lexical Scope (Closures)

// 1. Global Scope
// Variables declared outside of any function or block are in the global scope. 
// They can be accessed from anywhere in the code, including inside functions and blocks. 
// In a browser environment, global variables are properties of the window object.

var globalVar = "I am global";

function checkGlobal() {
    console.log(globalVar); // Accessible here
}

checkGlobal(); // Output: "I am global"
console.log(globalVar); // Output: "I am global"


// 2. Local Scope (Function Scope)
// Variables declared within a function are in local scope, meaning they can only be accessed from within that function. 
// They are not accessible from outside the function.

function localScopeExample() {
    var localVar = "I am local"; // this is only accessible within the function
    console.log(localVar); // Accessible here
}

localScopeExample();
console.log(localVar); // Error: localVar is not defined


// 3. Block Scope
// Block scope applies to variables declared with let and const inside a block (e.g., within {}). 
// Unlike var, which is function-scoped, let and const are scoped to the nearest enclosing block, including loops and conditionals.

{
    let blockScoped = "I am block scoped"; //Block scope is useful for limiting the visibility of variables and preventing them from leaking into other parts of the code.
    console.log(blockScoped); // Accessible here
}

console.log(blockScoped); // Error: blockScoped is not defined


// 4. Lexical Scope (Closures)
// Lexical scope refers to the scope that is defined by the position of functions and blocks in the source code. 
// It means that inner functions have access to variables and functions declared in their outer scope, 
// even after the outer function has finished executing. 
// This concept is the basis of closures.

function outerFunction() {
    var outerVar = "I am outer";

    function innerFunction() {
        console.log(outerVar); // Accessible here
    }

    return innerFunction;
}

const inner = outerFunction();
inner(); // Output: "I am outer"

// In this example, innerFunction retains access to outerVar even after outerFunction has finished executing, demonstrating a closure.

// 5. Scope Chain
// When JavaScript code tries to access a variable, it starts looking in the local scope. 
// If the variable is not found, it moves up to the next outer scope, and so on, until it reaches the global scope. 
// This process is called the scope chain.


var globalVar = "I am global";

function outerFunction() {
    var outerVar = "I am outer";

    function innerFunction() {
        var innerVar = "I am inner";
        console.log(innerVar); // Accessible here
        console.log(outerVar); // Accessible here
        console.log(globalVar); // Accessible here
    }

    innerFunction();
}

outerFunction();

// In the innerFunction, innerVar is found in the local scope, outerVar is found in the outer scope (outerFunction), 
// and globalVar is found in the global scope.


// SUMMARY
// ---Global Scope: Variables are accessible from anywhere in the code.
// ---Local Scope (Function Scope): Variables are accessible only within the function they are declared in.
// ---Block Scope: let and const provide block-level scope, limiting variable access to within the nearest enclosing block.
// ---Lexical Scope (Closures): Functions can access variables from their outer scope, even after the outer function has finished executing.
// ---Scope Chain: The mechanism by which JavaScript resolves variable names, 
//                 starting from the innermost scope and moving outward to the global scope if necessary.