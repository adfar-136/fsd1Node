import { getStudentById } from '@/app/actions/studentActions'
import React from 'react'

async function page({params}) {
 const {id} = await params
 const student = await getStudentById(id)
 if(!student) {
    return <div>Student Does Not Exist</div>
 }
 return (
    <div>
      <h1> Student details are :</h1>
       <p>Name : {student.name}</p>
       <p>Name : {student.age}</p>
       <p>Name : {student.email}</p>
       <p>Name : {student.phone}</p>
    </div>
 )
}

export default page
