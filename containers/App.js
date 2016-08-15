import Root from '../components/Root'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  disableMultiPlayer,
  enableMultiPlayer,
  initCanvas,
  setChoice,
  setNickname
} from '../actions'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    enableMultiPlayer,
    disableMultiPlayer,
    initCanvas,
    setChoice,
    setNickname
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
