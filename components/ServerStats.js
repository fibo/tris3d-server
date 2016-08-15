import React from 'react'

const ServerStats = ({
  numUsersOnline,
  socketConnectionOn
}) => (
  <div>
    <input
      type='checkbox'
      name='socket'
      checked={socketConnectionOn}
      readOnly
    />
    <label
      htmlFor='socket'
    >Socket connection</label>
    {
      numUsersOnline ? (
        <div>
          users online: {numUsersOnline}
        </div>
      ) : undefined
    }
  </div>
)

export default ServerStats
