import React from 'react'
import Canvas from './Canvas'
import PlayersSelector from './PlayersSelector'
import MultiPlayerToggle from './MultiPlayerToggle'
import EnterYourNick from './EnterYourNick'
import UserStats from './UserStats'

const Root = ({
  nickname,
  initCanvas,
  isMultiPlayer,
  disableMultiPlayer,
  enableMultiPlayer,
  setChoice,
  setNickname
}) => (
  <div>
  {
    (typeof nickname === 'string') ? (
      <div>
        <MultiPlayerToggle
          checked={isMultiPlayer}
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
