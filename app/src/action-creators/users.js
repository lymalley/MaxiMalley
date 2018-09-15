{
  /*
import fetch from 'isomorphic-fetch'
import {
  GET_CURRENT_USER,
  SET_USERS,
  CURRENT_USER_LOADING_FAILED,
  CURRENT_USER_LOADING_SUCCEEDED,
  CURRENT_USER_LOADING_STARTED,
  LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    LOGOUT_REQUEST,
    LOGIN_CLEAR
} from '../constants'
import { setPicks } from './picks'
import { equals, isEmpty, isNil, not, prop, find } from 'ramda'
import history from '../history'

const url = process.env.REACT_APP_BASE_URL + '/users'

import { ADD_USER, EDITED_USER } from '../constants';
import { assoc, map, prop, dissoc, findIndex, propEq, update, equals } from 'ramda'
import {
    RETREIVE_USERS, EDITED_USER_ARRAY, USER_TO_PUT, SEND_INVITAION, REGISTER_USER, LOGIN_REQUEST, LOGIN_SUCCESS,
    LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE, LOGGED_IN_USER, SET_CURRENT_COMPANY,
    PASSWORD_CONFIRMATION_REQUEST, PASSWORD_CONFIRMATION_SUCCESS, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS,
    RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, SUCCESS_UPDATE_USER_ROLE, FAILURE_UPDATE_USER_ROLE, REQUEST_UPDATE_USER_ROLE,
    REQUEST_LOGGED_IN_USER, REQUEST_USERS, CLEAR_COMPANIES, CLEAR_LOGGED_IN_USER, CLEAR_CURRENT_COMPANY, CLEAR_COMPANY_DETAILS,
    CLEAR_PENDING_SIGNED_WAIVERS, CLEAR_RECENTLY_SIGNED_WAIVERS, TRANSACTION_INFORMATION_CLEAR, INIT_COMPANY_PAYMENT_DETAILS,
    RESET_USERS
} from '../constants'
import moment from 'moment'
import history from '../history'
import fetch from 'isomorphic-fetch'
import { parse, format, AsYouType, isValidNumber } from 'libphonenumber-js'
import { requestLogout, receiveLogout } from './login'
import { coalesce, apiFetchClosure } from '../lib/fetch'
import fetchDefaults from "fetch-defaults"

// Logs the user out
export const logoutUser = dispatch => {
    dispatch(requestLogout())
    localStorage.clear()
    sessionStorage.clear()
    dispatch({ type: CLEAR_COMPANIES })
    dispatch({ type: CLEAR_LOGGED_IN_USER })
    dispatch({ type: CLEAR_CURRENT_COMPANY })
    dispatch({ type: CLEAR_COMPANY_DETAILS })
    dispatch({ type: CLEAR_RECENTLY_SIGNED_WAIVERS })
    dispatch({ type: CLEAR_PENDING_SIGNED_WAIVERS })
    dispatch({ type: TRANSACTION_INFORMATION_CLEAR })
    dispatch({ type: INIT_COMPANY_PAYMENT_DETAILS })
    dispatch({ type: RESET_USERS})
    dispatch(receiveLogout())
}




export const getUsers = async (dispatch, getState) => {
    // dispatch({ type: REQUEST_USERS, payload: {fetching:true} })
    const response = await apiFetchClosure()(`/api/users/GetCompanyUsers`)
        .then(res => res.json())
        .catch(err => console.log('err: ', err));

    dispatch({ type: RETREIVE_USERS, payload: response })
}

export const addUser = formData => async (dispatch, getState) => {
    dispatch({ type: ADD_USER, payload: assoc("Created", moment().format("YYYY-MM-DD"), formData) })
}

// ** this method is also used the handleChange in user.js to change access levels

// Mutating user array with edited user and refreshing redux state store with new array
// Edited user obj needs to be translated into server side object, then PUT to API endpoint
export const editUser = formData => async (dispatch, getState) => {
    const users = getState().users
    const userIndex = findIndex(propEq('UserId', formData.UserId))(users)
    users[userIndex] = assoc("EditedLast", moment().format("YYYY-MM-DD"), formData)
    const userCopy = [...users]
    dispatch({ type: EDITED_USER_ARRAY, payload: userCopy })
    dispatch({ type: USER_TO_PUT, payload: formData })
    dispatch(updateUserRole(formData))
}

export const apiFetchClosure = () => {
  const authHeaders = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': window.location.protocol + "//" + window.location.host,
      'Authorization': `Bearer ${coalesce(sessionStorage.getItem('access_token'), localStorage.getItem('access_token'))}`
  }
  return fetchDefaults(fetch, `${process.env.REACT_APP_URL}`, {
      headers: authHeaders
  })
}

const matchUser = (users, login) => {
  const existingUser = user =>
    equals(prop('username', user), prop('username', login)) &&
    equals(prop('password', user), prop('password', login))
  return find(existingUser, users)
}

export const getLoggedInUserInfo = async (dispatch, getState) => {
  dispatch({ type: CURRENT_USER_LOADING_STARTED, payload: { loggedInUserInfo: false } })
  const response = await apiFetchClosure()(`/api/Account/userId`)
      .then(res => res.json())
      .catch(err => console.log('err: ', err));

  dispatch({ type: GET_CURRENT_USER, payload: response })
}

export const setUsers = async (dispatch, getState) => {
  const users = await fetch(url).then(res => res.json())

  dispatch({ type: SET_USERS, payload: users })
}

export const getUser = id => async (dispatch, getState) => {
  const users = getState().users
  const login = getState().currentUser.data

  const foundUser = matchUser(users, login)

  window.localStorage.setItem('cacheUser', JSON.stringify(foundUser))

  dispatch({ type: GET_CURRENT_USER, payload: matchUser })
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

export const setLogin = history => async (dispatch, getState) => {
  if (isNil(window.localStorage.getItem('cacheUser'))) {
    return
  }
  const cacheUser = JSON.parse(window.localStorage.getItem('cacheUser')) || {}

  const users = await dispatch(setUsers).then(res => getState().profiles)

  if (not(isEmpty(cacheUser))) {
    const foundUser = matchUser(users, cacheUser)

    if (not(isEmpty(foundUser))) {
      dispatch({ type: CURRENT_USER_LOADING_SUCCEEDED, payload: foundUser })
      await dispatch(setPicks)
      history.push('/picks')
    }
  }
}

export const checkLogin = history => async (dispatch, getState) => {
  dispatch({ type: CURRENT_USER_LOADING_STARTED })

  const login = getState().currentUser.data

  const users = getState().users

  const foundUser = matchUser(users, login)

  if (not(isNil(foundUser))) {
    dispatch({ type: CURRENT_USER_LOADING_SUCCEEDED, payload: foundUser })

    window.localStorage.setItem('cacheProfile', JSON.stringify(foundUser))
    await dispatch(setPicks)
    history.push('/picks')
  } else {
    dispatch({
      type: CURRENT_USER_LOADING_FAILED,
      payload: 'Please try again.'
    })
  }
}


import { getLoggedInUserInfo } from './manageUser'


//const response = await fetch(`${url}/users/GetCompanyUsers`)
export const loginUser = user => async (dispatch, getState) => {

    const config = {
        headers: {
            'Accept': 'application/json',
            "Access-Control-Allow-Origin": window.location.protocol + "//" + window.location.host,
        },
        method: "POST",
        body: `username=${user.LoginName}&password=${user.Password}&grant_type=password`
        //body: `username=${user.LoginName}&password=${user.Password}`
    }


    dispatch(requestLogin(config))

    const response = await fetch(`${process.env.REACT_APP_URL}/token`, config)
        .then(res => res)
        .then(response => {
            if (equals(response.status, 200)) {
                const tokenBody = response.json()
                tokenBody.then(body => {
                    if (user.RememberMe) {
                        localStorage.setItem('access_token', body.access_token)
                    } else {
                        sessionStorage.setItem('access_token', body.access_token)
                    }
                    dispatch(receiveLogin(user))
                    dispatch(getLoggedInUserInfo)
                    dispatch(getCompanies)
                    history.push('/signedwaivers')
                })
            } else {
                const tokenBody = response.json()
                tokenBody.then(user => {
                    dispatch(loginError(user.error_description))
                })
            }
        })
}

const setItem = ([key, value]) => localStorage.setItem(key, value)
//map(setItem,[['access_token',something.accessToken],['id_token', something.idToken],['expires_at',expiresAt]])

function requestLogin(creds) {
    return {
        type: LOGIN_REQUEST,
        payload: {
            isFetching: true,
            isAuthenticated: false,
            creds
        }
    }
}

function receiveLogin(user) {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            isFetching: false,
            isAuthenticated: true,
        }
    }
}

function loginError(message) {
    return {
        type: LOGIN_FAILURE,
        payload: {
            isFetching: false,
            isAuthenticated: false,
            message
        }
    }
}

export function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        payload: {
            isFetching: true,
            isAuthenticated: true
        }
    }
}

export function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        payload: {
            isFetching: false,
            isAuthenticated: false
        }
    }
}
*/
}
