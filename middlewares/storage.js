import {
  DISABLE_MULTI_PLAYER,
  ENABLE_MULTI_PLAYER,
  SAVE_LOCAL_PLAYERS,
  SET_NICKNAME
} from '../actions/constants'

import localStorageIsAvailable from '../store/utils/localStorageIsAvailable'

export default function storageMiddleware (store) {
  return (next) => (action) => {
    const result = next(action)

    if (localStorageIsAvailable()) {
      switch (action.type) {
        case DISABLE_MULTI_PLAYER:
          localStorage.setItem('tris3d.isMultiPlayer', 'false')
          break

        case ENABLE_MULTI_PLAYER:
          localStorage.setItem('tris3d.isMultiPlayer', 'true')
          break

        case SAVE_LOCAL_PLAYERS:
          localStorage.setItem('tris3d.localPlayers', action.localPlayers)
          break

        case SET_NICKNAME:
          localStorage.setItem('tris3d.nickname', action.nickname)
          break
      }
    }

    return result
  }
}
