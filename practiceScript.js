
const checkbox = document.querySelector("#id-checkbox");

checkbox.addEventListener("click", checkboxClick, false);

function checkboxClick(event) {
    const warn = "preventDefault() won't let you check this!\n";
    document.getElementById("output-box").innerText += warn;
    event.preventDefault();
}

// PRACTICE  JAVASCRIPT  CODINGS
// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

(function() {
    let todayDate = new Date();
    let day = todayDate.getDay();
    let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    console.log('Today is :', daylist[day])
    let hours = todayDate.getHours();
    let mins = todayDate.getMinutes();
    let secs = todayDate.getSeconds();

    let prepand = (hours >= 12) ? "PM" : "AM";
    hours = (hours >= 12) ? hours -12 : hours;

    if(hours === 0 && prepand === "PM") {
        if(mins === 0 && secs === 0) {
            hours = 12;
            prepand = 'Noon'
        } else {
            hours = 12
            prepand = 'PM'
        }
    }

    if(hours === 0 && prepand === "AM") {
        if(mins === 0 && secs === 0) {
            hours = 12;
            prepand = 'Midnight'
        } else {
            hours = 12
            prepand = 'AM'
        }
    }

    console.log("Current Time: " + hours + prepand + " : " + mins + " : " + secs); 
})()

// 2. Write a JavaScript program to print the current window contents.
function getThePageContents() {
    window.print();
}

// 3. Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
(function () {
    let todayDate = new Date();
    let date = todayDate.getUTCDate();
    let month = todayDate.getMonth();
    let year = todayDate.getFullYear();

    date = (date < 10) ? '0'+date : date;
    month = (month < 10) ? '0'+month : month;

    console.log("1) "+  todayDate.toDateString());
    console.log("2) "+  todayDate.toISOString());
    console.log("3) "+  todayDate.toJSON());
    console.log("4) "+  todayDate.toLocaleDateString());
    console.log("5) "+  todayDate.toLocaleString());
    console.log("6) "+  todayDate.toLocaleTimeString());
    console.log("7) "+  todayDate.toString());
    console.log("8) "+  todayDate.toISOString().slice(0,10));
    console.log(`Date format 1 ${month}-${date}-${year}`);
    console.log(`Date format 2 ${month}/${date}/${year}`);
    console.log(`Date format 3 ${date}-${month}-${year}`);
    console.log(`Date format 4 ${date}/${month}/${year}`);
})()

// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. 
function triangleArea() {
    let side1 =5 , side2 = 6, side3 = 7;
    let peri = (side1 + side2 + side3)/2;
    let area = Math.sqrt(peri * ((peri - side1) * (peri - side2) * (peri - side3)));

    console.log(`Area of triangle is ${area}`);
}triangleArea()

// 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.
function rotateString() {
    let str = 'jyotiranjan';
    let count = '';
    // if(str.length <= count) {
    //     setInterval(() => {
            
    //         console.log(`Rotated string ${str}`);
    //         count++
    //     }, 100);
        for(i=0; i>str.length;i++) {
            count = str[str.length - 1] + str.substring(0, str.length - 1);
        }
    // }
    console.log(`Rotated string ${count}`);
    
    // textNode.data = text;
    
}rotateString()

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  
function leapYear(ele) {
    return (ele%100 === 0) ? (ele%400 === 0) : (ele%4 === 0);
};
console.log(`This year is a leap year ? ${leapYear(new Date().getFullYear())}`);

// 7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  
// Log a separator to visually distinguish the output
// Loop through the years from 2014 to 2050 (inclusive)
function findDate() {
    for (var year = 2014; year <= 2050; year++) {
        // Create a Date object for January 1st of the current year
        var d = new Date(year, 0, 1);
        // Check if January 1st is a Sunday (where Sunday corresponds to day index 0)
        if (d.getDay() === 0) {
            // Log a message if January 1st is a Sunday for the current year
            console.log("1st January is being a Sunday  " + year);
        }
    }
}findDate()

// 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. 
// The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  
function guessNum(n1) {
    // Generate a random integer between 1 and 10 (inclusive)
    var num = Math.ceil(Math.random() * 10);
    // Log the generated random number to the console
    console.log('generated number is ', num);
    // Prompt the user to guess a number between 1 and 10 (inclusive)
    // var gnum = prompt('Guess the number between 1 and 10 inclusive');
    let gnum = n1;
    // Check if the guessed number matches the generated random number
    if (gnum == num)
        // Log a message if the guessed number matches the random number
        console.log('Matched');
    else
        // Log a message if the guessed number does not match, and also provide the correct number
        console.log('Not matched, the number entered was ' + gnum); 
}guessNum(2)

// 9. Write a JavaScript program to calculate the days left before Christmas.  
function calcChristmas() {
    let todayDate = new Date();
    let chrstmasDate = new Date(todayDate.getFullYear(), 11, 25);
    // Check if the current date is after December 25th
    if (todayDate.getMonth() == 11 && todayDate.getDate() > 25) {
        // If true, set Christmas for the next year
        chrstmasDate.setFullYear(chrstmasDate.getFullYear() + 1);
    }
    // Calculate the difference in days between today and Christmas
    var one_day = 1000 * 60 * 60 * 24; 
    let nodl = Math.ceil((chrstmasDate.getTime() - todayDate.getTime()) / (one_day));  
    return nodl;
}console.log(`Number of days remaining for christmas is ${calcChristmas()}`)

// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).  

// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
// Define a function to convert Celsius to Fahrenheit
function cToF(celsius) {
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
}
cToF(60);
fToC(45); 

// 12. Write a JavaScript program to get the website URL (loading page).  
function getURL() {
    return document.URL;
} console.log(getURL())

//13. SORTING BASED ON MULTIPLE PROPERTY VALUES
const food = [
    { name: "burger", type: "mac&cheese" },
    { name: "kiwi", type: "fruit" },
    { name: "apple", type: "fruit" },
    { name: "pizza", type: "itilian" },
    { name: "pasta", type: "itilian" },
    { name: "sponge", type: "cheese" },
    { name: "suji", type: "mac&cheese" }
]

let res1 = food.sort(function (a, b) {
    return a.type.localeCompare(b.type)
});

// console.log('sorting used localcompare', res1)
let res2 = food.filter((item) => item.type === 'fruit')
let res4 = food.sort((a,b) => (a.type > b.type) ? 1 : -1 );
console.log('listing out all the elements with same type', res2)

// let res3 = food.sort((a, b) => {
//     if (a.type === b.type) {
//         return a.name - b.name;
//     }
//     return a.type > b.type ? 1 : -1;
// });

console.log('sorting the complete array based on type as well as name', res4)

//14. How to remove duplicates from an array of objects
const booksy = [
    { id: 1, title: "C++", author: "Bjarne" },
    { id: 2, title: "Java", author: "James" },
]

const books = [
    { id: 1, title: "C++", author: "Bjarne" },
    { id: 2, title: "Java", author: "James" },
    { id: 3, title: "Python", author: "Guido" },
    
];

const newBooks = [...booksy, ...books];

const unique = newBooks.filter((obj, index) => {
    return index === newBooks.findIndex(o => obj.title === o.title);
});
console.log('unique using filter and findIndex', unique);

const duplicateEntry = newBooks.filter((obj, index) => {
    return index !== newBooks.findIndex(o => obj.title === o.title);
});
console.log('find only duplicate entry', duplicateEntry);

// 15 find the non duplicate elements and return them
const result1 = [
    {id:1, name:'Sandra', type:'user', username:'sandra'},
    {id:2, name:'John', type:'admin', username:'johnny2'},
    {id:3, name:'Peter', type:'user', username:'pete'},
    {id:4, name:'Bobby', type:'user', username:'be_bob'}
];

const result2 = [
    {id:2, name:'John', email:'johnny@example.com'},
    {id:4, name:'Bobby', email:'bobby@example.com'}
];

const result = result1.filter(o1 => !result2.some(o2 => o1.id === o2.id)); // this will give you only the elements that are not duplicate

const result4 = ([...result1,...result2]).filter((obj, index) => {
    return index !== ([...result1,...result2]).findIndex(o => obj.name === o.name);
}); //this will give you only duplicate elements out of the combined array of objects

console.log('the result returning non duplicates', result, result4);

// 16 compare array of two objects and return if values are equal
const originalArray = [
    { id: 1, name: 'darnell' },
    { id: 2, name: 'funboi' },
    { id: 3, name: 'jackson5' },
    { id: 4, name: 'zelensky' },
];

const itemsToBeRemoved = [
    { id: 2, name: 'funboi', extraProperty: 'something' },
    { id: 4, name: 'zelensky', extraProperty: 'somethingelse' },
];

let compare = originalArray.filter(item => itemsToBeRemoved.some(itemToBeRemoved => itemToBeRemoved.id === item.id))

console.log('array of two objects', compare)

// 17 How to get the difference between two arrays of objects in JavaScript
const first1 = [
    { value: "0", display: "Jamsheer" },
    { value: "1", display: "Muhammed" },
    { value: "2", display: "Ravi" },
    { value: "3", display: "Ajmal" },
]

const first2 = [
    { value: "0", display: "Jamsheer" },
    { value: "1", display: "Muhammed" },
    { value: "2", display: "Ravi" },
    { value: "3", display: "Ajmal" },
    { value: "4", display: "Ryan" }
]

const findDiff = first2.filter(({ value: id1 }) => !first1.some(({ value: id2 }) => id2 === id1));

// const aFilter = (array, array2) => {
   
//     array2.forEach(element => {
//        array = array.filter(item=> item.value === element);
//     });
//     return array;
//  }


console.log('difference between two arrays', findDiff)

// 18 find missing number in an n number of array
const missingNumber = (n, arr) => {
    let newArr1 = []
    const newArr = new Set(arr);
    for (let i = 1; i <= n; i++) {
        if (!newArr.has(i)) {
            newArr1.push(i);
        }
    }
    return newArr1;
}
console.log('missingNumber', missingNumber(8, [1,2,3,4,6,7]))

// 19 Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending and descending order.
// N = 5
// arr[]= {0 2 1 2 0}

const arr = [0,2,1,2,0]
console.log('ascending', arr.sort())
console.log('descending', arr.reverse())

// 20 Given an array arr of positive integers and another number x. 
// Determine whether two elements exist in arr whose sum is exactly x or not. 
// Return a boolean value true if two elements exist in arr else return false.

const hasArrayTwoCandidates = (arr, x) => {
    let seen = new Set()
    for(let num of arr){
        let complement = x-num
        if(seen.has(complement)){
            
            return true
        }
        seen.add(num)
    }
    return false
}
console.log('', hasArrayTwoCandidates([1,2,3,4,6,7], 5))


// 21 find the largest number in an array
const findLargest = (arr) => {
    arr.sort((a, b) => b - a);
    return arr[0];
}
console.log('largest number',findLargest([1,2,3,4,6,7]))

// 22 return an updated array with n number of right rotations
const rotateRight = (arr, rotations) => {
    if (rotations == 0) return arr;
    for (let i = 0; i < rotations; i++) {
        let element = arr.pop();
        arr.unshift(element);
    }
    return arr;
}
console.log('rotating right', rotateRight([2, 3, 4, 5, 7], 3)); // Return [4,5,7,2,3]
console.log('rotating right', rotateRight([44, 1, 22, 111], 5)); // Returns [111,44,1,22]

// 23 Given a string S, find the length of the longest substring without repeating characters.
// e.g. Input:
// S = "geeksforgeeks"
// Output:
// 7
// Explanation:
// Longest substring is
// "eksforg".

const findLongestSubstring = (str) => {
    let strArr = str.split(' ')
    let newStrArr = []
    strArr.map((item) => {
        let splitArr = item.split('')
        newStrArr.push([...new Set(splitArr)].join(''))
    })
    newStrArr.sort((a, b) => b.length - a.length)

    return newStrArr[0]
}
console.log('The largest substring without dup;licate characters is', findLongestSubstring("geeksforgeeks explanation repeating find"));

// 24 Find number of rotations a sorted array has made
function findKRotation(arr) {
    let n = arr.length; 
    let ans = Infinity, index = -1;
    for (let i = 0; i < n; i++) {
        if (arr[i] < ans) { ans = arr[i]; index = i; }
    }
    return index;
}
let arre = [4, 5, 6, 7, 0, 1, 2, 3];
let ans = findKRotation(arre);
console.log('number of rotations madde is', ans);

// 25 Write a JavaScript function to get the first and last element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
const findFirstElement = (arrt, n) => {
    if (n<0) return [];
    return arrt.slice(0, n)
}
console.log('findFirstElements',findFirstElement([4, 5, 6, 7, 0, 1, 2, 3], 3))
const findLastElement = (arrt, n) => {
    if (n<0) return [];
    return arrt.slice(Math.max(arrt.length-n, 0))
}
console.log('findFirstElements',findLastElement([4, 5, 6, 7, 0, 1, 2, 3], 3))

// 26 Joining the array into a single string with comma
let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(',')) 

//  27 Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
const editNumber = (numb) => {
    let newA = numb.toString().split('')
    let newNumStr= [];
    newA.map((item) => {
        if(item % 2 === 0) {
          newNumStr.push(item, '-')
      } else {
          newNumStr.push(item)
      }
    })
    return newNumStr.join('')
}

console.log('editNumber', editNumber(123456789))

// 28 Write a JavaScript program to find the most frequent item in an array.
let arr1r = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 2, 2,];
const findFrequentNumber = (arr1r) => {
    return Array.from([...arr1r]).reduce((prev, curr) => 
        arr1r.filter(el => el === curr).length > arr1r.filter(el => el === prev).length ? curr : prev
    )
}
console.log('most frequeent element', findFrequentNumber(arr1r));

// 29 Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
const swapCase = (str) => {
    let swapped = '';
    for(let i=0;i<str.length;i++) {
        if(str[i] === str[i].toUpperCase()) {
            swapped += str[i].toLowerCase()
        } else {
            swapped += str[i].toUpperCase()
        }
    }
    return swapped;
}
console.log(swapCase('tHE qUICK bROWN fOX'))

// 30 Print the elements of an array
const nested = [[1, 2, 1, 24], [8, 11, 9, 4]];
const printNested = () => {
    for (let i in nested) {
        console.log("row " + i);
        for (let j in nested[i]) {
            console.log(" " + nested[i][j]);
        }
    }
}
printNested()

// Flatten an array/nested array.
const flattenArray = (arr) => {
    let result = [];
    arr.forEach(element => {
        if (Array.isArray(element)) {
            result = result.concat(flattenArray(element));
        } else {
            result.push(element);
        }
    });
    return result;
}
console.log('flattened arrray', flattenArray([1, [2], [3, [[4]]], [5, 6]]))

// Using Array.prototype.flat()
// Using flat(): The flat() method is the simplest and most direct way to flatten an array. 
// By specifying Infinity as the depth, it flattens the array completely regardless of the nesting level.
const nestedArray = [1, [2, [3, [4, 5]]], 6];
const flattenedArray = nestedArray.flat(Infinity);
console.log(flattenedArray);



// Compute the Union of two arrays
let newArr1r = [1, 2, 3].concat([100, 2, 1, 10])
console.log('Union of two arrays', [...new Set(newArr1r)].sort((a,b) => a-b));

// 32 Find difference between two arrays
const diff = (arr1e, arr2e) => {
    return arr1e.filter(item => arr2e.includes(item))
}

console.log('difference of two arrays', diff([1, 2, 3],[100, 2, 1, 10]))

// 33
var array1 = "john".split('');
var array2 = array1.reverse();
var array3 = "jones".split('');
array2.push(array3);
console.log("array 1: length=" + array1.length + " last=" + array1.slice(-1));
console.log("array 2: length=" + array2.length + " last=" + array2.slice(-1));

// 34. Fibonacci series
function fibonacci(num) {
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log("Fibonacci(5): " + fibonacci(5));
console.log("Fibonacci(8): " + fibonacci(8));

// Example 35 closure
(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();


// // 4. factorial of a given number
// A factorial number is the product of all positive integers, which are equal to or less than the given number.
const num1 = 13
function factorial(num1) { 
    if (num1 === 0 || num1 === 1) return 1; 
    return num1 * factorial(num1 - 1); 
}
console.log('The factorial is ', factorial(num1));

// Get the output as 'abbbbbbbbbb' if given input as 'a1b10'

function expandString(input) {
    let output = '';
    let i = 0;

    while (i < input.length) {
        let char = input[i]; // Get the character
        i++;

        let numStr = '';
        // Collect the digits following the character
        while (i < input.length && !isNaN(input[i])) {
            numStr += input[i];
            i++;
        }

        // Repeat the character based on the number
        let count = parseInt(numStr, 10);
        output += char.repeat(count);
    }

    return output;
}

// const input = 'a1b10';
// const result = expandString(input);
// console.log(result); // Output: abbbbbbbbbb


// --------------------------------------------L2 Round Opus Client round--------------------------------------------------------------
// Merge student and department object taking id as identity critria 

// Expectation
// Example:  {
//      "id": "1",
//      "name":"Admm",
//      "semester":"2",
//      "name":"Mechanical",
//      "block": "A"
//   },

const students = [
    {
        "id": "1",
        "name": "Admm",
        "semester": "2"
    },
    {
        "id": "2",
        "name": "Kim",
        "semester": "1"
    },
    {
        "id": "3",
        "name": "John",
        "semester": "1"
    },
    {
        "id": "4",
        "name": "Tim",
        "semester": "1"
    }
];
const departments = [
    {
        "id": "1",
        "dname": "Mechanical",
        "block": "A"
    },
    {
        "id": "2",
        "dname": "Computer Science",
        "block": "B"
    },
    {
        "id": "3",
        "dname": "Information Science",
        "block": "C"
    }
];

const arr3 = students.map((item, i) => Object.assign({}, item, departments[i]))
console.log('merged array', arr3)

// what is the output?
var array1 = "john".split('');
var array2 = array1.reverse();
var array3 = "jones".split('');
array2.push(array3);
console.log("array 1: length=" + array1.length + " last=" + array1.slice(-1)); // "array 1: length=5 last=j,o,n,e,s"
console.log("array 2: length=" + array2.length + " last=" + array2.slice(-1)); // "array 2: length=5 last=j,o,n,e,s"


// ------------------------------------------------L2 Round Capgemini-------------------------------------------------------------

// example 36 find the age given a name as argument else return false
var userList = [
	{name: "Bala", age:10},
	{name: "Gunal", age:45},
	{name: "Andrew", age:55}
]

const findAge = (str) => {
    let user = userList.find(item => item.name === str);
    if(user) {
    	return user.age
    } else {
    	return false
    }
}

console.log(findAge('jai'))

// Example 37 replace 'Sun' with 'Other' using array methods
var tempArr = ['Apple','Banana', 'Orange','Sun','Kite'];

console.log(tempArr.splice(3, 1, 'other'))
console.log(tempArr)

const index = tempArr.indexOf('Sun');
if (index !== -1) {
  tempArr[index] = 'z';
}
console.log(tempArr);

// example 38 find occurances of each brand
var brandList = [
    {
        "Brand": "Honda",
        "Model": 2000
    },
    {
        "Brand": "Hero",
        "Model": 2016
    },
    {
        "Brand": "Honda",
        "Model": 2016
    },
    {
        "Brand": "Maruthi",
        "Model": 2017
    },
    {
        "Brand": "Maruthi",
        "Model": 1995
    },
    {
        "Brand": "Toyota",
        "Model": 2017
    }
]

const findOccurance = () => {
    const result = {}
    for (let item of brandList) {
        if (!result[item.Brand]) {
            result[item.Brand] = 1
        } else {
            result[item.Brand]++
        }
    }
    return result;
}
console.log(findOccurance())

// Output
// {
//     "Honda": 2,
//     "Hero": 1,
//     "Maruthi": 2,
//     "Toyota": 1
// }


// --------------------------------------------Tavant L2 round coding questions--------------------------------------------------------

// find the first 3 longest words and add a hashtag to them - question from TAVANT L2 round
// input: "Tavant is a digital products and solutions company founded in 2000, headquartered in Santa Clara"
// output: ["#headquartered", "#solutions", "#products"]

let input = "Tavant is a digital products and solutions company founded in 2000, headquartered in Santa Clara";
function convertToHashtags(input) {
    const words = input.split(' ');
    /* const maxLength = Math.max(...words.map(item => item.length)) */
    const sortedWords = words.sort((a, b) => b.length - a.length)
    const wordsList = sortedWords.slice(0, 3);

    /* const longestWord = words.filter(word => word.length === maxLength) */

    const hashtaged = wordsList.map(word => `#${word}`)

    return hashtaged
}

console.log(convertToHashtags(input))

// Fram a function to return the output when called in this manner - question from TAVANT L2 round
// "Sharma".welcome()
// Output: Welcome Sharma

String.prototype.welcome = function () {
    return `welcome ${this}`
}

const name = "Sharma"
console.log("sharma".welcome())

// --------------------------------------------------R2 Round at Accolite coding questions--------------------------------------------------

// write a code to extract the string characters at the provided indexes
/* input = "hello"
input1 = "1,2"
output = "hlo" */

function GFG_Fun(str, ...indexes) {
    let arr = str.split('')
    arr = arr.filter((value, index) => !indexes.includes(index));
    console.log(arr);
}
const removestr = GFG_Fun("hello", 1, 2)
console.log(removestr)

// find the number of occurances in the array and display in object format
/* input = [1,2,3,4,5,4,5];
ouput = {
1:1,
2:1,
3:1,
4:2,
5:2
} */

function countOccurances(arr) {
    const res = {}
    arr.forEach(item => {
        res[item] = (res[item] || 0) + 1
    })
    return res
}

const inputArr = [1, 2, 3, 4, 5, 4, 5]
const occur = countOccurances(inputArr)
console.log(occur)

// Flatten the array without using in-built flat() method
/* input = [1,2,[3,4,[5,[6]]],[7,8,[9]],10]
output = [1,2,3,4,5,6,7,8,9,10]; */
function flatten(arr) {
    return arr.reduce((acc, val) =>
        Array.isArray(val) ?
            acc.concat(flatten(val)) :
            acc.concat(val), [])
}

const tryFlatArr = [1, 2, [3, 4, [5, [6]]], [7, 8, [9]], 10]
const flattened = flatten(tryFlatArr)
console.log(flattened)

// --------------------------------------------ITC Infotech L1 Round coding questions----------------------------------------------------
// display the name from indexObj if the id is included in the indexArr
let indexArr = [1,2,3,4,5]
let indexObj = [
{
	'name': 'jai', 'id': 1
}, {
	'name': 'jack', 'id': 4
}, {
	'name': 'john', 'id': 6
}
]

indexObj.forEach((item) => {
	if(indexArr.includes(item.id)) {
  	console.log(item.name)
  }
})

// output #1
let az = 0
// let az = 1 // identifier has already been declared
console.log(az)

// output #2
let sd = 12
{
    let sd = 24 //not accessible because of block scoping.
}
console.log(sd); // output: 12

// Output #3
for(var i=0;i<3;i++) {
    console.log(i)
}
console.log(i); //output: 0 1 2 3

