const http = require("http");
const port = 8081;
const toDoList = ["task-1", "task-2", "task-3", "task-4"];

http
.createServer((req, res) => {
  const { method, url } = req;
  
  if (url === "/todos") {
    if (method == "GET") {
      res.writeHead(200, { "Content-type": "text/html" });
      res.write("<h1>Hello world </h1>");
      res.write(toDoList.toString());
      res.end();
    } else if (method == "POST") {
      let body = '';
      req.on("error", (err) => {
        console.log(err)
      })
      .on('data', (chunks) => {
        body += chunks
      })
      .on ('end', () =>{
        body = JSON.parse(body)
        let newToDo=toDoList;
        newToDo.push(body.item_1)
        console.log(newToDo);
        res.writeHead(201)
        })
      } else if (method == "DELETE") {
      }
    } else {
      res.writeHead(404);
      res.write(
        "<h1 style='font-size:50px;text-align:centre;font-weight:600'> Dei Mayiru check your URL Properly </h2>"
      );
    }
  })
  .listen(port, () => {
    console.log("hello world");
  });

// http://localhost:8081
