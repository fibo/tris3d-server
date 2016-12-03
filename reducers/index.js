export default function (state, action) {
  switch (action.type) {
    case 'DISABLE_MULTI_PLAYER':
      return Object.assign({}, state, {
        isMultiPlayer: false,
        isPlaying: false
      })

    case 'ENABLE_MULTI_PLAYER':
      return Object.assign({}, state, {
        isMultiPlayer: true
      })

    case 'GET_CHOICE':
      return state

    case 'INIT_CANVAS':
      return state

    case 'LOCAL_MATCH_ENDS':
      return Object.assign({}, state, {
        isMyTurn: false,
        isPlaying: false
      })

    case 'LOCAL_MATCH_STARTS':
      return Object.assign({}, state, {
        choosen: [],
        isPlaying: true,
        localPlayerWins: false
      })

    case 'LOCAL_PLAYER_TURN_ENDS':
      return Object.assign({}, state, {
        isMyTurn: false
      })

    case 'LOCAL_PLAYER_TURN_STARTS':
      return Object.assign({}, state, {
        isMyTurn: true
      })

    case 'LOCAL_PLAYER_WINS':
      return Object.assign({}, state, {
        localPlayerWins: true,
        score: state.score + action.winningCombinations.length,
        victories: state.victories + 1
      })

    case 'MULTI_PLAYER_MATCH_ENDS':
      return Object.assign({}, state, {
        isMyTurn: false,
        isPlaying: false
      })

    case 'MULTI_PLAYER_MATCH_STARTS':
      return Object.assign({}, state, {
        choosen: [],
        isPlaying: true,
        localPlayerWins: false
      })

    case 'NUM_USERS_ONLINE_CHANGED':
      return Object.assign({}, state, {
        numUsersOnline: action.numUsersOnline
      })

    case 'RESET_LOCAL_MATCH':
      return Object.assign({}, state, {
        isMyTurn: false,
        isPlaying: false
      })

    case 'SAVE_LOCAL_PLAYERS':
      return Object.assign({}, state, {
        localPlayers: action.localPlayers
      })

    case 'SET_CHOICE':
      var newChoosen = Object.assign([], state.choosen)

      newChoosen.push(action.cubeIndex)

      return Object.assign({}, state, {
        choosen: state.choosen.concat(action.cubeIndex)
      })

    case 'SET_NICKNAME':
      return Object.assign({}, state, {
        nickname: action.nickname
      })

    case 'SOCKET_CONNECTED':
      return Object.assign({}, state, {
        socketConnectionOn: true
      })

    case 'SOCKET_DISCONNECTED':
      return Object.assign({}, state, {
        socketConnectionOn: false
      })

    case 'UPDATE_REMOTE_PLAYERS':
      return Object.assign({}, state, {
        remotePlayers: action.players
      })

    default:
      return state
  }
}
