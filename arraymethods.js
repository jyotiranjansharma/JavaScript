// PUSH() : Adds one or more elements to the end of an array.
const arr1 = [1,2,3,4,5]
arr1.push(8)
console.log('using push', arr1);

// POP() : Removes the last element from an array and returns that element.
let arr2 = [1, 2, 3, 4];
let lastElement = arr2.pop();
console.log(arr2); // [1, 2, 3]
console.log('popped', lastElement); // 4

// SHIFT() : Removes the first element from an array and returns that element.
let arr3 = [1, 2, 3];
let firstElement = arr3.shift();
console.log(arr3); // [2, 3]
console.log('shift', firstElement); // 1

// UNSHIFT() : Adds one or more elements to the beginning of an array.
let arr4 = [2, 3];
arr4.unshift(1);
console.log('unshift', arr4); // [1, 2, 3]

// CONCAT() : Merges two or more array
let arr5 = [1, 2];
let arr6 = [3, 4];
let merged = arr5.concat(arr6);
console.log('concat', merged); // [1, 2, 3, 4]

// SLICE() & SPLICE()
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5];

const newArray = array1.slice(1, 4);
/* returns a new array with new extracted elements and the original array remains unchanged*/
const removedElements = array2.splice(1, 2);
/* returns a new array with removed elements and the original array gets changed */

console.log('slice', newArray, array1)
console.log('splice', removedElements, array2)
// output
// [2, 3, 4], [1, 2, 3, 4, 5], 
// [2, 3], [1, 4, 5]

// INDEXOF() : Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let arr7 = [1, 2, 3, 4];
let index = arr7.indexOf(3);
console.log('indexOf', index); // 2

// lastIndexOf() : Returns the last index at which a given element can be found in the array, or -1 if it is not present.
let arr8 = [1, 2, 3, 2, 1];
let index1 = arr8.lastIndexOf(2);
console.log('lastIndexOf', index1); // 3

// includes() : Determines whether an array includes a certain element, returning true or false.
let arr9 = [1, 2, 3, 4];
let hasTwo = arr9.includes(2);
console.log('includes', hasTwo); // true

// find() : Returns the first element in the array that satisfies the provided testing function.
let arr10 = [1, 2, 3, 4];
let found = arr10.find(element => element > 2);
console.log('find()', found); // 3

// findIndex() : Returns the index of the first element in the array that satisfies the provided testing function.
let arr11 = [1, 2, 3, 4];
let foundIndex = arr11.findIndex(element => element > 2);
console.log('findIndex', foundIndex); // 2

// filter() : Creates a new array with all elements that pass the test implemented by the provided function.
let arr12 = [1, 2, 3, 4];
let filtered = arr12.filter(element => element > 2);
console.log('filter()', filtered); // [3, 4]

// map() : Creates a new array with the results of calling a provided function on every element in the array.
let arr13 = [1, 2, 3];
let mapped = arr13.map(element => element * 2);
console.log('map', mapped); // [2, 4, 6]

// reduce() : Executes a reducer function on each element of the array, resulting in a single output value.
let arr14 = [1, 2, 3, 4];
let sum = arr14.reduce((accumulator, current) => accumulator + current, 0);
console.log('reduce', sum); // 10

// reduceRight() : Executes a reducer function on each element of the array (from right to left), resulting in a single output value.
let arr15 = ['a', 'b', 'c'];
let result = arr15.reduceRight((accumulator, current) => accumulator + current);
console.log('reduceRight', result); // 'cba'

// every() :  Tests whether all elements in the array pass the test implemented by the provided function.
let arr16 = [2, 4, 6];
let allEven = arr16.every(element => element % 2 === 0);
console.log('every()', allEven); // true

// some() : Tests whether at least one element in the array passes the test implemented by the provided function.
let arr17 = [1, 2, 3];
let hasEven = arr17.some(element => element % 2 === 0);
console.log('some()', hasEven); // true

// sort() : Sorts the elements of an array in place and returns the sorted array.
let arr18 = [3, 1, 4, 1, 2];
arr18.sort();
console.log('sort()', arr18); // [1, 1, 2, 3, 4]

// reverse() : Reverses the order of the elements in an array in place.
let arr19 = [1, 2, 3];
arr19.reverse();
console.log('reverse', arr19); // [3, 2, 1]

// join(): Joins all elements of an array into a string.
let arr20 = ['Hello', 'World'];
let joined = arr20.join(' ');
console.log('join()', joined); // 'Hello World'


// split() : (Used on strings) Splits a string into an array of substrings.
let str1 = 'Hello World';
let arr21 = str1.split(' ');
console.log('split()', arr21); // ['Hello', 'World']


// fill() : Fills all the elements in an array with a static value.
let arr22 = [1, 2, 3];
arr22.fill(0);
console.log('fill()', arr22); // [0, 0, 0]


// copyWithin() : Shallow copies part of an array to another location in the same array.
let arr23 = [1, 2, 3, 4, 5];
arr23.copyWithin(0, 3);
console.log('copyWithin()', arr23); // [4, 5, 3, 4, 5]


// entries() : Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
let arr24 = ['a', 'b', 'c'];
let iterator1 = arr24.entries();
for (let [index, element] of iterator1) {
  console.log('entries', index, element);
}
// 0 'a'
// 1 'b'
// 2 'c'


// keys() : Returns a new Array Iterator that contains the keys for each index in the array.
let arr25 = ['a', 'b', 'c'];
let iterator2 = arr25.keys();
for (let key of iterator2) {
  console.log('Key()', key);
}
// 0
// 1
// 2


// values(): Returns a new Array Iterator object that contains the values for each index in the array.
let arr26 = ['a', 'b', 'c'];
let iterator3 = arr26.values();
for (let value of iterator3) {
  console.log('values()', value);
}
// 'a'
// 'b'
// 'c'


// flat(): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let arr27 = [1, [2, [3, [4]]]];
let flatArray = arr27.flat(2);
console.log('flat()', flatArray); // [1, 2, 3, [4]]


// flatMap(): Maps each element using a mapping function, then flattens the result into a new array.
let arr28 = [1, 2, 3];
let flatMapped = arr28.flatMap(x => [x, x * 2]);
console.log('flatMap', flatMapped); // [1, 2, 2, 4, 3, 6]


// Array.from(): Creates a new, shallow-copied Array instance from an array-like or iterable object.
let str2 = 'Hello';
let arr29 = Array.from(str2);
console.log(arr29); // ['H', 'e', 'l', 'l', 'o']


// Array.isArray(): Determines whether the passed value is an Array.
let arr30 = [1, 2, 3];
console.log('Array.isArray()', Array.isArray(arr30)); // true
console.log('Array.isArray()', Array.isArray('Hello')); // false


// Array.of(): Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
let arr31 = Array.of(1, 2, 3);
console.log('Array.of()', arr31); // [1, 2, 3]


// toString(): Returns a string representing the specified array and its elements.
let arr32 = [1, 2, 3];
let str4 = arr32.toString();
console.log('toString()', str4); // '1,2,3'


// toLocaleString(): Returns a string representing the elements of the array, using locale-specific formatting.
let arr33 = [12345.67, 'Hello'];
let str = arr33.toLocaleString('en-US');
console.log('toLocaleString()', str); // '12,345.67,Hello'


// sort() with Compare Function: Sorts an array using a custom compare function.
let arr = [4, 2, 3, 1];
arr.sort((a, b) => a - b);
console.log(arr); // [1, 2, 3, 4]