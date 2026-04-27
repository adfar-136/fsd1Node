const express = require("express");

const app = express();

app.get("/users",(req,res)=>{
    res.send("USers called")
})

app.get("/",(req,res)=>{
    res.send("<h1>Home page</h1>")
})


app.listen(3000,()=>{
    console.log("server is listening on port 3000")
})
