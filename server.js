const http = require("http");
const port = 8081;

http.createServer((request,response)=>{
    response.writeHead(300,{"Content-type":"text/html"})
    response.write("<h1>Hello world Masurrrru</h1>")
    response.end()
}).listen(port,()=>{
    console.log("hello world")
})

// http://localhost:8081