const initialState = {
  choosen: [],
  isMultiPlayer: false,
  isMyTurn: false,
  isPlaying: true,
  localPlayers: ['human', 'stupid', 'stupid'],
  localPlayerWins: false,
  nickname: null,
  numUsersOnline: null,
  score: 0,
  socketConnectionOn: false,
  victories: 0
}

export default initialState
