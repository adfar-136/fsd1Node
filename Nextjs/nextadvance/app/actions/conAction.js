'use server'

import { connectDB } from "../lib/db"
export async function getMessages(){
  const db = await connectDB()
  const messages = await db.collection('messages').find({}).toArray()
  return messages;
}