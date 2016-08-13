import Root from '../components/Root'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  initCanvas,
  setChoice
} from '../actions/canvas'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    initCanvas,
    setChoice
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
