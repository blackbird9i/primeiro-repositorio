const express =require('express')
const cors = require('cors')
//const flash = require('connect-flash')
//const session = require('express-session')
const app = express()


/*app.use(session({
    secret:'pisquepesca',
    resave:true,
    saveUninitialized: true
}))
app.use(flash())

app.use((req,res, next)=>{
   res,locals.ok_msg = req.flash('ok_msg')
   res.locals.error_msg = req.flash('error_msg')
    next()
})*/




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
