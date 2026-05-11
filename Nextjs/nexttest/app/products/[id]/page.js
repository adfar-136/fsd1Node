import React from 'react'

async function page({params}) {
 const productId = await params;
 console.log(productId)
  return (
    <div>
      <h1>This is Dynamic products route and my dynamic route id is. = {productId.id}</h1>
    </div>
  )
}

export default page
