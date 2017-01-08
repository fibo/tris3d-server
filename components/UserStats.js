import React from 'react'

const playerColors = ['red', 'green', 'blue']

const UserStats = ({
  isMyTurn,
  localPlayerWins,
  playerIndex,
  nickname,
  score,
  victories
}) => (
  <div>
    <div>
      <div
        color={playerColors[playerIndex]}
        content={nickname}
        icon='user'
      />
      score: {score} victories: {victories}
    </div>
    {
      isMyTurn ? (
        <div basic content='your turn' />
      ) : undefined
    }
    {
      localPlayerWins ? (
        <div basic icon='trophy' content='you win!' />
      ) : undefined
    }
  </div>
)

export default UserStats
