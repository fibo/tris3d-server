import React, { Component } from 'react'
import {
  Container
} from 'semantic-ui-react'

import BeforeUnload from 'before-unload'

import Canvas from './Canvas'
import EnterPlayground from './EnterPlayground'
import localPlayerIndex from '../store/utils/localPlayerIndex'
import multiPlayerIndex from '../store/utils/multiPlayerIndex'
import MultiPlayerToggle from './MultiPlayerToggle'
import PlayersSelector from './PlayersSelector'
import ServerStats from './ServerStats'
import UserStats from './UserStats'

class Root extends Component {
  componentDidMount () {
    // FIXME the default message is displayed, not this one
    const doNotLeaveMessage = 'You are playing a match'

    this.beforeUnload = new BeforeUnload(doNotLeaveMessage, () => {
      return this.props.isPlaying
    })
  }

  render () {
    const {
      disableMultiPlayer,
      enableMultiPlayer,
      nickname,
      numUsersOnline,
      initCanvas,
      isMultiPlayer,
      isMyTurn,
      isPlaying,
      localPlayers,
      localPlayerWins,
      localMatchStarts,
      remotePlayers,
      resetLocalMatch,
      score,
      setChoice,
      setNickname,
      saveLocalPlayers,
      socketConnectionOn,
      victories
    } = this.props

    const toggleMultiPlayer = () => {
      isMultiPlayer ? disableMultiPlayer() : enableMultiPlayer()
    }

    var playerIndex = 0
    if (isMultiPlayer) {
      playerIndex = multiPlayerIndex(nickname, remotePlayers)
    } else {
      playerIndex = localPlayerIndex(localPlayers)
    }

    return (
      <Container>
        {(typeof nickname === 'string') ? (
          <div>
            <MultiPlayerToggle
              askConfirmation
              isMultiPlayer={isMultiPlayer}
              toggleMultiPlayer={toggleMultiPlayer}
            />
            {isMultiPlayer ? (
              <ServerStats
                numUsersOnline={numUsersOnline}
                socketConnectionOn={socketConnectionOn}
              />
            ) : (
              <PlayersSelector
                isPlaying={isPlaying}
                nickname={nickname}
                resetLocalMatch={resetLocalMatch}
                localMatchStarts={localMatchStarts}
                saveLocalPlayers={saveLocalPlayers}
              />
            )}
            <Canvas
              initCanvas={initCanvas}
              setChoice={setChoice}
              size={Math.min(window.innerWidth, window.innerHeight)}
            />
            <UserStats
              isMyTurn={isMyTurn}
              localPlayerWins={localPlayerWins}
              nickname={nickname}
              playerIndex={playerIndex}
              score={score}
              victories={victories}
            />
          </div>
        ) : (
          <EnterPlayground
            disableMultiPlayer={disableMultiPlayer}
            enableMultiPlayer={enableMultiPlayer}
            setNickname={setNickname}
          />
        )}
      </Container>
    )
  }
}

export default Root
