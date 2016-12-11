import generateId from './generateId'
import localStorageIsAvailable from './localStorageIsAvailable'

export default function getUserId () {
  const brandNewUserId = generateId()

  if (localStorageIsAvailable()) {
    var storedUserId = localStorage.getItem('tris3d.userId')

    if (storedUserId) {
      return storedUserId
    } else {
      localStorage.setItem('tris3d.userId', brandNewUserId)

      return brandNewUserId
    }
  } else {
    return brandNewUserId
  }
}
