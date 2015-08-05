var mod = require('./modular.js');

var dir = process.argv[2];
var ext = process.argv[3];

function printFilteredDirs(err, data) {
  if (err)
    return console.log("Error, Mingus.");

  for (var i=0; i < data.length; i++) {
    console.log(data[i]);
  };
};

mod(dir, ext, printFilteredDirs);



