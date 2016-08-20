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

export function getChoice (cubeIndex) {
  return {
    type: 'GET_CHOICE',
    cubeIndex
  }
}

export function initCanvas (canvasId) {
  return {
    type: 'INIT_CANVAS',
    canvasId
  }
}

export function localMatchEnds () {
  return {
    type: 'LOCAL_MATCH_ENDS'
  }
}

export function localMatchStarts () {
  return {
    type: 'LOCAL_MATCH_STARTS'
  }
}

export function localPlayerTurnEnds () {
  return {
    type: 'LOCAL_PLAYER_TURN_ENDS'
  }
}

export function localPlayerTurnStarts () {
  return {
    type: 'LOCAL_PLAYER_TURN_STARTS'
  }
}

export function localPlayerWins (winningCombinations) {
  return {
    type: 'LOCAL_PLAYER_WINS',
    winningCombinations
  }
}

export function numUsersOnlineChanged (numUsersOnline) {
  return {
    type: 'NUM_USERS_ONLINE_CHANGED',
    numUsersOnline
  }
}

export function saveLocalPlayers (localPlayers) {
  return {
    type: 'SAVE_LOCAL_PLAYERS',
    localPlayers
  }
}

export function setChoice (cubeIndex) {
  return {
    type: 'SET_CHOICE',
    cubeIndex
  }
}

export function setNickname (nickname) {
  return {
    type: 'SET_NICKNAME',
    nickname
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
