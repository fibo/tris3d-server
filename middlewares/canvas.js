import Tris3dCanvas from 'tris3d-canvas'
import {
  setChoice
} from '../actions/canvas'
import {
  localPlayerWins
} from '../actions/user'

var tris3dCanvas = null

export default function canvasMiddleware (store) {
  return (next) => (action) => {
    const result = next(action)

    if (action.type === 'INIT_CANVAS') {
      tris3dCanvas = new Tris3dCanvas(action.canvasId)

      tris3dCanvas.render()

      tris3dCanvas.on('setChoice', (cubeIndex) => {
        store.dispatch(setChoice(cubeIndex))
      })

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

*/

      tris3dCanvas.on('tris3d!', (winnerPlayerIndex, winningCombinations) => {
        if (winnerPlayerIndex === tris3dCanvas.localPlayerIndex) {
          store.dispatch(localPlayerWins(winningCombinations))
        }
      })
    }

    if (tris3dCanvas) {
      switch (action.type) {
        case 'ENABLE_MULTI_PLAYER':
          tris3dCanvas.resetPlayground()
          break

        case 'GET_CHOICE':
          tris3dCanvas.setChoice(action.cubeIndex)
          break
      }
    }

    return result
  }
}
