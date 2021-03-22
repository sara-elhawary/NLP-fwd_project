const request = require('supertest')
const { app } = require('../server.js')

describe('Server Test', () => {
  test('/ABOUT Response with Error:wrong path', (done) => {
    request(app)
      .get('/ABOUT')
      .then((res) => {
        // @ts-ignore
        expect(res.statusCode).toBe(404)
        done()
      })
  })
})
