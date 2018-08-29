import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

const Menu = props => {
  return (
    <div>
      <h1>Teams</h1>
      <ul>
        <li>
          Teams Go Here
          {/* <Link to="/teams">Teams</Link>*/}
        </li>
      </ul>
    </div>
  )
}

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
