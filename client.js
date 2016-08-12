import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './containers/App'

const stupid = require('tris3d-ai').stupid

/*
tris3dCanvas.on('localPlayerTurnEnds', () => {
  console.log('wait for other players choices')
})

tris3dCanvas.on('localPlayerTurnStarts', () => {
  console.log('is my turn')
})

tris3dCanvas.on('nextPlayer', (playerIndex) => {
  console.log('nextPlayer', playerIndex)

  const isOtherPlayerTurn = (tris3dCanvas.localPlayerIndex !== playerIndex)

  // Bot choices.
  if (isOtherPlayerTurn) {
    const nextChoice = stupid(tris3dCanvas.choosen)

    // Just a little bit of random delay.
    var delay = 710 + Math.random() * 1700

    setTimeout(() => {
      tris3dCanvas.setChoice(playerIndex, nextChoice)
    }, delay)
  }
})

tris3dCanvas.on('nobodyWins', () => {
  console.log('Nobody wins :(')

  setTimeout(() => {
    tris3dCanvas.startNewMatch()
  }, 1700)
})

tris3dCanvas.on('setChoice', (cubeIndex) => {
  console.log('setChoice', cubeIndex)
})

tris3dCanvas.on('tris3d!', (winnerPlayerIndex, winningCombinations) => {
  console.log('tris3d!')
  console.log('winnerPlayerIndex', winnerPlayerIndex)
  console.log('winningCombinations', winningCombinations)

  setTimeout(() => {
    tris3dCanvas.startNewMatch()
  }, 7100)
})

tris3dCanvas.render()
*/


const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
