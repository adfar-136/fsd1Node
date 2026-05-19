
export default function Loading() {
  return (
    <main className="max-w-6xl mx-auto p-8">
       <div className="h-9 w-48 bg-slate-200 rounded animate-pulse mb-8" />
       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
         {[1,2,3,4,5,6].map(i => (
           <div key={i}
             className="h-48 bg-slate-200 rounded-lg animate-pulse"
           />
))} </div>
</main>
  )
}
