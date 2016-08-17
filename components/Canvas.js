import React, { Component, PropTypes } from 'react'

class Canvas extends Component {
  componentDidMount () {
    const {
      initCanvas,
      id
    } = this.props

    initCanvas(id)
  }

  render () {
    const {
      id,
      size
    } = this.props

    return (
      <canvas
        id={id}
        width={size}
        height={size}
      >
      </canvas>
    )
  }
}

Canvas.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
}

Canvas.defaultProps = {
  id: 'playground'
}

export default Canvas
