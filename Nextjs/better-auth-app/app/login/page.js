'use client'
import { signIn } from "@/lib/auth-client"

export default function LoginPage(){
    const handleGoogleLogin = async ()=>{
        await signIn.social({
            provider : "google",
            callbackURL :"/dashboard"
        })
    }
    return (
        <main>
            <h1> Login</h1>
            <p>Sign in to continue</p>
            <button onClick={handleGoogleLogin}>Sign in with Google</button>
        </main>
    )
}