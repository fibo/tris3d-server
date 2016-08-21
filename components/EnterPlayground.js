import React, { Component } from 'react'
import localStorageIsAvailable from '../store/utils/localStorageIsAvailable'
import MultiPlayerToggle from './MultiPlayerToggle'

class EnterPlayground extends Component {
  constructor () {
    super()

    var nickname = ''
    var isMultiPlayer = false

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
        <label htmlFor='nickname'>
          You nick:
        </label>
        <input
          onChange={(e) => {
            var nickname = e.target.value

            setState({
              nickname: nickname.trim()
            })
          }}
          name='nickname'
          value={nickname}
        />
        <button
          disabled={(nickname.length < 2)}
          onClick={() => {
            if (isMultiPlayer) enableMultiPlayer()
            else disableMultiPlayer()

            setNickname(nickname)
          }}
        >
          Play
        </button>
        <div>
          <MultiPlayerToggle
            isMultiPlayer={isMultiPlayer}
            toggleMultiPlayer={() => {
              setState({
                isMultiPlayer: !isMultiPlayer
              })
            }}
          />
        </div>
      </div>
    )
  }
}

export default EnterPlayground
