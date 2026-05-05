const mongoose = require("mongoose");
const connectDB = async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/testDatabase");
        console.log("MongoDB Connected")
    } catch (error) {
        console.log("Error connect to db")
    }
}

module.exports = connectDB;