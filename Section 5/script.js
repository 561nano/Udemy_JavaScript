/* Section 4 lecture 2 - 3 notes & Code
// Function constructor

/!*var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};*!/

// In function constructors they start off with capital letters
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

// TODO research inheritance
// prototype = inheritance in O.O.P
Person.prototype.calculateAge = function () {
    console.log(2019 - this.yearOfBirth);
};

//inheritance also works for properties, tho it is not common
Person.prototype.lastName = 'Smith';

/!*
 when new is used, it creates a new EMPTY object

 now when a new empty object is created,
 the function with "this" will not mean to the global object,
 but to the new object created with the "new" code.
*!/
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

/*
 Section 4 lecture 4 notes.
 In the object john >>> __proto__ >>> __proto__
 This is the prototype property of the object constructor.
 All instances are from objects >> objects
 */

/* Section 4 lecture 5 notes & code
// Object.create

var personProto = {
    calculateAge: function () {
        console.log(2019 - yearOfBirth);
    }
};

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

// You can crete the same as above in Object.create (see below)

var jane = Object.create(personProto,
    {
        name: {value: 'Jane'},
        yearOfBirth: {value: 1969},
        job: {value: 'designer'}
    });
    */

/* Section 4 lecture 6 notes & code
// Primitive vs Objects

// Primitive = numbers, strings, boolean, undefined & null
// Object = everything - primitive

var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);

// Objects
var obj1 = {
    name: 'John',
    age: '26'
};

var obj2 = obj1;

//This will change obj2.age to 27 since it only a object of obj2.
//requesting obj2.age = 27 and not 26 as it was set prior.
obj1.age = 27;

//Functions
var age = 27;
var obj = {
    name: 'Christian',
    city: 'West Palm Beach'
};

// Since a is a primitive, it can not be manipulated to change value outside the function
// Since b is a object. This will effect the output outside of the function.
function change(a, b) {
    a = 30;
    b.city = 'San Juan';
}

change(age, obj);
console.log(age);
console.log(obj.city);
 */

/* Section 4 lecture 7 notes & code
// Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

//This would loop threw the array and run the function that we would like and return the results
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    var a = new Date().getFullYear();
    return a - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages,maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);
*/

/* Section 4 lecture 8 notes & code
// Functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log(name + ', what subject do you teach?');
        }
    } else {
        return function (name) {
            console.log(name + ', what is it that you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designQuestion = interviewQuestion('designer');

teacherQuestion('John');
designQuestion('John');

//Calling the function immediately without the need to store it
interviewQuestion('Soccer Player')('Billy');
 */

/* Section 4 lecture 9 notes & code
// Immediately Invoke function expressions (IIFE)

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();

//IIFE Function (Same as above)
//IIFE helps with data privacy, the below function no one will know the score
(function () {
        var score = Math.random() * 10;
        console.log(score >= 5);
    })();

//adding parameters
(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
// Adding the parameters in the last parentheses
//a new scope from the outside scope
//You can call iife once
 */

/* Section 4 lecture 10 notes & code
//Closures

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function (yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceLand = retirement(67);

//retirement(66)(1990);
retirementUS(1990);
retirementGermany(1990);
retirementIceLand(1990);

//  Rewrite this with closures
// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function (name) {
//             console.log(name + ', can you explain what UX design is?');
//         }
//     } else if (job === 'teacher') {
//         return function (name) {
//             console.log(name + ', what subject do you teach?');
//         }
//     } else {
//         return function (name) {
//             console.log(name + ', what is it that you do?');
//         }
//     }
// }

function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you explain what UX design is?');
        } else if (job === 'teacher') {
            console.log(name + ', what subject do you teach?');
        } else {
            console.log(name + ', what is it that you do?');
        }
    }
}

interviewQuestion('teacher')('John');
*/

/* Section 4 lecture 11 notes & code
// Bind, call & apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

var mike = {
    name: 'Mike',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

// This allow us to use john.presentation as the main object for emily
// This is called "Method Borrowing"
//call = apply - array
john.presentation.call(emily, 'friendly', 'afternoon');

//apply = call + array
//john.presentation.apply(emily, ['friendly', 'afternoon']);

// bind is the same as call, but it does not call the function
// It allows us to store the function and store it for later with predefined parameters
var johnFriendly = john.presentation.bind(john,'friendly');

// This is called carrying a function with predefined parameters
johnFriendly('morning');
johnFriendly('night');



// example of bind
var years = [1990, 1965, 1937, 2005, 1998];

//loop function for an array
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    var a = new Date().getFullYear();
    return a - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years,calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(fullJapan);
console.log(ages);
*/

/*// CODING CHALLENGE \\

--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

---------------------------------------- Expert level ----------------------------------------

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/