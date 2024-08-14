
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is from promise');
    }, 5000);
})

// CLOSURE
function x () {
    var a = 10;
    return function b() {
        console.log(a)
    }
    // b();
}
// x();
var ac = x();
console.log(ac);
ac();

// DEBOUNCE
let counter = 0;
function getData() {
    // p.then(res=>console.log(res))
    // console.log('Namaste Javascript')
    console.log('fetching data......', counter++)
}

const debounce = function(fn, delay) {
    let timer;
    return function() {
        let context = this, 
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(context, ...args);
        }, delay);
    }
}

const betterFunction = debounce(getData, 300);

// getData()

// OBJECT CREATION
var object = new Object()
console.log(object);

function person(name){
    this.name = name
    this.place = 'Mithila'
}
let person1 = new person('Ram')
console.log(person1);

const orgObject = { company: 'XYZ Corp'};
const carObject = { name: 'Toyota'};
const staff = Object.assign({}, orgObject, carObject);
console.log('staff', staff);

// SLICE METHOD
let arrInt = [1,2,3,4,5,6,7];
let arrInt1 = [1,2,3,4,5,6,7];
console.log('slice method applied', arrInt.slice(3))
console.log('slice method applied', arrInt.slice(3,5))

console.log('splice method applied', arrInt.splice(3,1), arrInt)
console.log('splice method applied', arrInt.splice(3), arrInt)
arrInt1.unshift(6); arrInt1.push(9); console.log('arrInt1', arrInt1)

// HIGHER ORDER FUNCTION
const firstOrderFunc = () => console.log("Hello, I am a First order function");
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);

function add(item, items = []) {
    items.push(item);
    return items;
}

console.log(add("Orange"));
console.log(add("Apple"));


// function userDetails(username) {
// if (username) {
//     console.log(salary); // undefined due to hoisting   
//     console.log(age); // ReferenceError: Cannot access 'age' before initialization
//     let age = 30;
//     var salary = 10000;
// }
//     console.log(salary); //10000 (accessible due to function scope)
//     console.log(age); //error: age is not defined(due to block scope)
// }
// userDetails("John");

// async function getData() {
//     return "Namaste";
// }

// const data = getData();
// console.log(data);

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('this is from promise');
//     }, 5000);
    
// })

// p.then(res=>console.log(res))
// .catch(err=>console.log(err));

const api_url = 'https://api.github.com/users/jyotiranjansharma'

let promise1 = new Promise(function(resolve, reject) {
    resolve("I am surely going to get resolved!");
  
    reject(new Error('Will this be ignored?')); // ignored
    resolve("Ignored?"); // ignored
})

async function handlePromise() {
    // console.log("Hello this is the first execution")
    // JS engine waits for the promise to resolve here
    const val = await p;
    console.log('namaste Javascript')
    console.log(val);

    const val2 = await promise1;
    console.log('namaste Javascript 2')
    console.log(val2);
    const data = await fetch(api_url);
    const jsonVal = await data.json();
    console.log(jsonVal);
}
handlePromise();



const numbers = [1,2,3];
numbers[10] = 11;
console.log(numbers);

const numberrs = [1,2,3,4,5,6,7,8];
const findSum = numberrs
.map(item => item*2)
.filter((item) => item%2 === 0)
.reduce((sum, num) => sum + num, 0);

console.log('findSum is ', findSum);


let arr = [1,2,3,4,6,7,8,9, 78, 89, 98];
console.log('popped', arr.pop());
console.log('pushed',arr.push(0));
console.log('shifted',arr.shift());
console.log('unshifted',arr.unshift(5));
console.log(arr)

for(let i in arr) {
console.log('in for-in loop', i)
}

for(let j of arr) {
console.log('in for-of loop', j)
}

let m2 = arr.forEach((i) => i)
console.log(m2)

let m1 = arr.map((item) => item)
console.log(m1)

let obj = {
	a: 10,
  b:20,
  c: function() {
  	return this.a+this.b
  }
}
console.log(obj.c())


// CLOSURES BEST EXAMPLE
let names = ['jay', 'bay', 'jau']
function name1(names) {
    let index = 0;
    return function namew() {
        if(index < names.length) {
            console.log(names[index]);
        } else {
            console.log('not accounte for')
        }
        index++
    }
}

const abc = name1(names);
abc();
abc();
abc();
abc();

function createFunctionFromArray(array) {
    let index = 0;
    return function() {
        // This returned function can access the 'array' variable due to closure
        if(index < array.length) console.log("Array:", array[index]);
        index++
    };
}

// Example usage:
const myArray = ['jay', 'bay', 'jau'];
const myFunction = createFunctionFromArray(myArray);

// Call the returned function
myFunction(); // Output: Array: [1, 2, 3, 4, 5]
myFunction()
myFunction()


let two = new Promise((resolve, reject) => {
    resolve('first')
})


async function one() {
    try {
        let p = await two();
        three();
    } catch (error) {
        four();
    }
    

}

// SORTING BASED ON MULTIPLE PROPERTY VALUES
const food = [
    { name: "burger", type: "mac&cheese" },
    { name: "kiwi", type: "fruit" },
    { name: "apple", type: "fruit" },
    { name: "pizza", type: "itilian" },
]

let res1 = food.sort(function (a, b) {
    return a.type.localeCompare(b.type)
});

console.log(res1)
let res2 = food.filter((item) => item.type === 'fruit')

console.log(res2)

let res3 = food.sort((a, b) => {
    if (a.type === b.type) {
        return b.name - a.name;
    }
    return a.type > b.type ? 1 : -1;
});

console.log(res3)