export function setNickname (nickname) {
  return {
    type: 'SET_NICKNAME',
    nickname
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
