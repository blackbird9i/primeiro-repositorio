SEQUENCIA PARA CRIAR O PROJETO

### npm install
criar arquivo package
### npm init

gerencia as requisições, rotas e URLS, entre outras funções
"--save" adiciona como dependencia do servidor
### npm isntall --save express

RODAR O PROJETO

### NODE APP.JS

intalar nodemon na maquina de forma global,"-g" signfica globalmente apos instalar, reiniciar o pc obs:"apenas caso não tenha feito isto antes se sim ignore esta etapa"

### npm install -g nodemon

instalar dependencia como desenvolvedor esta função reinicia o servidor sempre que ouver alteração no codigo

### npm install --save-dev nodemon

rodar em nodemon
### nodemon app.js

caso queira linpar o prompt comando
### cls

instalar o mysql
### npm install --save mysql2

instalar sequelize
### npm install sequelize

crie um banco de dados pelo mysql antes de fazer as migratios

### create database dbds;
### use dbds;

sequelize-cli interface de linha de comando para modelos configuraçoes e arquivos de migração para banco de dados
### npm install --save-dev sequelize-cli

iniciar o sequelize-cli e criar o arquivo config
### npx sequelize-cli init
 
manipular variaveis de ambiente
### npm install --save dotenv

criando migrations
### npx sequelize-cli migration:generate --name User 

executar migrations
### npx sequelize-cli db:migrate

para reverter alteraçoes no banco de dados
### npx sequelize-cli db:migrate:undo --name nome do arquivo

criando models 
### npx sequelize-cli model:generate --name Users --attributes imagem:blob,nome:string,email:string,telefone:integer,senha:integer




//imagem, nome, email, telefone, senha