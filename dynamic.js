const express = require("express");
const app = express();

app.get("/user/:rollNo",(req,res)=>{
    const rollNo = req.params.rollNo;
    res.send(rollNo)
})
app.get("/user/:rollNo/marks/:sub",(req,res)=>{
    let {rollNo,sub} = req.params;
    res.send(`RollNumber :  ${rollNo} and Subject : ${sub}`)
})
app.get("/students",(req,res)=>{
   
    res.send(`Name of STudents is ${req.query.name}. and age is 
        ${req.query.age}`)
})

app.listen(4000,()=>{
    console.log("Server is listening to port 4000")
})