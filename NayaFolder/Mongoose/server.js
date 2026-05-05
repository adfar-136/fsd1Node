const express = require("express")
const connectDB = require("./config/db")
const postRouter = require("./routes/postRoutes")
const userRouter = require("./routes/userRoutes")
const app = express();
app.use(express.json());
app.use("/post",postRouter)
app.use("/user",userRouter)

connectDB()
app.listen(3000,()=>{
    console.log("listening to port 3000")
})