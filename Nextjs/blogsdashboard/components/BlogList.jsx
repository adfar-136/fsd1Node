import { connectDB } from "@/lib/db";
import BlogCard from "./BlogCard";

export default async function BlogList(){
    const db = await connectDB()
    await new Promise(resolve =>setTimeout(resolve,2000))
    const blogs = await db.collection("blogs").find({}).toArray()
     const safeBlogs =blogs.map(item => ({...item,_id:item._id.toString()}))
     if(safeBlogs.length === 0){
        return <p>No Blogs -yet</p>
     }
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
           {safeBlogs.map(blog => <BlogCard key={blog._id} blog={blog}/>)}
        </div>
    )
}