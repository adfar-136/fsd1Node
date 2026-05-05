const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/User")

module.exports = (passport)=>{
     passport.use(new LocalStrategy(async function(username,password,done){
        const user = await User.findOne({username})
        if(!user) return done(null,false,{message:"User not found, register now"})
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return done(null,false,{message:"Password is Incorrect"})
        return done(null,user)
     }
    ))
    passport.serializeUser((user,done)=>{
        done(null,user._id)
    })
    passport.deserializeUser(async(id,done)=>{
       const user = await User.findById(id);
       done(null,user)
    })
}