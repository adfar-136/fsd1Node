'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {
  const router = useRouter()
  return (
    <div>
      <button onClick={()=>router.back()}>GO BACK</button>
      <button onClick={()=>router.replace("/")}>GO TO Home</button>
      <h1>This is the Products page</h1>
      <ul>
        <li>Laptop</li>
        <li>Mobile</li>
        <li>Pant</li>
        <li>Shirt</li>
        <li>Iphone</li>
        <li>Samsung</li>
      </ul>
    </div>
  )
}

export default page
