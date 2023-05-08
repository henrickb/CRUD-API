const User = require('../models/User')

const createService = (body) => User.create(body) // this way a `return` is not necessary => desta maneira não é necessário um `return`

const findAllService = () => User.find()

const findByIdService = (id) => User.findById(id)

module.exports = {
    createService,
    findAllService,
    findByIdService,
}