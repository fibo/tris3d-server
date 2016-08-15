import React from 'react'

// TODO http://www.w3schools.com/howto/howto_css_switch.asp

const MultiPlayerToggle = ({
  isMultiPlayer,
  toggleMultiPlayer
}) => (
  <div>
    <input
      type='checkbox'
      name='multiplayer'
      checked={isMultiPlayer}
      onChange={toggleMultiPlayer}
    />
    <label
      onClick={toggleMultiPlayer}
      htmlFor='multiplayer'
    >Multi player</label>
  </div>
)

export default MultiPlayerToggle
