const mongoose = require('mongoose')

const connectDatabase = ()=>{

    console.log('Wait connecting to the database')
    mongoose.connect("mongodb+srv://root:root@servidor.c5smsq0.mongodb.net/", 
    {
     useNewUrlParser: true, 
     useUnifiedTopology: true
    }
    ).then(() => console.log('MongoDB Atlas connected')).catch((error)=> console.log(error))
}

module.exports = connectDatabase