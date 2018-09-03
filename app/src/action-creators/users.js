import { fetch } from 'isomorphic-fetch'
import {
  GET_CURRENT_USER,
  SET_USERS,
  CURRENT_USER_LOADING_FAILED
} from '../constants'

const url = process.env.REACT_APP_BASE_URL + 'users'

export const setUsers = async (dispatch, getState) => {
  // const user = getState().currentUser.data
  const users = await fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))
  dispatch({ type: SET_USERS, payload: picks })
}

export const getUser = id => async (dispatch, getState) => {
  const user = await fetch(url + '/' + id)
    .then(res => res.json())
    .catch(err =>
      dispatch({
        type: CURRENT_USER_LOADING_FAILED,
        payload: 'Failed to load user'
      })
    )
  dispatch({ type: GET_CURRENT_USER, payload: user })
}
