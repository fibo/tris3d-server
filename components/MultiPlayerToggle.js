import React, { Component, PropTypes } from 'react'
import {
  Button,
  Input,
  Modal
} from 'semantic-ui-react'

class MultiPlayerToggle extends Component {
  constructor () {
    super()

    this.state = {
      open: false
    }
  }

  render () {
    const {
      askConfirmation,
      isMultiPlayer,
      toggleMultiPlayer
    } = this.props

    const {
      open
    } = this.state

    const setState = this.setState.bind(this)

    const openModal = () => setState({ open: true })
    const closeModal = () => setState({ open: false })

    return (
      <div>
        <Input
          type='checkbox'
          checked={isMultiPlayer}
          label='Multiplayer'
          onChange={isMultiPlayer && askConfirmation ? openModal : toggleMultiPlayer}
        />
        <Modal
          basic
          open={open}
          onClose={closeModal}
          size='small'
        >
          <Modal.Content>
            <p>Are you sure you want to <strong>disconnect</strong>?</p>
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
                toggleMultiPlayer()
              }}
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

MultiPlayerToggle.propTypes = {
  askConfirmation: PropTypes.bool.isRequired,
  isMultiPlayer: PropTypes.bool.isRequired,
  toggleMultiPlayer: PropTypes.func.isRequired
}

MultiPlayerToggle.defaultPros = {
  askConfirmation: false
}

export default MultiPlayerToggle
