import React, { Component } from 'react'

import localStorageIsAvailable from '../store/utils/localStorageIsAvailable'
import MultiPlayerToggle from './MultiPlayerToggle'

class EnterPlayground extends Component {
  constructor () {
    super()

    let nickname = ''
    let isMultiPlayer = false

    if (localStorageIsAvailable()) {
      isMultiPlayer = (localStorage.getItem('tris3d.isMultiPlayer') === 'true')
      nickname = localStorage.getItem('tris3d.nickname') || nickname
    }

    this.state = {
      isMultiPlayer,
      nickname
    }
  }

  render () {
    const {
      enableMultiPlayer,
      disableMultiPlayer,
      setNickname
    } = this.props

    const {
      isMultiPlayer,
      nickname
    } = this.state

    const setState = this.setState.bind(this)

    return (
      <div>
        <MultiPlayerToggle
          isMultiPlayer={isMultiPlayer}
          toggleMultiPlayer={() => {
            setState({
              isMultiPlayer: !isMultiPlayer
            })
          }}
        />
        <input
          onChange={(e, { value }) => {
            setState({ nickname: value.trim() })
          }}
          value={nickname}
        />
        <button
          onClick={() => {
            if (isMultiPlayer) enableMultiPlayer()
            else disableMultiPlayer()

            setNickname(nickname)
          }}
        >Play</button>
      </div>
    )
  }
}

export default EnterPlayground
