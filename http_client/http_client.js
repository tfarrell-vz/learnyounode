var http = require('http');

http.get('www.bassnectar.net/tour', function(res) {
  console.log("STATUS: " + res.statusCode);
  console.log("HEADERS: " + JSON.stringify(res.headers));
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});


