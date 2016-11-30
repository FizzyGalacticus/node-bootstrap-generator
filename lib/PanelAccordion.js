var BootstrapContainer = require('./BootstrapContainer.js');

PanelAccordion = function() {
    BootstrapContainer.call(this, 'PanelAccordion');

    this.setInstanceNumber();
};

PanelAccordion.instanceCount = 0;

PanelAccordion.prototype = Object.create(BootstrapContainer.prototype);

PanelAccordion.prototype.setInstanceNumber = function() {
    this.instanceNumber = ++PanelAccordion.instanceCount;
};

PanelAccordion.prototype.addPanel = function(panel) {
    panel.setDataParent('accordion' + this.instanceNumber);
    panel.setCollapseable(true);

    if(this.getNumberOfChildren() > 0)
        panel.setCollapsed(true);

    this.addChild(panel);
};

PanelAccordion.prototype.toString = function() {
    var ret = '<div class="panel-group" id="accordion' + this.instanceNumber + '" role="tablist" aria-multiselectable="true">';
    ret += this.getChildrenString() + '</div>';   

    return ret;
};

module.exports = PanelAccordion;