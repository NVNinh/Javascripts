module.exports.Person = class {
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log(this.name);
    }
};