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

var numUsersOnline = 0

// Server routes.

app.use(express.static('public'))

app.get('/info', (req, res) => {
  res.json({
    name: pkg.name,
    version: pkg.version
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
  socket.emit('connection')

  debug('a user connected')

  socket.on('addUser', (nickname) => {
    debug(`addUser ${nickname}`)

    socket.nickname = nickname

    numUsersOnline++
    io.sockets.emit('numUsersOnlineChanged', numUsersOnline)
  })

  socket.on('disconnect', () => {
    debug(socket.nickname + ' disconnected')

    numUsersOnline--
    socket.broadcast.emit('numUsersOnlineChanged', numUsersOnline)
  })

  socket.on('setChoice', (cubeIndex) => {
    debug('setChoice', cubeIndex)

    socket.broadcast.emit('getChoice', cubeIndex)
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
