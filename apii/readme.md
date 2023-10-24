sequencia para abrir o projeto

criar arquivo package
### npm init

gerenciar as restrições, rotas e urls, untre outra funcionalidades
### npm install --save express

para instalar de forma global
### npm install -g nodemon

instalar de forma local e gravando como desenvolvedor 
### npm install --save-dev nodemon

rodar o projeto
### node app.js

biblioteca que gerencia banco de dados
### npm install --save sequelize

relacionado a criação de models
### npm install --save-dev sequelize-cli

inicial o cria o arquivo
### npx sequelize-cli init

driver para banco de dados
### npm install --save mysql2

banco de dados
### create database projeto 
### character set utf8mb4
### collate utf8mb4_unicode_ci;

manipular variaveis de ambiente
### npm install dotenv --save 

criar a models usuarios
### npx sequelize-cli model:generate --name Users --attributes imagem:blob,nome:string,email:string,telefone:integer,senha:string

executar migrations
### npx sequelize-cli db:migrate

abra o seu servidor
### http://localhost:8080

