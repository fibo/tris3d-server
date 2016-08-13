import React, { PropTypes } from 'react'

const PlayersSelector = ({
  disabled
}) => (
  <div>
    <select
      name='player0'
      defaultValue='human'
      disabled={disabled}
    >
      <option value='human'>Human</option>
      <option value='bot-stupid'>Stupid bot</option>
      <option value='bot-smart'>Smart bot</option>
      <option value='bot-bastard'>Bastard bot</option>
    </select>
    <select
      name='player1'
      defaultValue='bot-stupid'
      disabled={disabled}
    >
      <option value='human'>Human</option>
      <option value='bot-stupid'>Stupid bot</option>
      <option value='bot-smart'>Smart bot</option>
      <option value='bot-bastard'>Bastard bot</option>
    </select>
    <select
      name='player2'
      defaultValue='bot-stupid'
      disabled={disabled}
    >
      <option value='human'>Human</option>
      <option value='bot-stupid'>Stupid bot</option>
      <option value='bot-smart'>Smart bot</option>
      <option value='bot-bastard'>Bastard bot</option>
    </select>
  </div>
)

PlayersSelector.propTypes = {
  disabled: PropTypes.bool.isRequired
}

export default PlayersSelector
