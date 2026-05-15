import { getStudentById, updateStudent } from '@/app/actions/studentActions';
import StudentsForm from '@/app/components/StudentsForm';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function page({params}) {
    const {id} = await params;
    const student = await getStudentById(id)
   async function handleUpdate(formData){
    'use server'
     await updateStudent(id,formData);
     redirect("/students")
   }
   if(!student) {
    return <div>Student Not Found</div>
   }
  return (
    <div>
      <StudentsForm action={handleUpdate}/>
    </div>
  )
}
