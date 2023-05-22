const mongoose = require('mongoose')

const GamerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    skill: {
        type: String,
        required: true,
    }

})

const Gamer = mongoose.model('Gamer', GamerSchema)

module.exports = Gamer

