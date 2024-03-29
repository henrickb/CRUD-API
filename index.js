import express from 'express'
import connectDatabase from './src/database/db.js'
import userRoute from './src/routes/user.route.js'
import gamerRoute from './src/routes/gamer.route.js'

const port = 3000
const app = express()

connectDatabase()
app.use(express.json())
app.use('/user', userRoute)
app.use('/gamer', gamerRoute)



app.listen(port, () => {console.log(`Server running on port ${port}`)})