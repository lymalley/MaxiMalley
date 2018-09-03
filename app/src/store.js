import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//import { drawer } from './reducers/drawer'

import { picks, currentPick, newPick } from './reducers/picks'
import { users, currentUser } from './reducers/users'

const store = createStore(
  combineReducers({
    picks,
    currentPick,
    newPick,
    users,
    currentUser
  }),
  applyMiddleware(thunk)
)

export default store
