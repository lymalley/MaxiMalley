import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Paper, TextField, Button } from '@material-ui/core'
import Icon from '@material-ui/icons/ThumbUpTwoTone'
import { GET_CURRENT_USER } from '../constants'
import { checkLogin } from '../action-creators/users'

const Login = props => {
  const {
    classes,
    history,
    onChange,
    checkLogin,
    isChecking,
    isError,
    errMsg
  } = props
  const { username, password } = props.user
  return (
    <div>
      <Paper>
        <form onSubmit={checkLogin(history)}>
          <TextField
            id="username"
            label="User Name"
            value={username}
            onChange={e => onChange('username', e.target.value)}
            autoComplete="off"
            required
          />
          <TextField
            id="password"
            label="Password"
            value={password}
            onChange={e => onChange('password', e.target.value)}
            autoComplete="off"
            required
          />
          <div>
            <Button
              //onClick={e}
              varient="button"
              color="white"
              type="submit"
              aria-label="add"
              aria-label="Add Crew Member"
              style={{
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                borderRadius: 3,
                border: 0,
                padding: '0 30px',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
              }}
            >
              <Icon /> Login
            </Button>
            <Link to="/" className="router-link">
              <Button variant="flat" type="button">
                Cancel
              </Button>
            </Link>
          </div>
        </form>
      </Paper>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.currentUser.data
  //  isChecking: state.currentUser.isChecking,
})

const mapActionToProps = dispatch => ({
  onChange: (field, value) =>
    dispatch({
      type: GET_CURRENT_USER,
      payload: { [field]: value }
    }),
  checkLogin: history => e => {
    e.prevent.default()
    dispatch(checkLogin(history))
  }
})

const connector = connect(
  mapStateToProps,
  mapActionToProps
)

export default connector(Login)
