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

/* Section 4 lecture 7 notes & code */
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












