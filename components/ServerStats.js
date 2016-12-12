import React from 'react'
import {
  Label
} from 'semantic-ui-react'

const ServerStats = ({
  numUsersOnline,
  socketConnectionOn
}) => (
  <div>
    <Label
      content={socketConnectionOn ? 'connected' : 'not connected'}
      icon={socketConnectionOn ? 'checkmark' : null}
    />
    {
      (socketConnectionOn && numUsersOnline) ? (
        <Label
          content='users online'
          detail={numUsersOnline}
        />
      ) : undefined
    }
  </div>
)

export default ServerStats
