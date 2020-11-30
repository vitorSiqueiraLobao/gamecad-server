const express = require('express')
const router = express.Router()

const avaliacaoService = require('../services/avaliacaoService')


//return all avaliacoes
router.get('/',avaliacaoService.getAll)

//return avaliacoes by id
router.get('/:id',avaliacaoService.getById)

//create a new avaliacao
router.post('/', avaliacaoService.newAvaliacao)

//modify a avaliacao by id
router.patch('/:id', avaliacaoService.modifyAvaliacao)

//delet a avaliacao by id
router.delete('/:id', avaliacaoService.deleteAvaliacao)
 
module.exports = router