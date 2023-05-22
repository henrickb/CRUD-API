const Gamer = require('../models/Gamer')

const createService = (body) => Gamer.create(body)

const findAllService = () => Gamer.find()

const findByIdService = (id) => Gamer.findById(id)

const updateService = (
    id,
    username,
    skill
) =>
  Gamer.findOneAndUpdate(
    {_id: id},
    {id, username, skill}
  )

  module.exports = {
    createService,
    findAllService,
    findByIdService,
    updateService
  }