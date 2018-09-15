import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Paper, TextField, Button, Grid, withStyles } from '@material-ui/core'
import Icon from '@material-ui/icons/ThumbUpTwoTone'
import { CURRENT_USER_LOADING_SUCCEEDED } from '../constants'
import { checkLogin } from '../action-creators/users'
import MenuAppBar from '../components/menuAppBar'
import red from '@material-ui/core/colors/red'

const styles = theme => ({
  input: {
    width: '95%',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8
  },
  page: {
    length: '95%',
    backgroundColor: '#424242'
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
})

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
      <center>
        <Paper className={classes.root} elevation={1}>
          <MenuAppBar title="Login" />
          <form onSubmit={checkLogin(history)}>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  className={classes.input}
                  id="username"
                  label="User Name"
                  value={username}
                  onChange={e => onChange('username', e.target.value)}
                  autoComplete="off"
                  required
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  className={classes.input}
                  id="password"
                  label="Password"
                  value={password}
                  onChange={e => onChange('password', e.target.value)}
                  autoComplete="off"
                  required
                />
              </Grid>
            </Grid>
            <div style={{ padding: 20 }}>
              <Button
                //onClick={e}
                varient="button"
                color="white"
                type="submit"
                aria-label="add"
                aria-label="Add Crew Member"
                color="primary"
                style={{
                  background: 'red',
                  // 'linear-gradient(30deg, #304FFE 30%, #D50000 90%)',
                  borderRadius: 3,
                  border: 0,
                  padding: '0 30px',
                  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
                }}
              >
                <b>Sign In</b>
              </Button>
              <Link to="/" className="router-link">
                <Button variant="flat" type="button">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </Paper>
      </center>
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
      type: CURRENT_USER_LOADING_SUCCEEDED,
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

export default connector(withStyles(styles)(Login))
