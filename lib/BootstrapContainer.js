var BootstrapComponent = require('./BootstrapComponent.js');

BootstrapContainer = function() {
	this.children = [];
};

BootstrapContainer.prototype = Object.create(BootstrapComponent.prototype);

BootstrapContainer.prototype.addChild = function(child) {
	this.children.push(child);
};

BootstrapContainer.prototype.getChildrenString = function() {
	var ret = '';

	for(var i = 0; i < this.children.length; i++) {
		ret += this.children[i].toString();
	}

	return ret;
};

module.exports = BootstrapContainer;