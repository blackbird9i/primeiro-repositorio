'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('users', 'imagem', {
          type: Sequelize.DataTypes.BLOB, after:"nome"
        }, { transaction: t }),
        
      ]);
    });
  },
  async down (queryInterface) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('users', 'imagem', {transaction: t }),
      ])
      })
    } 
}
