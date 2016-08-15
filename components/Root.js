import React from 'react'
import Canvas from './Canvas'
import PlayersSelector from './PlayersSelector'
import MultiPlayerToggle from './MultiPlayerToggle'
import EnterYourNick from './EnterYourNick'
import UserStats from './UserStats'

const Root = ({
  disableMultiPlayer,
  enableMultiPlayer,
  nickname,
  numUsersOnline,
  initCanvas,
  isMultiPlayer,
  score,
  setChoice,
  setNickname,
  socketConnectionOn,
  victories
}) => (
  <div>
  {
    (typeof nickname === 'string') ? (
      <div>
        <MultiPlayerToggle
          isMultiPlayer={isMultiPlayer}
          numUsersOnline={numUsersOnline}
          socketConnectionOn={socketConnectionOn}
          toggleMultiPlayer={(event) => {
            event.preventDefault()
            event.stopPropagation()

            isMultiPlayer ? disableMultiPlayer() : enableMultiPlayer()
          }}
        />
        <UserStats
          nickname={nickname}
          score={score}
          victories={victories}
        />
        <PlayersSelector
          disabled={isMultiPlayer}
        />
        <Canvas
          initCanvas={initCanvas}
          setChoice={setChoice}
        />
      </div>
    ) : (
      <EnterYourNick
        setNickname={setNickname}
      />
    )
  }
  </div>
)

export default Root
