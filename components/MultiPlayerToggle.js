import React from 'react'

const notImplemented = true

const MultiPlayerToggle = ({
  isMultiPlayer,
  toggleMultiPlayer
}) => (
  <div>
    {notImplemented ? null : (
      <label className='switch'>
        <input
          type='checkbox'
          name='multiplayer'
          checked={isMultiPlayer}
          onChange={toggleMultiPlayer}
        />
        <div className='slider round' />
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
