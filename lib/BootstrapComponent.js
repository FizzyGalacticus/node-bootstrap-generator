BootstrapComponent = function(name) {
	this.name = name;
    this.colorClass = 'default';
};

BootstrapComponent.prototype.getName = function() {
    return this.name;
};

BootstrapComponent.prototype.setName = function(name) {
    this.name = name;
};

BootstrapComponent.prototype.getColorClass = function() {
    return this.colorClass;
};

BootstrapComponent.prototype.setColorClass = function(colorClass) {
    this.colorClass = colorClass;
};

module.exports = BootstrapComponent;