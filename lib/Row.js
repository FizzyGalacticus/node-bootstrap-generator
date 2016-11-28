var BootstrapContainer = require('./BootstrapContainer.js');

Row = function(cols) {
	BootstrapContainer.call(this, 'Row');
    
    this.columns = (cols === undefined ? []:cols);
};

Row.prototype = Object.create(BootstrapContainer.prototype);

Row.prototype.addColumn = function(column) {
	this.columns.push(column);
};

Row.prototype.getColumnsString = function() {
	var ret = '';

	for(var i = 0; i < this.columns.length; i++)
		ret += this.columns[i].toString();

	return ret;
};

Row.prototype.toString = function() {
	var ret = '<div class="row">';

	ret += this.getColumnsString();

	ret += '</div>';

	return ret;
};

Row.prototype.addChild = Row.prototype.addColumn;
Row.prototype.getChildrenString = Row.prototype.getColumnsString;

module.exports = Row;