import React from 'react'
import { Label } from 'semantic-ui-react'

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
        <Label basic content='your turn' />
      ) : undefined
    }
    {
      localPlayerWins ? (
        <Label basic icon='trophy' content='you win!' />
      ) : undefined
    }
  </div>
)

export default UserStats
