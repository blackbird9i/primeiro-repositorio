const conexao = require('./conexao');

const getAllActors = async () => {
    const [query] = await conexao.execute('SELECT * FROM sakila.actor');
    return query;
};

const getActorsById = async (id) => {
    const [query] = await conexao.execute(`SELECT * FROM sakila.actor WHERE actor_id = ?`,[id]);
    return query;
};
const createActor = async (first_name, last_name) => {
    const [query] = await conexao.execute(`INSERT INTO sakila.actor (first_name, last_name) VALUES (?, ?)`,[first_name, last_name]);
    return query;
};

module.exports = {getAllActors, getActorsById, createActor};