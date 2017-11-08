"use strict"
var http = require('http');
var fs =  require('fs');
var port = 3000;

http.createServer(function (req, res) {
    res.writeHead(404,{'Content-Type': 'text/html'});
    fs.readdir('.', function (err, files) {
        for(var i = 0; i<files.length; i++){
            //res.write(files[i] + '<br/>');
            res.write('<a href="/' + files[i] + '">' + files[i] + '</a></br>');
        }
        res.end();
    })
}).listen(port);
console.log('Server running at http://127.0.0.1:' + port);