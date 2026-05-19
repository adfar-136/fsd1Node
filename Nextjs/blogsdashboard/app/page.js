import BlogList from "@/components/BlogList";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import Link from "next/link";
import { lazy, Suspense } from "react";


const CounterComp = dynamic(
  ()=>import("@/components/COmpo"),
  {
    loading : ()=>{
      <div>
        <h1>Loading counter component .....</h1>
      </div>
    }
  }
)
lazy
export default function Home() {

  return (
    <main className="max-w-6xl p-8" >
      <div className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold">Blogs Dashboard</h1>
        <Link href="/blogs/new">
          <Button>+ New Blog</Button>
        </Link>
      </div>
      <CounterComp/>
      <Suspense fallback={<h1>Please wait.....</h1>}>
         <BlogList/>
         
      </Suspense>
    </main>
  );
}
