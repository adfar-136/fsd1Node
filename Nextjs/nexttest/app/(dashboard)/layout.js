import React from 'react'

function layout({children}) {
  return (
    <div>
      <h1> Dashboard Component</h1>
      <h1>{children}</h1>
    </div>
  )
}

export default layout
