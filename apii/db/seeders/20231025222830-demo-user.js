'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      nome: 'John',
      email: 'manda@pix',
      telefone: 3956157656,
      senha: '7110eda4d09e062aa5e4a390b0a572ac0d2c0220',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'travolta',
      email: 'chu@lapa',
      telefone: 3956157656,
      senha: 'd2f75e8204fedf2eacd261e2461b2964e3bfd5be',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'michal',
      email: 'psiqui@atra',
      telefone: 3956157656,
      senha: 'ae8fe380dd9aa5a7a956d9085fe7cf6b87d0d028',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'jackson',
      email: 'samu@el',
      telefone: 3956157656,
      senha: '83787f060a59493aefdcd4b2369990e7303e186e',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'cage',
      email: 'Doe@doe',
      telefone: 3956157656,
      senha: '2abd55e001c524cb2cf6300a89ca6366848a77d5',
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
