"use strict"

const  http =  require('http');
let sever =  http.createServer(function (req, res){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});

var port = 3000;
sever.listen(port);
console.log('Server is running at http://localhost:' + port);