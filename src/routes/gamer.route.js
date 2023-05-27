import express from 'express'
import gamerController from '../controllers/gamer.controllers.js'
import {/*validCodigoJogador,*/ validGamer} from '../middlewares/gamer.middlewares.js'
const route = express.Router()
route.post('/', gamerController.create)
route.get('/', gamerController.findAll)
route.get('/:id',/* validCodigoJogador, */ validGamer, gamerController.findById)
route.patch('/:id',/* validCodigoJogador, */ validGamer, gamerController.update)

export default route