/* **********************
Section 2 notes:
Variable and data types
*/

/*
console.log('Hello Again!');

var firstName = 'John';
var lastName = 'Smith';
var age = 28;
var fullAge = true;
var job;
var _thisIsAcceptable;
var $alsoThisIsAcceptable;


// This assigns Teacher to job
job = 'Teacher'
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(fullAge);
console.log(job);
**************************/

/*
********************************************************************
Variable mutation & type coercion

var firstName = 'John';
var age = 28;
var job, isMarried;

job = 'Teacher';
isMarried = false;

console.log(firstName + ' ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver'

alert(firstName + ' ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name');
console.log(firstName + ' last name is ' + lastName);
*************************************************************************
*/

/******************************************************************** 

//Basic Operators

var n = new Date().getFullYear();
var yearJohn = n - 28;
console.log(yearJohn);

var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators

x *= 2; //x = x * 2;
console.log(x);
x+= 10; //x = x + 10;
console.log(x);
x++; //x = x + 1
console.log(x);
x--; //x = x - 1
console.log(x);
*/

/**********************************************************************
* CODING CHALLENGE 1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

/*********************************************************************
var johnHeight= 1.95, johnMass =92, johnBMI; 
var markHeight = 1.69, markMass = 78, marksBMI;

marksBMI = markMass/(markHeight * markHeight);
marksBMI = Math.round(marksBMI);

johnBMI = johnMass/(johnHeight * johnHeight);
johnBMI = Math.round(johnBMI);

console.log(marksBMI, johnBMI);

var isJohnGreater = johnBMI > marksBMI;

console.log('Is John\'s BMI higher than Mark\'s? ' + isJohnGreater);
*/

/**************************************************************************

//If and else statements

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married'){
	console.log(firstName + ' is married!');
} else {
	console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = false;
if (isMarried){ //(isMarried === true)
	console.log(firstName + ' is married!');
} else {
	console.log(firstName + ' will hopefully marry soon :)');
}

*/

/*
**************************************************************************

// revisting coding challenge number 1

var johnHeight= 1.95, johnMass =92, johnBMI; 
var markHeight = 1.69, markMass = 78, marksBMI;

marksBMI = markMass/(markHeight * markHeight);
marksBMI = Math.round(marksBMI);

johnBMI = johnMass/(johnHeight * johnHeight);
johnBMI = Math.round(johnBMI);


//console.log(marksBMI, johnBMI)
//console.log('Is John\'s BMI higher than Mark\'s? ' + isJohnGreater);


var isJohnGreater = johnBMI > marksBMI;

if (isJohnGreater){
	console.log("John has a greater BMI");
} else {
	console.log("Mark has a greater BMI");
}

***********************************************************
*/

/****************************************************************************

// Boolean logic

// and = &&
// or = ||
// not = !(varaiable < logical question)

var firstName = 'John';
var age = 30

if(age <= 12){
	console.log(firstName + ' is a boy');
} else if (13<= age && age < 20) {
	console.log(firstName + ' is a teenager');
} else if (20<= age && age <=29) {
	console.log(firstName + ' is a young man.');
} else {
	console.log(firstName + ' is a man');
}

*/ 

/***************************************************************************
// The Ternary Operator


var firstName = 'John', age = 16;
age >= 18 ? console.log(firstName + ' can drink beer'): console.log(firstName + ' can not drink beer');

// or

var drink = age >= 18 ? 'beer' : 'no beer';
console.log(drink);

// or

var drinkLogic = age >= 18;
console.log(drinkLogic);

// or

if (age >= 18) {
	console.log('beer');
} else {
	console.log('no beer');
}

// Switch Statements

var job = 'instructor';
switch(job) {
    case 'teacher':
    case 'instructor': //if either will provide the below console.log(output)
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Libsbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

// Replace if for Switch statement (uses the early if statment for age verification)

var firstName = 'John', age = 22;

switch(true){
    case age <=12:
        console.log(firstName + ' is a boy');
        break;
    case 13<= age && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case 20<= age && age <=29 :
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man');
}

*/

/********************************************************************
Truthy & Falsy value and equality operators

// falsy values: undefined, null, 0, '', "", NaN
// truthy Values: NOT falsy value

var height =23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators (Type coeracion)
// Type coeracion meaning that 23 is the same as '23'
// 23 == '23' (true) Type coeracion
// 23 === '23' (false) Has to equal the same

if (height == '23') {
    console.log('The == operator does type coercion');
}
*/

/********************************************************************************
* CODING CHALLENGE 2

John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

/*
var johnAvgScore = (89+120+103)/3, mikeAvgScore = (116+94+123)/3, maryAvgScore = (97+134+105)/3, chrisAvgScore = 112;
var tieScore = false;

console.log(johnAvgScore, mikeAvgScore, maryAvgScore, chrisAvgScore);

// This logic would of have been better with an array or table, since i do not know yet how to do that; Lets revisit this later.
//TODO "This needs to be recoded without if's and with a table/array"

if (johnAvgScore > mikeAvgScore && johnAvgScore > maryAvgScore && johnAvgScore > chrisAvgScore) {
  console.log('John wins with ' + johnAvgScore);
} else if (mikeAvgScore > johnAvgScore && mikeAvgScore > maryAvgScore && mikeAvgScore > chrisAvgScore) {
  console.log('Mike wins with ' + mikeAvgScore);
} else if (maryAvgScore > johnAvgScore && maryAvgScore > mikeAvgScore && maryAvgScore > chrisAvgScore) {
  console.log('Mary wins with ' + maryAvgScore);
} else if (chrisAvgScore > johnAvgScore && chrisAvgScore > mikeAvgScore && chrisAvgScore > maryAvgScore) {
  console.log('Chris wins with ' + equalAvgScore);
} else {
  console.log("There is a Tie");
  tieScore = true;
}

// TODO add logic for tie
*/

/**********************************************************************
// Functions
*/

/*

var currentYear = new Date().getFullYear()

function calculateAge(birthYear) { // birthYear is locked into the Function
    return currentYear - birthYear
} 
var ageJohn = calculateAge(1990), ageMike = calculateAge(1948), ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);


function yearUntilRetirement(birthYear, firstName) {
    var age = calculateAge(birthYear);
    var retirement = 65 - age;
    
    if (retirement > 0){
        console.log(firstName + ' is ' + age + ', and will retires in ' + retirement + ' years.');    
    } else {
        console.log(firstName + 'is ' + age + ', at retirement age.')
    }
    
}

yearUntilRetirement(1990, 'John');
yearUntilRetirement(1948, 'Mike');
yearUntilRetirement(1969, 'Jane');
*/

/********************************************************************************
// Function Statements and Expressions
*/

/*
// Function declaration
//function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function(job, firsName) {
    switch(job) {
        case 'teacher':
            return firsName + ' teaches kids how to code.';
        case 'driver':
            return firsName + ' drives a cab in Lisbon.'
        case 'designer':
            return firsName + ' designs beautiful wesites.'
        default:
            return firsName + ' does something else.'
    }
}

console.log(whatDoYouDo('teacher', 'John'))
console.log(whatDoYouDo('designer', 'Jane'))
console.log(whatDoYouDo('retired', 'Mark'))

//Expresions return a result
//Statement does not return immediate results
*/

/**************************************************************************
// Arrays
*/

/*
var names = ['John', 'Mike', 'Jane'];
var years = new Array(1990, 1969,1948);

// Array output
console.log(names); //list whole array
console.log(names[2]); //gets position 3
console.log(names.length); //count of array

// Mutated array data
names[1] = 'Ben'; //changes position 2 to Ben
console.log(names);

names[5] = 'Mary'; // adds 2 empty lots to the array and at possition 6 added Mary
console.log(names);

names[names.length-2] = 'Chris'; // added to position 5
console.log(names);


// Different data types

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue'); //apends to the end of the array
john.unshift('Mr.'); //addes to the begining of the array

console.log(john);

john.pop(); //removes the last item of an array
john.shift(); //removes the first item of an array

console.log(john);
console.log(john.indexOf(1990)); //returns the position in the array
console.log(john.indexOf(20)); // return -1 since it is not in the array

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';

console.log(isDesigner);
*/

/*****************************
* CODING CHALLENGE 3 *
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

/*
var noTips = [124,48,268];
var withTip = [];
var TipOnly = [];

function tipCalculator(x){
    if (x < 50) {
        TipOnly.push(x * .2)
        withTip.push(x + (x*.2))
    } else if (x >= 50 && x <=200) {
        TipOnly.push(x * .15)
        withTip.push(x + (x*.15))
    } else {
        TipOnly.push(x * .1)
        withTip.push(x + (x*.1))
    }
}

tipCalculator(noTips[0]);
tipCalculator(noTips[1]);
tipCalculator(noTips[2]);

console.log(TipOnly);
console.log(withTip);

//TODO return after learning loops
*/

/*************************************************************
// Objects and Properties (Lecture 25)
*/

/*
// Object literal
var john = {
    firstName: 'John', //firstname = Key, John = Item
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john); 

//to find an item in an Object is to use .itemKey
console.log(john.firstName);

// or ['itemKey']
console.log(john['lastName']);

//or delcare a variable (Same as above)
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;

console.log(john)

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/************************************************************
// Objects and methods (Lecture 26)
*/

/*
var john = {
    firstName: 'John', //firstname = Key, John = Item
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    currentYear: new Date().getFullYear(),
    calcAge: function() {
        this.age = this.currentYear - this.birthYear;
    }
};

john.calcAge();
console.log(john);
console.log(john.age);
*/

/*****************************
* CODING CHALLENGE 4

Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

var john = {
	name: 'John Smith',
	height: 1.95,
	mass: 110,
	calcBMI: function(){
		this.bmi = this.mass / (this.height * this.height)
	}
};

var mike = {
	name: 'Mike Miller',
	height: 1.69,
	mass: 78,
	calcBMI: function(){
		this.bmi = this.mass / (this.height * this.height)
	}
};

john.calcBMI();
console.log(john.bmi);

mike.calcBMI();
console.log(mike.bmi);

if(john.bmi > mike.bmi){
	console.log(john.name + " has a greater BMI with " + john.bmi);
} else if (john.bmi < mike.bmi) {
	console.log(mike.name + " has a greater BMI with " + mike.bmi);
} else {
	console.log(mike.name + " & " + john.name + ", have the same BMI");
}













