import { merge, mergeDeepRight } from 'ramda'
import {
  GET_CURRENT_USER,
  SET_USERS,
  CURRENT_USER_LOADING_FAILED
} from '../constants'

const initialCurrentUser = {
  data: {
    _id: '',
    _rev: '',
    type: 'user',
    userName: '',
    password: '',
    userStatus: 'active',
    picks: [{ pickId: '', week: '', team: '', status: 'win' }]
  },
  isError: false,
  errMsg: ''
}

export const currentUser = (state = initialCurrentUser, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return mergeDeepRight(state, {
        data: action.payload,
        isError: false,
        errMsg: ''
      })
    case CURRENT_USER_LOADING_FAILED:
      return merge(state, { isError: true, errMsg: action.payload })
    default:
      return state
  }
}

export const users = (state = [], action) => {
  switch (action.type) {
    case SET_USERS:
      return action.payload
    default:
      return state
  }
}
