import {
  getChoice
} from '../actions/canvas'
import {
  socketConnected,
  socketDisconnected
} from '../actions/socket'

var socket = null

export default function socketMiddleware (store) {
  return (next) => (action) => {
    const result = next(action)

    if (socket) {
      switch (action.type) {
        case 'DISABLE_MULTI_PLAYER':
          disposeSocket()
          // Using `break` is required, since disposeSocket
          // will point socket to null and it is referenced below.
          break

        case 'SET_CHOICE':
          socket.emit('setChoice', action.cubeIndex)
          break
      }
    } else {
      if (action.type === 'ENABLE_MULTI_PLAYER') {
        initSocket(store)
      }
    }

    return result
  }
}

function disposeSocket () {
  socket.emit('disconnect')
  socket = null
}

function initSocket (store) {
  socket = io()

  socket.on('connection', () => {
    store.dispatch(socketConnected())
  })

  socket.on('disconnect', () => {
    console.log('socket disconnect')
    store.dispatch(socketDisconnected())
  })

  socket.on('getChoice', (cubeIndex) => {
    store.dispatch(getChoice(cubeIndex))
  })
}
