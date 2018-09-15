import fetch from 'isomorphic-fetch'
import {
  SET_WEEKS,
  GET_CURRENT_WEEK,
  CURRENT_WEEK_LOADING_FAILED
} from '../constants'

const url = process.env.REACT_APP_BASE_URL + 'weeks'

export const setWeeks = async (dispatch, getState) => {
  //const user = getState().currentUser.data
  const weeks = await fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))
  dispatch({ type: SET_WEEKS, payload: weeks })
}

export const getWeek = id => async (dispatch, getState) => {
  const week = await fetch(url + '/' + id)
    .then(res => res.json())
    .catch(err =>
      dispatch({
        type: CURRENT_WEEK_LOADING_FAILED,
        payload: 'Failed to load week'
      })
    )
  dispatch({ type: GET_CURRENT_WEEK, payload: week })
}
