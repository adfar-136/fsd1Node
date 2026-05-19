import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import DeleteBlogButton from "./DeleteBlogButton";

export default function BlogCard({blog}){
    return (
        <Card className="hover:shadow-md transition mb-6">
            <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
                <p className="text-sm text-slate-500">{blog.author}</p>
            </CardHeader>

            <CardContent>
                <p className="line-clamp-3 text-slate-700">{blog.content}</p>
            </CardContent>
            <CardFooter className="flex gap-2 justify-end">
                <Link href={`/blogs/${blog._id}/edit`}>
                   <Button>Edit</Button>
                </Link>
                <DeleteBlogButton id={blog._id}/>
            </CardFooter>
        </Card>
    )
}