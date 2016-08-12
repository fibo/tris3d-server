import initialState from '../store/initialState'

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_CHOICE':
      var newState = Object.assign({}, state)
      newState.choosen.push(action.cubeIndex)
      console.log(newState)
      return newState
    default:
      return state
  }
}
