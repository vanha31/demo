function cat(){
	this.stomach = [];
};

cat.prototype.eat = function(mouse){
	this.stomach.push(mouse);
	mouse.die();
};

cat.prototype.die = function(){
	return true;
}

module.exports = cat;
