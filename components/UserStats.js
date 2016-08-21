import React from 'react'

const UserStats = ({
  isMyTurn,
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
          is my turn
        </div>
      ) : undefined
    }
  </div>
)

export default UserStats
