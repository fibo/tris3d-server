import Root from '../components/Root'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  initCanvas,
  setChoice
} from '../actions/canvas'
import {
  disableMultiPlayer,
  enableMultiPlayer
} from '../actions/socket'
import {
  setNickname
} from '../actions/user'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    disableMultiPlayer,
    enableMultiPlayer,
    initCanvas,
    setChoice,
    setNickname
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
