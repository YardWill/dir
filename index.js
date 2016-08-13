// var path = require('path');

// console.log(path.dirname(__dirname))

var fs = require('fs');
var path = require('path');
var util = require('util')

function walk(dir) {
  fs.readdir(dir, function (err, files) {
    files.forEach(function (e, i) {
      var pathNow = path.join(dir, e);
      var stats = fs.stat(pathNow, function (err, stats) {
        if (stats.isDirectory()) {
          walk(pathNow)
        }
      });
      console.log(pathNow)
    })
  })
}

walk(__dirname);

