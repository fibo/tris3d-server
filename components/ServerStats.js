import React from 'react'
import {
  Input,
  Label
} from 'semantic-ui-react'

const ServerStats = ({
  numUsersOnline,
  socketConnectionOn
}) => (
  <div>
    <Input
      type='checkbox'
      label='connected'
      checked={socketConnectionOn}
      readOnly
    />
    {
      numUsersOnline ? (
        <Label
          content='users online'
          detail={numUsersOnline}
        />
      ) : undefined
    }
  </div>
)

export default ServerStats
