/* Let & Const

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





