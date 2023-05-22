const route = require('express').Router()
const gamerController = require('../controllers/gamer.controllers')
const {validCodigoJogador, validGamer} = require('../middlewares/gamer.middlewares')
route.post('/', gamerController.create)
route.get('/', gamerController.findAll)
route.get('/:id',/* validCodigoJogador, */ validGamer, gamerController.findById)
route.patch('/:id',/* validCodigoJogador, */ validGamer, gamerController.update)

module.exports = route