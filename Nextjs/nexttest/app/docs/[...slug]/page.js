import React from 'react'

async function page({params}) {
    const pms =await params
    const segments = pms.slug
    return (
    <div>
      <h1>segments : {segments.join("/")}</h1>
    </div>
  )
}

export default page
