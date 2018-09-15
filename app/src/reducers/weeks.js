import { merge, mergeDeepRight } from 'ramda'
import {
  SET_WEEKS,
  GET_CURRENT_WEEK,
  CURRENT_WEEK_LOADING_FAILED
} from '../constants'

export const weeks = (state = [], action) => {
  switch (action.type) {
    case SET_WEEKS:
      return action.payload
    default:
      return state
  }
}

const initialCurrentWeek = {
  data: {
    _id: '',
    _rev: '',
    type: 'week',
    week: 1,
    isCurrent: true,
    winners: [],
    nonWinners: []
  },
  isError: false,
  errMsg: ''
}

export const currentWeek = (state = initialCurrentWeek, action) => {
  switch (action.type) {
    case GET_CURRENT_WEEK:
      return mergeDeepRight(state, {
        data: action.payload,
        isError: false,
        errMsg: ''
      })
    case CURRENT_WEEK_LOADING_FAILED:
      return merge(state, { isError: true, errMsg: action.payload })
    default:
      return state
  }
}
