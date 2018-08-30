import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Public from './pages/public'
import Protected from './pages/protected'

import Auth from './Auth/Auth.js'

const auth = new Auth()
auth.login()

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Public} />
      <Route exact path="/protected" component={Protected} />
    </Switch>
  </BrowserRouter>
)

export default App
