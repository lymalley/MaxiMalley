import { merge, mergeDeepRight } from 'ramda'
import {
  SET_TEAMS,
  GET_CURRENT_TEAM,
  CURRENT_TEAM_LOADING_FAILED
} from '../constants'

export const teams = (state = [], action) => {
  switch (action.type) {
    case SET_TEAMS:
      return action.payload
    default:
      return state
  }
}

const initialCurrentTeam = {
  data: {
    _id: '',
    _rev: '',
    type: 'team',
    name: '',
    bye: {
      weekId: ''
    }
  },
  isError: false,
  errMsg: ''
}

export const currentTeam = (state = initialCurrentTeam, action) => {
  switch (action.type) {
    case GET_CURRENT_TEAM:
      return mergeDeepRight(state, {
        data: action.payload,
        isError: false,
        errMsg: ''
      })
    case CURRENT_TEAM_LOADING_FAILED:
      return merge(state, { isError: true, errMsg: action.payload })
    default:
      return state
  }
}
