'use client'
import { useTransition } from "react";
import { Button } from "./ui/button";
import { deleteBlog } from "@/app/actions/blogs";
import { toast } from "sonner";

export default function DeleteBlogButton({id}){
 const [isPending,startTransition] = useTransition()
 function handleDelete(){
    if(!confirm("Delete this blog?")) return
   startTransition(async()=>{
    await deleteBlog(id)
    toast.success("Blog Deleted")
   })
}

      return <Button
      onClick={handleDelete}
      disabled ={isPending}>
        {isPending?"Deleting...":"Delete"}
      </Button>
}