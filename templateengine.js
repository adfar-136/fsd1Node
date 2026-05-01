const express = require("express");
const app = express();
const users = ["Adfar","Anwar","Ankush"]
app.set("view engine","ejs")

app.get("/",(req,res)=>
    res.render("index",{
        title :"EJS Page",
        name :"Adfar Rasheed",
        users
    })
)

app.get("/about",(req,res)=>{
    res.render("contact",{
        company : "Physics Wallah",
        salary :"20000"
    })
})

app.listen(4000,()=>{
    console.log("Server is listening to port 4000")
})