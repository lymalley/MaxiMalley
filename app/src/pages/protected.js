import React from 'react'
import { Link } from 'react-router-dom'
import { getUsers } from '../action-creators/api'

export default () => {
  return (
    <div>
      <h1>Protected...</h1>
      <Link to="/logout">Logout</Link>
      <button
        onClick={e => {
          getUsers().then(people => console.log(people))
        }}
      >
        get data
      </button>
    </div>
  )
}
