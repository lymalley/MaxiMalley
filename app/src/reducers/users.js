import { merge, mergeDeepRight } from 'ramda'
import {
  GET_CURRENT_USER,
  SET_USERS,
  CURRENT_USER_LOADING_FAILED,
  CURRENT_USER_LOADING_SUCCEEDED,
  CURRENT_USER_LOADING_STARTED
} from '../constants'

const initialCurrentUser = {
  data: {
    _id: '',
    _rev: '',
    type: 'user',
    username: '',
    password: '',
    userStatus: 'active'
  },
  isError: false,
  errMsg: '',
  isChecking: false
}

export const currentUser = (state = initialCurrentUser, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return mergeDeepRight(state, {
        data: action.payload
      })
    case CURRENT_USER_LOADING_STARTED:
      return merge(state, { isChecking: true, isError: false, errMsg: '' })
    case CURRENT_USER_LOADING_FAILED:
      return merge(state, {
        isError: true,
        errMsg: action.payload,
        isChecking: false
      })
    case CURRENT_USER_LOADING_SUCCEEDED:
      return mergeDeepRight(state, {
        data: action.payload,
        isChecking: false,
        isError: false,
        errMsg: ''
      })
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
