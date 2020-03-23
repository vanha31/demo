var cat = require('./cat')

function dog(name) {
	this.name = name;
	this.stomich = [];
}

dog.prototype.eat = function(animal) {
	if(animal instanceof cat){
		this.stomich.push(animal);
	}else{
		throw new Error('Dog can only eat cat');
	}
};


module.exports = dog;