const http = require("http");
const users = [{id:1,name:"Adfar"},{id:2,name:"Aman"}]
let nextId = 3

const server = http.createServer((req,res)=>{
  if(req.url ==="/users" && req.method === "GET"){
    res.writeHead(200,{'content-type':'application/json'});
    res.end(JSON.stringify(users)) 
  }
  else if(req.url === "/users" && req.method === "POST"){
    let data = ''
    req.on('data',function(chunk){data += chunk});
    req.on('end',function(){
        const newData =JSON.parse(data);
        const newUser = {id:nextId++,name:newData.name}
        users.push(newUser)
        res.writeHead(200,{'content-type':'application/json'});
        res.end(JSON.stringify(users))  
    })
  }
})

server.listen(3000,()=>{
    console.log("listening")
})

