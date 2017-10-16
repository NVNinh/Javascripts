var age = 10;
const pi = 3.14158;
console.log(typeof  pi);

if(parseInt((age))){
    console.log("Age is number");
}

var myage = "AAA";
var myage2 = parseInt((myage));

// Boolean
var nodejs_slow = false;
var iojs_fast = true;

if(nodejs_slow){
    console.log("Node.js is slow");
}
else {
    console.log("Node.js is fast");
}

if(!nodejs_slow){
    console.log("Node.js is not slow");
}

if(!nodejs_slow && iojs_fast){
    console.log("Both Node.js and iojs ar fast");
}

// String
var best_film = "Gone with the wind";
var best_hero = "Bat man";
var best_player = 'Ronglon123';
var my_folder = "/Volumes/Macbackup/Data";

//Object
var NinhNV = {firstName: "Ninh",lastname: "Nguyen" };
var book = {name: "Jave Cookbook", author: NinhNV};
console.log(book.name);
book.price = 100;
console.log(book);
