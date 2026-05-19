import { updateBlog } from "@/app/actions/blogs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { connectDB } from "@/lib/db";
import { ObjectId } from "mongodb";

export default async function EditBlogPage({params}){
  const {id} = await params;
  const db = await connectDB()
  const blog = await db.collection("blogs")
  .findOne({_id:new ObjectId(id)})

  if(!blog) return <p>Blog not found</p>

 const updateAction = updateBlog.bind(null,id)

  return (
    <main className="max-w-2xl" p-8>
        <h1 className="text-2xl font-bold mb-6">Edit blog</h1>
        <form action={updateAction} className="space-y-4">
              <Input name="title" placeholder="Enter Your Title" required/>
               <Textarea
               name="content"
               placeholder="Enter Your Content"
               rows={10}
               required
               ></Textarea>
               <Button type="submit">Publish Blog</Button>

        </form>

    </main>
  )
}