const http = require('http');
const server = http.createServer();

server.on('request', (req,res) => {
    const url = req.url;
    const method = req.method;
    const str = `Your request url is ${url}, and request method is ${method}`;
    console.log(str);
    res.end('fuck you')
});

server.listen(8080,()=>{
    console.log('http server running at http://127.0.0.1:8080');
});