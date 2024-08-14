    // import { Observable } from "rxjs";
    // const observable = new Observable( obs => obs.next('Hello'));

    // const observer2 = {
    //     next: aValue => console.log("We got " +aValue)
    // }

    // observable.subscribe(observer2);
// --------------------------------
// Using from operator from rxjs
// --------------------------------

// import { from } from 'rxjs';
// const fObs = from(["a", "b", "c"]);
// const observer = {
//     next: aValue => console.log(" We got " +aValue)
// }

// fObs.subscribe(observer);

// ----------------------------
// Using of operator from rxjs
// ----------------------------

// import { of } from 'rxjs';
// const fObs = of(["a", "b", "c"]);
// // const fObs = of(...["a", "b", "c"]); //We can use a spread operator to get the items one by one which would be equivalent to from opertor.
// const observer = {
//     next: aValue => console.log(" We got " +aValue)
// }

// fObs.subscribe(observer);

// ---------------------------
// Using Obervable from rxjs
// ---------------------------

// import { Observable } from 'rxjs';
// const observable = new Observable(obs => obs.next("Hello"));
// const observer = {
//     next: aValue => console.log("We got " +aValue)
// };

// observable.subscribe(observer);

// ----------------------------------------
// Using Pipe and Map and Filter and Reduce
// ----------------------------------------

// import {from} from 'rxjs';
// import {map, filter, reduce, find} from 'rxjs/operators';

// // const fObs = from(["a", "b", "c"]);
// const fObs = from([1,2,3,5,6,7,8,9,10]);
// const observer = {
//     next: aValue => console.log("We got " +aValue)
// };

// fObs
//     .pipe(
//         map(eachValue => eachValue * 3),
//         filter(num => num % 2 === 0),
//         reduce((startVal, currVal) => startVal + currVal)
//     )
//     .subscribe(observer);

//------------------------
// Using Subject from rxjs
// -----------------------

// import { Subject } from 'rxjs';
// const subject = new Subject();
// const s1 = subject.subscribe(value => console.log(`The data is ${value}`));
// subject.next('Skillsoft');
// const s2 = subject.subscribe(value => console.log(`${value} is The data `));
// subject.next('subject');


// ------------------------------
// using scheduler
// ---------------------------

// import { of, asyncScheduler, observeOn } from 'rxjs';
// const obsOf = of("Hello", "from", "Scheduler");
// console.log("before subscribing");
// obsOf
// .pipe(
//     observeOn(asyncScheduler)
// ).subscribe(
//     x => console.log(x)
// )
// console.log("after subscriging");


// using combinelatest

// import { combineLatest } from 'rxjs';

// const weight = of(70, 60, 65, 55);
// const height = of(1.76, 1.83, 1.80);

// const bmi = combineLatest(weight, height).pipe(
//     map(([w, h]) => w/(h*h))
// );
// bmi.subscribe(x=>console.log('BMI is', x))


// using merge, concat, forkJoin, zip, mergemap

import { merge, concat, forkJoin, zip, mergeMap } from 'rxjs';
const volts = of(110, 90, 80, 95);
const amps = of(4, 3, 5);
const merged = merge(volts, amps);
merged.subscribe(merged=>console.log('merged', merged));

const concated = concat(volts, amps);
concated.subscribe(concated=>console.log('concated', concated));

const forkJoined = forkJoin({volts, amps});
forkJoined.subscribe(fork=>console.log('forkJoined', fork))

const zipped = zip(volts, amps);
zipped.subscribe(zipped=>console.log('zipped', zipped))

// const watts = volts.pipe(
//     mergeMap(v=>amps.pipe(map(i=>v*i)))
// );
// watts.subscribe(watt=>console.log(watt))

// ---------------------------------------
// using behaviorSubject
// ---------------------------------------------
// import { BehaviorSubject } from 'rxjs';
// const bSubject = new BehaviorSubject("behavior subject by default");
// const s11 = bSubject.subscribe(value => console.log(`from behavior subject The data is ${value}`));
// bSubject.next('Skillsoft');
// const s22 = bSubject.subscribe(value => console.log(`${value} is The data `));
// bSubject.next('last subject');

// --------------------------------------------------
// using asyncSubject
// ----------------------------------------------------------
// import { AsyncSubject } from 'rxjs';
// const aSubject = new AsyncSubject();
// const s111 = aSubject.subscribe(value => console.log(`from async subject The data is ${value}`));
// aSubject.next('Skillsoft');
// const s222 = aSubject.subscribe(value => console.log(`${value} is The data `));
// aSubject.next('last subject');
// const obsFrom = from(["Tom"]);
// obsFrom.subscribe(aSubject);






// =====================================================================================================================================

// JAVASCRIPT PRACTICES

// 1. reversing a string.
// const sentence = "The quick brown fox jumps over the lazy dog";
// function reverseSentence(sentence) { 
//     return sentence.split('').reverse().join('');
// }
// console.log('Reversed string is ', reverseSentence(sentence));

// function reverseString(str) { 
//     let reversed = ''; 
//     for (let i = str.length - 1; i >= 0; i--) { 
//       reversed += str[i]; 
//     } 
//     return reversed; 
// }
// console.log('string reversed without using reverse() method', reverseString(sentence));

// // 2. sort an array of numbers in ascending order 
// const nums = [1, 4, 2, 0, 7, 9, 8];
// function ascendingSort(nums) { 
//     return nums.sort((a, b) => a-b); 
// }
// console.log('Numbers in ascending order are ', ascendingSort(nums));

// // 3. counting the occurance of each characters
// const str = "The quick brown fox jumps over a lazy dog";
// function countCharacterOccurrences(str) { 
//     const charCount = {}; 
//     for (let char of str) { 
//       charCount[char] = (charCount[char] || 0) + 1; 
//     } 
//     return charCount; 
// }
// console.log('occurances of characters are ', countCharacterOccurrences(str))

// // 4. factorial of a given number
// A factorial number is the product of all positive integers, which are equal to or less than the given number.
// const num1 = 13
// function factorial(num1) { 
//     if (num1 === 0 || num1 === 1) return 1; 
//     return num1 * factorial(num1 - 1); 
// }
// console.log('The factorial is ', factorial(num1));

// // 5. check palindrome
// const checkStr = "kotok"
// function isPalindrome(str) { 
//     return str === str.split('').reverse().join(''); 
// }
// console.log(`the string is palindrome: ${isPalindrome(checkStr)}`);

// // 6. take an array and return even array
// const arr = [2, 1, 3, 5, 6, 7, 8, 10, 11, 13, 1, 4, 5, 6, 7, 11, 34, 43, 43];
// function filterEvenNumbers(arr) { 
//     return arr.filter(num => num % 2 === 0); 
// }
// console.log('The even array is as follows ', filterEvenNumbers(arr));

// // 7. finding sum of an array using reduce
// function findSum(arr) { 
//     return arr.reduce((sum, num) => sum + num, 0);
// } 
// console.log('the sum of the array is ', findSum(arr));

// // 8. find the longest word in the sentence
// function findLongestWord(sentence) {
//     const words = sentence.split(' ');
//     let longestWord = '';

//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }

//     return longestWord;
// }

// console.log(findLongestWord('The quick brown fox jumps over the lazy dog'));

// // 9. remove duplicates from an array
// function removeDuplicates(arr) {
//     return [...new Set(arr)].sort()
// }
// console.log('new arraywithout duplictaeas', removeDuplicates(arr));

// // 10. find the missing number from an array
// const findMissingNumber = (arr) => {
//     const n = arr.length + 1;
//     const sum = (n * (n + 1)) / 2;
//     const arrSum = arr.reduce((acc, curr) => acc + curr, 0);

//     return sum - arrSum;
// }
// console.log(findMissingNumber([1,2,3,4,5,6,8,9]));

// 11. return an updated array with n number of right rotations
// function rotateRight(arr, rotations) {
//     if (rotations == 0) return arr;
//     for (let i = 0; i < rotations; i++) {
//         let element = arr.pop();
//         arr.unshift(element);
//     }
//     return arr;
// }
// console.log(rotateRight([2, 3, 4, 5, 7], 3)); // Return [4,5,7,2,3]
// console.log(rotateRight([44, 1, 22, 111], 5)); // Returns [111,44,1,22]

// // 12. find the vowels
// const findVowels = str => {
//     let count = 0
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     for (let char of str.toLowerCase()) {
//         if (vowels.includes(char)) {
//             count++
//         }
//     }
//     return count
// }
// console.log("the vowels ", findVowels('education'));

// // 13. check if a string is anagram
// function isAnagram(str1, str2) {
//     const sortedStr1 = str1.split('').sort().join('');
//     const sortedStr2 = str2.split('').sort().join('');
//     return sortedStr1 === sortedStr2;
// } 
// console.log('the strings are an anagram ',isAnagram('mine', 'imne'));

// // 14. finds the second smallest element in an array of integers
// function secondSmallest(arr) { 
//     const sortedArr = arr.sort((a, b) => a - b); 
//     return sortedArr[1]; 
// }
// console.log('the second smallest element is ', secondSmallest([2,3,4,5,6,7,8,9]));

// // 15. function that removes all falsy values (false, null, 0, “”, undefined, and NaN) from an array.
// function removeFalsyValues(arr) { 
//     return arr.filter(Boolean); 
// } 
// console.log('removing nan, false, null, 0, etc ', removeFalsyValues([0, 1,2,4,null, NaN, undefined, false]));

// // 16. finds the second largest number in an array.
// function findSecondLargest(arr) { 
//     arr.sort((a, b) => b - a); 
//     return arr[1]; 
// }
// console.log('second largest number ', findSecondLargest([1,2,3,4,5,6,8]))

// 17. Write a JavaScript program where the program takes a random integer between 1 and 10, 
//      and the user is then prompted to input a guess number. 
//      The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  
// function findMatch(num5) {
//     // Generate a random integer between 1 and 10 (inclusive)
//     var num6 = Math.ceil(Math.random() * 10);
//     // Log the generated random number to the console
//     console.log('generated number was ', num6);
//     // Prompt the user to guess a number between 1 and 10 (inclusive)
//     var gnum = num5;
//     // Check if the guessed number matches the generated random number
//     if (gnum == num6)
//         // Log a message if the guessed number matches the random number
//         console.log('Matched');
//     else
//         // Log a message if the guessed number does not match, and also provide the correct number
//         console.log('Not matched, the number was ' + gnum);
// }
// findMatch(7);

// 18. find duplicates from an array
let arr = [1,2,3,4,5,7,8,9,0,0,9,8,7,6,5,4,7,8,88,99,88,66,55,444,55,44,33]
let normalRemoveDups = arr.filter((item, index, arr1) => arr1.indexOf(item) !== index);
console.log('normal removal duplicates', normalRemoveDups);
let newArr = [...new Set(arr.filter((item, index, arr1) => arr1.indexOf(item) !== index))];
console.log('new array out of duplicates', newArr)

// 19. find maxmimum and minimum from an Array
let arr1 = [2,3,5,6,7,98,54,66,99,34,522,565];
let maxNum = arr1.reduce((pre, cur) => {return pre>cur ? pre : cur})
let minNum = arr1.reduce((pre, cur) => {return pre<cur ? pre : cur})
console.log(`the maximum number is ${maxNum} and the minimum number is ${minNum}`);

// 20. find the second largest element of an Array
let arr2 = arr1.sort((a, b) => b - a); // first way of doing it
console.log(`The second largest number is ${arr2[1]}`);

const findSecondMax = () => {
    let fMax = arr.reduce((pre, cur) => {return pre>cur ? pre : cur});
    arr.splice(arr.indexOf(fMax), 1);
    return Math.max.apply(null, arr)
}

console.log(findSecondMax());

// 21. find() vs filter()
let arre = [1,2,3,4,5,7,8,9,0,0,9,8,7,6,5,4,7,8,88,99,88,66,55,444,55,44,33]
let filtered = arre.filter((item) => item >10);
let found = arre.find((item) => item > 10);
console.log(`the filtered thing is ${filtered} and what we found is ${found}`);

// 22. count the occurances
let countOccurances =  arr.reduce((acc, val) => (acc[val] = (acc[val] || 0) + 1, acc), {});
// console.log(`the occurances are as follows ${countOccurances}`);
console.log('the occurances are as follows', countOccurances);

// 23. Debounce way of writing
const debounce = (func, delay) => {
    let timer;
    return(...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    }
}

const delayedLog = debounce((text) => console.log(text), 1000);
delayedLog('Hello From Debounce');
delayedLog('Hi Debounce here again after....')


// 24. check if the given string has all unique characters
const hasAllUniqueChars = (str) => new Set(str).size === str.length;
console.log('the given string has all the uinique characters ? ', hasAllUniqueChars('bring it on'));

// 25. find first non repeated character
let str = 'find first non repeated character';
const firstNonRepeatedChar = (str) => str.split('').find(char => str.indexOf(char) === str.lastIndexOf(char));
console.log(firstNonRepeatedChar(str));

// object and functions invoke
const obj = {
    name: 'jyoti',
    age: 21,
    greet: function() {
        console.log(`Hey ${this.name}, This function can be invoked by the obejct only.`);
    }
}
obj.greet()
// setTimeout(() => {
    
// }, timeout);

25.


// CLASSES EXAMPLES 

class RailwayForm {

    constructor(name, trainNo) {
        this.name = name;
        this.trainNo = trainNo;
    }

    submit() {
        console.log(`${this.name} your form is submitted for train number ${this.trainNo} !`)
    }

    cancel() {
        console.log(`${this.name} your form is cancelled for train number ${this.trainNo} !`)
    }

    fill(name, trainNo) {
        this.name = name
        this.trainNo = trainNo
    }    
}

let form1 = new RailwayForm('Jyotiranjan', 221144)
form1.fill('Jyotiranjan', 221144)
form1.submit();
let form2 = new RailwayForm('Jai', 334455)
form2.fill('Jai', 334455)
form2.cancel();


// function person (first, last, age) {
//     this.first = first;
//     this.last = last
//     this.age = age
// }
// person.prototype.nationality = 'Indian';
// person.prototype.name = function() {
//     return this.first + ' ' + this.last
// }
// let form3 = new person("jai", "sharma", 30)
// console.log(form3)
// console.log(form3.__proto__)
// console.log(form3.name())


// Shallow And Deep Copy
// let dev1 = { 
//     name: "jyotiranjan",
//     skills: {
//         primary: 'Angular',
//         secondary: 'Javascript'
//     }
// }

// let dev2 = dev1;
// let dev2 = Object.assign({}, dev1); //using object.assign() method to copy object
// let dev2 = {...dev1} //using spread operator to copy object
// let dev2 = JSON.parse(JSON.stringify(dev1));



// dev2.name = "Sharma"
// dev2.skills.primary = 'ReactJs'

// console.log(dev1);
// This is the output in case of shallow copy after nested object
// {
//     "name": "jyotiranjan",
//     "skills": {
//         "primary": "ReactJs",
//         "secondary": "Javascript"
//     }
// }

// this is the output using deep copy json parse
// {
//     "name": "jyotiranjan",
//     "skills": {
//         "primary": "Angular",
//         "secondary": "Javascript"
//     }
// }
// console.log(dev2);
// This is the output in case of shallow copy after nested object
// {
//     "name": "Sharma",
//     "skills": {
//         "primary": "ReactJs",
//         "secondary": "Javascript"
//     }
// }

// this is the output using deep copy json parse
// {
//     "name": "Sharma",
//     "skills": {
//         "primary": "ReactJs",
//         "secondary": "Javascript"
//     }
// }

// there is another copy after we induct functions in the nested object we can copy that as well,
//  completely to a different memory location by using deepClone() method of lodash


// async function loadScript(src) {
//     return new Promise(function(resolve, reject) {
//       let script = document.createElement('script');
//       script.src = src;
  
//       script.onload = () => resolve(script);
//       script.onerror = () => reject(new Error(`Script load error for ${src}`));
  
//       document.head.append(script);
//     });
// }

// let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

// promise.then(
//   script => alert(`${script.src} is loaded!`),
//   error => alert(`Error: ${error.message}`)
// );

// promise.then(script => alert('Another handler...'));


// async function run() {
//     try {
//         const script = await loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
//         alert(`${script.src} is loaded!`);
//         alert('Another handler...');
//     } catch (error) {
//         alert(`Error: ${error.message}`);
//     }
// }run();


import { of, switchMap } from 'rxjs';

let srcObservable= of(1,2,3,4)
let innerObservable= of('A','B','C','D')
 
srcObservable.pipe(
  switchMap( val => {
    console.log('Source value '+val)
    console.log('starting new observable')
    return innerObservable
  })
)
.subscribe(ret=> {
  console.log('Recd ' + ret);
})

// How would you implement authentication and authorization in an Angular application?

// Create an authentication service: 
// Create a service that handles user authentication. 
// This service should interact with the backend API to verify user credentials, manage user sessions, and retrieve user information. 
// You can use the built-in Angular HTTPClient module to make HTTP requests to the backend API.

// Implement routing: 
// Use the Angular Router to handle navigation within the application. 
// Define routes for each page or component in the application and implement guards to restrict access to certain routes 
// based on the user's authentication status.

// Implement guards: 
// Implement guards to restrict access to certain routes based on the user's authentication status. 
// Angular provides several types of guards, including CanActivate, CanActivateChild, CanDeactivate, and CanLoad. 
// You can use these guards to restrict access to certain routes, or to redirect users to a login page if they are not authenticated.

// Use tokens for authorization: 
// Use JSON Web Tokens (JWT) to implement authorization in your application. 
// When a user logs in, your authentication service should generate a JWT and return it to the client. 
// The client can then include this token in subsequent API requests to authenticate the user and authorize access to protected resources.

// Store tokens securely: 
// Store JWTs securely on the client side. 
// Angular provides several options for storing tokens, including local storage, session storage, and cookies. 
// Choose the option that best fits your use case and ensure that the token is stored securely.

// Protect API endpoints: 
// Implement authentication and authorization on the backend API to protect resources that require authentication. 
// Verify the JWT provided by the client and restrict access to protected resources based on the user's authorization level.