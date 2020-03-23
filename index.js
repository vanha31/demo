var dog = require('./dog')
var mouse = require('./mouse');
var cat = require('./cat');

var jerry = new mouse('orange');
var mickey = new mouse('black');
var cat =  new cat();
var dog = new dog('jeck');
try{
	dog.eat(mickey);
}catch(err){
	console.log('Error: dog only eat cat OKI!');
} 

console.log(dog);
