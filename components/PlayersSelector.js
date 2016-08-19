import React, { Component, PropTypes } from 'react'
import localStorageIsAvailable from '../utils/localStorageIsAvailable'

class PlayersSelector extends Component {
  constructor () {
    super()

    var localPlayers = [
      'human',
      'stupid',
      'smart'
    ].join(',')

    if (localStorageIsAvailable()) {
      localPlayers = localStorage.getItem('tris3d.localPlayers') || localPlayers
    }

    this.state = {
      players: localPlayers.split(',')
    }
  }

  render () {
    const {
      saveLocalPlayers
    } = this.props

    let {
      players
    } = this.state

    const setState = this.setState.bind(this)

    const humanPlayerIndex = players.indexOf('human')

    const SelectPlayer = ({ index }) => (
      <select
        name='player0'
        value={players[index]}
        onChange={(e) => {
          const choice = e.target.value

          // There can be only one human.
          if ((choice === 'human') && (humanPlayerIndex !== index)) {
            players[humanPlayerIndex] = players[index]
          }

          players[index] = choice

          setState({ players })
        }}
      >
        <option value='human'>Human</option>
        <option value='stupid'>Stupid bot</option>
        <option value='smart'>Smart bot</option>
        <option value='bastard'>Bastard bot</option>
      </select>
    )

    // TODO THe Ok button turns to Quit one local match is ongoing
    // clicking on Ok, the match starts and so the select is disabled.
    return (
      <div>
        <SelectPlayer index={0} />
        <SelectPlayer index={1} />
        <SelectPlayer index={2} />
        <button
          onClick={() => { saveLocalPlayers(players) }}
        >
          Ok
        </button>
      </div>
    )
  }
}

PlayersSelector.propTypes = {
  disabled: PropTypes.bool.isRequired
}

export default PlayersSelector
