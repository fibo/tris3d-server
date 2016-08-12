import { applyMiddleware, createStore } from 'redux'
import { initSocket, socketMiddleware } from '../middlewares/socket'
import reducers from '../reducers'

export default function configureStore () {
  const store = createStore(reducers, applyMiddleware(socketMiddleware))

  initSocket(store)

  return store
}
