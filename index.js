'use strict';

exports.hwcmd = function() {
    console.log('Hello World');
}

exports.hwhttp = function(host, port) {
    var http = require('http');

    http.createServer(function(req,res) {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hello World with normal JS HTTP ');
    }).listen(port, host);
    console.log('\"Hello World\" http server at [%s:%s]', host, port);
}

exports.hwexpress = function(host, port) {
    var express = require('express');
    var server = express();
    
    server.get('/', function(req, res) {
        res.send("Hello World with Express.js");
    });
    server.listen(port);
    console.log('\"Hello World\" express server at [%s:%s]', host, port);
}



