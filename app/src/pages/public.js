import React from 'react'
import TeamsList from '../components/teams'
import TimeDate from '../components/time'

export default () => (
  <div>
    <h1>Hello Public</h1>
    <TimeDate />
    <TeamsList />
    <a href="/protected">Make Your Pick</a>
  </div>
)
