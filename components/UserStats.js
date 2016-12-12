import React from 'react'
import {
  Label
} from 'semantic-ui-react'

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
      <Label
        color={playerColors[playerIndex]}
        content={nickname}
        icon='user'
      />
      score: {score} victories: {victories}
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
