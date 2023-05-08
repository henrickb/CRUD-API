const express = require('express')
const app = express()
/* ROTA
        Method HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
           GET - Get an information => Pega uma info
           POST - Create an information => Cria uma info
           PUT - Change all information => Altera toda a info 
           PATH - Change part of the information => Altera parte da info
           DELETE - Delete an information => Apaga uma info 
        
       Name - Route identifier => Identificador da rota 

        Function (Callbacke) - Responsible for executing some command => Resposável por executar algum comando
*/
app.get('/home', (req, res) => {
  const soma = 1+1

  res.send({soma: soma})
})

app.listen(5000)