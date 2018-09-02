import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import Public from './pages/public'
import Protected from './pages/protected'
import Protected2 from './pages/protected2'

import history from './history'

// App.js
import Auth from './Auth/Auth.js'

const auth = new Auth()

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication()
  }
}

// HOC = takes component and returns a component
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (auth.isAuthenticated()) {
        return <Component {...props} />
      }
      return <Redirect to="/login" />
    }}
  />
)

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Public} />
      <ProtectedRoute path="/protected" component={Protected} />
      <ProtectedRoute path="/protected2" component={Protected2} />

      <Route
        path="/login"
        render={props => {
          auth.login()
          return null
        }}
      />
      <Route
        path="/logout"
        render={props => {
          auth.logout()
          return null
        }}
      />

      <Route
        path="/callback"
        render={props => {
          handleAuthentication(props)
          return null
        }}
      />
    </Switch>
  </Router>
)

export default App
