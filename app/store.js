import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//import { drawer } from './reducers/drawer'

import { getTeams } from './reducers/teams'

const store = createStore(
  combineReducers({
    getTeams
  }),
  applyMiddleware(thunk)
)

export default store
