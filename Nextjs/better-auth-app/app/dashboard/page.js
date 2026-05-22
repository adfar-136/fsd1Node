'use client'
import {Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { signOut, useSession } from "@/lib/auth-client"
import { useRouter } from "next/navigation"

export default function DashboardPage (){
    const {data:session,isPending} = useSession()
    const router = useRouter()
    if(isPending){
        return <p>Loading ....</p>
    }
    if(!session){
        return (
            <main>
                <h1>Dashboard</h1>
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
            <h1>Dashboard</h1>
            <Avatar className="h-24 w-24">
                <AvatarImage src={session.user.image}
                alt = {session.user.name}
                referrerPolicy="no-referrer"
                className="grayscale"/>
                 <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>Welcome <b>{session.user.name}</b></p>
            <p>Email: <b>{session.user.email}</b></p>
            <Button onClick={handleLogout}>SIgnOUT</Button>
        </main>
    )
}