import fetch from 'isomorphic-fetch'
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

const url = process.env.REACT_APP_BASE_URL + 'picks'

export const setPicks = async (dispatch, getState) => {
  //const user = getState().currentUser.data
  const picks = await fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))
  dispatch({ type: SET_PICKS, payload: picks })
}

export const getPick = id => async (dispatch, getState) => {
  const pick = await fetch(url + '/' + id)
    .then(res => res.json())
    .catch(err =>
      dispatch({
        type: CURRENT_PICK_LOADING_FAILED,
        payload: 'Failed to load pick'
      })
    )
  dispatch({ type: GET_CURRENT_PICK, payload: pick })
}

export const addPick = history => async (dispatch, getState) => {
  dispatch({ type: NEW_PICK_SAVE_STARTED })
  const pick = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(getState().newPick.data)
  })
    .then(res => res.json())
    .catch(err =>
      dispatch({
        type: NEW_PICK_SAVE_FAILED,
        payload: 'Error.  Please try again.'
      })
    )
  if (pick.ok) {
    dispatch({ type: NEW_PICK_SAVE_SUCCEEDED })
    setPicks(dispatch, getState)
    history.push('/picks')
  } else {
    dispatch({
      type: NEW_PICK_SAVE_FAILED,
      payload: 'Error.  Please try again.'
    })
  }
}
