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

/* Arrow functions: Basic in ES6

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
*/

/* Arrow Functions: Lexical 'this' Keyword in ES6

// ES5
var box_ES5 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        // this is a workaround since a function with a function will point to the global scope and not to the object scope
        var self = this;

        document.querySelector('.green').addEventListener('click', function () {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
};

//box_ES5.clickMe(); // This will provide undefined

// ES6
const box_ES6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
};

box_ES6.clickMe(); // This will provide green and 1

// ES6-1
const box_ES6_1 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            //
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
};

//box_ES6_1.clickMe(); // This will provide undefined


function Person(name) {
    this.name = name;
}

var friends = ['Bob', 'Jane', 'Mark'];

// ES5
Person.prototype.myFriends_ES5 = function (friends) {
    var arr = friends.map(function (el) {
        return this.name + ' is  friends with ' + el; //this will point to the global object without the .bind(this) method
    }.bind(this));
    console.log(arr);
};

new Person('John').myFriends_ES5(friends);


//ES6
Person.prototype.myFriends_ES6 = function (friends) {
    var arr = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
};

new Person('Mikey').myFriends_ES6(friends);

 */

/* Destructuring in ES6

//ES5
var john = ['John', 26];
var name_ES5 = john[0];
var age_ES5 = john[1];


// ES6 array
const [name_ES6, age_ES6] = ['John', 26];
console.log(name_ES6);
console.log(age_ES6);


// ES6 objects
const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

// ES6 objects with different arguments names
const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);


// ES6 part 2
function calcAgeRet(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age, retirement] = calcAgeRet(1990);
console.log(age);
console.log(retirement);

*/

/* Arrays in ES6
const boxes = document.querySelectorAll('.box');

// ES5 NodeList => Array
var boxesArr_ES5 = Array.prototype.slice.call(boxes); //This is a hack to convert NodeList to array
boxesArr_ES5.forEach(function (cur) {
    cur.style.backgroundColor = 'pink';
});

// ES6 NodeList => Array
const boxesArr_ES6 = Array.from(boxes); // TODO NodeList to Array (Proper way)
boxesArr_ES6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// ES5 For Loop
for (var i = 0; i < boxesArr_ES5.length; i++) {
    if (boxesArr_ES5[i].className === 'box blue') {
        continue;
    }
    boxesArr_ES5[i].textContent = 'I changed to blue!'
}

// ES6 For of Loop
for (const cur of boxesArr_ES6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue Again!'
}

// ES5 Find Index & Find true value
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function (cur) {
    return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6 Find Index & Find true value
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

*/

/* Spread operator in ES6

function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

var ages = [18, 30, 12, 21];

//ES5
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'pink');

 */

/* Rest parameters in ES6

//ES5
function isFullAge_ES5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function (cur) {
        console.log((new Date().getFullYear() - cur) >= 18);
    })
}

isFullAge_ES5(1990, 1999, 1965, 2016, 1987);

//ES6
function isFullAge_ES6(...years) {
    years.forEach(cur => console.log( (new Date().getFullYear() - cur) >= 18));
}

console.log("------------------------");
isFullAge_ES6(1990, 1999, 1965, 2016, 1987);


//ES5
function isFullAge_ES5_1(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function(cur) {
        console.log((new Date().getFullYear() - cur) >= limit);
    })
}

console.log("------------------------");
isFullAge_ES5_1(16, 1990, 1999, 1965, 2016, 1987);

//ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log( (new Date().getFullYear() - cur) >= limit));
}

console.log("------------------------");
isFullAge6(16, 1990, 1999, 1965, 2016, 1987);

 */

/* Default Parameters in ES6

// ES5
function SmithPerson_ES5(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'american' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john_ES5 = new SmithPerson_ES5('John', 1990);
var emily_ES = new SmithPerson_ES5('Emily', 1983, 'Diaz', 'spanish');

console.log(john_ES5);
console.log(emily_ES);

//ES6
function SmithPerson_ES6(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

let john_ES6 = new SmithPerson_ES6('John', 1990);
let emily_ES6 = new SmithPerson_ES6('Emily', 1983, 'Diaz', 'spanish');

console.log(john_ES6);
console.log(emily_ES6);

 */

/* Maps in ES6

const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

console.log(question);
console.log("-------------------------------------------");
console.log(question.get('question'));
//console.log(question.size);


if(question.has(4)) {
    //question.delete(4);
    //console.log('Answer 4 is here')
}

//question.clear();


//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));


for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));

*/

/* Classes in ES6

//ES5
var Person_ES5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person_ES5.prototype.calculateAge = function () {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
};

var john5 = new Person_ES5('John', 1990, 'teacher');

//ES6
class Person_ES6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there!');
    }
}

const john_ES6 = new Person_ES6('John', 1990, 'teacher');

Person_ES6.greeting();

*/

/* Classes and subclasses in ES6

//ES5
var Person_ES5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person_ES5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};

var Athlete_ES5 = function(name, yearOfBirth, job, olymicGames, medals) {
    Person_ES5.call(this, name, yearOfBirth, job);
    this.olymicGames = olymicGames;
    this.medals = medals;
};

Athlete_ES5.prototype = Object.create(Person_ES5.prototype);


Athlete_ES5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
};


var johnAthlete5 = new Athlete_ES5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();


//ES6
class Person_ES6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete_ES6 extends Person_ES6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete_ES6 = new Athlete_ES6('John', 1990, 'swimmer', 3, 10);

johnAthlete_ES6.wonMedal();
johnAthlete_ES6.calculateAge();

 */

/* Codding Challenge

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets.
All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (formula: number of trees/park area)
2. Average age of each town's park (formula: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge.
If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters,
maps, arrow functions, destructuring, etc.

*/

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area; //km2
        this.numTrees = numTrees
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`)
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1894, 2.9, 3541),
    new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2008, 2.7, 2),
    new Street('4th Street', 2015, 0.8),
    new Street('Sunset Boulevard', 1982, 2.5, 5)];

function calc(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    return [sum, sum / arr.length];
}

function reportParks(p) {

    console.log('-----PARKS REPORT-----');

    // Density
    p.forEach(el => el.treeDensity());

    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

    // Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);

}

function reportStreets(s) {

    console.log('-----STREETS REPORT-----');

    //Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

    // Classify sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);



















