const mongoose = require('mongoose')
const gamerService = require('../services/Gamer.service')

const validCodigoJogador = (req, res, next) =>{
    /* try{
        const id = req.params.id

        if(!mongoose.Types.ObjectId(id)){
            return res.status(400).send({message: 'Invalid Codigo_jogador'})
        }
        next()
    } catch(err){
        res.status(500).send({message: err.message})
    } */
    console.log(req.params.id)
}

const validGamer = async (req, res, next) =>{
    try{
        const id = req.params.id

        const gamer = await gamerService.findByIdService(id)

        if(!gamer){
            return res.status(400).send({message: 'Gamer not found'})
        }

        req.id = id
        req.gamer = gamer
        next()
    } catch(err){
        res.status(500).send({message: err.message})
    }
}

module.exports = {
    validCodigoJogador,
    validGamer
}