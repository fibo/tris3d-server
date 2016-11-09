import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'
import canvasMiddleware from '../middlewares/canvas'
import initialState from './initialState'
import socketMiddleware from '../middlewares/socket'
import storageMiddleware from '../middlewares/storage'
import reducers from '../reducers'

export default function configureStore () {
  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(
        canvasMiddleware,
        socketMiddleware,
        storageMiddleware
      ),
      window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  )

  return store
}
