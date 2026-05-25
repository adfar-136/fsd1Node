'use client'
import { signUp } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function RegisterPage(){
    const router = useRouter()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)
    const handleSubmit =async (e)=>{
        e.preventDefault()
        setError("")
        setLoading(true)
        const {data,error} = await signUp.email({
            name,
            email,
            password,
            callbackURL : "/dashboard"
        })
       setLoading(false)
       if(error){
        setError(error.message)
        return
       }
       router.push("/dashboard")
    }
    return (
        <div>
            <h1>Create an Account ? </h1>

            <form>
                <input type="text" name="name" placeholder="Enter you Name"
                value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" name="name" placeholder="Enter your Email"
                value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" name="name" placeholder="Enter your password"
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
                {error && <p style={{color:"red",fontSize:"30px"}}>{error}</p>}
                <button onClick={(e)=>handleSubmit(e)}>{loading ?"Creating":"Sign Up"}</button>
            </form>
        </div>
    )
}