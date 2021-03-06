import {
  DISABLE_MULTI_PLAYER,
  ENABLE_MULTI_PLAYER,
  GET_CHOICE,
  INIT_CANVAS,
  LOCAL_MATCH_STARTS,
  MULTI_PLAYER_MATCH_STARTS,
  RESET_LOCAL_MATCH,
  SAVE_LOCAL_PLAYERS,
  SET_CHOICE,
  UPDATE_REMOTE_PLAYERS
} from '../actions/constants'

import { stupid, smart, bastard } from 'tris3d-ai'
import Tris3dCanvas from 'tris3d-canvas'
import {
  localMatchEnds,
  localPlayerTurnEnds,
  localPlayerTurnStarts,
  localPlayerWins,
  setChoice
} from '../actions'
import isPlayingLocally from '../store/utils/isPlayingLocally'
import localPlayerIndex from '../store/utils/localPlayerIndex'
import multiPlayerIndex from '../store/utils/multiPlayerIndex'

var tris3dCanvas = null

const updateMultiPlayerIndex = (tris3dCanvas, nickname, remotePlayers) => {
  tris3dCanvas.localPlayerIndex = multiPlayerIndex(nickname, remotePlayers)
}

const updateLocalPlayerIndex = (tris3dCanvas, localPlayers) => {
  tris3dCanvas.localPlayerIndex = localPlayerIndex(localPlayers)
}

export default function canvasMiddleware (store) {
  return (next) => (action) => {
    const result = next(action)
    const state = store.getState()

    const localPlayers = state.localPlayers
    const nickname = state.nickname

    if (action.type === INIT_CANVAS) {
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
        const currentState = store.getState()
        const localPlayerIndex = tris3dCanvas.localPlayerIndex

        const isOtherPlayerTurn = (localPlayerIndex !== playerIndex)
        const playingLocally = isPlayingLocally(currentState)

        if (playingLocally && isOtherPlayerTurn) {
          // Just a little bit of random delay.
          const delay = 710 + Math.random() * 1700

          setTimeout(() => {
            const currentState = store.getState()

            const playingLocally = isPlayingLocally(currentState)

            if (playingLocally) {
              var choice = null

              if (localPlayers[playerIndex] === 'stupid') {
                choice = stupid(tris3dCanvas.choosen)
              }

              if (localPlayers[playerIndex] === 'smart') {
                choice = smart(tris3dCanvas.choosen)
              }

              if (localPlayers[playerIndex] === 'bastard') {
                choice = bastard(localPlayerIndex)(tris3dCanvas.choosen)
              }

              store.dispatch(setChoice(choice))
            }
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
    }

    if (tris3dCanvas) {
      switch (action.type) {
        case DISABLE_MULTI_PLAYER:
          tris3dCanvas.resetPlayground()
          break

        case ENABLE_MULTI_PLAYER:
          tris3dCanvas.resetPlayground()
          break

        case GET_CHOICE:
          tris3dCanvas.setChoice(action.cubeIndex)
          break

        case LOCAL_MATCH_STARTS:
          tris3dCanvas.startNewMatch()
          break

        case MULTI_PLAYER_MATCH_STARTS:
          tris3dCanvas.startNewMatch()
          break

        case RESET_LOCAL_MATCH:
          tris3dCanvas.resetPlayground()
          break

        case SAVE_LOCAL_PLAYERS:
          updateLocalPlayerIndex(tris3dCanvas, action.localPlayers)
          break

        case SET_CHOICE:
          tris3dCanvas.setChoice(action.cubeIndex)
          break

        case UPDATE_REMOTE_PLAYERS:
          updateMultiPlayerIndex(tris3dCanvas, nickname, action.remotePlayers)
          break
      }
    }

    return result
  }
}
