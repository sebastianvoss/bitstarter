var fs = require('fs')

var express = require('express');

var app = express.createServer(express.logger());

var buffer = fs.readFileSync("index2.html");
var content = buffer.toString();

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
