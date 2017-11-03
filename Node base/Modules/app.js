// var foo = require('./fooModule.js');
// console.log(foo);
//
// var foo2 =  require('./fooModule2');
// console.log(foo2);
//
// var Person =  require('./ClassExample').Person;
// var person =  new Person('Ninh');
// person.sayName();

const ClassExample =  require('./ClassExample');
var person = new ClassExample.Person('Ninh');
person.sayName();

class Child extends  ClassExample.Person {
    constructor(name, age){
        super(name);
        this.age = age;
    }
    sayName(){
        super.sayName();
        console.log('Name:' + this.name + ' Age:' +  this.age);
    }
}

var child = new Child('Ninh',22);
child.sayName();