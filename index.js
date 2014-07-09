// glob-copy 0.1.0
// ---------------

//     (c) 2014 Adam Krebs
//     glob-copy may be freely distributed under the MIT license.
//     For all details and documentation:
//     https://github.com/akre54/glob-copy

var fs = require('fs'),
    path = require('path'),
    glob = require('globby');

var copy = function(files, destFolder) {
  files.forEach(function(filename) {
    var out = fs.createWriteStream(path.join(destFolder, path.basename(filename)));
    fs.createReadStream(filename).pipe(out);
  });
}

var cp = function(pattern, destFolder, cb) {
  glob(pattern, function(err, files) {
    copy(files, destFolder);
    if (cb) cb(err, files);
  });
}

var cpSync = function(pattern, destFolder) {
  copy(glob.sync(pattern), destFolder);
}

module.exports = cp;
module.exports.sync = cpSync;