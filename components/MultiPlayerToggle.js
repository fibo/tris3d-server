import React, { Component, PropTypes } from 'react'

class MultiPlayerToggle extends Component {
  render () {
    const {
      askConfirmationBeforeDisconnect,
      isMultiPlayer,
      toggleMultiPlayer
    } = this.props

    return (
      <div>
        <input type='checkbox'
          checked={isMultiPlayer}
          label='Multiplayer'
          onChange={isMultiPlayer && askConfirmationBeforeDisconnect ? null : toggleMultiPlayer}
        />
      </div>
    )
  }
}

MultiPlayerToggle.propTypes = {
  askConfirmationBeforeDisconnect: PropTypes.bool.isRequired,
  isMultiPlayer: PropTypes.bool.isRequired,
  toggleMultiPlayer: PropTypes.func.isRequired
}

MultiPlayerToggle.defaultPros = {
  askConfirmationBeforeDisconnect: false
}

export default MultiPlayerToggle
