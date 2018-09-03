import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import { head } from 'ramda'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

const one = ({ if (pick.weekId === 'one') { return pick.team})
const two = pick.week.two.team
const three = pick.week.three.team
const four = pick.week.four.team
const five = pick.week.five.team
const six = pick.week.six.team
const seven = pick.week.seven.team
const eight = pick.week.eight.team
const nine = pick.week.nine.team
const ten = pick.week.ten.team

const isActive = user.status

const UserPicks = user => (
  <div key={pick._userId}>
    <Link to={`/picks/${pick._userId}`} className="router-link">
      <ListItem button>
        <ListItemText>
          <Typography variant="headline">
            {`${
              user.name
            } ${one} ${two} ${three} ${four} ${five} ${six} ${seven} ${eight} ${nine} ${ten}`}
          </Typography>
        </ListItemText>
      </ListItem>
    </Link>
    <Divider />
  </div>
)

export default UserPicks
