BootstrapComponent = function(name) {
	this.name = name;
};

BootstrapComponent.prototype.getName = function() {
	return this.name;
};

BootstrapComponent.prototype.setName = function(name) {
	this.name = name;
};

module.exports = BootstrapComponent;