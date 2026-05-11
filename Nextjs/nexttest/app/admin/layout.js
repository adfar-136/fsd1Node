import React from 'react'

function layout({children}) {
  return (
    <div>
      <h1>This is common element od ADMIN and CHildren compos</h1>
      {children}
    </div>
  )
}

export default layout
