import React from 'react'
import Canvas from './Canvas'
import PlayersSelector from './PlayersSelector'

const Root = ({
  initCanvas,
  setChoice
}) => (
  <div>
    <PlayersSelector
      disabled={true}
    />
    <Canvas
      initCanvas={initCanvas}
      setChoice={setChoice}
    />
  </div>
)

export default Root
