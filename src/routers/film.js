const express = require('express')
const Film = require('../model/filmModel')
const router = new express.Router()

//en POST y GET utilizo promise syntax default
//en UPTDATE y DELETE utilizo promise async await syntax
//esto como ejemplo de ambas syntaxis

//POST
router.post('/films', (req, res) => {
    const film = new Film(req.body)

    film.save().then(() => {
        res.status(201).send(film) //201 : CREATED
    }).catch((e) => {
        res.status(400).send(e) //seteo BAD REQUEST y envio a consola
    })
})

//GET
router.get('/films', (req,res) => {
    //sort() orden ascendente por nombre de Film
    //paginacion: .limit(n) seteada a 5 items.
    Film.find({}).limit(5).sort({nombreFilm:1}).then((film) => {
        res.send(film)
    }).catch((e) => {

    })
})

//UPDATE
router.patch('/films/:id' , async (req, res) => {
    //convierto el objeto en un array de propiedades
    const updates = Object.keys(req.body)
    
    //props q permito el update
    const allowUpdates = [ 'nombreFilm', 'paisOrigen', 'fechaEstreno', 'director', 'reparto']
    
    //array.every() callback x cada elemento del array,
    //array.includes() devuelve true si encuentra / false si no encuentra
    const isValidOperation = updates.every((update) => allowUpdates.includes(update))
    
    if(!isValidOperation) {
        return res.status(400).send({error:'Actualizacion invalida!'})
    }
    
    try {
        //metodo mongoose findByIdAndUpdate()
        const film = await Film.findByIdAndUpdate(req.params.id, req.body, {
            new : true,
            runValidators: true
        })

        if(!film) {
            return res.status(404).send()
        }

        res.send(film)

    }catch (e) {
        res.status(400).send(e)
    }
})

//DELETE
router.delete('/films/:id', async (req, res) => {
    try {
        const film = await Film.findByIdAndDelete(req.params.id)

        if(!film) {
            return res.status(404).send()
        }

        res.send(film)
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router