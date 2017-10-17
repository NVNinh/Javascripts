var person = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};
var person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

person2.gender = "male";
delete  person2.eyeColor;
console.log(person2);

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var myFather = new Person("Bao", "Nguyen", 50, "black");

Person.prototype.showInfo = function () {
    console.log("name: ", this.firstName, this.lastName,",age: ", this.age, " ,eye: ", this.eyeColor);
}
console.log(myFather);
myFather.showInfo();

var x1 = new Object();    // A new Object object
var x2 = new String("Hello World");    // A new String object
var x3 = new Number();    // A new Number object
var x4 = new Boolean()    // A new Boolean object
var x5 = new Array();     // A new Array object
var	x6 = new RegExp();    // A new RegExp object
var x7 = new Function();  // A new Function object
var x8 = new Date();      // A new Date object

var date = new Date('2015-03-25');
console.log(date);