import React from 'react'

const UserStats = ({
  nickname
}) => (
  <ul>
    <li>
      nick: {nickname}
    </li>
    <li>
      matches: 0
    </li>
    <li>
      wins: 0
    </li>
  </ul>
)

export default UserStats
