// SPREAD OPERATOR
// --------------------------------------------------------------------------------------------------------------
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log(array2); // Output: [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // Output: { a: 1, b: 2, c: 3 }

const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c;
console.log(sum(...numbers)); // Output: 6


// REST PARAMETER
// --------------------------------------------------------------------------------------------------------------
function add(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}
console.log(add(1, 2, 3, 4)); // Output: 10

const [first, second, ...restArr] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(restArr); // Output: [3, 4, 5]

const { a, b, ...restObj } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(restObj); // Output: { c: 3, d: 4 }
