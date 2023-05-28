import Gamer from '../models/Gamer.js'

const createService = (body) => Gamer.create(body)

const findAllService = () => Gamer.find()

const findByIdService = (id) => Gamer.findById(id)

const findByIdAndRemove = (id) => Gamer.findByIdAndRemove(id)

const updateService = (
    id,
    username,
    skill
) =>
  Gamer.findOneAndUpdate(
    {_id: id},
    {id, username, skill}
  )

export default {
    createService,
    findAllService,
    findByIdService,
    updateService,
    findByIdAndRemove
  }