var fs = require('fs');
var file = process.argv[2];

var buf = fs.readFileSync(file).toString();

var num_lines = buf.split('\n').length-1

console.log(num_lines);


