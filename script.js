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

/* 

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

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

/*
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

/*

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
*******************************************************

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

/*

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

/*
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

/* 
*******************************************************************
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

/*****************************
* CODING CHALLENGE 2

John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

