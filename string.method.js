var quotes = "Darkness cannot drive out darkness; " +
    "only light can do that." +
    "Hate cannot drive out hate; " +
    "only love can do that.";

console.log(quotes);

var firstPost =  quotes.indexOf("only");
var lastPost = quotes.lastIndexOf("only");

console.log("firstPost = ", firstPost ,", lastPost = ", lastPost );

var canPost = quotes.search(/ca..ot/); //Regular Expression
console.log(canPost);

var contact = "phone 01643151995 Ninh";
var phonepos = contact.search(/[0-9]+/);
console.log(phonepos);

var ilove = "I love PHP. PHP file extension is php";
var iloveNode = ilove.replace(/PHP/ig, "Node.js");
console.log(iloveNode);
// i: in casesensitive
// g: greedy

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res);

var res = str.slice(-12, -6);
console.log(res);

console.log(str.substring(7,13));

console.log(str.toLowerCase());
console.log(str.toUpperCase());

var fruits = str.split(",");
console.log(fruits.valueOf());

var ninh = "NINH";

for(var i = ninh.length-1; i >=0; i--){
    console.log(ninh.charAt(i));
}

String.prototype.reverse =  function () {
    var result = "";
    for(var i = this.length-1; i >=0; i--){
        result += this.charAt(i);
    }
    return result;
};

console.log(ninh.reverse());
console.log("Hello".reverse());
