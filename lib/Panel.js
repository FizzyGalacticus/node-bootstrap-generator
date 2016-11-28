var BootstrapContainer = require('./BootstrapContainer.js');

Panel = function(title, collapseable) {
    BootstrapContainer.call(this, 'Panel');

    this.title = (title !== undefined ? title:'Title');
    this.collapseable = (collapseable !== undefined ? collapseable:false);
    this.collapsed = false;

    this.setInstanceNumber();
};

Panel.instanceCount = 0;

Panel.prototype = Object.create(BootstrapContainer.prototype);

Panel.prototype.setInstanceNumber = function() {
    this.instanceNumber = ++Panel.instanceCount;
};

Panel.prototype.setCollapseable = function(collapseable) {
    this.collapseable = collapseable;
};

Panel.prototype.getCollapseable = function() {
    return this.collapseable;
};

Panel.prototype.getHeadingWithCollapseLink = function() {
    var ret = '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse' + this.instanceNumber + '" aria-expanded="true" aria-controls="collapse' + this.instanceNumber + '">';
    ret += this.title + '</a>';

    return ret;
};

Panel.prototype.getHeadingWithoutCollapseLink = function() {
    var ret = this.title;

    return ret;
};

Panel.prototype.toString = function() {
    var ret = '<div class="panel panel-' + this.getColorClass() + '"><div class="panel-heading" role="tab" id="heading';
    ret += this.instanceNumber + '"><h4 class="panel-title">';

    ret += (this.collapseable ? this.getHeadingWithCollapseLink():this.getHeadingWithoutCollapseLink());

    ret += '</h4></div><div id="collapse' + this.instanceNumber + '" class="panel-collapse collapse in" ';
    ret += 'role="tabpanel" aria-labelledby="heading' + this.instanceNumber + '"><div class="panel-body">' + this.getChildrenString();
    ret += '</div></div></div>';    

    return ret;
};

module.exports = Panel;