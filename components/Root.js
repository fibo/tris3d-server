import React from 'react'
import Canvas from './Canvas'
import EnterPlayground from './EnterPlayground'
import MultiPlayerToggle from './MultiPlayerToggle'
import PlayersSelector from './PlayersSelector'
import ServerStats from './ServerStats'
import UserStats from './UserStats'

const Root = ({
  disableMultiPlayer,
  enableMultiPlayer,
  nickname,
  numUsersOnline,
  initCanvas,
  isMultiPlayer,
  isMyTurn,
  score,
  setChoice,
  setNickname,
  socketConnectionOn,
  victories
}) => {
  const toggleMultiPlayer = () => {
    isMultiPlayer ? disableMultiPlayer() : enableMultiPlayer()
  }

  return (
    <div>
    {
      (typeof nickname === 'string') ? (
        <div>
          <div>
            <MultiPlayerToggle
              isMultiPlayer={isMultiPlayer}
              toggleMultiPlayer={toggleMultiPlayer}
            />
            <ServerStats
              numUsersOnline={numUsersOnline}
              socketConnectionOn={socketConnectionOn}
            />
          </div>
          <PlayersSelector
            disabled={isMultiPlayer}
          />
          <Canvas
            initCanvas={initCanvas}
            setChoice={setChoice}
          />
          <UserStats
            isMyTurn={isMyTurn}
            nickname={nickname}
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
      )
    }
    </div>
  )
}

export default Root
