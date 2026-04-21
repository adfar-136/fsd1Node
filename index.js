const http = require('http');
const server = http.createServer(function(req,res){
    if(req.url === "/"){
        res.write("<h1>Welcome to homePage</h1>");
        res.end()
    } else if(req.url === "/about"){
        res.write("<h1>Welcome to about page</h1>")
        res.end()
    } else if(req.url === "/contact"){
        res.writeHead(200,{'content-type':'text/plain'});
        res.write("Contact text")
        res.end()
    }
})


server.listen(4000,()=>{
    console.log("Listening to port 4000")
})