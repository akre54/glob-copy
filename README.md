Glob-Copy
=========

Glob-aware `cp` for node.

Usage
-----
`cp(src, dest, cb)`

Example
-------
```
var cp = require('glob-copy');

cp('./app/*.html', './public', function(err, files) {
  console.log("copied " + files.length + " files to ./public");
});

cp.sync('./app/*.html', './public');
```