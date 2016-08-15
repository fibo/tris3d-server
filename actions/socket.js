export function disableMultiPlayer () {
  return {
    type: 'DISABLE_MULTI_PLAYER'
  }
}

export function enableMultiPlayer () {
  return {
    type: 'ENABLE_MULTI_PLAYER'
  }
}

export function numUsersOnlineChanged (numUsersOnline) {
  return {
    type: 'NUM_USERS_ONLINE_CHANGED',
    numUsersOnline
  }
}

export function socketConnected () {
  return {
    type: 'SOCKET_CONNECTED'
  }
}

export function socketDisconnected () {
  return {
    type: 'SOCKET_DISCONNECTED'
  }
}
