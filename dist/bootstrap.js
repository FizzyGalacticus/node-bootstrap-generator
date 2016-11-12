bs={};
bs.Glyphicon = function(type, ariaHidden, ariaLabel) {
	this.type       = type;
	this.ariaHidden = ariaHidden;
	this.ariaLabel = ariaLabel;

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

	this.toString    = function() {
		var ret = '<span class="glyphicon';

		if(this.type)
			ret += ' glyphicon-' + this.type;

		ret += '"';

		if(this.ariaHidden !== undefined)
			ret += ' aria-hidden="' + (this.ariaHidden?'true':'false') + '"';

		if(this.ariaLabel)
			ret += ' aria-label="' + this.ariaLabel + '"';

		ret += '></span>';

		return ret;
	};
};
module.exports=bs;