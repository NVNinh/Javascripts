 var fs = require('fs');
 var path = require('path');
//
// var filePath = path.join(__dirname,'fs.js');
//
// console.log(__dirname);
// console.log(path.dirname(filePath));
// console.log(path.basename(filePath));
// console.log(path.basename(filePath,'.js'));
// console.log(path.extname(filePath));
// console.log(path.resolve(filePath,'..'));

// fs.stat('app.js',function (err, stats) {
//     if(stats.isDirectory()){
//         console.log('thu muc');
//     }
//     if(stats.isFile()){
//         console.log('file');
//     }
// });
// var stats = fs.statSync('app.js');
// console.log(stats);
//
//  fs.readdir('G:\\HOC\\WebDev\\node.js\\Project\\DemoJs\\Node base\\Modules', function (err, listFiles) {
//      console.log(listFiles);
//  });

 var processData = process.argv;

 var filename = processData[2];
 var dirname = processData[3];

 fs.readdir(dirname, function (err,listFiles){
     for(var i = 0; i < listFiles.length;i++){
         if(listFiles[i] == filename){
             console.log
         }
     }
 });

 console.log("filename"+filename,dirname);