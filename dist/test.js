//NODE

var bs = require('./bootstrap.js');
var glyph = new bs.Glyphicon('send');
var glyph2 = new bs.Glyphicon('star-empty', true);
var glyph3 = new bs.Glyphicon('send');
var glyph4 = new bs.Glyphicon('star-empty', true);

var page = new bs.Page();

var col1 = new bs.Column(3);
var col2 = new bs.Column(3);
var col3 = new bs.Column(3);
var col4 = new bs.Column(3);
col1.addChild(glyph);
col2.addChild(glyph2);
col3.addChild(glyph3);
col4.addChild(glyph4);

var row = new bs.Row([col1, col2, col3, col4]);
page.addChild(row);

console.log(page.toString());