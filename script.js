const http = require("http");
const fs = require("fs");
const path = require("path")
const mimeType = {
    '.html' : 'text/html',
    '.css' : 'text/css',
    '.js' : 'application/javascript',
    '.png':'image/png'
}

const server = http.createServer((req,res)=>{
  const filepath = req.url === "/" ? './index.html' : '.'+req.url;
 const ext = path.extname(filepath)
const contentType = mimeType[ext] || 'text/plain'

    fs.readFile(filepath,(err,data)=>{
        if(err){
            res.writeHead(404,{'content-type':'text/plain'});
            res.end("404 - Page not found");
            return;
        }
        res.writeHead(200,{'content-type':contentType});
        res.end(data)

    })
})
server.listen(8000,()=>{
    console.log("listening to port 8000")
})