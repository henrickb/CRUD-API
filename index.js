
const express = require('express')
const app = express()
const connectDatabase = require('./src/database/db')
const userRoute = require('./src/routes/user.route')
const gamerRoute = require('./src/routes/gamer.route')
const port = 3000

connectDatabase()
app.use(express.json())
app.use('/user', userRoute)
app.use('/gamer', gamerRoute)



app.listen(port, () => {console.log(`Server running on port ${port}`)})