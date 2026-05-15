'use server'

import { ObjectId } from "mongodb";
import { connectDB } from "../lib/db";

export async function createStudent(formData){
    const name =formData.get("name")
    const email =formData.get("email")
    const age =formData.get("age")
    const phone =formData.get("phone");
    const db = await connectDB()
    await db.collection("students").insertOne({
        name,email,age,phone,
        createdAt : new Date()
    })
}
export async function readStudents(){
     const db = await connectDB()
  const students = await db.collection('students').find({}).toArray()
  return students;
}
export async function getStudentById(id){
     const db = await connectDB()
  const student = await db.collection('students')
  .findOne({_id: new ObjectId(id)})
  console.log(student)
  return student;
}
export async function updateStudent(id,formData){
    const name =formData.get("name")
    const email =formData.get("email")
    const age =formData.get("age")
    const db = await connectDB()
    await db.collection("students").updateOne(
        {_id: new ObjectId(id)},
        {$set : {name,email,age}}
    )
}
export async function deleteStudent(id){
     const db = await connectDB()
  await db.collection('students')
  .deleteOne({_id: new ObjectId(id)})
}