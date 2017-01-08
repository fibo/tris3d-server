import React from 'react'

const ServerStats = ({
  numUsersOnline,
  socketConnectionOn
}) => (
  <div>
    {
      (socketConnectionOn && numUsersOnline) ? (
          {numUsersOnline}
      ) : undefined
    }
  </div>
)

export default ServerStats
