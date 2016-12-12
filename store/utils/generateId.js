function generateId () {
  return Math.random().toString(36).replace(/[^a-z]+/g, '')
}

module.exports = exports.default = generateId
