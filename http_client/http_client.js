var http = require('http');

http.get('www.bassnectar.net/tour', function(res) {
  console.log("Got response: " + res.statusCode);
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});


