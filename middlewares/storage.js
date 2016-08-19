import localStorageIsAvailable from '../utils/localStorageIsAvailable'

export default function storageMiddleware (store) {
  return (next) => (action) => {
    const result = next(action)

      // TODO put choices in local storage, when playing locally
      // so if user refreshes page or connect later, the game is still on.
    if (localStorageIsAvailable()) {
      switch (action.type) {
        case 'DISABLE_MULTI_PLAYER':
          localStorage.setItem('tris3d.isMultiPlayer', 'false')
          break

        case 'ENABLE_MULTI_PLAYER':
          localStorage.setItem('tris3d.isMultiPlayer', 'true')
          break

        case 'SET_NICKNAME':
          localStorage.setItem('tris3d.nickname', action.nickname)
          break

        case 'SAVE_LOCAL_PLAYERS':
          localStorage.setItem('tris3d.localPlayers', action.localPlayers)
          break
      }
    }

    return result
  }
}
