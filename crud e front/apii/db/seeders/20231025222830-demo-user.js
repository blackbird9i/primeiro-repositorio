'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      nome: 'John',
      email: 'Doe@doe',
      telefone: 3956157656,
      senha: 'John',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'John',
      email: 'Doe@doe',
      telefone: 3956157656,
      senha: 'jlkj',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'jgl,kjkl,',
      email: 'Doe@doe',
      telefone: 3956157656,
      senha: 'John',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'asdgdf',
      email: 'Doe@doe',
      telefone: 3956157656,
      senha: 'hjkfh',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'jidjhds',
      email: 'Doe@doe',
      telefone: 3956157656,
      senha: 'pi',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  
  ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
