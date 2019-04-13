const request = require('supertest')
const app = require('../src/app')

const Film = require('../src/model/filmModel')
const { setupDatabase } = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should create task for user', async () => {
    const response = await request(app)
        .post('/films')
        .send({
            nombreFilm: '16 Prueba Orden'
        })
        .expect(201)
    const film = await Film.findById(response.body._id)
    expect(film).not.toBeNull()
    expect(film.completed).toEqual(false)
})

