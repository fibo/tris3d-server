export function setNickname (nickname) {
  return {
    type: 'SET_NICKNAME',
    nickname
  }
}

export function localPlayerWins (winningCombinations) {
  return {
    type: 'LOCAL_PLAYER_WINS',
    winningCombinations
  }
}
