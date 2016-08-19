import Root from '../components/Root'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  disableMultiPlayer,
  enableMultiPlayer,
  initCanvas,
  setChoice,
  setNickname,
  saveLocalPlayers
} from '../actions'

const mapStateToProps = (state) => (state)

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    enableMultiPlayer,
    disableMultiPlayer,
    initCanvas,
    saveLocalPlayers,
    setChoice,
    setNickname
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
