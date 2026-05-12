import { redirect } from 'next/navigation'
import React from 'react'
async function checkAuth(){
  return false
}
async function page() {
  const isAuthenticated = await checkAuth()
  if(!isAuthenticated){
    redirect("/login")
  }
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>This is the description on my admin dashboard</p>
    </div>
  )
}

export default page
