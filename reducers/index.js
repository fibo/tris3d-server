export default function (state, action) {
  switch (action.type) {
    case 'DISABLE_MULTI_PLAYER':
      return Object.assign({}, state, {
        isMultiPlayer: false
      })

    case 'ENABLE_MULTI_PLAYER':
      return Object.assign({}, state, {
        isMultiPlayer: true
      })

    case 'GET_CHOICE':
      return state

    case 'INIT_CANVAS':
      return state

    case 'LOCAL_PLAYER_WINS':
      return Object.assign({}, state, {
        score: state.score + action.winningCombinations.length,
        victories: state.victories + 1
      })

    case 'SET_CHOICE':
      var newChoosen = Object.assign([], state.choosen)

      newChoosen.push(action.cubeIndex)

      return Object.assign({}, state, {
        choosen: newChoosen
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

    default:
      return state
  }
}
