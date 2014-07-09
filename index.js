var fs = require('fs'),
    path = require('path'),
    glob = require('glob');


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