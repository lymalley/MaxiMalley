import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import App from './App'
//import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
//registerServiceWorker()

{
  /*
 <Provider store={store}>
    <App />
  </Provider>,
*/
}
