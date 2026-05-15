import React from 'react'
import { readStudents } from '../actions/studentActions'
import Link from 'next/link'
import DeleteStudent from '../components/DeleteStudent'

async function page() {
    const students = await readStudents()

  return (
    <div>
      <table>
       <thead>
         <tr>
            <th>Name</th>
            <th>email</th>
            <th>age</th>
            <th>phone</th>
            <th>Details</th>
        </tr>
       </thead>
        {students.map(item =>(
           <tbody key={item._id}>
             <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td>{item.phone}</td>
                <td>
                     <Link href={`/students/${item._id}`}>View</Link>
                <Link href={`/students/${item._id}/edit`}>Edit</Link>
                <DeleteStudent id={item._id}/>
                </td>
            </tr>
           </tbody>
        ))}
      </table>
    </div>
  )
}

export default page
