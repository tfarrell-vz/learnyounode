var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
  var dirs = fs.readdir(dir, function(err, data) {
    var out = [];
    if (err)
      return callback(err)

    for (var i=0; i < data.length; i++) {
      if (path.extname(data[i]).slice(1) == ext) {
        out.push(data[i]);
      }
    };

    callback(null, out);
  });
};

