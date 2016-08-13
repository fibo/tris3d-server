import {
  getChoice
} from '../actions/canvas'

var socket = null

export function socketMiddleware (store) {
  return (next) => (action) => {
    const result = next(action)

    if (socket) {
      switch (action.type) {
        case 'SET_CHOICE':
          socket.emit('setChoice', action.cubeIndex)
      }
    }

    return result
  }
}

export function initSocket (store) {
  socket = io()

  // TODO socket.on('connection')

  socket.on('getChoice', (cubeIndex) => {
    store.dispatch(getChoice(cubeIndex))
  })
}
