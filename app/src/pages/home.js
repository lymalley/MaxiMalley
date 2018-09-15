import React from 'react'
import TeamsList from '../components/teams'
import TimeDate from '../components/time'
import MenuAppBar from '../components/menuAppBar'
import FootballIcon from '../components/footballIcon'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import ResultsTable from '../components/contestTable'

export default () => (
  <div>
    <center>
      <MenuAppBar title="Survivor Pool" />
      <FootballIcon />

      {/* <TimeDate />  
    <TeamsList />*/}

      <Link to="/protected" className="router-link">
        <Button
          varient="button"
          color="white"
          type="submit"
          aria-label="add"
          aria-label="Add Crew Member"
          color="primary"
          style={{
            background: 'red',
            // 'linear-gradient(30deg, #304FFE 30%, #D50000 90%)',
            borderRadius: 3,
            border: 0,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
          }}
        >
          {' '}
          <b> Make Your Pick</b>
        </Button>
      </Link>
      <FootballIcon />

      <ResultsTable />
    </center>
  </div>
)
