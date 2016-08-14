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
