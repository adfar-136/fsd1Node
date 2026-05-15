'use server'

import { connectDB } from "../lib/db"

export async function submitContactForm(formData){
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    
    const db = await connectDB();

    await db.collection("messages").insertOne({
        name,email,message,
        createdAt :new Date()
    })
   
}