import React from 'react'
import keyIndex from 'react-key-index'

class TeamsList extends React.Component {
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
    teams = keyIndex(teams, 1)

    const list = teams.map(teams => <li key={teams.id}>{teams.value}</li>)
    return <ul>{list}</ul>
  }
}

export default TeamsList
