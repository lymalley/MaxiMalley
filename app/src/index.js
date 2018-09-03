import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import store from './store'

import App from './App'
//import registerServiceWorker from './registerServiceWorker'

//ReactDOM.render(<App />, document.getElementById('root'))
//registerServiceWorker()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
