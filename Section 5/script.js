// Function constructor

/*var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};*/

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

/*
 when new is used, it creates a new EMPTY object

 now when a new empty object is created,
 the function with "this" will not mean to the global object,
 but to the new object created with the "new" code.
*/
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);