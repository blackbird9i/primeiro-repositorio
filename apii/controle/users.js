//incluindo bibliotecas e outras coisas
const express = require('express')
 
const router = express.Router()

//incluir arquivo que possui a conexão com banco de dados
const db = require('./../db/models/')


//criando a rota cadastrar
router.post('/users', async(req, res)=>{

    //recebendo dados no corpo da requisição
    var dados = req.body
    console.log(dados)

    //salvando no banco
    await db.Users.create(dados).then((dadosUsuario)=>{

        //pausar o processamento e retorna objeto
        return res.json({
            mensagem:'usuario cadastrado com sucesso!',
            dadosUsuario
            
        })
    }).catch(()=>{
        return res.json({
            mensagem:'tudo errado kkkkk',
            error
            
        })
    })  
})


//criando listar rota  
router.get("/users", async (req,res)=>{

    //recuperar todos os registros
    const users = await db.Users.findAll({

        //indicar quais colunas recuperar
        attributes:['id','nome','email'],

        // ordenar registros pela coluna id na forma decresente
        order:[['id', 'DESC']]
    })

    if(users){
        return res.json({
            users})
    }else{
        return res.status(400).json({
            mensagem:'erro: usuario não cadastrado com sucesso'})
    
    }

})


//exportar a instrução que esta dentro da constante router
module.exports = router
