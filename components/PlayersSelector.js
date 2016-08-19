import React, { Component, PropTypes } from 'react'

class PlayersSelector extends Component {
  constructor () {
    super()

    this.state = {
      player: [
        'human',
        'stupid',
        'smart'
      ]
    }
  }

  render () {
    const {
      disabled
    } = this.props

    let {
      player
    } = this.state

    const setState = this.setState.bind(this)

    const humanPlayerIndex = player.indexOf('human')

    const SelectPlayer = ({ index }) => (
      <select
        name='player0'
        value={player[index]}
        disabled={disabled}
        onChange={(e) => {
          const choice = e.target.value

          // There can be only one human.
          if ((choice === 'human') && (humanPlayerIndex !== index)) {
            player[humanPlayerIndex] = player[index]
          }

          player[index] = choice

          setState({ player })
        }}
      >
        <option value='human'>Human</option>
        <option value='stupid'>Stupid bot</option>
        <option value='smart'>Smart bot</option>
        <option value='bastard'>Bastard bot</option>
      </select>
    )

    return (
      <div>
        <SelectPlayer index={0} />
        <SelectPlayer index={1} />
        <SelectPlayer index={2} />
      </div>
    )
  }
}

PlayersSelector.propTypes = {
  disabled: PropTypes.bool.isRequired
}

export default PlayersSelector
