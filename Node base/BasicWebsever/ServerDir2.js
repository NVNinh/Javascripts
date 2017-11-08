"use strict"
var http = require('http');
var fs =  require('fs');
var url = require('url');

var server = http.createServer();

let handleGetRequest = function (res, url_parsed) {
    console.log('path:' + url_parsed.pathname);
    let path =  url_parsed.pathname;
    switch (path){
        case "/":
            res.writeHead(200, {'Content-Type': 'text/html'});
            fs.readdir('.', function (err, files) {
                for(var i = 0; i < files.length; i++){
                    res.write('<a href="/' + files[i] + '">' + files[i] + '</a></br>');
                }
                res.end();
            });
            break;
        default:
            if(path.includes('.')){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end("." + path);
            }
            break;
    }
}

server.on('request', function (req,res) {
    var url_parsed = url.parse(req.url, true);
    if(req.method == 'GET'){
        handleGetRequest(res, url_parsed);
    }
});

var port = 8000;
server.listen(port);
console.log('Server is running at http://127.0.0.1:' + port);