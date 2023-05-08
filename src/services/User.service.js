const User = require('../models/User')

const createService = (body) => User.create(body) // this way a `return` is not necessary => desta maneira não é necessário um `return`

const findAllService = () => User.find()

const findByIdService = (id) => User.findById(id)

const updateService = (
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
) => 
  User.findOneAndUpdate(
    {_id: id}, 
    {id,name,username,email,password,avatar,background}
  )

module.exports = {
    createService,
    findAllService,
    findByIdService,
    updateService
}