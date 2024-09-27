// Example 1
function foo1() {
    return {
        bar: "hello"
    };
}

function foo2() {
    return //since there is nothing right after the return statement it will add a semicolon at automatically and terminate from there on making the rest of the codes unreachable.
    {
        bar: "hello"
    };
}

// Output is different for both the functions
// foo1 returns
//   {
//     bar: "hello"
//   }
// foo2 returns
//   undefined

// Example 2
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);

// Output
// 0.30000000000000004
// false

// Example 3
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// output
// array 1: length=5 last=j,o,n,e,s
// array 2: length=5 last=j,o,n,e,s


// Example 4
var list = readHugeList();

var nextListItem = function () {
    var item = list.pop();

    if (item) {
        // process the list item...
        setTimeout(nextListItem, 0);
    }
};


// Examplle 5
console.log("0 || 1 = " + (0 || 1));
console.log("1 || 2 = " + (1 || 2));
console.log("0 && 1 = " + (0 && 1));
console.log("1 && 2 = " + (1 && 2));

// Output
// "0 || 1 = 1"
// "1 || 2 = 1"
// "0 &amp;&amp; 1 = 0"
// "1 &amp;&amp; 2 = 2"

// In JavaScript, both || and && are logical operators that return the first fully-determined “logical value” when evaluated from left to right.

// The or (||) operator. In an expression of the form X||Y, X is first evaluated and interpreted as a boolean value. 
// If this boolean value is true, then true (1) is returned and Y is not evaluated, since the “or” condition has already been satisfied. 
// If this boolean value is “false”, though, we still don’t know if X||Y is true or false until we evaluate Y, and interpret it as a boolean value as well.

// Accordingly, 0 || 1 evaluates to true (1), as does 1 || 2.

// The and (&&) operator. In an expression of the form X&&Y, X is first evaluated and interpreted as a boolean value. 
// If this boolean value is false, then false (0) is returned and Y is not evaluated, since the “and” condition has already failed. 
// If this boolean value is “true”, though, we still don’t know if X&&Y is true or false until we evaluate Y, and interpret it as a boolean value as well.

// However, the interesting thing with the && operator is that when an expression is evaluated as “true”, then the expression itself is returned. 
// This is fine, since it counts as “true” in logical expressions, but also can be used to return that value when you care to do so. 
// This explains why, somewhat surprisingly, 1 && 2 returns 2 (whereas you might it expect it to return true or 1).

// Example 5
console.log(false == '0')
console.log(false === '0')

// Output
// true
// false

// In JavaScript, there are two sets of equality operators. 
// The triple-equal operator === behaves like any traditional equality operator would: evaluates to true if the two expressions on either of its sides have the same type and the same value. 
// The double-equal operator, however, tries to coerce the values before comparing them. 
// It is therefore generally good practice to use the === rather than ==. The same holds true for !== vs !=.

// Example 6
var a = {},
    b = { key: 'b' },
    c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

// The output of this code will be 456 (not 123).

// The reason for this is as follows: When setting an object property, JavaScript will implicitly stringify the parameter value. 
// In this case, since b and c are both objects, they will both be converted to "[object Object]". 
// As a result, a[b] anda[c] are both equivalent to a["[object Object]"] and can be used interchangeably. 
// Therefore, setting or referencing a[c] is precisely the same as setting or referencing a[b].

// Example 7
(function (x) {
    return (function (y) {
        console.log(x);
    })(2)
})(1);

// The output will be 1, even though the value of x is never set in the inner function. Here’s why:

// As explained in our JavaScript Hiring Guide, a closure is a function, along with all variables or functions that were in-scope at the time that the closure was created. 
// In JavaScript, a closure is implemented as an “inner function”; i.e., a function defined within the body of another function. 
// An important feature of closures is that an inner function still has access to the outer function’s variables.

// Therefore, in this example, since x is not defined in the inner function, the scope of the outer function is searched for a defined variable x, which is found to have a value of 1.

// Example 8
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function () {
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

// The code will output:

// undefined
// John Doe
// The first console.log prints undefined because we are extracting the method from the hero object, 
// so stoleSecretIdentity() is being invoked in the global context (i.e., the window object) where the _name property does not exist.

// One way to fix the stoleSecretIdentity() function is as follows:

// var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

// Example 9
var length = 10;
function fn() {
    console.log(this.length);
}

var obj = {
    length: 5,
    method: function (fn) {
        fn();
        arguments[0]();
    }
};

obj.method(fn, 1);

// Output:

// 10
// 2
// Why isn’t it 10 and 5?

// In the first place, as fn is passed as a parameter to the function method, the scope (this) of the function fn is window. 
// var length = 10; is declared at the window level. It also can be accessed as window.length or length or this.length (when this === window.)

// method is bound to Object obj, and obj.method is called with parameters fn and 1. 
// Though method is accepting only one parameter, while invoking it has passed two parameters; the first is a function callback and other is just a number.

// When fn() is called inside method, which was passed the function as a parameter at the global level, 
// this.length will have access to var length = 10 (declared globally) not length = 5 as defined in Object obj.

// Now, we know that we can access any number of arguments in a JavaScript function using the arguments[] array.

// Hence arguments[0]() is nothing but calling fn(). Inside fn now, the scope of this function becomes the arguments array, and logging the length of arguments[] will return 2.

// Hence the output will be as above.

// Example 10
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

// Output
// 1
// undefined
// 2
// var statements are hoisted (without their value initialization) to the top of the global or function scope it belongs to, even when it’s inside a with or catch block. 
// However, the error’s identifier is only visible inside the catch block. It is equivalent to:

// (function () {
//     var x, y; // outer and hoisted
//     try {
//         throw new Error();
//     } catch (x /* inner */) {
//         x = 1; // inner x, not the outer one
//         y = 2; // there is only one y, which is in the outer scope
//         console.log(x /* inner */);
//     }
//     console.log(x);
//     console.log(y);
// })();

// Example 11
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl();

// Output
// undefined

// It’s because JavaScript initialization is not hoisted.

// (Why doesn’t it show the global value of 21? 
//     The reason is that when the function is executed, it checks that there’s a local x variable present but doesn’t yet declare it, so it won’t look for global one.)

// Example 12
for (let i = 0; i < 5; i++) {
    setTimeout(function () { console.log(i); }, i * 1000);
}

// Output
// It will print 0 1 2 3 4, because we use let instead of var here. The variable i is only seen in the for loop’s block scope.


let x = 0
let y = 0
console.log(++x, y++)

const a = [1, 2, 3]
const b = [1, 2, 3]
const c = a;
console.log(a == b, a == c, b == c);

if ({}) {
    console.log(true)
} else {
    console.log(false)
}

// example 13
function outer() {
    var x = 10;
    function inner() {
        console.log(x);
    }
    return inner;
}
var innerFunc = outer();
innerFunc();

// output : 10

// example 14

function outer() {
    var x = 10;
    function inner() {
        console.log(x);
    }
    x = 20;
    return inner;
}

var innerFunc = outer();
innerFunc();

// output : 20

// example 15
function outer() {
    var x = 10;
    function inner() {
        var y = 5;
        console.log(x + y);
    }
    return inner;
}

var innerFunc = outer();
innerFunc();

// output : 15

// example 16
function outer() {
    var x = 10;
    function inner() {
        var y = 5;
        console.log(x + y);
    }
    var x = 20;
    return inner;
}

var innerFunc = outer();
innerFunc();

// output : 25

// examople 17
function outer() {
    var x = 10;
    function inner() {
        var y = 5;
        console.log(x + y);
        x = 20;
    }
    return inner;
}

var innerFunc = outer();
innerFunc();
innerFunc();

// output : 15 25

// example 18
valueA = [{'Ramesh':100},{'Guna':100}];
valueB = valueA
// valueB = {...valueA}
/* valueB = JSON.parse(JSON.stringify(valueA)); */
valueB[0].Ramesh = 500;
console.log(valueA[0].Ramesh);
console.log(valueB[0].Ramesh);

// Write a program to get the output in this format
// "0 6 11 15 18 20 21 21"
// "1 7 12 16 19 21 22"
// "2 8 13 17 20 22"
// "3 9 14 18 21"
// "4 10 15 19"
// "5 11 16"
// "6 12"


function printFormat(n) {
    for (let i = 0; i <= n; i++) {
        let a = '' + i
        let lastNum = i
        for (let j = 0; j <= n - i; j++) {
            lastNum = n - j + lastNum
            a = a + " " + lastNum
        }
        console.log(a)
    }
}
printFormat(6)

// Vation digital coding outputs
var output = (function (x) {
    delete x;
    return x;
})(0);

console.log(output);

let person = {
    name: "Leonardo"
};

let animal = {
    species: "snake"
};

Object.freeze(person);
person.name = "Lima";
console.log(person);


function a() { 
    console.log('First'); 
    b()
    .then((msg) => console.log(msg))
    .catch(err => console.log(err)); 
    console.log('Third'); 
} 

function b() { 
    return new Promise((resolve, reject) => { resolve('Second'); }); 
}