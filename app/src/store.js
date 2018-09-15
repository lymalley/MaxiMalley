import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//import { drawer } from './reducers/drawer'

import { picks, currentPick, newPick } from './reducers/picks'
import { users, currentUser } from './reducers/users'
import { weeks, currentWeek } from './reducers/weeks'
import { teams, currentTeam } from './reducers/teams'

const store = createStore(
  combineReducers({
    picks,
    currentPick,
    newPick,
    users,
    currentUser,
    weeks,
    currentWeek,
    teams,
    currentTeam
  }),
  applyMiddleware(thunk)
)

export default store
