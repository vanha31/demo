function Horse(name) {
	this.name = name;
}
Horse.prototype.jum = function() {
	console.log('juming...');
};

module.exports = Horse;