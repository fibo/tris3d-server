import {
  DISABLE_MULTI_PLAYER,
  ENABLE_MULTI_PLAYER,
  GET_CHOICE,
  INIT_CANVAS,
  LOCAL_MATCH_ENDS,
  LOCAL_MATCH_STARTS,
  LOCAL_PLAYER_TURN_ENDS,
  LOCAL_PLAYER_TURN_STARTS,
  LOCAL_PLAYER_WINS,
  MULTI_PLAYER_MATCH_ENDS,
  MULTI_PLAYER_MATCH_STARTS,
  NUM_USERS_ONLINE_CHANGED,
  RESET_LOCAL_MATCH,
  SAVE_LOCAL_PLAYERS,
  SET_CHOICE,
  SET_NICKNAME,
  SOCKET_CONNECTED,
  SOCKET_DISCONNECTED,
  UPDATE_REMOTE_PLAYERS
} from '../actions/constants'

export default function (state, action) {
  switch (action.type) {
    case DISABLE_MULTI_PLAYER:
      return Object.assign({}, state, {
        isMultiPlayer: false,
        isPlaying: false
      })

    case ENABLE_MULTI_PLAYER:
      return Object.assign({}, state, {
        isMultiPlayer: true
      })

    case GET_CHOICE:
      return state

    case INIT_CANVAS:
      return state

    case LOCAL_MATCH_ENDS:
      return Object.assign({}, state, {
        isMyTurn: false,
        isPlaying: false
      })

    case LOCAL_MATCH_STARTS:
      return Object.assign({}, state, {
        choosen: [],
        isPlaying: true,
        localPlayerWins: false
      })

    case LOCAL_PLAYER_TURN_ENDS:
      return Object.assign({}, state, {
        isMyTurn: false
      })

    case LOCAL_PLAYER_TURN_STARTS:
      return Object.assign({}, state, {
        isMyTurn: true
      })

    case LOCAL_PLAYER_WINS:
      return Object.assign({}, state, {
        localPlayerWins: true,
        score: state.score + action.winningCombinations.length,
        victories: state.victories + 1
      })

    case MULTI_PLAYER_MATCH_ENDS:
      return Object.assign({}, state, {
        isMyTurn: false,
        isPlaying: false
      })

    case MULTI_PLAYER_MATCH_STARTS:
      return Object.assign({}, state, {
        choosen: [],
        isPlaying: true,
        localPlayerWins: false
      })

    case NUM_USERS_ONLINE_CHANGED:
      return Object.assign({}, state, {
        numUsersOnline: action.numUsersOnline
      })

    case RESET_LOCAL_MATCH:
      return Object.assign({}, state, {
        choosen: [],
        isMyTurn: false,
        isPlaying: false
      })

    case SAVE_LOCAL_PLAYERS:
      return Object.assign({}, state, {
        localPlayers: action.localPlayers
      })

    case SET_CHOICE:
      var newChoosen = Object.assign([], state.choosen)

      newChoosen.push(action.cubeIndex)

      return Object.assign({}, state, {
        choosen: state.choosen.concat(action.cubeIndex)
      })

    case SET_NICKNAME:
      return Object.assign({}, state, {
        nickname: action.nickname
      })

    case SOCKET_CONNECTED:
      return Object.assign({}, state, {
        socketConnectionOn: true
      })

    case SOCKET_DISCONNECTED:
      return Object.assign({}, state, {
        socketConnectionOn: false
      })

    case UPDATE_REMOTE_PLAYERS:
      return Object.assign({}, state, {
        remotePlayers: action.remotePlayers
      })

    default:
      return state
  }
}
