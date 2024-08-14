// 1. Object Literals
// This is the simplest and most common way to create objects.
const person21 = {
    name: 'John',
    age: 30,
    greet: function() {
      console.log('Hello, ' + this.name);
    }
  };
  
  console.log(person21.name); // Output: John
  person.greet(); // Output: Hello, John

  
//   2. Using the new Object() Syntax
// You can create an object using the Object constructor.
const person = new Object();
person.name = 'John';
person.age = 30;
person.greet = function() {
  console.log('Hello, ' + this.name);
};

console.log(person.name); // Output: John
person.greet(); // Output: Hello, John

// 3. Using a Constructor Function
// A constructor function is a regular function used to create multiple objects of the same type.
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
      console.log('Hello, ' + this.name);
    };
  }
  
  const person1 = new Person('John', 30);
  const person2 = new Person('Jane', 25);
  
  console.log(person1.name); // Output: John
  person1.greet(); // Output: Hello, John
  
  console.log(person2.name); // Output: Jane
  person2.greet(); // Output: Hello, Jane
  
//   4. Using the class Syntax (ES6)
// ES6 introduced the class syntax, which provides a more concise way to create constructor functions and prototypes.
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log('Hello, ' + this.name);
    }
  }
  
  const person11 = new Person('John', 30);
  const person22 = new Person('Jane', 25);
  
  console.log(person11.name); // Output: John
  person1.greet(); // Output: Hello, John
  
  console.log(person22.name); // Output: Jane
  person2.greet(); // Output: Hello, Jane
  

//   5. Using Object.create()
//   Object.create() creates a new object with the specified prototype object and properties.  
const personPrototype = {
    greet: function() {
      console.log('Hello, ' + this.name);
    }
  };
  
  const person = Object.create(personPrototype);
  person.name = 'John';
  person.age = 30;
  
  console.log(person.name); // Output: John
  person.greet(); // Output: Hello, John
  

//   6. Using ES6 Object Destructuring for Cloning
// You can use the spread operator to create a shallow copy of an object.
const originalPerson = {
    name: 'John',
    age: 30,
  };
  
  const clonedPerson = { ...originalPerson };
  clonedPerson.name = 'Jane';
  
  console.log(originalPerson.name); // Output: John
  console.log(clonedPerson.name);   // Output: Jane
  