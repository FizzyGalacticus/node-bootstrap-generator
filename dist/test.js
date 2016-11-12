//NODE
var Page = require('../lib/Page.js'),
    Glyphicon = require('../lib/Glyphicon.js');

var page = new Page();
var glyph = new Glyphicon('euro');
page.addChild(glyph);

console.log(page.toString());