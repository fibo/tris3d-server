import { getChoice } from '../actions/canvas'
import { connection } from '../actions/socket'

var socket = null

export function socketMiddleware (store) {
  return (next) => (action) => {
    const result = next(action)

    // Map one to one (socket event) <--> (dispatched action) to
    // forward them from redux to socket.io server.
    // The key is to use action.type as the event name.
    if (socket) {
      socket.emit(action.type, action)
    }

    return result
  }
}

export function initSocket (store) {
  socket = io()

  // TODO socket.on('coonection')

  socket.on('getChoice', (action) => {
    store.dispatch(getChoice(action.cubeIndex))
  })
}
