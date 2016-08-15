var fs = require('fs');
var path = require('path');
var util = require('util')
var tstr = '├── '
var strNow = ''

function walk(dir) {
  var files = fs.readdirSync(dir);
  strNow = tstr + strNow
  files.forEach(function (e, i) {
    var pathNow = path.join(dir, e);
    console.log(strNow + path.relative(dir,pathNow))
    var stats = fs.statSync(pathNow);
    if (stats.isDirectory()) {
      walk(pathNow)
      strNow = strNow.slice(4)
    }
  })
}

walk(__dirname);