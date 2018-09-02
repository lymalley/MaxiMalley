import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>
      <h1>Protected2...</h1>
      <Link to="/logout">Logout</Link>
    </div>
  )
}
