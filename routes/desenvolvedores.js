const express = require('express')
const router = express.Router()

const Desenvolvedor = require('../models/desenvolvedor')
const desenvolvedorService = require('../services/desenvolvedorService')

//get all desenvolvedor
router.get('/',desenvolvedorService.getAll)

//get desenvolvedor by id
router.get('/:id',desenvolvedorService.getById)

//create a new desenvolvedor
router.post('/', desenvolvedorService.createDesenvolvedor)

//modify desenvolvedor by id
router.patch('/:id', desenvolvedorService.updateDesenvolvedor)

//delete desenvolvedor by id
router.delete('/:id',desenvolvedorService.deleteDesenvolvedor)

module.exports = router