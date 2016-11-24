'use strict'

const request = require('supertest')
const app = require('./server')
const should = require('should')
const read = require('read-file-utf8')
const path = require('path')

const pkg = require('./package.json')

describe('GET /info', () => {
  it('responds with 200', (done) => {
    request(app)
      .get('/info')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        const name = pkg.name
        const version = pkg.version

        should.deepEqual(res.body, {
          name,
          numUsersOnline: 0,
          version
        })

        done(err)
      })
  })
})

describe('GET /robots.txt', () => {
  const robotsPath = path.join(__dirname, 'public', 'robots.txt')

  it('responds with 200', (done) => {
    request(app)
      .get('/robots.txt')
      .expect('Content-Type', 'text/plain; charset=UTF-8')
      .expect(200, read(robotsPath), done)
  })
})

describe('GET /sitemap.xml', () => {
  const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml')

  it('responds with 200', (done) => {
    request(app)
      .get('/sitemap.xml')
      .expect('Content-Type', 'application/xml')
      .expect(200, read(sitemapPath), done)
  })
})
