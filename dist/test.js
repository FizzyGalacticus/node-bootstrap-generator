//NODE
var Page = require('../lib/Page.js'),
    Glyphicon = require('../lib/Glyphicon.js'),
    Panel = require('../lib/Panel.js'),
    Row = require('../lib/Row.js'),
    Column = require('../lib/Column.js'),
    BootstrapContainer = require('../lib/BootstrapContainer.js');

var page = new Page();

var row = new Row();

var col1 = new Column(6);
var col2 = new Column(6);

var glyph1 = new Glyphicon('home');
glyph1.random();
var glyph2 = new Glyphicon('cog');
glyph2.random();
var glyph3 = new Glyphicon('camera');
glyph3.random();
var glyph4 = new Glyphicon('road');
glyph4.random();

var collapseTitle1 = new BootstrapContainer('collapseTitle1');
var collapseTitle2 = new BootstrapContainer('collapseTitle2');
var collapseTitle3 = new BootstrapContainer('collapseTitle3');
var collapseTitle4 = new BootstrapContainer('collapseTitle4');

collapseTitle1.addChild('One ');
collapseTitle1.addChild(glyph1);
collapseTitle2.addChild('Two ');
collapseTitle2.addChild(glyph2);
collapseTitle3.addChild('Three ');
collapseTitle3.addChild(glyph3);
collapseTitle4.addChild('Four ');
collapseTitle4.addChild(glyph4);

var collapse1 = new Panel(collapseTitle1, true);
var collapse2 = new Panel(collapseTitle2);
var collapse3 = new Panel(collapseTitle3);
var collapse4 = new Panel(collapseTitle4, true);

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

console.log(page.toString());