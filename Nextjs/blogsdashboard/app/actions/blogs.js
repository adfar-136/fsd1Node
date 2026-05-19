'use server'

import { connectDB } from "@/lib/db"
import { ObjectId } from "mongodb"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createBlog(formData){

    const title = formData.get("title")
    const content = formData.get("content")
    const author = formData.get("author")
    if(!title || !content){
        throw new Error("title and content required")
    }
    const db = await connectDB()
    await db.collection("blogs").insertOne({
        title,
        content,
        author: author || "Anonymous",
        createdAt: new Date()
    })
    revalidatePath("/")
    redirect("/")
}

//update

export async function updateBlog(id,formData){
     const title = formData.get("title")
    const content = formData.get("content");
    const db = await connectDB()
    await db.collection("blogs").updateOne(
        {_id: new ObjectId(id)},
        {$set : {title,content,updateAt:new Date()}}
    )
     revalidatePath("/")
    redirect("/")
}

//Delete

export async function deleteBlog(id){
    const db = await connectDB()
   await db.collection("blogs").deleteOne({_id: new ObjectId(id)})
     revalidatePath("/")

}