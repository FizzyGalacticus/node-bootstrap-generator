Column = function(size) {
	this.smSize	= size;
	this.mdSize = size;
	this.lgSize = size;
	this.children = [];

	this.setSmSize = function(size) {
		this.smSize = size;
	};

	this.setMdSize = function(size) {
		this.mdSize = size;
	};

	this.setLgSize = function(size) {
		this.lgSize = size;
	};

	this.addChild = function(child) {
		this.children.push(child);
	};

	this.getChildrenString = function() {
		var ret = '';

		for(var i = 0; i < this.children.length; i++) {
			ret += this.children[i].toString();
		}

		return ret;
	};

	this.toString = function() {
		var ret = '<div class="';

		ret += 'col-sm-' + this.smSize;
		ret += ' col-md-' + this.mdSize;
		ret += ' col-lg-' + this.lgSize;

		ret += '">' + this.getChildrenString();

		ret += '</div>';

		return ret;
	};
};