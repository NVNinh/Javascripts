var car = ["Saab", "Volvo", "BMW"];
// console.log((car.valueOf()));
//
// for(var i = 0; i< car.length; i++){
//     console.log((car[i]));
// }
//
// console.log(car.join(" and "));
car.push("Honda");
car.push("Yahmaha");
car.push("Toyota");

console.log(car.valueOf());

// while(car.length > 0){
//     car.pop();
//     console.log(car.valueOf());
// }

while (car.length > 0){
    car.shift();
    console.log(car.valueOf());
}