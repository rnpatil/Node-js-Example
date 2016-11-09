var express = require('express'); // Pull express into node.js
var url = require('url');
var fs = require('fs');

var app = express(); // Make an express object, and save it in the variable app

app.get('/', function(req, res) {
// Use the app.get function to respond to server requests
	url = req.url;
	console.log("Request received for " + url);

  fs.readFile("index.html", function(err, text){
     res.setHeader("Content-Type", "text/html");
     res.end(text);
   });
   //return;
});

app.get('/page2.html', function(req, res) {
// Use the app.get function to respond to server requests
	url = req.url;
	console.log("Request received for " + url);

  fs.readFile("page2.html", function(err, text){
     res.setHeader("Content-Type", "text/html");
     res.end(text);
   });
   //return;

});
app.get('/page3.html', function(req, res) {
// Use the app.get function to respond to server requests
	url = req.url;
	console.log("Request received for " + url);

  fs.readFile("page3.html", function(err, text){
     res.setHeader("Content-Type", "text/html");
     res.end(text);
   });
   //return;

});
app.get('/page4.html', function(req, res) {
// Use the app.get function to respond to server requests
	url = req.url;
	console.log("Request received for " + url);

  fs.readFile("page4.html", function(err, text){
     res.setHeader("Content-Type", "text/html");
     res.end(text);
   });
   //return;

});


// in case of 404 error (page does not exist)
app.get('*', function(req, res){
// Use the app.get function to respond to server requests
	url = req.url;
	console.log("Request received for " + url);

  fs.readFile("error.html", function(err, text){
     console.log('heree');
     res.setHeader("Content-Type", "text/html");
     res.end(text);
   });
   //return;

});


var server = app.listen(8080, function() {
// We just need a port with express,
// it uses whatever host it is in as the default host
	console.log('Server started.');
});
//
