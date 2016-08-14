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
          socketConnectionOn={socketConnectionOn}
          toggleMultiPlayer={isMultiPlayer ? disableMultiPlayer : enableMultiPlayer}
        />
        <PlayersSelector
          disabled={isMultiPlayer}
        />
        <Canvas
          initCanvas={initCanvas}
          setChoice={setChoice}
        />
        <UserStats
          nickname={nickname}
          score={score}
          victories={victories}
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
