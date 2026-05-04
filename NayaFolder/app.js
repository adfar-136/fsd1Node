const express = require("express");
const app = express()

app.set("view engine","pug")

const posts= [
    {
        id:1,
        title:"Getting Started with Node js",
        author:"Adfar Sir",
        date : "15 Aug 1996",
        summary:"A beginner guid to Node JS, Easy Explanation and stuff",
        content:"Node js is a runtime javascript engine"
    },
    {
        id:2,
        title:"Getting Started with Node js",
        author:"Adfar Sir",
        date : "15 Aug 1996",
        summary:"A beginner guid to Node JS, Easy Explanation and stuff",
        content:"Node js is a runtime javascript engine"
    },
    {
        id:3,
        title:"Getting Started with Node js",
        author:"Adfar Sir",
        date : "15 Aug 1996",
        summary:"A beginner guid to Node JS, Easy Explanation and stuff",
        content:"Node js is a runtime javascript engine"
    }
]

app.get("/",(req,res)=>{
    res.render("index",{
        title:"Home",
        heading:"Welcome to Adfar Sir Blog",
        subheading : "Learn Web Dev: One topic at a time"
    })
})

app.get("/blogs",(req,res)=>{
    res.render("blogs",{
        title : "All Blogs",
        posts:posts
    })
})
app.get("/blogs/:id",(req,res)=>{
    const postId = parseInt(req.params.id)
    const post = posts.find(item=> item.id === postId);
    if(!post){
        return res.status(404).send("Post Not Found")
    }
    res.render("post",{
        title:post.title,
        post:post
    })
})

// app.get("/",(req,res)=>{
//     res.render("index")
// })
// app.get("/profile",(req,res)=>{
//     const students = [
//         {name : "Adfar", grade:"A",score :95},
//         {name : "Rahul", grade:"B",score :85},
//         {name : "Priya", grade:"D",score :65}
//     ]
//     res.render("profile",{
//         name:"Adfar Rasheed",
//         age:28,
//         course : "MCA",
//         isLoggedin : false,
//         students
//     })
// })
app.listen(3000,()=>{
    console.log("Listening to port 3000")
})