import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import objectAssign from 'es6-object-assign'

import App from './containers/App'
import configureStore from './store/configureStore'

objectAssign.polyfill()

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
