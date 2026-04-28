const express = require("express");
const app = express();

app.use(express.json())

let students = [
    {id:1,name:"Adfar",age:28, course : "MCA"},
    {id:2,name:"Rahul",age:23, course : "BCA"},
    {id:3,name:"Jashan",age:45, course : "Btech"},
    {id:4,name:"Avneesh",age:56, course : "MCA"}
]

let nextid =5;

app.get("/students",(req,res)=>{
    res.json({success:true,count:students.length,data:students})
})

app.get("/students/:id",(req,res)=>{
  let id = req.params.id;
  const student = students.find(item=>item.id === parseInt(id))
  if(!student) return res.status(404).json({success:false,message:"Student not found"})
  res.json({success:true,data:student})

})

app.post("/students",(req,res)=>{
    const {name,age,course}= req.body;
    if(!name || !age || !course){
        return res.status(400).json({error:"Alll feilds required"})
    }
    const newStudent = {id :nextid++,name,age,course};
    students.push(newStudent)
    res.json({success:true,count:students.length,data:students})
})

app.listen(3000,()=>{
    console.log("listening to port 3000")
})