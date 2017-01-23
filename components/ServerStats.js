import React from 'react'

const ServerStats = ({
  numUsersOnline,
  socketConnectionOn
}) => (
  <div className='server-stats'>
    {
      (socketConnectionOn && numUsersOnline) ? (
          {numUsersOnline}
      ) : undefined
    }
  </div>
)

export default ServerStats
