const mysql = require('mysql2/promise');

const conexao = mysql.createPool({
    host:'localhost',
    port: 3306,
    database:'sakila',
    user:'root',
    password:''
});

module.exports = conexao;