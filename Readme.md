#OnReady RESTful API



BRIEF:
Install the following applications:

-For Data Base Server on your local machine:
https://www.mongodb.com/download-center/community

-API Development Environment:
https://www.getpostman.com/downloads/    

-To import the data base go to:
https://docs.mongodb.com/manual/reference/program/mongoimport/

-For executing commands using an environment from an env file:
https://www.npmjs.com/package/env-cmd

TEST:
View de following documentation:
https://jestjs.io/docs/
https://www.npmjs.com/package/supertest


DB Schema:

    nombreFilm:{
        type: String,
        unique: true,
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












