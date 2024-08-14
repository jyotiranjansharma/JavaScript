// Implement a debounce function in JavaScript that limits the frequency of a function’s execution 
// when it’s called repeatedly within a specified time frame.

// By delaying the execution of the debounce function until the specified time frame has passed, the frequency can be limited. 

function debounce(func, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(func, delay);
    };
}

// 2. Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order. 

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

// const sorted = people.sort((a, b) => {return a.age > b.age ? 1 : -1})

function sortByKey(arr, key) {
    return arr.sort((a, b) => a[key] - b[key])
}
console.log('sorted with arr, key function', sortByKey(people, 'name'))
// console.log('sorted in ascending', sorted);

// 3. Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original. 
const original2 = { a: 1, b: { c: 2 } };
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj))
}
console.log('deep clone using json parse', deepClone(original2));

// 4. Write a recursive function to calculate the factorial of a given number. 
function factorial(num) {
    if(num <= 1) return 1
    return num * factorial(num - 1)
}
console.log('factorial of the given number is', factorial(9))

// 5. Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions.
function mergeArrays(arr1, arr2) {
    const mergedArr = []
    let i = 0;
    let j = 0;

    while(i<arr1.length && j<arr2.length) {
        if(arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i])
            i++
        } else {
            mergedArr.push(arr2[j])
            j++
        }
    }

    while(i<arr1.length) {
        mergedArr.push(arr1[i])
        i++
    }

    while(j<arr2.length) {
        mergedArr.push(arr2[j])
        j++
    }

    return mergedArr;
}

const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6];
const merged = mergeArrays(array1, array2);

console.log(merged); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
console.log([...array1, ...array2]);

