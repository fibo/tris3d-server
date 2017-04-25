// TODO on GitHub go to now-cli repo, issue 233 and vote up
'use strict'

const fs = require('fs')
const http = require('http')
const no = require('not-defined')
const path = require('path')
const zlib = require('zlib')

const generateId = require('./store/utils/generateId')

const pkg = require('./package.json')
const debug = require('debug')(pkg.name)

const server = http.createServer(routes)
const io = require('socket.io')(server)

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

function routes (req, res) {
  const method = req.method
  const url = req.url

  debug(`${method} ${url}`)

  const send = (contentType, filename) => {
    res.setHeader('Content-Encoding', 'gzip')

    res.writeHead(200, {'Content-Type': contentType})

    fs.createReadStream(path.join(__dirname, 'public', filename))
      .pipe(zlib.createGzip())
      .pipe(res)
  }

  switch (method) {
    case 'GET':
      switch (url) {
        case '/':
          send('text/html; charset=UTF-8', 'index.html')
          break

        case '/index.html':
          send('text/html; charset=UTF-8', 'index.html')
          break

        case '/bundle.js':
          send('application/javascript', 'bundle.js')
          break

        case '/info':
          res.writeHead(200, {'Content-Type': 'application/json'})
          res.end(JSON.stringify({
            name: pkg.name,
            version: pkg.version,
            numUsersOnline
          }))
          break

        case '/robots.txt':
          send('text/plain; charset=UTF-8', 'robots.txt')
          break

        case '/sitemap.xml':
          send('application/xml', 'sitemap.xml')
          break

        case '/style.css':
          send('text/css; charset=UTF-8', 'style.css')
          break

        default: res.end()
      } break

    // More HTTP verbs here, if any.

    default: res.end()
  }
}

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
      // TODO room[roomId].players
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
  server.listen(() => {
    const port = server.address().port

    debug('Listening on port %d', port)
  })
}

// Export server for testing purpouse.
module.exports = server
