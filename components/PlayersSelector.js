import React, { Component, PropTypes } from 'react'

import localStorageIsAvailable from '../store/utils/localStorageIsAvailable'
import initialState from '../store/initialState'

class PlayersSelector extends Component {
  constructor () {
    super()

    var localPlayers = initialState.localPlayers.join(',')

    if (localStorageIsAvailable()) {
      localPlayers = localStorage.getItem('tris3d.localPlayers') || localPlayers
    }

    this.state = {
      players: localPlayers.split(',')
    }
  }

  componentDidMount () {
    const {
      saveLocalPlayers
    } = this.props

    const {
      players
    } = this.state

    saveLocalPlayers(players)
  }

  render () {
    const {
      isPlaying,
      localMatchStarts,
      nickname,
//      resetLocalMatch,
      saveLocalPlayers
    } = this.props

    let {
      players
    } = this.state

    const setState = this.setState.bind(this)

    const humanPlayerIndex = players.indexOf('human')

    const options = [
      { value: 'human', text: nickname },
      { value: 'stupid', text: 'Stupid bot' },
      { value: 'smart', text: 'Smart bot' },
      { value: 'bastard', text: 'Bastard bot' }
    ]

    const SelectPlayer = ({ index }) => (
      <select
        onChange={(e, { value }) => {
          // There can be only one human.
          if ((value === 'human') && (humanPlayerIndex !== index)) {
            players[humanPlayerIndex] = players[index]
          }

          players[index] = value

          setState({ players })
        }}
        options={options}
        value={players[index]}
      />
    )

    return (
      <div>
        <SelectPlayer index={0} />
        <SelectPlayer index={1} />
        <SelectPlayer index={2} />
        <button
          onClick={() => {
            if (isPlaying) {
              // openModal()
            } else {
              saveLocalPlayers(players)
              localMatchStarts()
            }
          }}
        >{isPlaying ? 'Reset' : 'Play'}</button>
      </div>
    )
  }
}

PlayersSelector.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  localMatchStarts: PropTypes.func.isRequired,
  nickname: PropTypes.string.isRequired,
  resetLocalMatch: PropTypes.func.resetLocalMatch,
  saveLocalPlayers: PropTypes.func.isRequired
}

export default PlayersSelector
