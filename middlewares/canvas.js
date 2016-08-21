import { stupid, smart, bastard } from 'tris3d-ai'
import Tris3dCanvas from 'tris3d-canvas'
import {
  localMatchEnds,
  localMatchStarts,
  localPlayerTurnEnds,
  localPlayerTurnStarts,
  localPlayerWins,
  setChoice
} from '../actions'
import isPlayingLocally from '../store/utils/isPlayingLocally'
import localPlayerIndex from '../store/utils/localPlayerIndex'

var tris3dCanvas = null

const updateLocalPlayerIndex = (tris3dCanvas, localPlayers) => {
  tris3dCanvas.localPlayerIndex = localPlayerIndex({ localPlayers })
}

export default function canvasMiddleware (store) {
  return (next) => (action) => {
    const result = next(action)
    const state = store.getState()

    const localPlayers = state.localPlayers
    const playingLocally = isPlayingLocally(state)

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

        if (playingLocally && isOtherPlayerTurn) {
          // Just a little bit of random delay.
          const delay = 710 + Math.random() * 1700

          setTimeout(() => {
            var bot = null

            if (localPlayers[playerIndex] === 'stupid') bot = stupid
            if (localPlayers[playerIndex] === 'smart') bot = smart
            if (localPlayers[playerIndex] === 'bastard') bot = bastard

            const choice = bot(tris3dCanvas.choosen)

            store.dispatch(setChoice(choice))
          }, delay)
        }
      })

      tris3dCanvas.on('nobodyWins', () => {
        tris3dCanvas.resetPlayground()
        store.dispatch(localMatchEnds())
      })

      tris3dCanvas.on('tris3d!', (winnerPlayerIndex, winningCombinations) => {
        if (winnerPlayerIndex === tris3dCanvas.localPlayerIndex) {
          store.dispatch(localPlayerWins(winningCombinations))
        }

        store.dispatch(localMatchEnds())
      })

      // If user wants, start playing on init.
      if (isPlayingLocally) {
        updateLocalPlayerIndex(tris3dCanvas, localPlayers)
        store.dispatch(localMatchStarts())
      }
    }

    if (tris3dCanvas) {
      switch (action.type) {
        case 'ENABLE_MULTI_PLAYER':
          tris3dCanvas.resetPlayground()
          break

        case 'GET_CHOICE':
          tris3dCanvas.setChoice(action.cubeIndex)
          break

        case 'LOCAL_MATCH_STARTS':
          tris3dCanvas.startNewMatch()
          break

        case 'RESET_LOCAL_MATCH':
          tris3dCanvas.resetPlayground()
          break

        case 'SAVE_LOCAL_PLAYERS':
          updateLocalPlayerIndex(tris3dCanvas, action.localPlayers)
          break

        case 'SET_CHOICE':
          tris3dCanvas.setChoice(action.cubeIndex)
          break
      }
    }

    return result
  }
}
