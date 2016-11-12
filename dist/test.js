//NODE

var bs = require('./bootstrap.js');
var glyph = new bs.Glyphicon('send');
var glyph2 = new bs.Glyphicon('send', true);
glyph.addChild(glyph2);
var str = glyph.toString();

console.log(glyph.toString());