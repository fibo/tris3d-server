import React, { Component } from 'react'
import localStorageIsAvailable from '../utils/localStorageIsAvailable'

class EnterYourNick extends Component {
  constructor () {
    super()

    var nickname = null

    if (localStorageIsAvailable()) {
      nickname = localStorage.getItem('tris3d.nickname') || ''
    }

    this.state = { nickname }
  }

  render () {
    const { setNickname } = this.props

    const setState = this.setState.bind(this)
    const nickname = this.state.nickname

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
          disabled={(nickname.length < 3)}
          onClick={() => { setNickname(nickname) }}
        >
          Play
        </button>
      </div>
    )
  }
}

export default EnterYourNick
