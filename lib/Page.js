var BootstrapContainer = require('./BootstrapContainer.js');

Page = function() {
	this.css      = ['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'];
	this.scripts  = [
		'https://code.jquery.com/jquery-3.1.1.min.js',
		'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'
	];
	this.children = [];
};

Page.prototype = Object.create(BootstrapContainer.prototype);

Page.prototype.getHead = function() {
	var ret = '<head>';

	ret += this.getCSS();

	ret += '</head>';

	return ret;
};

Page.prototype.getBody = function() {
	var ret = '<body>';

	ret += this.getChildrenString();

	ret += '</body>';

	return ret;
};

Page.prototype.getCSS = function() {
	var ret = '';

	for(var i = 0; i < this.css.length; i++)
		ret += '<link rel=stylesheet type=text/css href=' + this.css[i] + '>';

	return ret;
};

Page.prototype.addCSS = function(css) {
	this.css.push(css);
};

Page.prototype.getScripts = function() {
	var ret = '';

	for(var i = 0; i < this.scripts.length; i++)
		ret += '<script src="' + this.scripts[i] + '"></script>';

	return ret;
};

Page.prototype.addScript = function(script) {
	this.scripts.push(script);
};

Page.prototype.toString = function() {
	var ret = '<!DOCTYPE html><html>';

	ret += this.getHead();

	ret += this.getBody();

	ret += this.getScripts();

	ret += '</html>';

	return ret;
};

module.exports = Page;