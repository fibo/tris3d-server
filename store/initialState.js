const initialState = {
  choosen: [],
  isMultiPlayer: false,
  isMyTurn: false,
  isPlaying: false,
  localPlayers: ['human', 'stupid', 'stupid'],
  localPlayerWins: false,
  nickname: null,
  numUsersOnline: null,
  remotePlayers: [],
  score: 0,
  socketConnectionOn: false,
  victories: 0
}

export default initialState
