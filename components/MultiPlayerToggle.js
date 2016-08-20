import React from 'react'

const notImplemented = true

const MultiPlayerToggle = ({
  isMultiPlayer,
  toggleMultiPlayer
}) => (
  <div>
    {notImplemented ? 'Multiplayer coming soon' : (
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
      )
    }
  </div>
)

export default MultiPlayerToggle
