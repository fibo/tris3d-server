import React, { Component } from 'react'

class EnterYourNick extends Component {
  constructor () {
    super()

    this.state = {
      nickname: null
    }

  }
  render () {
    const { setNickname } = this.props

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
        />
        <button
          onClick={() => { setNickname(this.state.nickname) }}
        >
          Play
        </button>
      </div>
    )
  }
}

export default EnterYourNick
