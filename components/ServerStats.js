import React from 'react'
import {
  Checkbox,
  Label
} from 'semantic-ui-react'

const ServerStats = ({
  numUsersOnline,
  socketConnectionOn
}) => (
  <div>
    <Checkbox toggle
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
