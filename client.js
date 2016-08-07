import 'babel-polyfill'

const socket = io()

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Chat from './containers/Chat'

const store = configureStore()

import Tris3dCanvas from 'tris3d-canvas'
const tris3dCanvas = new Tris3dCanvas('playground')
tris3dCanvas.render()

render(
  <Provider store={store}>
    <Chat socket={socket} />
  </Provider>,
  document.getElementById('react-root')
)
