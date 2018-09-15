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

const UserPicks = user => (
  <tr key={user._id}>
    <th scope="col">{user.username}</th>
    <td scope="col">{user.pick1TeamName}</td>
  </tr>
)

export default UserPicks

{
  /*
   <tr scope="row" key={user._id}>
     </tr>


<div key={pick._userId}>
    <Link to={`/picks/${pick._userId}`} className="router-link">
      <ListItem button>
        <ListItemText>
          <Typography variant="headline">
            {
              user.name
            }
          </Typography>
        </ListItemText>
      </ListItem>
    </Link>
    <Divider />
  </div>


{user.status !== 'active' ? (
  <tr><s>
<td>user.name</td>
<td></td>
</s></tr>
) : (
  <tr><s>
  <td>user.name</td>
  <td></td>
  </s></tr>

)}
*/
}
