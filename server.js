const http = require("http");
const port = 8000;

http.createServer((request,response)=>{
    response.writeHead(200,{"Content-type":"text/html"})
    response.write("<h1>Hello world</h1>")
    response.end()
}).listen(port,()=>{
    console.log("hello world")
})