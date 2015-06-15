var fs = require('fs');
var numLines = undefined;
fpath = process.argv[2];

function lineCount(callback, file) {
  fs.readFile(file, function(err, data) {
    if (err) throw err;
    numLines = data.toString().split('\n').length-1;
    callback();
  });
};

function logLines() {
  console.log(numLines);
};

lineCount(logLines,fpath);

