console.log('Hello World!');

var http = require('http');

var host = '127.0.0.1';
var port1=1337;
var port2=1338;

http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Hello World with normal JS HTTP ');
}).listen(port1, server);
console.log('\"Hello World\" http server at [%s:%s]', host, port1);


var express = require('express');
var server = express();

server.get('/', function(req, res) {
    res.send("Hello World with Express.js");
});
server.listen(port2);
console.log('\"Hello World\" express server at [%s:%s]', host, port2);



