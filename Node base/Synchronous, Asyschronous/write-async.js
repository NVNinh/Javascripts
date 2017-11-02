var addSync = function (a, b) {
    if(isNaN(a)|| isNaN(b))
        throw  new Error("Invalid input");
    return a + b;
}
var add =  function (a, b, callback) {
    if(isNaN(a) || isNaN(b))
        return callback(new Error("Invalid input"), null);
    return callback(null, a + b);
}
try{
    var result = addSync(1,2);
    console.log("Sync result: " + result);
} catch (err){
    console.log(err.message);
}

add(1,2, function (err, data)  {
    if(err){
        console.log(err.message);
    }else {
        console.log("Async result: " + data );
    }
})