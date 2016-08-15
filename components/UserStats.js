import React from 'react'

const UserStats = ({
  isMyTurn,
  nickname,
  score,
  victories
}) => (
  <div>
    {
      isMyTurn ? (
        <div>
          is my turn
        </div>
      ) : undefined
    }
    <div>
      nick: {nickname}, score: {score} victories: {victories}
    </div>
  </div>
)

export default UserStats
