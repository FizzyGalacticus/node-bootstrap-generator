var BootstrapContainer = require('./BootstrapContainer.js');

Panel = function(title, collapseable) {
    BootstrapContainer.call(this, 'Panel');

    this.title = (title !== undefined ? title:'Title');
    this.collapseable = (collapseable !== undefined ? collapseable:false);
    this.collapsed = false;
    this.footer = null;
    this.dataParent = null;

    this.setInstanceNumber();
};

Panel.instanceCount = 0;

Panel.prototype = Object.create(BootstrapContainer.prototype);

Panel.prototype.setInstanceNumber = function() {
    this.instanceNumber = ++Panel.instanceCount;
};

Panel.prototype.setTitle = function(title) {
    this.title = title;
};

Panel.prototype.getTitle = function() {
    return this.title;
};

Panel.prototype.setCollapsed = function(collapsed) {
    this.collapsed = collapsed;
};

Panel.prototype.getCollapsed = function() {
    return this.collapsed;
};

Panel.prototype.setFooter = function(footer) {
    this.footer = footer;
};

Panel.prototype.getFooter = function() {
    return this.footer;
};

Panel.prototype.setDataParent = function(dataParent) {
    this.dataParent = dataParent;
};

Panel.prototype.getDataParent = function() {
    return this.dataParent;
};

Panel.prototype.getTitleString = function() {
    if(this.title instanceof BootstrapContainer)
        return this.title.getChildrenString();
    else return this.title;
};

Panel.prototype.setCollapseable = function(collapseable) {
    this.collapseable = collapseable;
};

Panel.prototype.getCollapseable = function() {
    return this.collapseable;
};

Panel.prototype.getHeadingWithCollapseLink = function() {
    var ret = '<a role="button" data-toggle="collapse" href="#collapse' + this.instanceNumber + '" aria-expanded="true" aria-controls="collapse' + this.instanceNumber + '" ';
    
    if(this.dataParent)
        ret += 'data-parent="#' + this.getDataParent() + '"';

    ret += '>' + this.getTitleString() + '</a>';

    return ret;
};

Panel.prototype.getHeadingWithoutCollapseLink = function() {
    var ret = this.getTitleString();

    return ret;
};

Panel.prototype.toString = function() {
    var ret = '<div class="panel panel-' + this.getColorClass() + '"><div class="panel-heading" role="tab" id="heading';
    ret += this.instanceNumber + '"><h4 class="panel-title">';

    ret += (this.collapseable ? this.getHeadingWithCollapseLink():this.getHeadingWithoutCollapseLink());

    ret += '</h4></div><div id="collapse' + this.instanceNumber + '" class="panel-collapse collapse ' + (this.collapsed ? 'out':'in') + '" ';
    ret += 'role="tabpanel" aria-labelledby="heading' + this.instanceNumber + '"><div class="panel-body">' + this.getChildrenString();
    ret += '</div></div>';

    if(this.footer)
        ret += '<div class="panel-footer">' + this.footer + '</div>';

    ret += '</div>';    

    return ret;
};

module.exports = Panel;