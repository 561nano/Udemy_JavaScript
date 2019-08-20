/* Let & Const in ES6

// ES5 part 1
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6  part 1
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller'; // const is immutable this will cause an error
console.log(name6);



// ES5  part 2
function driverLicence5(passedTest) {
    console.log(firstName_ES5); //This will hoist and provide undefined
    if (passedTest) {
        var firstName_ES5 = 'John';
        var yearOfBirth_ES5 = 1990;
    }
    console.log(firstName_ES5 + ' ' + yearOfBirth_ES5 + ' ES5');
}

driverLicence5(true);

// ES6  part 2
function driverLicence6(passedTest) {
    if (passedTest) {
        console.log(firstName_ES6); //cannot be hoisted returns error
        let firstName_ES6 = 'John';
        const yearOfBirth_ES6 = 1990;
    }
    console.log(firstName_ES6 + ' ' + yearOfBirth_ES6 + ' ES6'); //since it is blocked scoped it will error O.O.S
}

//driverLicence6(true);

// ES6  part 2-1
function driverLicence6_1(passedTest) {
    let firstName_ES6_1;
    const yearOfBirth_ES6_1 = 1990; //const cannot defined outside of it's block

    if (passedTest) {
        firstName_ES6_1 = 'John';
    }
    console.log(firstName_ES6_1 + ' ' + yearOfBirth_ES6_1 + ' ES6_1'); //it is now in scope
}

driverLicence6_1(true);


// ES5  part 3

var ii = 23;
for (var ii = 0; i < 5; i++){
    console.log(i)
}
console.log(ii); // ii = 5


// ES6  part 3

let i = 23; //this will not change due to i being declared in a new block scope
for (let i = 0; i < 5; i++){
    console.log(i)
}
console.log(i); // i = 23

 */

/* Blocks and IIFEs in ES6

// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a + b); //calling outside of block scope O.O.S error
console.log(c); // var is not blocked scoped


// ES5
(function() {
    var c = 3;
})();

//console.log(c); //calling outside of function scope O.O.S error
*/

/* Strings in ES6

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return new Date().getFullYear() - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');
// ES6 template literals
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); //check the first character
console.log(n.endsWith('Sm')); //check the last character
console.log(n.includes(' ')); //are the characters in the string
console.log(`${firstName} `.repeat(5)); //repeat the log
*/

/* Arrow functions in ES6 */

const years = [1990, 1965, 1982, 1937];

// ES5
//map loops threw an array, needs to pass in a method, function or anonymous functions 'years.map(Math.sqrt)'
var ages_ES5 = years.map(function (el) {
    return new Date().getFullYear() - el;
});
console.log(ages_ES5);
console.log();

// ES6 single arguments
let ages_ES6 = years.map(el => new Date().getFullYear()-el); //This is the same as above
console.log(ages_ES6);

// ES6-1 multiple arguments
ages_ES6 = years.map((el, index) => `Age element ${index + 1}: ${new Date().getFullYear() - el}.`);
console.log(ages_ES6);

// ES6-2 multiple arguments & multi line
ages_ES6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages_ES6);