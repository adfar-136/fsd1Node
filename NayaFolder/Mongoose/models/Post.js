const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title :{
        type : String,
        required : true,
        unique : true
    },
    content : {
        type: String,
        required : true
    },
    author : {
        type : String,
        default : "Anonymous"
    },
    status : {
        type : String,
        enum : ["Draft","Published"],
        default : "Draft"
    }
})

postSchema.pre('save',async function(){
   if(this.author){
    this.author = this.author.charAt(0).toUpperCase() + this.author.slice(1)
   }

})
postSchema.post('save',async function(doc){
 console.log(doc.author)
})
const Post = mongoose.model('Post',postSchema) 

module.exports = Post;