'use client'
import { signOut, useSession } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
export default function ProfilePage(){
     const {data:session,isPending} = useSession()
        const router = useRouter()
        if(isPending){
            return <p>Loading ....</p>
        }
        if(!session){
            return (
                <main>
                    <h1>Profile</h1>
                    <p>You are not logged in</p>
                    <a href="/login">Login</a>
                </main>
            )
        }
    const handleLogout = async()=>{
        await signOut();
        router.push("/")
    }
    console.log(session.user)
        return (
            <main>
                <h1>Profile</h1>
                <img src={session.user.image} alt="userimage" referrerPolicy="no-referrer"/>
                <p>Welcome <b>{session.user.name}</b></p>
                <p>Email: <b>{session.user.email}</b></p>
                <button onClick={handleLogout}>Logout</button>
            </main>
        )
}