import React from 'react'

const UserStats = ({
  isMyTurn,
  localPlayerWins,
  nickname,
  score,
  victories
}) => (
  <div>
    <div>
      nick: {nickname}, score: {score} victories: {victories}
    </div>
    {
      isMyTurn ? (
        <div>
          your turn
        </div>
      ) : undefined
    }
    {
      localPlayerWins ? (
        <div>
          you win!
        </div>
      ) : undefined
    }
  </div>
)

export default UserStats
