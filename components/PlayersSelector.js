import React, { Component, PropTypes } from 'react'
import {
  Button,
  Dropdown,
  Grid,
  Modal
} from 'semantic-ui-react'

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
      open: false,
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
      resetLocalMatch,
      saveLocalPlayers
    } = this.props

    let {
      open,
      players
    } = this.state

    const setState = this.setState.bind(this)

    const openModal = () => setState({ open: true })
    const closeModal = () => setState({ open: false })

    const humanPlayerIndex = players.indexOf('human')

    const options = [
      { value: 'human', text: nickname },
      { value: 'stupid', text: 'Stupid bot' },
      { value: 'smart', text: 'Smart bot' },
      { value: 'bastard', text: 'Bastard bot' }
    ]

    const SelectPlayer = ({ index }) => (
      <Dropdown
        disabled={isPlaying}
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
        <Modal
          basic
          open={open}
          onClose={closeModal}
          size='small'
        >
          <Modal.Content>
            <p>Are you sure you want to <strong>reset</strong> game?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              basic
              color='red'
              content='No'
              icon='remove'
              inverted
              onClick={() => closeModal()}
            />
            <Button
              color='green'
              content='Yes'
              icon='checkmark'
              inverted
              labelPosition='right'
              onClick={() => {
                closeModal()
                resetLocalMatch()
              }}
            />
          </Modal.Actions>
        </Modal>
        <Grid>
          <Grid.Row columns={4}>
            <Grid.Column>
              <SelectPlayer index={0} />
            </Grid.Column>
            <Grid.Column>
              <SelectPlayer index={1} />
            </Grid.Column>
            <Grid.Column>
              <SelectPlayer index={2} />
            </Grid.Column>
            <Grid.Column>
              <Button fluid
                content={isPlaying ? 'Reset' : 'Play'}
                onClick={() => {
                  if (isPlaying) {
                    openModal()
                  } else {
                    saveLocalPlayers(players)
                    localMatchStarts()
                  }
                }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
