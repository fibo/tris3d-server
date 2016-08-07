'use strict'

const request = require('supertest')
const app = require('./server')

const ok = (err, res) => {
  if (err) throw err
}

describe('GET /info', () => {
  it('responds with 200', () => {
    request(app)
      .get('/info')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(ok)
  })
})
