Glob-Copy
=========

Glob-aware `cp` for node.

Usage
-----
`cp(src, dest, cb)`

`src` can be a string or an array of strings with a glob pattern.
(see [minimatch patterns](https://github.com/isaacs/minimatch#usage) and
[examples](https://github.com/sindresorhus/globby#globbing-patterns))

`dest` is a string.

`cb` is optional.

Example
-------
```
var cp = require('glob-copy');

cp('./app/*.html', './public', function(err, files) {
  console.log("copied " + files.length + " files to ./public");
});

cp.sync('./app/*.html', './public');
```