import React from 'react'

// TODO http://www.w3schools.com/howto/howto_css_switch.asp

const MultiPlayerToggle = ({
  checked,
  toggleMultiPlayer
}) => (
  <div>
    <input
      type='checkbox'
      name='multiplayer'
      checked={checked}
      onChange={toggleMultiPlayer}
    />
    <label
      onClick={toggleMultiPlayer}
      htmlFor='multiplayer'
    >Multi player</label>
  </div>
)

export default MultiPlayerToggle
