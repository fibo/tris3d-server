import initialState from '../store/initialState'

export default function (state = initialState, action) {
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

    default:
      return state
  }
}
