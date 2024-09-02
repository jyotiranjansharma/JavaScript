// In JavaScript, every object has a prototype. 
// A prototype is also an object, and all JavaScript objects inherit their properties and methods from their prototype. 
// This is often referred to as "prototypal inheritance."

// When you create an object in JavaScript, it inherits properties and methods from its prototype. This allows you to add new properties and methods to existing objects.

// Example 1: Basic Prototype Usage
// Create a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add a method to the prototype
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Create instances of Person
const alice = new Person('Alice', 30);
const bob = new Person('Bob', 25);

// Call the greet method
alice.greet(); // Output: Hello, my name is Alice and I am 30 years old.
bob.greet();   // Output: Hello, my name is Bob and I am 25 years old.

// In this example:

// Person is a constructor function that initializes new objects with name and age properties.
// Person.prototype.greet is a method added to the Person prototype. This means all instances of Person can access the greet method.
// alice and bob are instances of Person and can call the greet method because it is inherited from the prototype.

// Example 2: Prototype Chain
// The prototype chain is a series of linked objects. When you try to access a property or method on an object, JavaScript will search for it on the object itself first. 
// If it doesn't find it there, it will move up the prototype chain and check the object's prototype, and so on.
// Create a constructor function
function Animal(name) {
    this.name = name;
}

// Add a method to the prototype
Animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`);
};

// Create a new object that inherits from Animal
function Dog(name, breed) {
    Animal.call(this, name); // Call the parent constructor
    this.breed = breed;
}

// Set the prototype of Dog to be an instance of Animal
Dog.prototype = Object.create(Animal.prototype);

// Add a method to the Dog prototype
Dog.prototype.bark = function () {
    console.log(`${this.name} barks.`);
};

// Correct the constructor property
Dog.prototype.constructor = Dog;

// Create an instance of Dog
const rex = new Dog('Rex', 'German Shepherd');

rex.speak(); // Output: Rex makes a noise.
rex.bark();  // Output: Rex barks.
  
// In this example:

// Animal is a constructor function with a speak method.
// Dog is another constructor function that inherits from Animal.
// Dog.prototype = Object.create(Animal.prototype) sets up the prototype chain so that Dog inherits from Animal.
// Dog.prototype.constructor = Dog ensures that the constructor property points to Dog.
// rex is an instance of Dog and can access both the speak method from Animal and the bark method from Dog.

// Example 3: Adding Properties to Built-in Prototypes
// Add a method to the Array prototype
Array.prototype.sum = function () {
    return this.reduce((total, num) => total + num, 0);
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.sum()); // Output: 15

String.prototype.welcome = function() {
    return `Welcome ${this}`
}

console.log("Sharma".welcome())