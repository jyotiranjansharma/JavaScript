// Shallow Copy
// A shallow copy of an object creates a new object that has the same properties as the original object. 
// However, if the original object contains nested objects (such as arrays or other objects), 
// the shallow copy only copies the reference to those nested objects, not the objects themselves. 
// This means that if you modify a nested object in the copied version, it will also reflect in the original object.

// Methods to Create a Shallow Copy:

// Object.assign():

// This method copies all enumerable own properties from one or more source objects to a target object.

const original = { a: 1, b: { c: 2 } };
const shallowCopy = Object.assign({}, original);

shallowCopy.b.c = 3;
console.log(original.b.c); // Output: 3

// Spread Operator (...):

// The spread operator can also create a shallow copy of an object or array.

const original1 = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original1 };

shallowCopy.b.c = 4;
console.log(original1.b.c); // Output: 4

// Deep Copy
// A deep copy, in contrast, copies everything, including nested objects, creating entirely new instances of each object. 
// Therefore, changes to the copied nested objects do not affect the original object and vice versa.

// Methods to Create a Deep Copy:

// JSON.parse(JSON.stringify()):

// A common way to deep copy an object is by serializing it to a JSON string and then parsing the JSON string back into an object.

const original2 = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original2));

deepCopy.b.c = 5;
console.log(original2.b.c); // Output: 2

// Shallow Copy:

// Copies only the first-level properties.
// Nested objects are not copied, only their references are.
// Methods: Object.assign(), spread operator (...).

// Deep Copy:

// Copies all levels of the object.
// Creates completely new instances of nested objects.
// Methods: JSON.parse(JSON.stringify()), custom recursive function.