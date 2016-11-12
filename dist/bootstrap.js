bs={};
bs.Column = function(size) {
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
bs.Glyphicon = function(type, ariaHidden, ariaLabel) {
	this.type       = type;
	this.ariaHidden = ariaHidden;
	this.ariaLabel  = ariaLabel;
	this.children   = [];

	this.setType = function(type) {
		this.type = type;
	};

	this.getType = function() {
		return this.type;
	};

	this.setAriaHidden = function(ariaHidden) {
		this.ariaHidden = ariaHidden;
	};

	this.getAriaHidden = function() {
		return this.ariaHidden;
	};

	this.setAriaLabel = function(ariaLabel) {
		this.ariaLabel = ariaLabel;
	};

	this.getAriaLabel = function() {
		return this.ariaLabel;
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

	this.toString    = function() {
		var ret = '<span class="glyphicon';

		if(this.type)
			ret += ' glyphicon-' + this.type;

		ret += '"';

		if(this.ariaHidden !== undefined)
			ret += ' aria-hidden="' + (this.ariaHidden?'true':'false') + '"';

		if(this.ariaLabel)
			ret += ' aria-label="' + this.ariaLabel + '"';

		ret += '>'

		ret += this.getChildrenString();

		ret += '</span>';

		return ret;
	};
};
bs.Page = function() {
	this.css      = ['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'];
	this.scripts  = ['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'];
	this.children = [];

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

	this.getHead = function() {
		var ret = '<head>';

		ret += this.getCSS();

		ret += '</head>';

		return ret;
	};

	this.getBody = function() {
		var ret = '<body>';

		ret += this.getChildrenString();

		ret += '</body>';

		return ret;
	};

	this.getCSS = function() {
		var ret = '';

		for(var i = 0; i < this.css.length; i++)
			ret += '<link rel=stylesheet type=text/css href=' + this.css[i] + '>'

		return ret;
	};

	this.addCSS = function(css) {
		this.css.push(css);
	};

	this.getScripts = function() {
		var ret = '';

		for(var i = 0; i < this.scripts.length; i++)
			ret += '<script src="' + this.scripts[i] + '"></script>'

		return ret;
	};

	this.addScript = function(script) {
		this.scripts.push(script);
	};

	this.toString = function() {
		var ret = '<!DOCTYPE html><html>';

		ret += this.getHead();

		ret += this.getBody();

		ret += this.getScripts();

		ret += '</html>';

		return ret;
	};
};
bs.Row = function(cols) {
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
module.exports=bs;