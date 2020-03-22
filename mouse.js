function mouse(color){
	this.color = color;
	this.dead = false;
};

mouse.prototype.die = function(){
	this.dead = true;
};

mouse.prototype.eat = function(){
	this.color = blue;
};

module.exports = mouse;
