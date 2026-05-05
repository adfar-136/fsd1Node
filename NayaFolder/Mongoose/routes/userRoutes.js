const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt")
const router = express.Router();
const passport = require("passport")

router.use(passport.initialize());


require("../config/passport")(passport)

router.post("/register",async (req,res)=>{
   const {username,password} = req.body;
   if(!username || !password){
    return res.status(400).json({message : "All Feild Required"})
   }
   const exists = await User.findOne({username})
   if(exists){
    return res.status(400).json({message : "User Already Exists"})
   }
   const hashed = await bcrypt.hash(password,10)
   const user = await User.create({username,password:hashed})
   res.status(201).json({message : "User registered succefully",user})
})

router.post("/login",(req,res,next)=>{
    passport.authenticate("local",(err,user,info)=>{
        if(err) return next(err);
        if(!user) return res.status(404)
.json({message : "USer does not exist"})    })
})
module.exports = router