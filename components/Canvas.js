import React, { Component, PropTypes } from 'react'
import Tris3dCanvas from 'tris3d-canvas'

class Canvas extends Component {
  componentDidMount () {
    const {
      id,
      setChoice
    } = this.props

    const tris3dCanvas = new Tris3dCanvas(id)

    tris3dCanvas.on('setChoice', setChoice)

    tris3dCanvas.render()
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
