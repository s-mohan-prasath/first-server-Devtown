const express = require('express')
const port = 8081;

// Initialization
const app = express()
// Application uses the json format for the data transfer
app.use(express.json());
// Our DATA
let toDoList = ['Computer Programming', 'Youtube work']

app.get('/todos',(req,res) => {
  res.status(200).send(toDoList)
})
app.post('/todos', (req,res)=>{
  let toDoItem = req.body.item;
  toDoList.push(toDoItem)
  res.send({
    toDoList
  })
})
app.delete('/todos', (req,res)=>{
  const itemToDelete = req.body.item
  toDoList.find((element,index) =>{
    if (element == req.body.item){
      toDoList.slice(index,1)
    }
  })
  res.status(200).send({
    message: `Item deleted ${req.body.item}`,
    body: toDoList
  })
})

app.listen(port,() =>{
  console.log(`server running on ${port}`)
})