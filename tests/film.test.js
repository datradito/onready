//nombre por convencion
const request = require('supertest')
const app = require('../src/app')
//const User = require('../src/models/user')


test('Deberia ingresar un film nuevo', async () => {
    //guardo la respuesta para luego testear sobre la db
    //el campo nombreFilm es unique, para correr test sin error variar los datos
    const response = await request(app).post('/films').send({
        nombreFilm: '24 Prueba Orden',
        paisOrigen: 'USA',
        fechaEstreno: '12/04/2023',
        director:'Daniel Agustin Tradito',
        reparto: [
                { nombreActor: 'Actor11', apellidoActor:'Apellido11' },
                { nombreActor: 'Actor12', apellidoActor:'Apellido12' },
                { nombreActor: 'Actor13', apellidoActor:'Apellido13' }
            ]
        }
    ).expect(201)
})

test('Deberia obtener datos', async () => {
    //guardo la respuesta para luego testear sobre la db
    const response = await request(app).get('/films').send().expect(200)

})