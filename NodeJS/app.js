console.log("Hello from node");
const ex = "Welocome back."
console.log("Learn more about node js with advantages :", ex);

let http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end("comming soon ...");
}).listen(8080);