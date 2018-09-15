import React, { Component } from 'react'
import {
  Router,
  Switch,
  Route,
  Redirect,
  BrowserRouter
} from 'react-router-dom'
import Public from './pages/public'
import Protected from './pages/protected'
import Protected2 from './pages/protected2'
import Home from './pages/home'
import Login from './pages/login'
import Picks from './pages/picks'

import history from './history'
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
      <Route exact path="/" component={Home} />
      <ProtectedRoute path="/protected" component={Protected} />
      <ProtectedRoute path="/protected2" component={Picks} />

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

{
  /*

  class App extends Component {
  //componentWillMount() {
  // window.location.pathname !== '/login' ? console.log('auth') : '' }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/picks" component={Picks} />>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App


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
*/
}
