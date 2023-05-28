
import gamerService from '../services/Gamer.service.js'

const create = async (req, res) =>{
    try{
        const {username, skill} = req.body
        if(!username || !skill){
            res.status(400).send({message: 'Submit all fildes for registration'})
        }

        const gamer = await gamerService.createService(req.body)

        if(!gamer){
            return res.status(400).send({message: 'Error creating Gamer'})
        }

        res.status(201).send({
            message: 'Gamer created successfully',
            gamer: {
                id: gamer._id,
                username,
                skill
            }
        })
    } catch(err){
        res.status(500).send({message: err.message})
    }
} 

const findAll = async (req, res) => {
    try{
        const gamers = await gamerService.findAllService()

        if(gamers.length === 0){
            return res.status(400).send({message: 'There are no registered gamers'})
        }
        res.send(gamers)
    } catch(err){
        res.status(500).send({message: err.message})
    }
}

const findById = async (req, res) => {
    try{
        const gamer = req.gamer
        res.send(gamer)
    } catch(err){
        res.status(500).send({message: err.message})
    }
}

const update = async (req, res) =>{
    try{
        const {username, skill} = req.body

        if(!username && !skill){
            res.status(400).send({message: 'Submit at least one fild for update'})
        }
        const {id} = req.params
        await gamerService.updateService(
            id,
            username,
            skill
        )
        res.send({message: 'Gamer successfully update!'})
    } catch(err){
        res.status(500).send({message: err.message})
    }
}

const Delete = async (req, res) => {
    try {
       const gamer = req.params.id
 
       const usuarioRemovido = await gamerService.findByIdAndRemove(gamer)
       
       console.log(usuarioRemovido)
 
       if (usuarioRemovido) {
          res.status(200).send({
             message: 'Usuário deletado com sucesso',
             usuario: usuarioRemovido
          })
       } else {
          res.status(404).send({
             message: 'Usuário não encontrado'
          })
       }
    } catch (err) {
       res.status(500).send({
          message: err.message
       })
    }
 }

export default {
    create,
    findAll,
    findById,
    update,
    Delete
}