'use strict'

const express = require('express')
const no = require('not-defined')
const path = require('path')

const generateId = require('./store/utils/generateId')

const pkg = require('./package.json')
const debug = require('debug')(pkg.name)

const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

// Keep in sync with server-files/etc/nginx/conf.d/tris3d.conf
const port = 3000

// Room of user.
const roomOf = {}

const room = {}

const createEmptyRoom = () => {
  const id = generateId()

  const emptyRoom = { id, players: [] }
  room[id] = emptyRoom

  debug(`room=${id} created room`)
  return emptyRoom
}

var currentRoom = createEmptyRoom()

const getAvailableRoom = () => {
  const currentRoomIsAvailable = currentRoom.players.length < 3

  if (currentRoomIsAvailable) {
    return currentRoom
  } else {
    const newRoom = createEmptyRoom()
    return newRoom
  }
}

var numUsersOnline = 0

// Server routes.

app.use(express.static('public'))

app.get('/info', (req, res) => {
  res.json({
    name: pkg.name,
    version: pkg.version,
    numUsersOnline
  })
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.all('/*', (req, res) => {
  res.redirect('/')
})

// Socket.io events.

io.on('connection', (socket) => {
  const socketId = socket.id

  socket.emit('connection')

  debug(`socket=${socketId} a user connected`)

  socket.on('addUser', (nickname, userId) => {
    io.sockets.emit('numUsersOnlineChanged', ++numUsersOnline)

    socket.nickname = nickname
    socket.userId = userId

    // Look for user among the one that lost connection.
    Object.keys(room).forEach((roomId) => {
      room[roomId].players.forEach((player) => {
        const foundUser = player.userId === userId

        if (foundUser && player.disconnected) {
          roomOf[userId] = roomId
        }
      })
    })

    var roomId = roomOf[userId]

    // If no previous room was found create a new one...
    if (no(roomId)) {
      const availableRoom = getAvailableRoom()
      roomId = availableRoom.id
    } else {
      // otherwise, update user status: it is not disconnected anymore.
      room[roomId].players
    }

    roomOf[userId] = roomId
    socket.join(roomId)
    debug(`socket=${socketId} addUser ${nickname} ${userId}`)

    room[roomId].players.push({ nickname, userId })
    io.to(roomId).emit('updateRemotePlayers', room[roomId].players)

    const canStartMatch = room[roomId].players.length === 3

    if (canStartMatch) {
      debug(`room=${roomId} multiPlayerMatchStarts`)
      io.to(roomId).emit('multiPlayerMatchStarts')
    }
  })

  socket.on('disconnect', () => {
    const nickname = socket.nickname
    const userId = socket.userId

    debug(`socket=${socketId} ${nickname} disconnected`)

    const roomId = roomOf[userId]

    // Set player as disconnected, so it can be replaced by a bot
    // but if it reconnects it can play in the same room.
    room[roomId].players.forEach((player, i) => {
      if (player.userId === userId) {
        room[roomId].players[i].disconnected = true
      }
    })

    delete roomOf[userId]

    numUsersOnline--
    socket.broadcast.emit('numUsersOnlineChanged', numUsersOnline)
  })

  socket.on('setChoice', (cubeIndex) => {
    const userId = socket.userId

    debug(`socket=${socketId} setChoice ${cubeIndex}`)

    io.to(roomOf[userId]).emit('getChoice', cubeIndex)
  })
})

// Start server if it is the main script.
if (module === require.main) {
  http.listen(port, () => {
    debug('Listening on port %d', port)
  })
}

// Export app for testing purpouse.
module.exports = app
