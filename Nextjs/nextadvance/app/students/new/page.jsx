import { createStudent } from '@/app/actions/studentActions'
import StudentsForm from '@/app/components/StudentsForm'
import React from 'react'

function page() {
  return (
    <div>
      <StudentsForm action={createStudent}/>
    </div>
  )
}

export default page
