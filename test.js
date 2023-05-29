const fs = require('fs');

function fib(num){
    a = 0,b = 1
    while(--num>0){
        sum = a+b;
        a = b;
        b = sum;
    }
    return b;
}

fs.readFile('./files/11.txt', 'utf8', function(err, dataStr) {
    if (err){
        return console.log ('文件读取失败'+err.message);
    }
    console. log ('-----');
    console. log (dataStr);
})