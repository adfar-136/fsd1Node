'use client'
import { useRouter } from 'next/navigation'
import React,{useState} from 'react'

function page() {
    const router = useRouter()
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    function handleLogin(e){
        e.preventDefault()
        if(username === "adfar" && password === "123456"){
           router.push("/products") 
        } else {
            alert('wrong credentials')
        }
    }
  return (
    <div>
      <h1>Welcome to login page</h1>
      <form>
        <input placeholder='Enter Username' value={username}
        onChange={(e)=>setUsername(e.target.value)} />
        <input placeholder='Enter password' value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  )
}

export default page
