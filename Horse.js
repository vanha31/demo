function Horse(name) {
	this.name = name;
}
Horse.prototype.run = function () {
	console.log('runing...');
}

module.exports = Horse;