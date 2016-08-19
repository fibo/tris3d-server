import React from 'react'

// TODO http://www.w3schools.com/howto/howto_css_switch.asp

const MultiPlayerToggle = ({
  isMultiPlayer,
  toggleMultiPlayer
}) => (
  <div>
    <label className='switch'>
      <input
        type='checkbox'
        name='multiplayer'
        checked={isMultiPlayer}
        onChange={toggleMultiPlayer}
      />
      <div className='slider round'></div>
      <label
        className='switch-text'
        onClick={toggleMultiPlayer}
        htmlFor='multiplayer'
      >
        Multiplayer
      </label>
    </label>
  </div>
)

export default MultiPlayerToggle
