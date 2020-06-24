import request from 'supertest'
import app from '../config/app'

describe('Body Parrer Middleware', () => {
  test('Should parser body as json', async () => {
    app.post('/test_body_parser', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_body_parser')
      .send({ name: 'Cleber' })
      .expect({ name: 'Cleber' })
  })
})
