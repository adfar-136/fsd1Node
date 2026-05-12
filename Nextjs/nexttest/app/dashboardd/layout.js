import React from 'react'

function layout({children,analytics,team}) {
  return (
    <div>
      {children}
      {analytics}
      {team}
    </div>
  )
}

export default layout
