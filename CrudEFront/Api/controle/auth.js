const jwt =require('jsonwebtoken')
const {promisify} = require('util')

module.exports={
   eAdmin:  async function (req, res, next){
    
   const authHeader = req.headers.authorization
   console.log(authHeader)
   if(!authHeader){
    return res.status(400).json({
        erro:true,
        mensagem:'erro: falta o token usuario nao esta logado a'
    })
   }
   const [, token]= authHeader.split(' ')
   console.log('token:'+ token)
   if(!token){
    return res.status(400).json({
        erro:true,
        mensagem:'erro: falta o token b'
    })
   }
   try {
        const decode = await promisify(jwt.verify)(token,'dsadfgdjhmfdakbmklfmbkaf',)
        req.userId = decode.id 
        return next()

   } catch (err) {
    return res.status(400).json({
        erro:true,
        mensagem:'token invalido'
    })
   }
}

}