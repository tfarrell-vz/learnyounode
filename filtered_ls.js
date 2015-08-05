var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];

var curDirFiles = fs.readdir(dir, function(err, files) {
  for (var i=0; i < files.length; i++) {
    if (path.extname(files[i]).slice(1) == ext) {
      console.log(files[i]);
    }
  }
});

//curDirFiles();

