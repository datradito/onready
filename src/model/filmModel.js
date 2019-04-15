const mongoose = require('mongoose')
//const validator = require('validator')

/*
GET	Read	200 (OK), 404 (Not Found)
POST	Create	201 (OK), 404 (Not Found),
PUT	Update	200 (OK), 204 (No Content), 404 (Not Found)
DELETE	Delete	200 (OK), 404 (Not Found)
*/

//Model to Film structure
const Film = mongoose.model('Film', {
    nombreFilm:{
        type: String,
        unique: true,
        require:true,
        trim: true,
    },
    paisOrigen:{
        type: String,
        require:true,
        trim: true

    },
    fechaEstreno:{
        type:Date,
        require:true,
        default: new Date()
        // //VALIDAR FECHA
        // validate(value) {
        //     if( validator.isISO8601(value.toString())){
        //         throw new Error('Fecha Invalida')
        //     }
        // }
    },
    director:{
        type:String,
        trim:true,
        default: 'Director Anonimo'
    },
    reparto:[
        {
        nombreActor:{
            type:String,
            trim:true,
            default: 'Anonimo'
        },
        apellidoActor:{
            type:String,
            trim:true,
            default: 'Anonimo'
        }
    }]
})

module.exports = Film

