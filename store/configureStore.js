import { applyMiddleware, createStore } from 'redux'
import socketMiddleware from '../middlewares/socket'
import canvasMiddleware from '../middlewares/canvas'
import reducers from '../reducers'

export default function configureStore () {
  const store = createStore(
    reducers,
    applyMiddleware(socketMiddleware, canvasMiddleware)
  )

  return store
}
