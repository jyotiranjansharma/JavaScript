// CLOSURE : Functions that are bundled with it's lexical environment. 
// It is a feature in javascript where the inner functions have aceess to outer functions variables.

// Example 1
let names = ['jai', 'viru', 'thakur'];
function namesDisplay() {
    let index = 0;
    return function namesUse() {
        if (index < names.length) {
            console.log(names[index])
        } else {
            console.log('end of names')
        }
        index++;
    }
}
const nameChe = namesDisplay(names);
nameChe()
nameChe()
nameChe()
nameChe()

// Example 2
function close() {
    let a = 10;
    return function () {
        console.log('outer cdx', a)
    }
}
const closeF = close()
closeF();

// Example 3
var x = 10;
function foo() {
    var y = 20;
    function bar() {
        var z = 15;
        return x + y + z; //values available due to closure.
    }
    return bar;
}
var test = foo();
console.log('Total value is', test());

// Example 4
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);

function outest() {
    var c = 12;
    function outer(b) {
        function inner() {
            console.log(a, b, c); // try printing b and c  here
        }
        let a = 10; // let instead of var
        return inner;
    }
    return outer;
}

let a = 100;
// Passing argument here 
var close = outest()("Hi Closures"); // this will give you outer function
close(); // this will give you inner function and equivalent

// Example 5 Counter
function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getValue: function() {
            return count;
        }
    };
}

const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getValue());  // 1