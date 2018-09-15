{
  /* 
import React from 'react'
import keyIndex from 'react-key-index'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import ListItemText from '@material-ui/core/ListItemText'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'
import Chip from '@material-ui/core/Chip'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: theme.spacing.unit / 4
  }
})

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

class TeamsList extends React.Component {
  constructor() {
    super()
  }
  render() {
    let teams = [
      'Cardinals',
      'Falcons',
      'Ravens',
      'Bills',
      'Panthers',
      'Bears',
      'Bengals',
      'Browns',
      'Cowboys',
      'Broncos',
      'Lions',
      'Packers',
      'Texans',
      'Colts',
      'Jaguars',
      'Chiefs',
      'Chargers',
      'Rams',
      'Dolphins',
      'Vikings',
      'Patriots',
      'Saints',
      'Giants',
      'Jets',
      'Raiders',
      'Eagles',
      'Steelers',
      '49ers',
      'Seahawks',
      'Buccaneers',
      'Titans',
      'Redskins'
    ]
    const team = keyIndex(teams, 1)

    let optionItems = teams.map(team => (
      <option key={team.id}>{team.value}</option>
    ))

    return (
      <div className={this.props.classes.formControl}>
        <select>{optionItems}</select>
      </div>
    )
  }
}

export default withStyles(styles)(TeamsList)
   let state = {
      team: []
    }

    const handleChange = event => {
      this.setState({ team: event.target.value })
    }

    // const list = teams.map(teams => <li key={teams.id}>{teams.value}</li>)

    //  return <ul>{list}</ul>

    const { classes, theme } = this.props

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select">Team</InputLabel>
          <Select
            // value={this.state.name}
            onChange={this.handleChange}
            input={<Input id="select" />}
            MenuProps={MenuProps}
          >
            {teams.map(teams => (
              <MenuItem key={team.id}>{team.value}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    )
  }
}

export default withStyles(styles)(TeamsList)
*/
}
