// http://localhost:3000/users?name=Adfar&age=20

const http = require("http");
const server = http.createServer((req,res)=>{
  const newUrl =new URL(req.url,"http://localhost:3000");
  const name = newUrl.searchParams.get('name')
  const age = newUrl.searchParams.get('age')
  res.end("Name: " + name + " Age: " + age)
})

server.listen(3000,()=>{
    console.log("listening")
})