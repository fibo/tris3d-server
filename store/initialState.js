import getUserId from './utils/getUserId'

const userId = getUserId()

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
  userId,
  victories: 0
}

export default initialState
