"use strict"
var http = require('http');
var fs =  require('fs');
var url = require('url');
var highlight =  require('highlight.js');

var server = http.createServer();

function serverFile(res, path) {
    let extension = path.split('.').pop();
    var contentType;
    switch (extension){
        case 'js':
            contentType = 'text/javascript';
            break;
        case 'htm':
            contentType = 'text/htm';
            break;
        case 'jpeg':
            contentType = 'text/jpeg';
            break;
        case 'jpg':
            contentType = 'text/jpg';
            break;
        case 'png':
            contentType = 'text/png';
            break;
        case 'json':
            contentType = 'text/json';
            break;
        default:
            contentType = 'unknown';
            res.end();
            return;
    }
    res.writeHead(200, {'Content-Type': contentType});

    let stream = fs.createReadStream('.' + path);
    stream.on('open', function () {
        stream.pipe(res);
    });

    stream.on('error', function (err) {
        console.log('Error at: .' + path);
        res.end(err);
    });
}

let handleGetRequest = function (res, url_parsed) {
    console.log('path:' + url_parsed.pathname);
    let path =  url_parsed.pathname;
    switch (path){
        case "/": // Neu router vao trang chu
            res.writeHead(200, {'Content-Type': 'text/html'});
            fs.readdir('.', function (err, files) {
                for(var i = 0; i < files.length; i++){
                    res.write('<a href="/' + files[i] + '">' + files[i] + '</a></br>');
                }
                res.end();
            });
            break;
        case "/tom":
            res.setHeader('Content-Type','application/json');
            res.writeHead(200, 'json content');
            res.write('{"characters": ["Tom","Jerry"]}');
            res.end();
            break;
        default:
            if(path.includes('.')){
                serverFile(res,path);
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