import localStorageIsAvailable from '../utils/localStorageIsAvailable'

export default function storageMiddleware (store) {
  return (next) => (action) => {
    const result = next(action)

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
      }
    }

    return result
  }
}
