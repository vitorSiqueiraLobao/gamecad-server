const express = require('express')
const router = express.Router()

const Jogo = require('../models/jogos')
const jogoService = require('../services/jogoService')


//return all jogos
router.get('/',jogoService.getAll)

//return jogos by id
router.get('/:id',jogoService.getById)

//return 3 better rated jogos
//router.get('/3better',jogoService.get3Better)

//create a new jogo
router.post('/', jogoService.newJogo)

//modify a jogo by id
router.patch('/:id', jogoService.modifyGame)



//delet a jogo by id
router.delete('/:id', jogoService.deleteGame)
 
module.exports = router