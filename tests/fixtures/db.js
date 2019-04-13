const mongoose = require('mongoose')
const Film = require('../../src/model/filmModel')

const filmOneId = new mongoose.Types.ObjectId()
const filmOne = {
    _id:filmOneId,
    nombreFilm: '16 Prueba Orden',
    paisOrigen: 'BELGICA',
    fechaEstreno : '12/04/2019',
    director : 'Daniel Agustin Tradito',
    reparto : [
            { nombreActor :'Actor13', apellidoActor :'Apellido13' },
            { nombreActor :'Actor23', apellidoActor :'Apellido23' },
            { nombreActor :'Actor33', apellidoActor :'Apellido33' }
        ]
}
const setupDatabase = async () => {
    await Film.deleteMany()
    await new Film(filmOne).save()
}

module.exports = {
    filmOneId,
    filmOne,
    setupDatabase
}