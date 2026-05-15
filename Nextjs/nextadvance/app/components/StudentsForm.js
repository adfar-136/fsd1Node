import React from 'react'
import { createStudent } from '../actions/studentActions'

function StudentsForm({action}) {
  return (
    <form action={action}>
      <input name='name' placeholder='Enter you fullName' type='text'/> <br/><br/>
      <input name='email' placeholder='Enter you Email' type='email'/> <br/><br/>
      <input name='age' placeholder='Enter you Age' type='number'/> <br/><br/>
      <input name='phone' placeholder='Enter you Phone' type='text'/> <br/><br/>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default StudentsForm
