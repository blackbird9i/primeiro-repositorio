//incluindo bibliotecas e outras coisas
const express = require('express')

const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
//incluir arquivo que possui a conexão com banco de dados
const db = require('./../db/models/')


//criando a rota cadastrar
router.post('/cadastrar',async(req, res)=>{
    //recebendo dados no corpo da requisição
    var dados = req.body
    dados.senha = await bcrypt.hash(dados.senha, 8)

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

router.post("/login", async (req,res)=>{

    
    //recuperando do banco
    const user = await db.Users.findOne({

        attributes:['id','nome','email','telefone', 'senha'],

        where:{
            email: req.body.email
        },
    }) 
    console.log(user)

    if(user === null){
        return res.status(400).json({
            erro: true,
            mensagem:'email ou senha incorreto'
        })
    }

    if(!(await bcrypt.compare(req.body.senha, user.senha))){
        return res.status(400).json({
            erro: true,
            mensagem:'email ou senha incorreto'
        })
    }
    

    return res.json({
        erro: false,
        mensagem:'ola',
        token
    })
})

//criando rota editar
router.put('/users', async(req, res)=>{

    //receber os dados enviados no corpo da requisição
    var dados = req.body
    
    //editar no banco de dados
    await db.Users.update(dados, {where: {id:dados.id}}).then(()=>{
        return res.json({
            mensagem:`usuario editado com sucesso`})

    }).catch(()=>{
        return res.status(400).json({
            mensagem:`erro: usuario não editado com sucesso`})
    })

})

router.delete('/users/:id', async(req, res)=>{

    //receber os dados enviados no corpo da requisição
    const{id} = req.params
    console.log(id)

    //editar no banco de dados
    await db.Users.destroy({

        //acrescentar o where na instrução sql indicando qual registro excluir no BD
        where:{id}
        
    }).then(()=>{
        return res.json({
            mensagem:`usuario deletado com sucesso`})

    }).catch(()=>{
        return res.status(400).json({
            mensagem:`erro: usuario deltado com sucesso`})
    })

})

//exportar a instrução que esta dentro da constante router
module.exports = router
