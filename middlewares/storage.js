import localStorageIsAvailable from '../utils/localStorageIsAvailable'

export default function storageMiddleware (store) {
  return (next) => (action) => {
    const result = next(action)

    if (localStorageIsAvailable()) {
      switch (action.type) {
        case 'SET_NICKNAME':
          localStorage.setItem('tris3d.nickname', action.nickname)
          break
      }
    }

    return result
  }
}
