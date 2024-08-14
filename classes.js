// In JavaScript, classes are a way to create reusable and maintainable code by encapsulating data and behavior. 
// They are syntactic sugar over JavaScript's existing prototype-based inheritance and provide a more familiar, object-oriented syntax for creating and managing objects.

// Basic Class Syntax
// Define a class
class Person {
    // Constructor method to initialize object properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to display a greeting
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Create an instance of the class
const alice = new Person('Alice', 30);

// Call the method
alice.greet(); // Output: Hello, my name is Alice and I am 30 years old.

// Inheritance: Classes can inherit from other classes using the extends keyword. This allows a class to use the properties and methods of another class.
// Define a base class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// Define a derived class
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }

    // Override the speak method
    speak() {
        console.log(`${this.name} barks.`);
    }
}

// Create an instance of the derived class
const rex = new Dog('Rex', 'German Shepherd');

// Call the methods
rex.speak(); // Output: Rex barks.

// Getters and Setters: Getters and setters allow you to define methods that behave like properties. They are useful for controlling how properties are accessed and mutated.
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Getter for the area property
    get area() {
        return this.width * this.height;
    }

    // Setter for the width property
    set width(value) {
        if (value <= 0) {
            console.error('Width must be positive.');
        } else {
            this._width = value;
        }
    }

    // Getter for the width property
    get width() {
        return this._width;
    }

    // Setter for the height property
    set height(value) {
        if (value <= 0) {
            console.error('Height must be positive.');
        } else {
            this._height = value;
        }
    }

    // Getter for the height property
    get height() {
        return this._height;
    }
}

// Create an instance of the class
const rect = new Rectangle(10, 5);

// Access the area property
console.log(rect.area); // Output: 50

// Try setting invalid width
rect.width = -3; // Output: Width must be positive.

// Set valid width and height
rect.width = 20;
rect.height = 10;
console.log(rect.area); // Output: 200

// Static Methods: Static methods belong to the class itself rather than instances of the class. They are often used for utility functions related to the class.
class MathUtils {
    // Static method to calculate the square of a number
    static square(x) {
        return x * x;
    }
}

// Call the static method
console.log(MathUtils.square(5)); // Output: 25

// Private Fields: Private fields are declared with a # prefix and can only be accessed within the class they are defined in.
class Counter {
    #count = 0; // Private field

    increment() {
        this.#count++;
        console.log(`Count: ${this.#count}`);
    }

    decrement() {
        this.#count--;
        console.log(`Count: ${this.#count}`);
    }
}

// Create an instance of the class
const counter = new Counter();

// Call the methods
counter.increment(); // Output: Count: 1
counter.increment(); // Output: Count: 2
counter.decrement(); // Output: Count: 1

// Trying to access #count from outside the class will result in an error
// console.log(counter.#count); // SyntaxError: Private field '#count' must be declared in an enclosing class

  
// Classes provide a clean syntax for creating and managing objects.
// Inheritance allows one class to extend another, promoting code reuse.
// Getters and Setters allow for controlled access and mutation of properties.
// Static Methods are associated with the class itself, not instances.
// Private Fields ensure encapsulation by restricting access to within the class.

// Getter method
let student = {
    name: 'student',
    get student() {
        return this.name
    }
}
console.log(student.name);

const user = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(user.fullName)

// Setter method
