import Root from '../components/Root'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  setChoice
} from '../actions/canvas'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setChoice
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
