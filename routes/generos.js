const express = require('express')
const router = express.Router()

const Genero = require('../models/genero')
const generoService = require('../services/generoService')

//get all genero
router.get('/',generoService.getAll)

//get genero by id
router.get('/:id',generoService.getById)

//create a new genero
router.post('/', generoService.createGenero)

//modify genero by id
router.patch('/:id', generoService.updateGenero)

//delete genero by id
router.delete('/:id',generoService.deleteGenero)

module.exports = router