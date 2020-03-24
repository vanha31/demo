function Horse(name) {
	this.name = name;
}

Horse.prototype.jum = function () {
	console.log('juming...');
}

Horse.prototype.eat = function() {
	console.log('eating...');
};

Horse.prototype.run = function () {
	console.log('runing...');
}

module.exports = Horse;