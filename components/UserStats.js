import React from 'react'

const UserStats = ({
  nickname,
  score,
  victories
}) => (
  <div>
    nick: {nickname}, score: {score} victories: {victories}
  </div>
)

export default UserStats
