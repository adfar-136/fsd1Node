'use client'
import { signIn } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginPage(){
    const router = useRouter()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)
    const handleLogin = async (e)=>{
        e.preventDefault()
        setError("")
        setLoading(true);
        const {data,error} = signIn.email({
            email,
            password,
            rememberMe :true,
            callbackURL : "/profile"
        })
        setLoading(false)
        if(error){
            setError("Invalid Email or Password")
            return
        }
        router.push("/profile")
    }
    const handleGoogleLogin = async ()=>{
        await signIn.social({
            provider : "google",
            callbackURL :"/dashboard"
        })
    }
    return (
        <main>
            <h1> Login</h1>
            <div>
                 <form>
                    <input name="email" type="email" placeholder="Enter your email"
                    value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input name="password" type="passsword"
                     value={password} onChange={(e)=>setPassword(e.target.value)}
                    placeholder="enter you password"/>
                    {error && <p style={{color:"red",fontSize:"30px"}}>{error}</p>}
                    
                    <button onClick={(e)=>handleLogin(e)}>{loading ? "Signing In...":"SIgn in"}</button>
                 </form>
            </div>
            <p>Sign in to continue</p>
            <button onClick={handleGoogleLogin}>Sign in with Google</button>
        </main>
    )
}