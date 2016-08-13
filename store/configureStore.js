import { applyMiddleware, createStore } from 'redux'
import { initSocket, socketMiddleware } from '../middlewares/socket'
import canvasMiddleware from '../middlewares/canvas'
import reducers from '../reducers'

export default function configureStore () {
  const store = createStore(
    reducers,
    applyMiddleware(socketMiddleware, canvasMiddleware)
  )

  initSocket(store)

  return store
}
