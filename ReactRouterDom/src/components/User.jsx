import React from 'react'

import { useParams } from 'react-router-dom'

function User() {

    const { userid } = useParams()
  return (
    <div className= "bg-green-700 text-center">
      <h1>user id:{userid}</h1>
    </div>
  )
}

export default User
