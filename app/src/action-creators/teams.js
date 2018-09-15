import fetch from 'isomorphic-fetch'
import {
  SET_TEAMS,
  GET_CURRENT_TEAM,
  CURRENT_TEAM_LOADING_FAILED
} from '../constants'

const url = process.env.REACT_APP_BASE_URL + 'teams'

export const setTeams = async (dispatch, getState) => {
  //const user = getState().currentUser.data
  const teams = await fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))
  dispatch({ type: SET_TEAMS, payload: teams })
}

export const getTeam = id => async (dispatch, getState) => {
  const pick = await fetch(url + '/' + id)
    .then(res => res.json())
    .catch(err =>
      dispatch({
        type: CURRENT_TEAM_LOADING_FAILED,
        payload: 'Failed to load team'
      })
    )
  dispatch({ type: GET_CURRENT_TEAM, payload: team })
}
