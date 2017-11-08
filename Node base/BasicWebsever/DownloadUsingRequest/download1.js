"use strict"
// link = https://images.unsplash.com/photo-1496550848045-55fd98791b7e?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D
var processData = process.argv;
var link = processData[2];
const fs = require('fs');
const request = require('request');
const ProgressBar = require('progress');

var totalBytes;
var downloadedBytes;
var bar;
console.time('download');
let req = request.get(link);
req.on('error', function (err) {
        console.log('Download error', err);
    })
    .on('response', function (res) { // hứng response trả về lần đầu tiên sau request
        totalBytes = parseInt(res.headers['content-length'],10);
        //downloadedBytes = 0;
        //console.log('Total bytes: ' + totalBytes);

        bar = new ProgressBar('downloading[:bar] : percent :etas',{
            complete : '=',
            incomplete: ' ',
            width: 50,
            total: totalBytes
        });
    })
    .on('data', function (chunk) {// hứng kích hoạt mỗi khi có gói dữ liệu trả về
        //downloadedBytes += chunk.length;
        //console.log(downloadedBytes + " / " + totalBytes);
        bar.tick(chunk.length);
    });




req.pipe(fs.createWriteStream('balloon.png'))
    .on('finish', function () {
    console.timeEnd('download');
    console.log('Done write to file');
    })
    .on('error', function (err) {
    console.log('Error write to file',err);
});