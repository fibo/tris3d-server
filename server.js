'use strict'

const express = require('express')
const path = require('path')

const pkg = require('./package.json')
const debug = require('debug')(pkg.name)

const app = express()

// Keep in sync with server-files/etc/nginx/conf.d/tris3d.conf
const port = 3000

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

// Start server if it is the main script.
if (module === require.main) {
  app.listen(port, () => {
    debug('Listening on port %d', port)
  })
}

// Export app for testing purpouse.
module.exports = app
