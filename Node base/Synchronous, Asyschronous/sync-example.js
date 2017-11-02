const  fs = require('fs');

try{
    console.log(fs.readFileSync("test.txt").toString());
    console.log("End");
}catch (err){
    console.error(err);
}