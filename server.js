'use strict'

const express = require('express')
const path = require('path')

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
  const id = Math.random().toString(36).replace(/[^a-z]+/g, '')

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

  socket.on('addUser', (nickname) => {
    io.sockets.emit('numUsersOnlineChanged', numUsersOnline)

    const availableRoom = getAvailableRoom()
    const roomId = availableRoom.id

    debug(`socket=${socketId} addUser ${nickname}`)

    socket.nickname = nickname

    numUsersOnline++

    socket.join(roomId)
    roomOf[socketId] = roomId
    room[roomId].players.push(socketId)

    const canStartMatch = room[roomId].players.length === 3

    if (canStartMatch) {
      debug(`room=${roomId} multiPlayerMatchStarts`)
      io.to(roomId).emit('multiPlayerMatchStarts')
    }
  })

  socket.on('disconnect', () => {
    debug(`socket=${socketId} ${socket.nickname} disconnected`)

    // const roomId = roomOf[socketId]
    // TODO replace user with a bot room[roomId].players
    delete roomOf[socketId]

    numUsersOnline--
    socket.broadcast.emit('numUsersOnlineChanged', numUsersOnline)
  })

  socket.on('setChoice', (cubeIndex) => {
    debug(`socket=${socketId} setChoice ${cubeIndex}`)

    io.to(roomOf[socketId]).emit('getChoice', cubeIndex)
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
