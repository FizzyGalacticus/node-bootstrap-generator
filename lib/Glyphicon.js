var BootstrapComponent = require('./BootstrapComponent.js'),
	icons = require('./glyphicons.js').icons;

Glyphicon = function(type, ariaHidden, ariaLabel) {
	this.type       = type;
	this.ariaHidden = ariaHidden;
	this.ariaLabel  = ariaLabel;
};

Glyphicon.prototype = Object.create(BootstrapComponent.prototype);

Glyphicon.prototype.random = function() {
	this.type = icons[Math.floor((Math.random() * icons.length) + 1)];
};

Glyphicon.prototype.setType = function(type) {
	this.type = type;
};

Glyphicon.prototype.getType = function() {
	return this.type;
};

Glyphicon.prototype.setAriaHidden = function(ariaHidden) {
	this.ariaHidden = ariaHidden;
};

Glyphicon.prototype.getAriaHidden = function() {
	return this.ariaHidden;
};

Glyphicon.prototype.setAriaLabel = function(ariaLabel) {
	this.ariaLabel = ariaLabel;
};

Glyphicon.prototype.getAriaLabel = function() {
	return this.ariaLabel;
};

Glyphicon.prototype.toString    = function() {
	var ret = '<span class="glyphicon';

	if(this.type)
		ret += ' glyphicon-' + this.type;

	ret += '"';

	if(this.ariaHidden !== undefined)
		ret += ' aria-hidden="' + (this.ariaHidden?'true':'false') + '"';

	if(this.ariaLabel)
		ret += ' aria-label="' + this.ariaLabel + '"';

	ret += '>';

	ret += '</span>';

	return ret;
};

module.exports = Glyphicon;