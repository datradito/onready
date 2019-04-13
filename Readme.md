#OnReady RESTful API



-para importar la base de datos https://docs.mongodb.com/manual/reference/program/mongoimport/

-esquema

    nombreFilm:{
        type: String,
        require:true,
        trim: true
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












