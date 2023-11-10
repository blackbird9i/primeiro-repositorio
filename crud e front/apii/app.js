const express =require('express')
const cors = require('cors')
//const flash = require('connect-flash')
//const session = require('express-session')
const app = express()

app.use(cors())

//criando um middleware recebe os dados no corpo da requisição
app.use(express.json())

//adicionando as controllers
const users = require('./controle/users')



//criando as rotas
app.use('/', users)



//const db = require('./db/models')

app.listen(8080,()=>{
    console.log('tudo certo, no local: http://localhost:8080' )
})
