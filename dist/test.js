//NODE
var Page = require('../lib/Page.js'),
    Glyphicon = require('../lib/Glyphicon.js'),
    CollapsePanel = require('../lib/CollapsePanel.js'),
    Row = require('../lib/Row.js'),
    Column = require('../lib/Column.js')

var page = new Page();
var row = new Row();
var col1 = new Column(6);
var col2 = new Column(6);
var glyph = new Glyphicon('euro');
var collapse1 = new CollapsePanel('One', true);
var collapse2 = new CollapsePanel('Two');
var collapse3 = new CollapsePanel('Three');
var collapse4 = new CollapsePanel('Four', true);

collapse2.setColorClass('primary');
collapse3.setColorClass('warning');
collapse4.setColorClass('success');

col1.addChild(collapse1);
col2.addChild(collapse2);
row.addChild(col1);
row.addChild(col2);

collapse1.addChild(collapse3);
collapse2.addChild(collapse4);

page.addChild(row);
page.addChild(glyph);

console.log(page.toString());