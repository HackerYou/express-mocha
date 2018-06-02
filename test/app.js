/* global it describe */

const assert = require('assert')
const request = require('supertest')
const api = require('../app')

const app = request(api)

describe('GET /hello', () => {
  it('responds with Hello World', () => {
    return app
      .get('/hello')
      .expect(200)
      .then(response => {
        assert.equal(response.body, 'Hello, world!')
      })
  })
})
