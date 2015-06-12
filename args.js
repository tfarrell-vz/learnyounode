var len = process.argv.length;
var nums = process.argv.slice(2, len+1);

sum = 0;
nums.forEach(function(elem) {
  sum += Number(elem);
});

console.log(sum);


//console.log(len);
//console.log(process.argv);


