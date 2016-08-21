import Root from '../components/Root'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  disableMultiPlayer,
  enableMultiPlayer,
  initCanvas,
  localMatchStarts,
  resetLocalMatch,
  setChoice,
  setNickname,
  saveLocalPlayers
} from '../actions'
import isPlayingLocally from '../store/utils/isPlayingLocally'
import localPlayerIndex from '../store/utils/localPlayerIndex'

const mapStateToProps = (state) => {
  return Object.assign({}, state, {
    isPlayingLocally: isPlayingLocally(state),
    localPlayerIndex: localPlayerIndex(state)
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    enableMultiPlayer,
    disableMultiPlayer,
    initCanvas,
    localMatchStarts,
    resetLocalMatch,
    saveLocalPlayers,
    setChoice,
    setNickname
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
