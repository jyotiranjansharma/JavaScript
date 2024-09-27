// find the first 3 longest words and add a hashtag to them - question from TAVANT L2 round
// input: "Tavant is a digital products and solutions company founded in 2000, headquartered in Santa Clara"
// output: ["#headquartered", "#solutions", "#products"]


function addHashtags() {
    let input = "Tavant is a digital products and solutions company founded in 2000, headquartered in Santa Clara"
    let words = input.split(' ');
    const sortedWords = words.sort((a,b) => b.length - a.length)
    const longestWords = sortedWords.slice(0, 3);
    return longestWords.map(word => `#${word}`)
}
// console.log(addHashtags())

// Fram a function to return the output when called in this manner - question from TAVANT L2 round
// "Sharma".welcome()
// Output: Welcome Sharma

String.prototype.welcome = function() {
    return `Welcome ${this}`
}
// console.log("Sharma".welcome())

// find occurances of each brand {brand: count}
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

function findOccurances() {
    const result = {}
    brandList.map((item) => {
        if(!result[item.Brand]) {
            result[item.Brand] = 1
        } else {
            result[item.Brand]++
        }
    })
    return result
}
// console.log('Brnads', findOccurances())

// replace 'Sun' with 'Other' using array methods in an array ['Apple','Banana', 'Orange','Sun','Kite']
let tempArr = ['Apple','Banana', 'Orange','Sun','Kite'];
// console.log(tempArr.splice(3, 1, 'other'), tempArr)

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

const mergedArr = students.map((item, index) => Object.assign({}, item, departments[index]))
// console.log('Merged array', mergedArr)

// Flatten an array/nested array. [1, [2], [3, [[4]]], [5, 6]]
const nestedArray = [1, [2], [3, [[4]]], [5, 6]]
const flattened = nestedArray.flat(Infinity)
// console.log('flattened array', flattened)

// Print the elements of an array [[1, 2, 1, 24], [8, 11, 9, 4]]
const printArray = () => {
    let nestedArray = [[1, 2, 1, 24], [8, 11, 9, 4]]
    for(let i in nestedArray) {
        console.log('row', i)
        for(let j in nestedArray[i]) {
            console.log(" " + nestedArray[i][j])
        }
    }
}
// console.log(printArray())

// Write a JavaScript program that accepts a string as input and swaps the case of each character. 
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
const swapCase = () => {
    let input = "The Quick Brown Fox";
    let swappedInput = ''
    for(let i=0;i<input.length;i++) {
        if(input[i] === input[i].toUpperCase()) {
            swappedInput += input[i].toLowerCase()
        } else [
            swappedInput += input[i].toUpperCase()
        ]
    }
    return swappedInput
}
// console.log(swapCase())

// programming question on array and objects , finding and removing duplicates from them
let inputA = [1, 2, 3, 4, 2, 3, 5]
// console.log('remove duplicates using New Set', [...new Set(inputA)])

let inputO = [
    { name: "John", age: 25 },
    { name: "Jane", age: 22 },
    { name: "John", age: 30 },
    { name: "Mike", age: 28 }
]

const newObj = inputO.filter((item, index) => {
    return index !== inputO.findIndex(i => item.index === i.index)
})
// console.log(newObj)

// Remove Duplicate Keys in an Object
let InputK = {
    a: 1,
    b: 2,
    c: 1,
    d: 3,
    e: 2
}

function removeDups(InputK) {
    const newO = new Set()
    const res = {}

    for(const key in InputK) {
        const val = InputK[key]
        if(!newO.has(val)) {
            newO.add(val)
            res[key] = val
        }
    }
    return res
}

// console.log(removeDups(InputK))


function flattenArr(tryFlatArr) {
    return tryFlatArr.reduce((acc, val) => 
        Array.isArray(val) ?
            acc.concat(flattenArr(val)) :
            acc.concat(val), []
    )
}
const tryFlatArr = [1, 2, [3, 4, [5, [6]]], [7, 8, [9]], 10]
// console.log('flattened array', flattenArr(tryFlatArr))

// Sorting based on multiple factors
const food = [
    { name: "burger", type: "mac&cheese" },
    { name: "kiwi", type: "fruit" },
    { name: "apple", type: "fruit" },
    { name: "pizza", type: "itilian" },
    { name: "pasta", type: "itilian" },
    { name: "sponge", type: "cheese" },
    { name: "suji", type: "mac&cheese" }
]

// console.log(food.sort((a, b) => {return a.name > b.name ? 1 : -1}))
// console.log(food.sort((a, b) => {return a.type > b.type ? 1 : -1}))

// Remove duplicates from an array of objects
const booksy = [
    { id: 1, title: "C++", author: "Bjarne" },
    { id: 2, title: "Java", author: "James" },
]

const books = [
    { id: 1, title: "C++", author: "Bjarne" },
    { id: 2, title: "Java", author: "James" },
    { id: 3, title: "Python", author: "Guido" },
    
];

const rmvDup = books.filter(item => booksy.some(ite => ite.id === item.id))
const combinedBooks = [...new Set(booksy), ...new Set(books)];
const removeDupsy = combinedBooks.filter((item, index) => {
    return index === combinedBooks.findIndex(ite => ite.id === item.id)
})
// console.log(removeDupsy, rmvDup)

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

const rmDups = result1.filter(item => result2.some(ite => ite.id === item.id))
// console.log(rmDups);

// difference between two arrays of objects in JavaScript
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

const diff = first2.filter(item => !first1.some(ite => item.value === ite.value))
// console.log(diff)

// find the most frequent item in an array
let arr1r = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 2, 2];
const findFeq = () => {
    return arr1r.reduce((pre, cur) => 
        arr1r.filter(el => el === cur).length > arr1r.filter(el => el === pre).length ? cur : pre
    )
}
// console.log(findFeq())

// ========================================================================================================================================================================================
// 1. Create a class and access a method from the same class.
class Account {
    constructor(nam, since, type) {
        this.nam = nam;
        this.since = since;
        this.type = type
    }

    nameDisplay() {
        console.log(`Hi, ${this.nam}. Your ${this.type} account is active with us since ${this.since} years.`)
    }
}



// 2. Inherit a class and call some new methods.
class Details extends Account {

    constructor(nam, since, type, accNo, branchName, card) {
        super(nam, since, type)
        this.accNo = accNo
        this.branchName = branchName
        this.card = card
    }

    details() {
        console.log(`Your ${this.branchName} branch has dispatched a new ${this.card} card to your address associated with your account no ${this.accNo}`);
    }

    displayDetails() {
        super.nameDisplay()
        this.details()
    }
}
// let ganesh = new Account("Ganesh", 5, "savings");
// ganesh.nameDisplay();

const jai = new Details("Ganesh", 5, "savings", 123456, 'Whitefield', 'Debit')
jai.displayDetails();

// 3. find duplicate elements in a given array
const simpleArr = [1,2,3,3,3,4,4,5,5,6,7,8,9,0,0,0,8,7,5,3,2];
const dupFound = simpleArr.filter((item, index, arr) => arr.indexOf(item) !== index);
console.log('duplicates found', dupFound);

// 4. Find the count of duplicate elements in an array
const dupsCount = simpleArr.reduce((acc, cur) => {
    if(acc[cur] === undefined) {
        acc[cur] = 1
        return acc
    } else {
        acc[cur]++
        return acc
    }
}, {})

console.log('the count are as follows', dupsCount);

// 5. Difference between Object.freeze() vs const
const stage = 'change'
stage = 'modified'

console.log(stage)

let obj = {
    stage: 'change'
}
Object.freeze(obj)
obj.stage = 'modified'

console.log(obj);

