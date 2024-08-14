// In JavaScript, call, apply, and bind are methods available on all function objects. 
// They are used to control the context (this value) in which a function is executed. 
// This is particularly useful when working with methods that need to be reused across different objects or 
// when you want to borrow methods from one object for another.

// 1. call()
// The call() method calls a function with a given this value and arguments provided individually.

// Example:
function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const person = {
    name: 'Alice'
};

greet.call(person, 'Hello', '!'); // Output: "Hello, Alice!"

// In this example, the greet function is called with person as the this value, and "Hello" and "!" are passed as arguments to the function.

// 2. apply()
// The apply() method is similar to call(), but it takes an array (or array-like object) of arguments instead of a comma-separated list.

// Example:

function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const person1 = {
    name: 'Bob'
};

greet.apply(person1, ['Hi', '?']); // Output: "Hi, Bob?"

// Here, greet.apply(person, ['Hi', '?']) sets person as the this value and passes an array ['Hi', '?'] as arguments to the function.

// 3. bind()
// The bind() method creates a new function that, when called, has its this value set to the provided value, 
// with a given sequence of arguments preceding any provided when the new function is called. 
// Unlike call and apply, bind does not immediately invoke the function. 
// Instead, it returns a new function that can be called later with the context set.

// Example:
function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const person2 = {
    name: 'Charlie'
};

const greetCharlie = greet.bind(person2);
greetCharlie('Hey', '.'); // Output: "Hey, Charlie."

// In this example, greet.bind(person) returns a new function greetCharlie that, when called, sets this to person. 
// The greetCharlie function can then be called with any arguments needed.



// Use Cases and Differences:
// call and apply are used when you want to immediately invoke a function with a specific this context and arguments. 
// The choice between them depends on whether you have the arguments as an array (apply) or as a list (call).

// bind is used when you want to create a new function with a bound this value that can be called later. 
// This is particularly useful for event handlers and callbacks where you want to ensure the function executes with a specific this context.


