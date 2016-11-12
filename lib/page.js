Page = function() {
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