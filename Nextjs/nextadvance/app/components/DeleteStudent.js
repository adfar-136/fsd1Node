'use client'
import React from 'react'
import { deleteStudent } from '../actions/studentActions'

async function DeleteStudent({id}) {
    async function handleDelete() {
        await deleteStudent(id)
        window.location.href = "/students"
    }
  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default DeleteStudent
