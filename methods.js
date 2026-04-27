const http = require("http");
const users = [{id:1,name:"Adfar"},{id:2,name:"Aman"}]
let nextId = 3

const server = http.createServer((req,res)=>{

  const parsed = new URL(req.url,"http://localhost:3000")
  const pathname = parsed.pathname; // /users/2
  const part = pathname.split("/"); // ["","users","2"]
 
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
  } else if(part[1] === "users" && part[2] && req.method === "PUT"){
    const id = parseInt(part[2])
    const index =users.findIndex(item=> item.id === id);
    if(index === -1){
      res.writeHead(404,{'content-type':'application/json'});
      res.end(JSON.stringify({error : "User not found"}))  
      return;
    }
     let body = ''
    req.on('data',function(chunk){body += chunk});
    req.on("end",()=>{
      const data = JSON.parse(body);
      Object.assign(users[index],{name:data.name})
       res.writeHead(200,{'content-type':'application/json'});
      res.end(JSON.stringify(users))  
    })

  }else if(part[1] === "users" && part[2] && req.method === "DELETE"){
    const id = parseInt(part[2])
    const index =users.findIndex(item=> item.id === id);
     if(index === -1){
      res.writeHead(404,{'content-type':'application/json'});
      res.end(JSON.stringify({error : "User not found"}))
      return; 
    }
    users.splice(index,1)
    res.writeHead(200,{'content-type':'application/json'});
    res.end(JSON.stringify(users))  
  }
})

// localhost:3000/users/id

server.listen(3000,()=>{
    console.log("listening")
})

