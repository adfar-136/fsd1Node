const express = require("express")
const Post = require("../models/Post")
const postRouter = express.Router()

postRouter.post("/",async (req,res)=>{
 try {
     const post = req.body;
    const newPost = new Post(post);
    const savedPost = await newPost.save();
    return res.status(201).json(savedPost)
 } catch (error) {
    return res.status(400).json({error:error.message})   
 }
})

postRouter.get("/",async (req,res)=>{
 try {
     const posts = await Post.find({})
    return res.status(200).json(posts)
 } catch (error) {
    return res.status(400).json({error:error.message})   
 }
})

postRouter.put("/:id",async (req,res)=>{
 try {
    const updated = await Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true,
            runValidators :true
        }
    )
   if(!updated){
    return res.status(404).json({error:"Post Not Found"})   

   }
    return res.status(200).json(updated)   
 } catch (error) {
    return res.status(400).json({error:error.message})   
 }
})

postRouter.delete("/:id",async (req,res)=>{
 try {
    const deleted = await Post.findByIdAndDelete(req.params.id)
   if(!deleted){
    return res.status(404).json({error:"Post Not Found"})   

   }
    return res.status(200).json({message:"Post Deleted",deleted})   
 } catch (error) {
    return res.status(400).json({error:error.message})   
 }
})


module.exports = postRouter