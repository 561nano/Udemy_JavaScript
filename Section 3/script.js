/*****************************************************************

// Lecture: Hoisting

// functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}


// variables

console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*****************************************************************/

/*****************************************************************
// Lecture: Scoping

// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}
*****************************************************************/

/*****************************************************************
// Lecture: The this keyword

//console.log(this)

caclculateAge(1985);

function caclculateAge (year) {
	console.log(2019 - year);
	console.log(this);
}


var john = {
	name: 'John Smith',
	DOB: 1990,
	caclcualateAge: function() {
		console.log(this);
		console.log(2019 - this.DOB)
		
		*//*
		function innerFunction(){
			console.log(this);
		}
		innerFunction();
		*//*
	}
}

john.caclcualateAge();

var mike = {
	name: 'Mike Smith',
	DOB: 1984
};

mike.calculateAge = john.caclcualateAge;
mike.calculateAge();
*****************************************************************/
