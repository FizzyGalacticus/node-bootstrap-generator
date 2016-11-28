var BootstrapContainer = require('./BootstrapContainer.js');

CollapsePanel = function(title, collapseable) {
    BootstrapContainer.call(this, 'CollapsePanel');

    this.title = (title !== undefined ? title:'Title');
    this.collapseable = (collapseable !== undefined ? collapseable:true);
    this.collapsed = false;

    this.setInstanceNumber();
};

CollapsePanel.instanceCount = 0;

CollapsePanel.prototype = Object.create(BootstrapContainer.prototype);

CollapsePanel.prototype.setInstanceNumber = function() {
    this.instanceNumber = ++CollapsePanel.instanceCount;
};

CollapsePanel.prototype.toString = function() {
    var ret = '<div class="panel panel-' + this.getColorClass() + '"><div class="panel-heading" role="tab" id="headingOne"><h4 class="panel-title">';
    ret += '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse' + this.instanceNumber + '" aria-expanded="true" aria-controls="collapse' + this.instanceNumber + '">';
    ret += this.title;
    ret += '</a></h4></div>';
    ret += '<div id="collapse' + this.instanceNumber + '" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">';
    ret += '<div class="panel-body">';

    ret += this.getChildrenString();

    ret += '</div></div></div>';    

    return ret;
};

module.exports = CollapsePanel;