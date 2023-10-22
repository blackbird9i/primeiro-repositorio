//normatiza o codigo , ajuda evitar enprovisos no codigo
'use strict';

require('dotenv').config()

//permite trabalhar com o sistema de arquivos do computador
const fs = require('fs');

//fornece utilitarios para trabalhar com caminhos de arquivos e diretorios
const path = require('path');

/*sequelize um ORM para node.js, que tem suporte varios banco de dados
ORM mapeamento objeto relacional, as tabelas do banco de dados sao 
representados em classes e os registros das tabelas seriam instancias dessas classes*/ 
const Sequelize = require('sequelize');

//permite obter informaçoes do processo na pagina atual
const process = require('process');

//permite obter parte do arquivo
const basename = path.basename(__filename);

//verifica se deve utilizar a variavel global ou 'development'
const env = process.env.NODE_ENV ||'development';

//incluir o arquivo 
const config = require(__dirname + '/../config/config.js')[env];

//criar a constante com objeto vazio
const db = {};

//criar a variavel que recebe a conexao com banco  de dados
let sequelize;

//verifica qual configuração de banco de dados voce deseja usar
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  //usar as configuraçoes do  arquivo "config/databse.js"
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

try{
console.log('tudo certo')
}catch(error){
  console.error('banco de dados nao  existe', error);
}
//identifica o model
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
//atribui a conexão com banco de dados para o objeto db
db.sequelize = sequelize;
db.Sequelize = Sequelize;
//exportar a instruções que esta dentro da constante db
module.exports = db;
