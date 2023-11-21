const request = require('supertest');

const server = 'http://localhost:3000';

describe('Route Integration', () => {
  describe('/api/app', () => {
    describe('POST', () => {
      const mockAppData = {
        "date": "1988-11-06",
        "company": "TESTING POST",
        "title": "boss",
        "location": "remote",
        "app_type": "quick apply",
        "status": "open",
        "contact": "Hadrian",
        "notes": "sql is terrible",
        "referral": "Spencer",
        "link": "www.google.com",
        "starred": false
      }
      it('responds with 201 status and application/json type', () => {
        return request(server)
          .post('/api/app')
          .send(mockAppData)
          .expect(201)
          .expect('Content-Type', /application\/json/)
      })
    })
    describe('PUT', () => {
      const mockAppData = {
        "id": 1,
        "date": "1988-11-06",
        "company": "TESTING PUT",
        "title": "boss",
        "location": "remote",
        "app_type": "quick apply",
        "status": "open",
        "contact": "Hadrian",
        "notes": "sql is terrible",
        "referral": "Spencer",
        "link": "www.google.com",
        "starred": false
      }
      it('responds with 200 status and application/json type', () => {
        return request(server)
          .put('/api/app')
          .send(mockAppData)
          .expect(200)
          .expect('Content-Type', /application\/json/)
      })
    })
    describe('GET', () => {
      it('responds with 200 and application/json', () => {
        return request(server)
          .get('/api/app')
          .expect(200)
          .expect('Content-Type', /application\/json/)
      })
    })
  })
})