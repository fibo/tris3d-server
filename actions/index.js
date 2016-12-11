import {
  ENABLE_MULTI_PLAYER,
  DISABLE_MULTI_PLAYER,
  GET_CHOICE,
  INIT_CANVAS,
  LOCAL_MATCH_ENDS,
  LOCAL_MATCH_STARTS,
  LOCAL_PLAYER_WINS,
  MULTI_PLAYER_MATCH_ENDS,
  MULTI_PLAYER_MATCH_STARTS,
  LOCAL_PLAYER_TURN_ENDS,
  LOCAL_PLAYER_TURN_STARTS,
  NUM_USERS_ONLINE_CHANGED,
  RESET_LOCAL_MATCH,
  SAVE_LOCAL_PLAYERS,
  SET_CHOICE,
  SET_NICKNAME,
  SOCKET_CONNECTED,
  SOCKET_DISCONNECTED,
  UPDATE_REMOTE_PLAYERS
} from './constants'

export function disableMultiPlayer () {
  return {
    type: DISABLE_MULTI_PLAYER
  }
}

export function enableMultiPlayer () {
  return {
    type: ENABLE_MULTI_PLAYER
  }
}

export function getChoice (cubeIndex) {
  return {
    type: GET_CHOICE,
    cubeIndex
  }
}

export function initCanvas (canvasId) {
  return {
    type: INIT_CANVAS,
    canvasId
  }
}

export function localMatchEnds () {
  return {
    type: LOCAL_MATCH_ENDS
  }
}

export function localMatchStarts () {
  return {
    type: LOCAL_MATCH_STARTS
  }
}

export function localPlayerTurnEnds () {
  return {
    type: LOCAL_PLAYER_TURN_ENDS
  }
}

export function localPlayerTurnStarts () {
  return {
    type: LOCAL_PLAYER_TURN_STARTS
  }
}

export function localPlayerWins (winningCombinations) {
  return {
    type: LOCAL_PLAYER_WINS,
    winningCombinations
  }
}

export function multiPlayerMatchEnds () {
  return {
    type: MULTI_PLAYER_MATCH_ENDS
  }
}

export function multiPlayerMatchStarts () {
  return {
    type: MULTI_PLAYER_MATCH_STARTS
  }
}

export function numUsersOnlineChanged (numUsersOnline) {
  return {
    type: NUM_USERS_ONLINE_CHANGED,
    numUsersOnline
  }
}

export function resetLocalMatch () {
  return {
    type: RESET_LOCAL_MATCH
  }
}

export function saveLocalPlayers (localPlayers) {
  return {
    type: SAVE_LOCAL_PLAYERS,
    localPlayers
  }
}

export function setChoice (cubeIndex) {
  return {
    type: SET_CHOICE,
    cubeIndex
  }
}

export function setNickname (nickname) {
  return {
    type: SET_NICKNAME,
    nickname
  }
}

export function socketConnected () {
  return {
    type: SOCKET_CONNECTED
  }
}

export function socketDisconnected () {
  return {
    type: SOCKET_DISCONNECTED
  }
}

export function updateRemotePlayers (remotePlayers) {
  return {
    type: UPDATE_REMOTE_PLAYERS,
    remotePlayers
  }
}
