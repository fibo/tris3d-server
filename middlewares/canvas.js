import { stupid } from 'tris3d-ai'
import Tris3dCanvas from 'tris3d-canvas'
import {
  setChoice
} from '../actions/canvas'
import {
  localPlayerTurnEnds,
  localPlayerTurnStarts,
  localPlayerWins
} from '../actions/user'

var tris3dCanvas = null

export default function canvasMiddleware (store) {
  return (next) => (action) => {
    const result = next(action)
    const state = store.getState()

    const isPlayingLocally = !state.isMultiPlayer

    if (action.type === 'INIT_CANVAS') {
      tris3dCanvas = new Tris3dCanvas(action.canvasId)

      tris3dCanvas.render()

      tris3dCanvas.on('setChoice', (cubeIndex) => {
        store.dispatch(setChoice(cubeIndex))
      })

      tris3dCanvas.on('localPlayerTurnEnds', () => {
        store.dispatch(localPlayerTurnEnds())
      })

      tris3dCanvas.on('localPlayerTurnStarts', () => {
        store.dispatch(localPlayerTurnStarts())
      })

      tris3dCanvas.on('nextPlayer', (playerIndex) => {
        const isOtherPlayerTurn = (tris3dCanvas.localPlayerIndex !== playerIndex)

        if (isPlayingLocally && isOtherPlayerTurn) {
          // Just a little bit of random delay.
          const delay = 710 + Math.random() * 1700

          setTimeout(() => {
            const bot = stupid
            const choice = bot(tris3dCanvas.choosen)

            store.dispatch(setChoice(choice))
          }, delay)
        }
      })

      tris3dCanvas.on('nobodyWins', () => {
        console.log('Nobody wins :(')
      })

      tris3dCanvas.on('tris3d!', (winnerPlayerIndex, winningCombinations) => {
        if (winnerPlayerIndex === tris3dCanvas.localPlayerIndex) {
          store.dispatch(localPlayerWins(winningCombinations))
        }
      })

      tris3dCanvas.startNewMatch()
    }

    if (tris3dCanvas) {
      switch (action.type) {
        case 'ENABLE_MULTI_PLAYER':
          tris3dCanvas.resetPlayground()
          break

        case 'GET_CHOICE':
          tris3dCanvas.setChoice(action.cubeIndex)
          break

        case 'SET_CHOICE':
          tris3dCanvas.setChoice(action.cubeIndex)
          break
      }
    }

    return result
  }
}
