function Robot(type) {   //-->Constructor function
    this.type = type;
}

var flyRobot = new Robot('fly');
var diveRobot = new Robot('dive');
//flyRobot và diveRobot sẽ kế thừa kiểu Robot. Hàm function Robot(type) được gọi là constructor.
    Robot.prototype.speak = function (text) {
    console.log(this.type + "Robot says '" + text + "'");
};

flyRobot.speak('Hello World'); //sử dụng lại function speak định nghĩa ở Robot.prototype
diveRobot.speak('I swimming');
//Các đối tượng sau khi kế thừa có thể tự định nghĩa phương thức riêng cho mình
flyRobot.talk = function() {
    console.log('I am talking');
};
flyRobot.talk();

//==========================================================//

var square = function(x){
    return x*x;
};

square.description = function () {
    console.log("pow two of x");
};

square.description.help = function () {
    console.log("input one number");
};
square.description();
square.description.help();

// Handling Exception
var addSafe  = function (a, b) {
    if(typeof  a !== 'number' || typeof b !== 'number'){
        throw {
            name: 'TypeError',
            message: "addSafe requires number parameters"
        };
    }
    return a+b;
};

//addSafe(10,'a');

function arithemic(operatorString) {
    switch (operatorString){
        case '+':
            return function (a,b) {
                return a+b;
            };
        case '-':
            return function (a,b) {
                return a-b;
            };
        case '*':
            return function (a,b) {
                return a*b;
            };
        case '/':
            return function (a,b) {
                return a/b;
            };
    }
}

var x = arithemic('-')(20,10);
console.log(x);

// Function nested inside a function
function makeACupOfCoffee() {
    function boiWater(temperature) {
        console.log('Boil water at', temperature);
    }
}


