
var mouse = require('./mouse');
var cat = require('./cat');

var jerry = new mouse('orange');
var mickey = new mouse('black');

console.log(jerry);
console.log(mickey);

var tom = new cat();
tom.eat(jerry);
// console.log(tom);
tom.eat(mickey);
console.log(tom);