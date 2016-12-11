import {
  DISABLE_MULTI_PLAYER,
  ENABLE_MULTI_PLAYER,
  SET_CHOICE,
  SOCKET_CONNECTED
} from '../actions/constants'

import {
  getChoice,
  multiPlayerMatchStarts,
  numUsersOnlineChanged,
  socketConnected,
  socketDisconnected,
  updateRemotePlayers
} from '../actions'

var socket = null

export default function socketMiddleware (store) {
  return (next) => (action) => {
    const result = next(action)
    const state = store.getState()

    if (socket) {
      switch (action.type) {
        case DISABLE_MULTI_PLAYER:
          disposeSocket()
          // Using `break` is required, since disposeSocket
          // will point socket to null and it is referenced below.
          break

        case SET_CHOICE:
          socket.emit('setChoice', action.cubeIndex)
          break

        case SOCKET_CONNECTED:
          socket.emit('addUser', state.nickname, state.userId)
          break
      }
    } else {
      if (action.type === ENABLE_MULTI_PLAYER) {
        initSocket(store)
      }
    }

    return result
  }
}

function disposeSocket () {
  if (socket) socket.close()
  socket = null
}

function initSocket (store) {
  socket = io()

  socket.on('connection', () => {
    store.dispatch(socketConnected())
  })

  socket.on('disconnect', () => {
    store.dispatch(socketDisconnected())
  })

  socket.on('getChoice', (cubeIndex) => {
    store.dispatch(getChoice(cubeIndex))
  })

  socket.on('multiPlayerMatchStarts', () => {
    store.dispatch(multiPlayerMatchStarts())
  })

  socket.on('numUsersOnlineChanged', (numUsersOnline) => {
    store.dispatch(numUsersOnlineChanged(numUsersOnline))
  })

  socket.on('updateRemotePlayers', (players) => {
    store.dispatch(updateRemotePlayers(players))
  })
}
