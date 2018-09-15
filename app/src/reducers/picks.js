import { merge, mergeDeepRight } from 'ramda'
import {
  SET_PICKS,
  GET_CURRENT_PICK,
  CURRENT_PICK_LOADING_FAILED,
  NEW_PICK_UPDATED,
  NEW_PICK_SAVE_STARTED,
  NEW_PICK_SAVE_SUCCEEDED,
  NEW_PICK_SAVE_FAILED,
  NEW_PICK_FORM_CLEARED
} from '../constants'

export const picks = (state = [], action) => {
  switch (action.type) {
    case SET_PICKS:
      return action.payload
    default:
      return state
  }
}

const initialCurrentPick = {
  data: {
    _id: '',
    _rev: '',
    type: 'pick',
    userId: '',
    teamId: '',
    weekId: '',
    pickStatus: 'undetermined',
    locked: false
  },
  isError: false,
  errMsg: ''
}

export const currentPick = (state = initialCurrentPick, action) => {
  switch (action.type) {
    case GET_CURRENT_PICK:
      return mergeDeepRight(state, {
        data: action.payload,
        isError: false,
        errMsg: ''
      })
    case CURRENT_PICK_LOADING_FAILED:
      return merge(state, { isError: true, errMsg: action.payload })
    default:
      return state
  }
}

const initialNewPick = {
  data: {
    type: 'pick',
    userId: '',
    teamId: '',
    weekId: '',
    pickStatus: 'undetermined',
    locked: false
  },
  isSaving: false,
  isError: false,
  errMsg: ''
}

export const newPick = (state = initialNewPick, action) => {
  switch (action.type) {
    case NEW_PICK_UPDATED:
      return mergeDeepRight(state, { data: action.payload })
    case NEW_PICK_SAVE_STARTED:
      return merge(state, { isSaving: true, isError: false, errMsg: '' })
    case NEW_PICK_SAVE_SUCCEEDED:
      return initialNewPick
    case NEW_PICK_SAVE_FAILED:
      return merge(state, {
        isSaving: false,
        isError: true,
        errMsg: action.payload
      })
    case NEW_PICK_FORM_CLEARED:
      return initialNewPick
    default:
      return state
  }
}
