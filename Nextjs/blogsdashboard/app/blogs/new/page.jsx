import { createBlog } from "@/app/actions/blogs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function NewBlogPage(){
    return (
        <main className="max-w-2xl p-8">
            <h1 className="text-2xl font-bold mb-6">Write a new Blog</h1>
            <form action={createBlog} className="space-y-4">
                <Input name="title" placeholder="Enter Your Title" required/>
                <Input name="author" placeholder="Enter Your Author"/>
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