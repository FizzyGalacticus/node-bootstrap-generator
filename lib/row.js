Row = function(cols) {
	this.columns = (cols === undefined ? []:cols);

	this.addColumn = function(column) {
		this.columns.push(column);
	};

	this.getColumnsString = function() {
		var ret = '';

		for(var i = 0; i < this.columns.length; i++)
			ret += this.columns[i].toString();

		return ret;
	};

	this.toString = function() {
		var ret = '<div class="row">';

		ret += this.getColumnsString();

		ret += '</div>';

		return ret;
	};
};