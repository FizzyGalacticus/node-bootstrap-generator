var BootstrapContainer = require('./BootstrapContainer.js');

Column = function(size) {
	this.smSize	= size;
	this.mdSize = size;
	this.lgSize = size;
};

Column.prototype = Object.create(BootstrapContainer.prototype);

Column.prototype.setSmSize = function(size) {
	this.smSize = size;
};

Column.prototype.setMdSize = function(size) {
	this.mdSize = size;
};

Column.prototype.setLgSize = function(size) {
	this.lgSize = size;
};

Column.prototype.toString = function() {
	var ret = '<div class="';

	ret += 'col-sm-' + this.smSize;
	ret += ' col-md-' + this.mdSize;
	ret += ' col-lg-' + this.lgSize;

	ret += '">' + this.getChildrenString();

	ret += '</div>';

	return ret;
};

module.exports = Column;