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
      height,
      width
    } = this.props

    return (
      <canvas
        id={id}
        width={width}
        height={height}
      >
      </canvas>
    )
  }
}

Canvas.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

Canvas.defaultProps = {
  id: 'playground',
  height: 500,
  width: 500
}

export default Canvas
